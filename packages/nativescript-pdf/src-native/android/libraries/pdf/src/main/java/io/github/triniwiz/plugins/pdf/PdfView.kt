package io.github.triniwiz.plugins.pdf

import android.animation.Animator
import android.animation.AnimatorListenerAdapter
import android.animation.ValueAnimator
import android.annotation.SuppressLint
import android.content.Context
import android.content.res.Configuration
import android.graphics.Bitmap
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Matrix
import android.graphics.Paint
import android.graphics.Rect
import android.graphics.RectF
import android.graphics.SurfaceTexture
import android.os.Build
import android.os.Handler
import android.os.HandlerThread
import android.util.AttributeSet
import android.util.Log
import android.view.GestureDetector
import android.view.MotionEvent
import android.view.ScaleGestureDetector
import android.view.Surface
import android.view.SurfaceHolder
import android.view.SurfaceView
import android.view.TextureView
import android.view.ViewGroup
import android.widget.EdgeEffect
import android.widget.FrameLayout
import android.widget.OverScroller
import android.widget.ProgressBar
import android.widget.RelativeLayout
import android.widget.TextView
import androidx.core.graphics.createBitmap
import androidx.core.widget.EdgeEffectCompat
import java.lang.Math.random
import java.net.URI
import java.nio.ByteBuffer
import java.nio.ByteOrder
import java.nio.channels.Channels


