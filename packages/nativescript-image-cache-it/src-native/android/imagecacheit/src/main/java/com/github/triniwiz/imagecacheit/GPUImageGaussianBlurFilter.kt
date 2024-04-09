/*
 * Copyright (C) 2012 CyberAgent
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.github.triniwiz.imagecacheit

import jp.co.cyberagent.android.gpuimage.filter.GPUImageTwoPassTextureSamplingFilter

/**
 * A more generalized 9x9 Gaussian blur filter blurSize value ranging from 0.0
 * on up, with a default of 1.0
 */
class GPUImageGaussianBlurFilter @JvmOverloads constructor(blurSize: Float = 3f, inPixels: Boolean = false) : GPUImageTwoPassTextureSamplingFilter(vertexShaderForOptimizedBlurOfRadius(getCalculatedSampleRadius(blurSize), getBlurRadiusInPx(blurSize)), fragmentShaderForOptimizedBlurOfRadius(getCalculatedSampleRadius(blurSize), getBlurRadiusInPx(blurSize)), vertexShaderForOptimizedBlurOfRadius(getCalculatedSampleRadius(blurSize), getBlurRadiusInPx(blurSize)), fragmentShaderForOptimizedBlurOfRadius(getCalculatedSampleRadius(blurSize), getBlurRadiusInPx(blurSize))) {
  protected var mBlurSize = 3f
  protected var inPixels = true
  override fun onInit() {
    super.onInit()
    if (inPixels) {
      blurRadiusInPixels = mBlurSize
    } else {
      blurSize = mBlurSize
    }
  }

  /**
   * A multiplier for the blur size, ranging from 0.0 on up, with a default of
   * 1.0
   *
   * @param blurSize from 0.0 on up, default 1.0
   */
  //    @Override
  //    public float getVerticalTexelOffsetRatio() {
  //        return mBlurSize;
  //    }
  //
  //    @Override
  //    public float getHorizontalTexelOffsetRatio() {
  //        return mBlurSize;
  //    }
  var blurSize: Float
    get() = mBlurSize
    set(blurSize) {
      mBlurSize = blurSize
      inPixels = false
      runOnDraw { initTexelOffsets() }
    }
  var blurRadiusInPixels: Float
    get() = mBlurSize
    set(blurSize) {
      mBlurSize = blurSize
      inPixels = true
      runOnDraw { initTexelOffsets() }
    }