class PdfView @JvmOverloads constructor(
  context: Context, attrs: AttributeSet? = null
) : FrameLayout(context, attrs), TextureView.SurfaceTextureListener, SurfaceHolder.Callback,
  ScaleGestureDetector.OnScaleGestureListener {
  private var textureView = TextureView(context)
  private var surfaceView = SurfaceView(context)
  private var surface: Surface? = null
  private var currentScale = 1f
  private var isScaling = false
  var useSurface = true
  private lateinit var edgeEffectTop: EdgeEffect
  private lateinit var edgeEffectBottom: EdgeEffect
  private lateinit var edgeEffectLeft: EdgeEffect
  private lateinit var edgeEffectRight: EdgeEffect

  private var edgeEffectTopActive: Boolean = false
  private var edgeEffectBottomActive: Boolean = false
  private var edgeEffectLeftActive: Boolean = false
  private var edgeEffectRightActive: Boolean = false
  private var bounceAnimator: ValueAnimator? = null
  private var overScroller = OverScroller(context)
  private var zoomDetector = ScaleGestureDetector(context, this)
  private var cache = mutableMapOf<Int, Bitmap>()
  private val pageBounds = mutableListOf<PageInfo>()
  private val renderingPages = mutableSetOf<Int>() // Track which pages are currently being rendered

  // Scrollbar components
  private var scrollbarVisible = false
  private var scrollbarAlpha = 1f
  private var scrollbarFadeAnimator: ValueAnimator? = null
  private var isScrollbarDragging = false
  private var scrollbarDragStartY = 0f
  private var scrollbarStartScrollY = 0f
  private val scrollbarPaint = Paint().apply {
    isAntiAlias = true
    color = Color.parseColor("#80000000") // Semi-transparent black
  }
  private val scrollbarBackgroundPaint = Paint().apply {
    isAntiAlias = true
    color = Color.parseColor("#40FFFFFF") // Semi-transparent white background
  }
  private val pageIndicatorText = TextView(context).apply {
    setTextColor(Color.WHITE)
    textSize = 12f
    setPadding(8, 4, 8, 4)
    setBackgroundColor(Color.parseColor("#CC000000")) // Semi-transparent black background
    visibility = GONE
  }
  private val scrollbarWidth = 6f * context.resources.displayMetrics.density // 6dp (increased for better touch)
  private val scrollbarTrackWidth = 12f * context.resources.displayMetrics.density // 12dp (increased for better visibility)

  data class PageInfo(
    val index: Int,
    var top: Float,
    var bottom: Float,
    var width: Int,
    var height: Int
  )

  private var scrollXPos = 0f
  private var scrollYPos = 0f
  private var maxScrollX = 0f
  private var maxScrollY = 0f
  private var focusX = 0f
  private var focusY = 0f
  private var gestureListener = object : GestureDetector.SimpleOnGestureListener() {

    override fun onDown(e: MotionEvent): Boolean {
      overScroller.forceFinished(true)
      // Cancel any ongoing bounce animation when touch starts
      bounceAnimator?.cancel()
      // Important: return true to indicate we want to handle subsequent events
      return true
    }

    override fun onScroll(
      e1: MotionEvent?,
      e2: MotionEvent,
      distanceX: Float,
      distanceY: Float
    ): Boolean {
      if (!isScaling) {
        // Cancel any ongoing bounce animation
        bounceAnimator?.cancel()
        
        val oldScrollX = scrollXPos
        val oldScrollY = scrollYPos

        // Apply scroll with bounce resistance at edges
        scrollXPos += applyBounceResistance(distanceX, scrollXPos, maxScrollX, true)
        scrollYPos += applyBounceResistance(distanceY, scrollYPos, maxScrollY, false)

        // Check for edge effects (visual feedback) - DISABLED FOR NOW
        // checkEdgeEffects(oldScrollX, oldScrollY)
        
        // Show scrollbar during scroll
        showScrollbarAndIndicator()
        
        drawPages()
      }
      return true
    }

    override fun onFling(
      e1: MotionEvent?,
      e2: MotionEvent,
      velocityX: Float,
      velocityY: Float
    ): Boolean {
      if (!isScaling) {
        fling(-velocityX.toInt(), -velocityY.toInt()) // Fixed: Inverted velocity to match scroll direction
      }
      return true
    }

    override fun onDoubleTap(e: MotionEvent): Boolean {
      val targetScale = if (currentScale > 1.5f) 1.0f else 2.5f
      zoomTo(targetScale, e.x, e.y, true)
      return true
    }
  }

  private var gestureDetector = GestureDetector(context, gestureListener).apply {
    setIsLongpressEnabled(false) // Disable long press to improve scrolling responsiveness
  }

  var document: PdfDocument? = null
    set(value) {
      field = value
      value?.let { doc ->
        calculatePageBounds(doc)
        updateScrollBounds()
        post {
          drawPages()
          // Preload first few pages to ensure they're ready
          preloadInitialPages(doc)
        }
      }
    }

  private fun calculatePageBounds(document: PdfDocument) {
    pageBounds.clear()
    var currentTop = 0f
    val pageSpacing = 16f // Space between pages

    val pageInfoBuffer = ByteBuffer.allocateDirect(
      document.count() * 12
    )

    pageInfoBuffer.order(ByteOrder.nativeOrder())
    document.pagesInfo(pageInfoBuffer)
    var offset = 0
    val indexBuffer = pageInfoBuffer.asIntBuffer()
    val sizeBuffer = pageInfoBuffer.asFloatBuffer()


    for (i in 0 until document.count()) {
      try {
        val index = indexBuffer[offset]
        offset += 1
        val w = sizeBuffer[offset]
        offset += 1
        val h = sizeBuffer[offset]
        offset += 1

        val aspectRatio = w / h

        // Calculate page dimensions based on view width
        val pageWidth = width
        val pageHeight = (pageWidth / aspectRatio).toInt()

        pageBounds.add(
          PageInfo(
            index = i,
            top = currentTop,
            bottom = currentTop + pageHeight,
            width = pageWidth,
            height = pageHeight
          )
        )

        currentTop += pageHeight + pageSpacing
      } catch (e: Exception) {
        // Handle page error, use default dimensions
        pageBounds.add(
          PageInfo(
            index = i,
            top = currentTop,
            bottom = currentTop + height,
            width = width,
            height = height
          )
        )
        currentTop += height + pageSpacing
      }
    }
  }

  private fun preloadInitialPages(document: PdfDocument) {
    // Initialize page indicator
    updatePageIndicator()
    
    // Show scrollbar briefly when document loads so user can see PDF progress
    postDelayed({
      if (maxScrollY > 0) {
        showScrollbarAndIndicator()
      }
    }, 500) // Show after 500ms when document is loaded
    
    // Preload first 3 pages in background to ensure they're ready
    // Use a small delay to ensure view is properly initialized
    postDelayed({
      val pagesToPreload = kotlin.math.min(3, pageBounds.size)
      for (i in 0 until pagesToPreload) {
        val pageInfo = pageBounds[i]
        if (!renderingPages.contains(pageInfo.index) && !cache.containsKey(pageInfo.index)) {
          renderingPages.add(pageInfo.index)
          handler.post {
            renderPageAsync(document, pageInfo)
          }
        }
      }
    }, 100) // 100ms delay
  }

  private fun updateScrollBounds() {
    if (pageBounds.isEmpty()) {
      maxScrollX = 0f
      maxScrollY = 0f
      return
    }

    // Horizontal scrolling only when zoomed and content is wider than view
    val totalContentWidth = width * currentScale
    maxScrollX = if (currentScale > 1f && totalContentWidth > width) {
      (totalContentWidth - width).coerceAtLeast(0f)
    } else {
      0f // No horizontal scrolling when not zoomed
    }
    
    val totalContentHeight = pageBounds.lastOrNull()?.bottom?.times(currentScale) ?: 0f
    maxScrollY = (totalContentHeight - height).coerceAtLeast(0f)
  }

  private fun constrainScroll() {
    updateScrollBounds()
    
    // Don't constrain scroll during bounce animation
    if (bounceAnimator?.isRunning == true) {
      return
    }
    
    val oldScrollX = scrollXPos
    val oldScrollY = scrollYPos

    // OVERSCROLL DISABLED - keep within normal bounds
    scrollXPos = if (maxScrollX > 0f) {
      scrollXPos.coerceIn(0f, maxScrollX)
    } else {
      0f // No horizontal scrolling when not zoomed
    }
    scrollYPos = scrollYPos.coerceIn(0f, maxScrollY)

    // Update current page based on scroll position
    updateCurrentPage()
  }

  private fun applyBounceResistance(distance: Float, currentPos: Float, maxPos: Float, isHorizontal: Boolean): Float {
    // No horizontal scrolling when not zoomed
    if (isHorizontal && maxPos == 0f) {
      return 0f
    }
    
    // OVERSCROLL DISABLED - keep scrolling within normal bounds
    val newPos = currentPos + distance
    
    return when {
      // Don't allow scrolling beyond top/left edge
      newPos < 0 -> {
        -currentPos // Just move to the edge, no overscroll
      }
      // Don't allow scrolling beyond bottom/right edge
      newPos > maxPos -> {
        maxPos - currentPos // Just move to the edge, no overscroll
      }
      // Normal scrolling within bounds
      else -> distance
    }
  }

  private fun calculateElasticResistance(overscrollAmount: Float, maxBounce: Float): Float {
    // Progressive resistance: starts at 1.0, decreases to 0.1 as you approach maxBounce
    // This creates the "rubber band" effect like iOS/web
    val progress = (overscrollAmount / maxBounce).coerceIn(0f, 1f)
    return 1f - (progress * 0.9f) // Resistance goes from 1.0 to 0.1
  }

  private fun updateCurrentPage() {
    val viewCenter = scrollYPos + height / 2f
    val scaledViewCenter = viewCenter / currentScale

    for (i in pageBounds.indices) {
      val pageInfo = pageBounds[i]
      if (scaledViewCenter >= pageInfo.top && scaledViewCenter <= pageInfo.bottom) {
        val newCurrentPage = pageInfo.index + 1 // Convert to 1-based index
        if (currentPage != newCurrentPage) {
          currentPage = newCurrentPage
          listener?.onPageChange(currentPage)
          updatePageIndicator()
        }
        break
      }
    }
  }

  private fun updatePageIndicator() {
    // Page indicator is now drawn as part of the scrollbar, just show it
    showScrollbarAndIndicator()
  }

  private fun showScrollbarAndIndicator() {
    // Cancel any existing fade animation
    scrollbarFadeAnimator?.cancel()
    
    // Show scrollbar immediately
    scrollbarVisible = true
    scrollbarAlpha = 1f
    
    // Trigger a redraw immediately
    invalidate()
    
    // Start fade out timer (but not when dragging)
    if (!isScrollbarDragging) {
      scrollbarFadeAnimator = ValueAnimator.ofFloat(1f, 0f).apply {
        duration = 300
        startDelay = 1500 // 1.5 second delay
        
        addUpdateListener { animator ->
          val alpha = animator.animatedValue as Float
          scrollbarAlpha = alpha
          invalidate()
        }
        
        addListener(object : AnimatorListenerAdapter() {
          override fun onAnimationEnd(animation: Animator) {
            scrollbarVisible = false
          }
        })
      }
      scrollbarFadeAnimator?.start()
    }
  }

  private fun checkEdgeEffects(oldScrollX: Float, oldScrollY: Float) {
    val deltaX = scrollXPos - oldScrollX
    val deltaY = scrollYPos - oldScrollY
    
    // Left edge
    if (scrollXPos <= 0 && deltaX > 0) {
      val pullDistance = deltaX / width
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
        // Android 12+ stretch effect
        EdgeEffectCompat.onPull(edgeEffectLeft, pullDistance, 0.5f)
      } else {
        // Android 11 and earlier glow effect
        edgeEffectLeft.onPull(pullDistance)
      }
      edgeEffectLeftActive = true
    }

    // Right edge
    if (scrollXPos >= maxScrollX && deltaX < 0) {
      val pullDistance = -deltaX / width
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
        // Android 12+ stretch effect
        EdgeEffectCompat.onPull(edgeEffectRight, pullDistance, 0.5f)
      } else {
        // Android 11 and earlier glow effect
        edgeEffectRight.onPull(pullDistance)
      }
      edgeEffectRightActive = true
    }

    // Top edge
    if (scrollYPos <= 0 && deltaY > 0) {
      val pullDistance = deltaY / height
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
        // Android 12+ stretch effect
        EdgeEffectCompat.onPull(edgeEffectTop, pullDistance, 0.5f)
      } else {
        // Android 11 and earlier glow effect
        edgeEffectTop.onPull(pullDistance)
      }
      edgeEffectTopActive = true
    }

    // Bottom edge
    if (scrollYPos >= maxScrollY && deltaY < 0) {
      val pullDistance = -deltaY / height
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
        // Android 12+ stretch effect
        EdgeEffectCompat.onPull(edgeEffectBottom, pullDistance, 0.5f)
      } else {
        // Android 11 and earlier glow effect
        edgeEffectBottom.onPull(pullDistance)
      }
      edgeEffectBottomActive = true
    }
    
    // Trigger visual update if any edge effect is active
    if (edgeEffectLeftActive || edgeEffectRightActive || edgeEffectTopActive || edgeEffectBottomActive) {
      postInvalidateOnAnimation()
    }
  }

  var listener: Listener? = null

  internal var handler: Handler
  internal val handlerThread = HandlerThread("PdfViewHandler").apply {
    start()
    handler = Handler(this.looper)
  }

//  private var fastScroll = FastScrollerBuilder(this)
//    .setPopupStyle {
//      it.setTextColor(Color.BLACK)
//      it.textAlignment = TEXT_ALIGNMENT_CENTER
//      it.gravity = Gravity.VERTICAL_GRAVITY_MASK
//      it.minWidth = (75 * resources.displayMetrics.density).toInt()
//      it.minHeight = (25 * resources.displayMetrics.density).toInt()
//      it.setBackgroundResource(R.drawable.oval_background)
//      it.setPadding(0, 0, (10 * resources.displayMetrics.density).toInt(), 0)
//    }
//    .setPopupTextProvider { _, position ->
//      "${position + 1} / ${document?.count() ?: 0}"
//    }.apply {
//      ContextCompat.getDrawable(context, R.drawable.thumb)?.let {
//        this.setThumbDrawable(it)
//      }
//      ContextCompat.getDrawable(context, R.drawable.track)?.let {
//        this.setTrackDrawable(it)
//      }
//    }
//    .build()

  override fun onTouchEvent(event: MotionEvent): Boolean {
    var handled = false

    // Check for scrollbar touch first (higher priority)
    if (handleScrollbarTouch(event)) {
      return true
    }

    // Store focus point for zoom
    if (event.action == MotionEvent.ACTION_DOWN) {
      focusX = event.x
      focusY = event.y
      // Ensure parent doesn't intercept touch events
      parent?.requestDisallowInterceptTouchEvent(true)
    }

    // Handle zoom gestures first
    handled = zoomDetector.onTouchEvent(event)

    // Handle scroll and fling gestures when not scaling
    if (!isScaling) {
      handled = gestureDetector.onTouchEvent(event) || handled
    }

    // Reset parent touch intercept when touch ends
    if (event.action == MotionEvent.ACTION_UP || event.action == MotionEvent.ACTION_CANCEL) {
      parent?.requestDisallowInterceptTouchEvent(false)
      // Release edge effects on touch up
      releaseEdgeEffects()
      // Only trigger bounce back if not currently flinging
      if (!overScroller.isFinished) {
        // Let fling continue, bounce will happen when fling finishes
      } else {
        // Trigger bounce back animation if overscrolled
        bounceBack()
      }
    }

    return handled || super.onTouchEvent(event)
  }

  private fun handleScrollbarTouch(event: MotionEvent): Boolean {
    if (maxScrollY <= 0) return false // No scrollable content
    
    // Calculate scrollbar bounds
    val scrollbarRight = width - 8f * resources.displayMetrics.density
    val scrollbarLeft = scrollbarRight - scrollbarTrackWidth
    val scrollbarTouchArea = scrollbarLeft - 20f * resources.displayMetrics.density // Expand touch area
    
    // Check if touch is in scrollbar area
    if (event.x < scrollbarTouchArea) return false
    
    when (event.action) {
      MotionEvent.ACTION_DOWN -> {
        // Calculate current thumb position
        val totalContentHeight = if (maxScrollY > 0) maxScrollY + height else height.toFloat()
        val viewportHeight = height.toFloat()
        val thumbHeight = ((viewportHeight / totalContentHeight) * viewportHeight).coerceAtLeast(40f)
        val maxThumbTop = viewportHeight - thumbHeight
        val scrollProgress = if (maxScrollY > 0) scrollYPos / maxScrollY else 0f
        val thumbTop = scrollProgress * maxThumbTop
        val thumbBottom = thumbTop + thumbHeight
        
        // Check if touch is on the thumb
        if (event.y >= thumbTop && event.y <= thumbBottom) {
          isScrollbarDragging = true
          scrollbarDragStartY = event.y
          scrollbarStartScrollY = scrollYPos
          
          // Show scrollbar immediately and cancel fade
          scrollbarFadeAnimator?.cancel()
          scrollbarVisible = true
          scrollbarAlpha = 1f
          invalidate()
          
          return true
        }
      }
      
      MotionEvent.ACTION_MOVE -> {
        if (isScrollbarDragging) {
          val deltaY = event.y - scrollbarDragStartY
          val totalContentHeight = if (maxScrollY > 0) maxScrollY + height else height.toFloat()
          val viewportHeight = height.toFloat()
          val thumbHeight = ((viewportHeight / totalContentHeight) * viewportHeight).coerceAtLeast(40f)
          val maxThumbTop = viewportHeight - thumbHeight
          
          // Convert thumb movement to scroll position
          val scrollDelta = (deltaY / maxThumbTop) * maxScrollY
          scrollYPos = (scrollbarStartScrollY + scrollDelta).coerceIn(0f, maxScrollY)
          
          // Update current page and redraw
          updateCurrentPage()
          drawPages()
          invalidate()
          
          return true
        }
      }
      
      MotionEvent.ACTION_UP, MotionEvent.ACTION_CANCEL -> {
        if (isScrollbarDragging) {
          isScrollbarDragging = false
          
          // Start fade timer
          showScrollbarAndIndicator()
          
          return true
        }
      }
    }
    
    return false
  }

  private fun releaseEdgeEffects() {
    if (edgeEffectTopActive) {
      edgeEffectTop.onRelease()
      edgeEffectTopActive = false
    }
    if (edgeEffectBottomActive) {
      edgeEffectBottom.onRelease()
      edgeEffectBottomActive = false
    }
    if (edgeEffectLeftActive) {
      edgeEffectLeft.onRelease()
      edgeEffectLeftActive = false
    }
    if (edgeEffectRightActive) {
      edgeEffectRight.onRelease()
      edgeEffectRightActive = false
    }
  }

  private fun bounceBack() {
    val targetScrollX = scrollXPos.coerceIn(0f, maxScrollX)
    val targetScrollY = scrollYPos.coerceIn(0f, maxScrollY)
    
    // Only animate if we're outside the normal bounds
    if (scrollXPos != targetScrollX || scrollYPos != targetScrollY) {
      // Stop any ongoing scroll operations
      overScroller.forceFinished(true)
      
      // Cancel any existing bounce animation
      bounceAnimator?.cancel()
      
      bounceAnimator = ValueAnimator.ofFloat(0f, 1f).apply {
        duration = 350 // Slightly longer for more natural spring feel
        interpolator = android.view.animation.OvershootInterpolator(0.5f) // Spring-like bounce back
        
        val startScrollX = scrollXPos
        val startScrollY = scrollYPos
        val deltaX = targetScrollX - startScrollX
        val deltaY = targetScrollY - startScrollY
        
        addUpdateListener { animator ->
          val fraction = animator.animatedValue as Float
          scrollXPos = startScrollX + deltaX * fraction
          scrollYPos = startScrollY + deltaY * fraction
          // Simple invalidate for smooth animation
          invalidate()
        }
        
        addListener(object : AnimatorListenerAdapter() {
          override fun onAnimationEnd(animation: Animator) {
            // Ensure we end up exactly at the target position
            scrollXPos = targetScrollX
            scrollYPos = targetScrollY
            bounceAnimator = null
            // Update page tracking and render after bounce
            updateCurrentPage()
            drawPages()
          }
          
          override fun onAnimationCancel(animation: Animator) {
            bounceAnimator = null
          }
        })
      }
      bounceAnimator?.start()
    }
  }

  private fun fling(velocityX: Int, velocityY: Int) {
    // Cancel any ongoing bounce animation
    bounceAnimator?.cancel()
    
    overScroller.forceFinished(true)

    overScroller.fling(
      scrollXPos.toInt(), scrollYPos.toInt(),
      velocityX, velocityY,
      0, maxScrollX.toInt(),
      0, maxScrollY.toInt(),
      width / 4, height / 4 // Add overscroll distance
    )

    postInvalidateOnAnimation()
  }

  override fun computeScroll() {
    super.computeScroll() // Important: call super first

    if (overScroller.computeScrollOffset()) {
      val oldScrollX = scrollXPos
      val oldScrollY = scrollYPos

      scrollXPos = overScroller.currX.toFloat()
      scrollYPos = overScroller.currY.toFloat()

      // Check if we hit boundaries and handle edge effects
      val hitLeftEdge = scrollXPos <= 0 && oldScrollX > scrollXPos
      val hitRightEdge = scrollXPos >= maxScrollX && oldScrollX < scrollXPos
      val hitTopEdge = scrollYPos <= 0 && oldScrollY > scrollYPos
      val hitBottomEdge = scrollYPos >= maxScrollY && oldScrollY < scrollYPos

      constrainScroll()

      // Handle overscroll edge effects with velocity absorption
      if (overScroller.isOverScrolled || hitLeftEdge || hitRightEdge || hitTopEdge || hitBottomEdge) {
        val velocityX = overScroller.currVelocity * kotlin.math.cos(Math.toRadians(overScroller.finalX.toDouble() - overScroller.startX.toDouble())).toFloat()
        val velocityY = overScroller.currVelocity * kotlin.math.sin(Math.toRadians(overScroller.finalY.toDouble() - overScroller.startY.toDouble())).toFloat()
        
        // Absorb velocity into edge effects for fling bounce
        if (hitLeftEdge && velocityX < 0) {
          edgeEffectLeft.onAbsorb((-velocityX).toInt())
          edgeEffectLeftActive = true
        }
        if (hitRightEdge && velocityX > 0) {
          edgeEffectRight.onAbsorb(velocityX.toInt())
          edgeEffectRightActive = true
        }
        if (hitTopEdge && velocityY < 0) {
          edgeEffectTop.onAbsorb((-velocityY).toInt())
          edgeEffectTopActive = true
        }
        if (hitBottomEdge && velocityY > 0) {
          edgeEffectBottom.onAbsorb(velocityY.toInt())
          edgeEffectBottomActive = true
        }
        
        // checkEdgeEffects(oldScrollX, oldScrollY) - DISABLED FOR NOW
      }

      drawPages()
      postInvalidateOnAnimation() // Continue animation
    } else {
      // Fling has finished
      // Finish edge effects when scrolling stops
      if (edgeEffectTopActive || edgeEffectBottomActive ||
        edgeEffectLeftActive || edgeEffectRightActive
      ) {
        edgeEffectTop.onRelease()
        edgeEffectBottom.onRelease()
        edgeEffectLeft.onRelease()
        edgeEffectRight.onRelease()
        edgeEffectTopActive = false
        edgeEffectBottomActive = false
        edgeEffectLeftActive = false
        edgeEffectRightActive = false
        postInvalidateOnAnimation()
      }
      
      // Trigger bounce back if overscrolled after fling
      bounceBack()
    }
  }

  override fun awakenScrollBars(): Boolean {
    return super.awakenScrollBars()
  }

  override fun dispatchDraw(canvas: Canvas) {
    super.dispatchDraw(canvas)
    // Scrollbar is drawn after dispatchDraw in onDraw
  }

  override fun onDraw(canvas: Canvas) {
    super.onDraw(canvas)
    
    // Draw overscroll visual feedback
    drawOverscrollEffect(canvas)
    
    // Always draw scrollbar if there's scrollable content (for debugging)
    if (maxScrollY > 0) {
      if (scrollbarVisible) {
        drawScrollbar(canvas)
      }
    }
  }

  private fun drawOverscrollEffect(canvas: Canvas) {
    // Draw subtle shadow/gradient at edges when overscrolled
    val overscrollFadePaint = Paint().apply {
      isAntiAlias = true
    }
    
    // Top overscroll effect
    if (scrollYPos < 0) {
      val overscrollAmount = (-scrollYPos).coerceAtMost(100f)
      val alpha = (overscrollAmount / 100f * 50).toInt() // Max 50/255 alpha
      overscrollFadePaint.color = Color.argb(alpha, 0, 0, 0)
      canvas.drawRect(0f, 0f, width.toFloat(), overscrollAmount, overscrollFadePaint)
    }
    
    // Bottom overscroll effect
    if (scrollYPos > maxScrollY) {
      val overscrollAmount = (scrollYPos - maxScrollY).coerceAtMost(100f)
      val alpha = (overscrollAmount / 100f * 50).toInt() // Max 50/255 alpha
      overscrollFadePaint.color = Color.argb(alpha, 0, 0, 0)
      canvas.drawRect(0f, height - overscrollAmount, width.toFloat(), height.toFloat(), overscrollFadePaint)
    }
  }

  private fun drawScrollbar(canvas: Canvas) {
    val scrollbarRight = width - 8f * resources.displayMetrics.density // 8dp from right edge
    val scrollbarLeft = scrollbarRight - scrollbarTrackWidth
    
    // Create temporary paints with adjusted alpha
    val backgroundPaint = Paint(scrollbarBackgroundPaint).apply {
      alpha = (0x40 * scrollbarAlpha).toInt() // 0x40 = 64 (25% opacity)
    }
    val thumbPaint = Paint(scrollbarPaint).apply {
      // Make thumb more prominent when dragging
      val thumbAlpha = if (isScrollbarDragging) 0xCC else 0x80 // More opaque when dragging
      alpha = (thumbAlpha * scrollbarAlpha).toInt()
    }
    
    // Draw scrollbar track background
    val trackRect = RectF(scrollbarLeft, 0f, scrollbarRight, height.toFloat())
    canvas.drawRoundRect(trackRect, scrollbarTrackWidth / 2, scrollbarTrackWidth / 2, backgroundPaint)
    
    // Calculate scrollbar thumb position and size based on entire PDF progress
    val totalContentHeight = if (maxScrollY > 0) maxScrollY + height else height.toFloat()
    val viewportHeight = height.toFloat()
    
    // Thumb size represents the visible portion of the entire document
    val thumbHeight = ((viewportHeight / totalContentHeight) * viewportHeight).coerceAtLeast(40f)
    
    // Thumb position represents current scroll position in the entire document
    val maxThumbTop = viewportHeight - thumbHeight
    val scrollProgress = if (maxScrollY > 0) scrollYPos / maxScrollY else 0f
    val thumbTop = scrollProgress * maxThumbTop
    
    // Draw scrollbar thumb
    val thumbRect = RectF(
      scrollbarLeft + (scrollbarTrackWidth - scrollbarWidth) / 2,
      thumbTop,
      scrollbarLeft + (scrollbarTrackWidth + scrollbarWidth) / 2,
      thumbTop + thumbHeight
    )
    canvas.drawRoundRect(thumbRect, scrollbarWidth / 2, scrollbarWidth / 2, thumbPaint)
    
    // Draw floating page indicator next to the thumb (like web browsers)
    drawFloatingPageIndicator(canvas, thumbTop + thumbHeight / 2, scrollProgress)
  }

  private fun drawFloatingPageIndicator(canvas: Canvas, thumbCenterY: Float, scrollProgress: Float) {
    val pageText = "$currentPage / ${getPageCount()}"
    
    // Create paint for the floating indicator
    val textPaint = Paint().apply {
      isAntiAlias = true
      color = Color.WHITE
      textSize = 12f * resources.displayMetrics.scaledDensity
      textAlign = Paint.Align.CENTER
    }
    
    val backgroundPaint = Paint().apply {
      isAntiAlias = true
      color = Color.parseColor("#DD000000") // Semi-transparent black background
    }
    
    // Measure text dimensions
    val textBounds = Rect()
    textPaint.getTextBounds(pageText, 0, pageText.length, textBounds)
    val textWidth = textBounds.width()
    val textHeight = textBounds.height()
    
    // Calculate indicator position (to the left of scrollbar)
    val padding = 8f * resources.displayMetrics.density
    val indicatorWidth = textWidth + padding * 2
    val indicatorHeight = textHeight + padding * 2
    
    val scrollbarLeft = width - 8f * resources.displayMetrics.density - scrollbarTrackWidth
    val indicatorRight = scrollbarLeft - 8f * resources.displayMetrics.density
    val indicatorLeft = indicatorRight - indicatorWidth
    
    // Constrain indicator to screen bounds
    val indicatorTop = (thumbCenterY - indicatorHeight / 2).coerceIn(
      padding, 
      height - indicatorHeight - padding
    )
    val indicatorBottom = indicatorTop + indicatorHeight
    
    // Apply alpha for fade effect
    backgroundPaint.alpha = (0xDD * scrollbarAlpha).toInt()
    textPaint.alpha = (0xFF * scrollbarAlpha).toInt()
    
    // Draw indicator background
    val indicatorRect = RectF(indicatorLeft, indicatorTop, indicatorRight, indicatorBottom)
    canvas.drawRoundRect(indicatorRect, 6f * resources.displayMetrics.density, 6f * resources.displayMetrics.density, backgroundPaint)
    
    // Draw text centered in the indicator
    val textX = indicatorLeft + indicatorWidth / 2
    val textY = indicatorTop + indicatorHeight / 2 + textHeight / 2
    canvas.drawText(pageText, textX, textY, textPaint)
  }

  @SuppressLint("NotifyDataSetChanged")
  private fun updateCurrentOrientation(force: Boolean = false) {
    val deviceOrientation = resources.configuration.orientation
    if (force || currentOrientation != deviceOrientation) {
      if (deviceOrientation != Configuration.ORIENTATION_LANDSCAPE && deviceOrientation != Configuration.ORIENTATION_PORTRAIT) {
        return
      }
      currentOrientation = deviceOrientation
    }
  }


  private var currentOrientation = Configuration.ORIENTATION_PORTRAIT
  override fun onSizeChanged(w: Int, h: Int, oldw: Int, oldh: Int) {
    super.onSizeChanged(w, h, oldw, oldh)
    if (width > 0 && height > 0) {
      // Clear existing cache instead of creating fixed bitmaps
      cache.values.forEach { it?.recycle() }
      cache.clear()

      // Initialize edge effects
      edgeEffectTop = EdgeEffect(context)
      edgeEffectBottom = EdgeEffect(context)
      edgeEffectLeft = EdgeEffect(context)
      edgeEffectRight = EdgeEffect(context)

      // Recalculate page bounds and scroll limits
      document?.let { doc ->
        calculatePageBounds(doc)
        updateScrollBounds()
        constrainScroll()
      }

      invalidate()
    }
    updateCurrentOrientation((oldw == 0 || oldh == 0) && w > 0 && h > 0)
  }

  override fun onAttachedToWindow() {
    super.onAttachedToWindow()
    updateCurrentOrientation()
  }

  var currentPage: Int = 1
    get() = field
    private set

  var canSnap = false
    set(value) {
      field = value
    }

  private fun createSpinner(): ViewGroup {
    val root = RelativeLayout(context)
    root.setBackgroundColor(Color.WHITE)
    root.elevation = 4f

    root.layoutParams = LayoutParams(
      LayoutParams.MATCH_PARENT,
      LayoutParams.MATCH_PARENT
    )

    val spinner = ProgressBar(context)
    spinner.isIndeterminate = true

    val layout = RelativeLayout.LayoutParams(
      RelativeLayout.LayoutParams.WRAP_CONTENT,
      RelativeLayout.LayoutParams.WRAP_CONTENT
    )
    layout.alignWithParent = true
    layout.addRule(
      RelativeLayout.CENTER_IN_PARENT
    )

    root.addView(spinner, layout)

    return root
  }

  init {
    // Enable touch events and scrolling
    isClickable = true
    isFocusable = true
    isFocusableInTouchMode = true
    setWillNotDraw(false) // Enable onDraw calls for custom drawing

    if (!useSurface) {
      textureView.surfaceTextureListener = this

      addView(
        textureView, LayoutParams(
          LayoutParams.MATCH_PARENT,
          LayoutParams.MATCH_PARENT
        )
      )
    } else {
      surfaceView.holder.addCallback(this)
      addView(
        surfaceView, LayoutParams(
          LayoutParams.MATCH_PARENT,
          LayoutParams.MATCH_PARENT
        )
      )
    }

    // Page indicator is now drawn as a floating indicator with the scrollbar
  }

  interface Listener {
    fun onError(error: Exception)
    fun onLoad(document: PdfDocument)
    fun onPageChange(currentPage: Int) // 1-based page number
  }

  // Public API methods for controlling the view
  /**
   * Scroll to a specific page
   * @param pageIndex 1-based page number (first page is 1)
   * @param animated whether to animate the scroll
   */
  fun scrollToPage(pageIndex: Int, animated: Boolean = true) {
    val zeroBasedIndex = pageIndex - 1 // Convert from 1-based to 0-based index
    if (zeroBasedIndex < 0 || zeroBasedIndex >= pageBounds.size) return

    val pageInfo = pageBounds[zeroBasedIndex]
    val targetY = pageInfo.top * currentScale

    if (animated) {
      overScroller.forceFinished(true)
      overScroller.startScroll(
        scrollXPos.toInt(), scrollYPos.toInt(),
        0, (targetY - scrollYPos).toInt(),
        300 // Duration in ms
      )
      postInvalidateOnAnimation()
    } else {
      scrollYPos = targetY
      constrainScroll()
      drawPages()
    }
  }

  fun zoomTo(
    scale: Float,
    focusX: Float = width / 2f,
    focusY: Float = height / 2f,
    animated: Boolean = true
  ) {
    val targetScale = scale.coerceIn(0.5f, 5.0f)

    if (animated) {
      // TODO: Implement animated zoom
      performZoom(targetScale, focusX, focusY)
    } else {
      performZoom(targetScale, focusX, focusY)
    }
  }

  private fun performZoom(targetScale: Float, focusX: Float, focusY: Float) {
    val oldScale = currentScale
    currentScale = targetScale

    // Zoom around focus point
    val scaleChange = currentScale / oldScale

    val focusXInContent = scrollXPos + focusX
    val focusYInContent = scrollYPos + focusY

    val newFocusXInContent = focusXInContent * scaleChange
    val newFocusYInContent = focusYInContent * scaleChange

    scrollXPos = newFocusXInContent - focusX
    scrollYPos = newFocusYInContent - focusY

    constrainScroll()
    drawPages()
  }

  fun resetZoom() {
    zoomTo(1.0f)
  }

  fun getPageCount(): Int = document?.count() ?: 0

  fun getCurrentScale(): Float = currentScale

  fun getPdfScrollX(): Float = scrollXPos

  fun getPdfScrollY(): Float = scrollYPos

  fun drawPages() {
    val surface = this.surface ?: return
    val document = this.document ?: return

    if (pageBounds.isEmpty()) {
      calculatePageBounds(document)
    }

    val canvas = surface.lockCanvas(null)
    try {
      // Clear the canvas
      canvas.drawColor(Color.LTGRAY)

      // Calculate which pages are visible
      val viewTop = scrollYPos / currentScale
      val viewBottom = (scrollYPos + height) / currentScale

      // Sort pages by visibility priority (center of screen first)
      val viewCenter = (viewTop + viewBottom) / 2
      val visiblePages = pageBounds.filter { pageInfo ->
        pageInfo.bottom >= viewTop && pageInfo.top <= viewBottom
      }.sortedBy { pageInfo ->
        // Distance from page center to view center
        val pageCenter = (pageInfo.top + pageInfo.bottom) / 2
        kotlin.math.abs(pageCenter - viewCenter)
      }

      // Render visible pages in priority order
      for (pageInfo in visiblePages) {
        renderPageToCanvas(canvas, document, pageInfo)
      }

      // Clean up distant pages from cache periodically to manage memory
      if (visiblePages.isNotEmpty() && random() < 0.1) { // 10% chance per draw
        cleanupDistantPageCache()
      }

      // Draw edge effects
      drawEdgeEffects(canvas)

    } finally {
      surface.unlockCanvasAndPost(canvas)
    }
  }

  private fun drawEdgeEffects(canvas: android.graphics.Canvas) {
    var needsInvalidate = false

    // Top edge effect
    if (edgeEffectTopActive && !edgeEffectTop.isFinished) {
      val restoreCount = canvas.save()
      canvas.translate(0f, 0f)
      edgeEffectTop.setSize(width, height)
      if (edgeEffectTop.draw(canvas)) {
        needsInvalidate = true
      }
      canvas.restoreToCount(restoreCount)
    }

    // Bottom edge effect
    if (edgeEffectBottomActive && !edgeEffectBottom.isFinished) {
      val restoreCount = canvas.save()
      canvas.translate(0f, height.toFloat())
      canvas.rotate(180f)
      edgeEffectBottom.setSize(width, height)
      if (edgeEffectBottom.draw(canvas)) {
        needsInvalidate = true
      }
      canvas.restoreToCount(restoreCount)
    }

    // Left edge effect
    if (edgeEffectLeftActive && !edgeEffectLeft.isFinished) {
      val restoreCount = canvas.save()
      canvas.translate(0f, height.toFloat())
      canvas.rotate(-90f)
      edgeEffectLeft.setSize(height, width)
      if (edgeEffectLeft.draw(canvas)) {
        needsInvalidate = true
      }
      canvas.restoreToCount(restoreCount)
    }

    // Right edge effect
    if (edgeEffectRightActive && !edgeEffectRight.isFinished) {
      val restoreCount = canvas.save()
      canvas.translate(width.toFloat(), 0f)
      canvas.rotate(90f)
      edgeEffectRight.setSize(height, width)
      if (edgeEffectRight.draw(canvas)) {
        needsInvalidate = true
      }
      canvas.restoreToCount(restoreCount)
    }

    if (needsInvalidate) {
      postInvalidateOnAnimation()
    }
  }

  private fun renderPageToCanvas(
    canvas: android.graphics.Canvas,
    document: PdfDocument,
    pageInfo: PageInfo
  ) {
    val cached = cache[pageInfo.index]
    if (cached != null && !cached.isRecycled) {
      drawCachedPage(canvas, cached, pageInfo)
      return
    }

    // Draw placeholder while page is being rendered
    drawPagePlaceholder(canvas, pageInfo)

    // Render page in background thread if not already rendering
    if (!renderingPages.contains(pageInfo.index)) {
      renderingPages.add(pageInfo.index)
      handler.post {
        renderPageAsync(document, pageInfo)
      }
    }
  }

  private fun drawPagePlaceholder(canvas: android.graphics.Canvas, pageInfo: PageInfo) {
    val pageLeft = -scrollXPos
    val pageTop = -scrollYPos + pageInfo.top * currentScale
    val pageRight = pageLeft + pageInfo.width * currentScale
    val pageBottom = pageTop + pageInfo.height * currentScale

    // Only draw if visible
    if (pageBottom < 0 || pageTop > height || pageRight < 0 || pageLeft > width) {
      return
    }

    // Draw white page background
    val backgroundPaint = android.graphics.Paint().apply {
      color = Color.WHITE
      style = android.graphics.Paint.Style.FILL
    }
    canvas.drawRect(pageLeft, pageTop, pageRight, pageBottom, backgroundPaint)

    // Draw page border
    val borderPaint = android.graphics.Paint().apply {
      color = Color.BLACK
      style = android.graphics.Paint.Style.STROKE
      strokeWidth = 2f
    }
    canvas.drawRect(pageLeft, pageTop, pageRight, pageBottom, borderPaint)

    // Draw loading text
    val textPaint = android.graphics.Paint().apply {
      color = Color.GRAY
      textSize = 24f
      textAlign = android.graphics.Paint.Align.CENTER
      isAntiAlias = true
    }
    val centerX = pageLeft + (pageRight - pageLeft) / 2
    val centerY = pageTop + (pageBottom - pageTop) / 2
    canvas.drawText("Loading Page ${pageInfo.index + 1}...", centerX, centerY, textPaint)
  }

  private fun drawCachedPage(canvas: android.graphics.Canvas, bitmap: Bitmap, pageInfo: PageInfo) {
    // Calculate page position on screen
    val pageLeft = -scrollXPos
    val pageTop = -scrollYPos + pageInfo.top * currentScale
    val pageRight = pageLeft + pageInfo.width * currentScale
    val pageBottom = pageTop + pageInfo.height * currentScale

    // Only draw if page is visible on screen
    if (pageBottom < 0 || pageTop > height || pageRight < 0 || pageLeft > width) {
      return
    }

    // Calculate the scale to fit the bitmap to the page size
    val scaleX = (pageRight - pageLeft) / bitmap.width
    val scaleY = (pageBottom - pageTop) / bitmap.height

    val matrix = Matrix().apply {
      // Scale the bitmap to fit the page dimensions
      postScale(scaleX, scaleY)
      // Position the page correctly
      postTranslate(pageLeft, pageTop)
    }

    val paint = android.graphics.Paint().apply {
      isAntiAlias = true
      isFilterBitmap = true
    }

    canvas.drawBitmap(bitmap, matrix, paint)

    // Draw page border
    val borderPaint = android.graphics.Paint().apply {
      color = Color.BLACK
      style = android.graphics.Paint.Style.STROKE
      strokeWidth = 2f
    }

    canvas.drawRect(pageLeft, pageTop, pageRight, pageBottom, borderPaint)
  }

  private fun renderPageAsync(document: PdfDocument, pageInfo: PageInfo) {
    try {
      val renderWidth = (pageInfo.width * currentScale).toInt().coerceAtLeast(1)
      val renderHeight = (pageInfo.height * currentScale).toInt().coerceAtLeast(1)

      // Check if we already have a bitmap at similar resolution
      val existingBitmap = cache[pageInfo.index]
      if (existingBitmap != null && !existingBitmap.isRecycled) {
        val widthDiff = kotlin.math.abs(existingBitmap.width - renderWidth)
        val heightDiff = kotlin.math.abs(existingBitmap.height - renderHeight)
        // If the existing bitmap is close enough in size (within 10%), don't re-render
        if (widthDiff < renderWidth * 0.1f && heightDiff < renderHeight * 0.1f) {
          post {
            renderingPages.remove(pageInfo.index)
          }
          return
        }
      }

      val bitmap = createBitmap(renderWidth, renderHeight)

      // Render the page
      document.renderToBitmap(pageInfo.index, bitmap)

      // Update cache and UI on main thread
      post {
        cache[pageInfo.index]?.recycle()
        cache[pageInfo.index] = bitmap
        renderingPages.remove(pageInfo.index)
        drawPages()
      }
    } catch (e: Exception) {
      // Handle render error
      post {
        renderingPages.remove(pageInfo.index)
      }
      e.printStackTrace()
    }
  }

  override fun onScaleBegin(detector: ScaleGestureDetector): Boolean {
    isScaling = true
    overScroller.forceFinished(true)
    focusX = detector.focusX
    focusY = detector.focusY
    return true
  }

  override fun onScale(detector: ScaleGestureDetector): Boolean {
    val scaleFactor = detector.scaleFactor
    val oldScale = currentScale

    currentScale *= scaleFactor
    currentScale = currentScale.coerceIn(0.5f, 5.0f)

    // Zoom around focus point
    val scaleChange = currentScale / oldScale

    // Calculate new scroll position to maintain focus point
    val focusXInContent = scrollXPos + focusX
    val focusYInContent = scrollYPos + focusY

    val newFocusXInContent = focusXInContent * scaleChange
    val newFocusYInContent = focusYInContent * scaleChange

    scrollXPos = newFocusXInContent - focusX
    scrollYPos = newFocusYInContent - focusY

    constrainScroll()

    // Update view immediately for smooth zoom
    drawPages()
    return true
  }

  override fun onScaleEnd(detector: ScaleGestureDetector) {
    isScaling = false
    // Don't clear cache immediately to prevent flash
    // Instead, just trigger re-render which will gradually replace cached content
    drawPages()
  }

  private fun clearVisiblePageCache() {
    val viewTop = scrollYPos / currentScale
    val viewBottom = (scrollYPos + height) / currentScale

    for (pageInfo in pageBounds) {
      if (pageInfo.bottom >= viewTop && pageInfo.top <= viewBottom) {
        cache[pageInfo.index]?.recycle()
        cache.remove(pageInfo.index)
      }
    }
  }

  private fun cleanupDistantPageCache() {
    val viewTop = scrollYPos / currentScale
    val viewBottom = (scrollYPos + height) / currentScale
    val viewHeight = viewBottom - viewTop

    // Keep pages within 2 screen heights of the visible area
    val keepRangeTop = viewTop - viewHeight * 2
    val keepRangeBottom = viewBottom + viewHeight * 2

    val pagesToRemove = mutableListOf<Int>()
    for ((pageIndex, bitmap) in cache) {
      val pageInfo = pageBounds.getOrNull(pageIndex)
      if (pageInfo != null) {
        if (pageInfo.bottom < keepRangeTop || pageInfo.top > keepRangeBottom) {
          bitmap?.recycle()
          pagesToRemove.add(pageIndex)
        }
      }
    }

    pagesToRemove.forEach { cache.remove(it) }
  }

  override fun surfaceCreated(holder: SurfaceHolder) {
    surface = holder.surface
    drawPages()
  }

  override fun surfaceChanged(holder: SurfaceHolder, format: Int, width: Int, height: Int) {
    surface = holder.surface
    drawPages()
  }

  override fun surfaceDestroyed(holder: SurfaceHolder) {
    this.surface = null
  }

  override fun onSurfaceTextureAvailable(surface: SurfaceTexture, width: Int, height: Int) {
    this.surface = Surface(surface)
    drawPages()
  }

  override fun onSurfaceTextureSizeChanged(surface: SurfaceTexture, width: Int, height: Int) {
    drawPages()
  }

  override fun onSurfaceTextureDestroyed(surface: SurfaceTexture): Boolean {
    this.surface?.release()
    this.surface = null
    return true
  }

  override fun onSurfaceTextureUpdated(surface: SurfaceTexture) {}

  @JvmOverloads
  fun loadFromBytes(bytes: ByteArray, password: String? = null) {
    handler.post {
      var document: PdfDocument? = null
      var error: Exception? = null
      try {
        document = Pdf.instance.loadFromBytes(bytes, password)
      } catch (e: Exception) {
        error = e
      } finally {
        if (document != null) {
          this.document = document
          listener?.onLoad(document)
        } else if (error != null) {
          listener?.onError(error)
        }
      }
    }
  }

  @JvmOverloads
  fun loadFromBuffer(buffer: ByteBuffer, password: String? = null) {
    handler.post {
      var document: PdfDocument? = null
      var error: Exception? = null
      try {
        document = if (buffer.isDirect) {
          Pdf.instance.loadFromBuffer(buffer, password)
        } else {
          Pdf.instance.loadFromBytes(buffer.array(), password)
        }
      } catch (e: Exception) {
        error = e
      } finally {
        if (document != null) {
          this.document = document
          listener?.onLoad(document)
        } else if (error != null) {
          listener?.onError(error)
        }
      }
    }
  }

  @JvmOverloads
  fun loadFromPath(path: String, password: String? = null) {
    handler.post {
      var document: PdfDocument? = null
      var error: Exception? = null
      try {
        document = Pdf.instance.loadFromPath(path, password)
      } catch (e: Exception) {
        error = e
      } finally {
        if (document != null) {
          this.document = document
          listener?.onLoad(document)
        } else if (error != null) {
          listener?.onError(error)
        }
      }
    }
  }

  @JvmOverloads
  fun loadFromUrl(url: String, password: String? = null) {
    handler.post {
      var document: PdfDocument? = null
      var error: Exception? = null
      try {
        val value = URI(url).toURL()
        val connection = value.openConnection()
        val len = connection.contentLength
        val stream = connection.getInputStream()
        if (len == -1) {
          val content = value.readBytes()
          document = Pdf.instance.loadFromBytes(content, password)
        } else {
          val channel = Channels.newChannel(stream)
          val buffer = ByteBuffer.allocateDirect(len)

          while (buffer.hasRemaining()) {
            val bytesRead = channel.read(buffer)
            if (bytesRead == -1) break
          }

          buffer.order(ByteOrder.nativeOrder())
          buffer.flip()
          document = Pdf.instance.loadFromBuffer(buffer)
        }

      } catch (e: Exception) {
        error = e
      } finally {
        if (document != null) {
          this.document = document
          listener?.onLoad(document)
        } else if (error != null) {
          listener?.onError(error)
        }
      }
    }
  }
}