  companion object {
    const val VERTEX_SHADER = "attribute vec4 position;\n" +
      "attribute vec4 inputTextureCoordinate;\n" +
      "\n" +
      "const int GAUSSIAN_SAMPLES = 9;\n" +
      "\n" +
      "uniform float texelWidthOffset;\n" +
      "uniform float texelHeightOffset;\n" +
      "\n" +
      "varying vec2 textureCoordinate;\n" +
      "varying vec2 blurCoordinates[GAUSSIAN_SAMPLES];\n" +
      "\n" +
      "void main()\n" +
      "{\n" +
      "   gl_Position = position;\n" +
      "   textureCoordinate = inputTextureCoordinate.xy;\n" +
      "   \n" +
      "   // Calculate the positions for the blur\n" +
      "   int multiplier = 0;\n" +
      "   vec2 blurStep;\n" +
      "   vec2 singleStepOffset = vec2(texelHeightOffset, texelWidthOffset);\n" +
      "    \n" +
      "   for (int i = 0; i < GAUSSIAN_SAMPLES; i++)\n" +
      "   {\n" +
      "       multiplier = (i - ((GAUSSIAN_SAMPLES - 1) / 2));\n" +
      "       // Blur in x (horizontal)\n" +
      "       blurStep = float(multiplier) * singleStepOffset;\n" +
      "       blurCoordinates[i] = inputTextureCoordinate.xy + blurStep;\n" +
      "   }\n" +
      "}\n"
    const val FRAGMENT_SHADER = "uniform sampler2D inputImageTexture;\n" +
      "\n" +
      "const lowp int GAUSSIAN_SAMPLES = 9;\n" +
      "\n" +
      "varying highp vec2 textureCoordinate;\n" +
      "varying highp vec2 blurCoordinates[GAUSSIAN_SAMPLES];\n" +
      "\n" +
      "void main()\n" +
      "{\n" +
      "   lowp vec3 sum = vec3(0.0);\n" +
      "   lowp vec4 fragColor=texture2D(inputImageTexture,textureCoordinate);\n" +
      "   \n" +
      "    sum += texture2D(inputImageTexture, blurCoordinates[0]).rgb * 0.05;\n" +
      "    sum += texture2D(inputImageTexture, blurCoordinates[1]).rgb * 0.09;\n" +
      "    sum += texture2D(inputImageTexture, blurCoordinates[2]).rgb * 0.12;\n" +
      "    sum += texture2D(inputImageTexture, blurCoordinates[3]).rgb * 0.15;\n" +
      "    sum += texture2D(inputImageTexture, blurCoordinates[4]).rgb * 0.18;\n" +
      "    sum += texture2D(inputImageTexture, blurCoordinates[5]).rgb * 0.15;\n" +
      "    sum += texture2D(inputImageTexture, blurCoordinates[6]).rgb * 0.12;\n" +
      "    sum += texture2D(inputImageTexture, blurCoordinates[7]).rgb * 0.09;\n" +
      "    sum += texture2D(inputImageTexture, blurCoordinates[8]).rgb * 0.05;\n" +
      "\n" +
      "   gl_FragColor = vec4(sum,fragColor.a);\n" +
      "}"

    private fun vertexShaderForOptimizedBlurOfRadius(blurRadius: Int, sigma: Float): String {
      if (blurRadius < 1) {
        return NO_FILTER_VERTEX_SHADER
      }

      // First, generate the normal Gaussian weights for a given sigma
      val standardGaussianWeights = FloatArray(blurRadius + 1)
      var sumOfWeights = 0.0f
      for (currentGaussianWeightIndex in 0 until blurRadius + 1) {
        standardGaussianWeights[currentGaussianWeightIndex] = (1.0 / Math.sqrt(2.0 * Math.PI * Math.pow(sigma.toDouble(), 2.0)) * Math.exp(-Math.pow(currentGaussianWeightIndex.toDouble(), 2.0) / (2.0 * Math.pow(sigma.toDouble(), 2.0)))).toFloat()
        sumOfWeights += if (currentGaussianWeightIndex == 0) {
          standardGaussianWeights[currentGaussianWeightIndex]
        } else {
          (2.0 * standardGaussianWeights[currentGaussianWeightIndex]).toFloat()
        }
      }

      // Next, normalize these weights to prevent the clipping of the Gaussian curve at the end of the discrete samples from reducing luminance
      for (currentGaussianWeightIndex in 0 until blurRadius + 1) {
        standardGaussianWeights[currentGaussianWeightIndex] = standardGaussianWeights[currentGaussianWeightIndex] / sumOfWeights
      }

      // From these weights we calculate the offsets to read interpolated values from
      val numberOfOptimizedOffsets = Math.min(blurRadius / 2 + blurRadius % 2, 7)
      val optimizedGaussianOffsets = FloatArray(numberOfOptimizedOffsets)
      for (currentOptimizedOffset in 0 until numberOfOptimizedOffsets) {
        val firstWeight = standardGaussianWeights[currentOptimizedOffset * 2 + 1]
        val secondWeight = standardGaussianWeights[currentOptimizedOffset * 2 + 2]
        val optimizedWeight = firstWeight + secondWeight
        optimizedGaussianOffsets[currentOptimizedOffset] = (firstWeight * (currentOptimizedOffset * 2 + 1) + secondWeight * (currentOptimizedOffset * 2 + 2)) / optimizedWeight
      }
      var shaderString = """attribute vec4 position;
attribute vec4 inputTextureCoordinate;

uniform lowp float texelWidthOffset;
uniform lowp float texelHeightOffset;

varying vec2 textureCoordinate;
varying vec2 blurCoordinates[${(1 + numberOfOptimizedOffsets * 2).toLong()}];

void main()
{
    gl_Position = position;
   textureCoordinate = inputTextureCoordinate.xy;

    vec2 singleStepOffset = vec2(texelWidthOffset, texelHeightOffset);
"""

      // Inner offset loop
      shaderString += "    blurCoordinates[0] = inputTextureCoordinate.xy;\n"
      for (currentOptimizedOffset in 0 until numberOfOptimizedOffsets) {
        shaderString += """    blurCoordinates[${(currentOptimizedOffset * 2 + 1).toLong()}] = inputTextureCoordinate.xy + singleStepOffset * ${optimizedGaussianOffsets[currentOptimizedOffset]};
    blurCoordinates[${(currentOptimizedOffset * 2 + 2).toLong()}] = inputTextureCoordinate.xy - singleStepOffset * ${optimizedGaussianOffsets[currentOptimizedOffset]};
"""
      }

      // Footer
      shaderString += "}\n"
      return shaderString
    }

    private fun fragmentShaderForOptimizedBlurOfRadius(blurRadius: Int, sigma: Float): String {
      if (blurRadius < 1) {
        return NO_FILTER_FRAGMENT_SHADER
      }

      // First, generate the normal Gaussian weights for a given sigma
      val standardGaussianWeights = FloatArray(blurRadius + 1)
      var sumOfWeights = 0.0f
      for (currentGaussianWeightIndex in 0 until blurRadius + 1) {
        standardGaussianWeights[currentGaussianWeightIndex] = (1.0 / Math.sqrt(2.0 * Math.PI * Math.pow(sigma.toDouble(), 2.0)) * Math.exp(-Math.pow(currentGaussianWeightIndex.toDouble(), 2.0) / (2.0 * Math.pow(sigma.toDouble(), 2.0)))).toFloat()
        sumOfWeights += if (currentGaussianWeightIndex == 0) {
          standardGaussianWeights[currentGaussianWeightIndex]
        } else {
          (2.0 * standardGaussianWeights[currentGaussianWeightIndex]).toFloat()
        }
      }

      // Next, normalize these weights to prevent the clipping of the Gaussian curve at the end of the discrete samples from reducing luminance
      for (currentGaussianWeightIndex in 0 until blurRadius + 1) {
        standardGaussianWeights[currentGaussianWeightIndex] = standardGaussianWeights[currentGaussianWeightIndex] / sumOfWeights
      }

      // From these weights we calculate the offsets to read interpolated values from
      val numberOfOptimizedOffsets = Math.min(blurRadius / 2 + blurRadius % 2, 7)
      val trueNumberOfOptimizedOffsets = blurRadius / 2 + blurRadius % 2

      // Header
      var shaderString = """uniform sampler2D inputImageTexture;
uniform lowp float texelWidthOffset;
uniform lowp float texelHeightOffset;

varying highp vec2 blurCoordinates[${1 + numberOfOptimizedOffsets * 2}];
varying highp vec2 textureCoordinate;

void main()
{
   lowp vec3 sum = vec3(0.0);
   lowp vec4 fragColor=texture2D(inputImageTexture,textureCoordinate);
"""

      // Inner texture loop
      shaderString += """    sum += texture2D(inputImageTexture, blurCoordinates[0]).rgb * ${standardGaussianWeights[0]};
"""
      for (currentBlurCoordinateIndex in 0 until numberOfOptimizedOffsets) {
        val firstWeight = standardGaussianWeights[currentBlurCoordinateIndex * 2 + 1]
        val secondWeight = standardGaussianWeights[currentBlurCoordinateIndex * 2 + 2]
        val optimizedWeight = firstWeight + secondWeight
        shaderString += """    sum += texture2D(inputImageTexture, blurCoordinates[${currentBlurCoordinateIndex * 2 + 1}]).rgb * $optimizedWeight;
"""
        shaderString += """    sum += texture2D(inputImageTexture, blurCoordinates[${currentBlurCoordinateIndex * 2 + 2}]).rgb * $optimizedWeight;
"""
      }

      // If the number of required samples exceeds the amount we can pass in via varyings, we have to do dependent texture reads in the fragment shader
      if (trueNumberOfOptimizedOffsets > numberOfOptimizedOffsets) {
        shaderString += "    highp vec2 singleStepOffset = vec2(texelWidthOffset, texelHeightOffset);\n"
        for (currentOverlowTextureRead in numberOfOptimizedOffsets until trueNumberOfOptimizedOffsets) {
          val firstWeight = standardGaussianWeights[currentOverlowTextureRead * 2 + 1]
          val secondWeight = standardGaussianWeights[currentOverlowTextureRead * 2 + 2]
          val optimizedWeight = firstWeight + secondWeight
          val optimizedOffset = (firstWeight * (currentOverlowTextureRead * 2 + 1) + secondWeight * (currentOverlowTextureRead * 2 + 2)) / optimizedWeight
          shaderString += "    sum += texture2D(inputImageTexture, blurCoordinates[0] + singleStepOffset * $optimizedOffset).rgb * $optimizedWeight;\n"
          shaderString += "    sum += texture2D(inputImageTexture, blurCoordinates[0] - singleStepOffset * $optimizedOffset).rgb * $optimizedWeight;\n"
        }
      }

      // Footer
      shaderString += """    gl_FragColor = vec4(sum,fragColor.a);
}
"""
      return shaderString
    }

    fun getBlurRadiusInPx(mBlurSize: Float): Float {
      var blurRadiusInPixels = mBlurSize
      return Math.round(blurRadiusInPixels).also { blurRadiusInPixels = it.toFloat() }.toFloat()
    }

    fun getCalculatedSampleRadius(mBlurSize: Float): Int {
      var blurRadiusInPixels = mBlurSize
      blurRadiusInPixels = Math.round(blurRadiusInPixels).toFloat()
      var calculatedSampleRadius = 0
      if (blurRadiusInPixels >= 1) // Avoid a divide-by-zero error here
      {
        // Calculate the number of pixels to sample from by setting a bottom limit for the contribution of the outermost pixel
        val minimumWeightToFindEdgeOfSamplingArea = 1.0f / 256.0f
        calculatedSampleRadius = Math.floor(Math.sqrt(-2.0 * Math.pow(blurRadiusInPixels.toDouble(), 2.0) * Math.log(minimumWeightToFindEdgeOfSamplingArea * Math.sqrt(2.0 * Math.PI * Math.pow(blurRadiusInPixels.toDouble(), 2.0))))).toInt()
        calculatedSampleRadius += calculatedSampleRadius % 2 // There's nothing to gain from handling odd radius sizes, due to the optimizations I use
      }
      return calculatedSampleRadius
    }
  }

  init {
    this.inPixels = inPixels
    mBlurSize = blurSize
  }
}
