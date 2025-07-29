package io.github.triniwiz.plugins.pdf

import android.os.Bundle
import android.util.Log
import android.view.ViewGroup
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import io.github.triniwiz.plugins.pdf.table.FontStyle
import io.github.triniwiz.plugins.pdf.table.HorizontalAlign
import io.github.triniwiz.plugins.pdf.table.PdfTable
import io.github.triniwiz.plugins.pdf.table.StyleDef
import io.github.triniwiz.plugins.pdf.table.TableCell
import io.github.triniwiz.plugins.pdf.table.TableCellOrString
import io.github.triniwiz.plugins.pdf.table.VerticalAlign
import org.json.JSONObject
import java.util.Timer
import java.util.TimerTask
import java.util.concurrent.Executors

class MainActivity : AppCompatActivity() {
  val executor = Executors.newSingleThreadScheduledExecutor()
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    enableEdgeToEdge()
    setContentView(R.layout.activity_main)

    val main = findViewById<ViewGroup>(R.id.main)
    ViewCompat.setOnApplyWindowInsetsListener(main) { v, insets ->
      val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
      v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
      insets
    }
    Pdf.instance.scale = resources.displayMetrics.density
    val pdfView = PdfView(this)


    pdfView.listener = object : PdfView.Listener {
      override fun onError(error: Exception) {
        Log.d("com.test", "document load error: $error")
      }

      override fun onLoad(document: PdfDocument) {
        Log.d("com.test", "document loaded total pages: ${document.count()}")
      }

      override fun onPageChange(currentPage: Int) {
        Log.d("com.test", "page changed: $currentPage")
      }
    }
    main.addView(
      pdfView,
      ViewGroup.LayoutParams(
        0,
        0
      )
    )

    var t: TimerTask? = null

    t = object : TimerTask() {
      override fun run() {
        t?.cancel()
        runOnUiThread {
          pdfView.layoutParams = ViewGroup.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            0
          )
        }



        t = object : TimerTask() {
          override fun run() {
            t?.cancel()
            runOnUiThread {
              pdfView.layoutParams = ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
              )
            }
          }
        }
        Timer().schedule(t, 5000L)


      }
    }
    Timer().schedule(t, 5000L)


    executor.execute {
      val document = PdfDocument()
      val table = buildTable()
      val output = document.table(table)
      Log.d("com.test", "output ${JSONObject(output)}")

//      val url =
//        URI.create("https://static.wikia.nocookie.net/xmenmovies/images/9/94/Deadpool_Textless.jpg/")
//          .toURL()
//      val image = url.readBytes()
      // val image = BitmapFactory.decodeStream(url.openStream())

      /*
      val width = document.width
      document.fontSize = 32f
      document.setFontColor(100, 100, 100, 255)
      val options = PdfTextOptions()
      options.baseline = PdfTextBaseline.Top
      options.align = PdfTextAlignment.Center
      document.addText("Hello World 1", (width / 2) - 250, 0f, options)
      document.addImage(image, 0f, 0f, 50, 50)
      document.addPage()
      document.fontSize = 50f
      document.setFontColor(
        255,
        0,
        0,
        255
      )
      document.addText("Hello World 2", 10f, 100f)
      document.addPage()
      document.setFontColor(
        0,
        0,
        0,
        255
      )
      document.addText("Hello World 3", 10f, 100f)
      document.addPage()


      document.ellipse(40f, 20f, 10f, 5f)

      document.setFillColor(0, 0, 255)
      document.ellipse(80f, 20f, 10f, 5f, PdfStyle.F)

      document.lineWidth = 1f
      document.setDrawColor(0, 0, 0)
      document.setFillColor(255, 0, 0)
      document.circle(120f, 20f, 5f, PdfStyle.FD)


      document.addPage()
      */

      /*
      // Empty square
      document.rect(20f, 20f, 10f, 10f)


// Filled square
      document.rect(40f, 20f, 10f, 10f, PdfStyle.F)

// Empty red square
      document.setDrawColor(255, 0, 0);
      document.rect(60f, 20f, 10f, 10f)

// Filled square with red borders
      document.setDrawColor(255, 0, 0);
      document.rect(80f, 20f, 10f, 10f, PdfStyle.FD)

// Filled red square
      document.setDrawColor(0, 0, 0)
      document.setFillColor(255, 0, 0);
      document.rect(100f, 20f, 10f, 10f, PdfStyle.F)

// Filled red square with black borders
      document.setDrawColor(0, 0, 0)
      document.setFillColor(255, 0, 0);
      document.rect(120f, 20f, 10f, 10f, PdfStyle.FD)

// Black square with rounded corners
      document.setDrawColor(0, 0, 0)
      document.setFillColor(255, 255, 255);
//      document.roundedRect(140f, 20f, 10f, 10f, 3f, 3f, PdfStyle.FD)


      val x = 100.0f / 2
      val y = 100.0f / 2
      val width = 200.0f / 2
      val height = 100.0f / 2
      val rx = 20.0f
      val ry = 20.0f

      document.roundedRect(x, y, width, height, rx, ry, PdfStyle.FD)

      */
      pdfView.document = document

      /*
      val doc = File(cacheDir, "10840.pdf")

      if (doc.exists()) {
        pdfView.loadFromPath(doc.absolutePath)
      } else {
        val pdf = URL("https://research.nhm.org/pdfs/10840/10840.pdf")
        val os = FileOutputStream(doc)
        val stream = pdf.openConnection().getInputStream()
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
          stream.transferTo(os)
        } else {
          stream.copyTo(os)
        }

        pdfView.loadFromPath(doc.absolutePath)
      }



      runOnUiThread {
        var task: TimerTask? = null
        // pdfView.document = document
        task = object : TimerTask() {
          override fun run() {
            task?.cancel()
            pdfView.loadFromUrl("https://raw.githubusercontent.com/ajrcarey/pdfium-render/master/test/image-test.pdf")
          }
        }
        Timer().schedule(task, 5000L)

      }

      */
    }

    // https://raw.githubusercontent.com/ajrcarey/pdfium-render/master/test/image-test.pdf
    // https://raw.githubusercontent.com/ajrcarey/pdfium-render/master/test/concat-test.pdf
    // large pdf https://research.nhm.org/pdfs/10840/10840.pdf
    // large 100 pages https://files.testfile.org/PDF/100MB-TESTFILE.ORG.pdf
    //pdfView.loadFromUrl("https://files.testfile.org/PDF/100MB-TESTFILE.ORG.pdf")
  }

  fun buildTable(): PdfTable {
    val style = StyleDef.default()
    style.fillColor = Color(41, 128, 185)
    style.fontStyle = FontStyle.Bold
    style.fontSize = 24f
    style.verticalAlign = VerticalAlign.Middle
    style.lineColor = Color.red

    val first = TableCellOrString.Cell(
      TableCell(
        "First Name",
        1,
        1
      )
    )

    val last = TableCellOrString.Cell(
      TableCell(
        "Last Name",
        1,
        1
      )
    )

    val tab = PdfTable()
    tab.styles = StyleDef.default()
    tab.headStyles = style
    tab.styles?.fontStyle = FontStyle.Normal
    tab.styles?.fontSize = 18f
    tab.styles?.fillColor = null
    tab.styles?.horizontalAlign = HorizontalAlign.Center

    val alternateRowStyles = style.clone()
    alternateRowStyles.fillColor = Color.green

    tab.alternateRowStyles = alternateRowStyles



    val foot_style = StyleDef.default()
    foot_style.fillColor = Color(41, 128, 185)
    foot_style.horizontalAlign = HorizontalAlign.Right
    foot_style.fontStyle = FontStyle.Bold
    foot_style.fontSize = 24f

    tab.footStyles = foot_style
    tab.head = arrayOf(arrayOf(first, last))
    tab.foot = tab.head
    tab.position = Pair(0f, 10f)
    tab.body = arrayOf(
      arrayOf(TableCellOrString.StringValue("Osei"), TableCellOrString.StringValue("Fortune")),
      arrayOf(TableCellOrString.StringValue("Liam"), TableCellOrString.StringValue("Nguyen")),
      arrayOf(TableCellOrString.StringValue("Sofia"), TableCellOrString.StringValue("Martinez")),
      arrayOf(TableCellOrString.StringValue("Ethan"), TableCellOrString.StringValue("Wang")),
      arrayOf(TableCellOrString.StringValue("Chloe"), TableCellOrString.StringValue("Okafor")),
      arrayOf(TableCellOrString.StringValue("Noah"), TableCellOrString.StringValue("Ivanov")),
      arrayOf(TableCellOrString.StringValue("Maya"), TableCellOrString.StringValue("Patel")),
      arrayOf(TableCellOrString.StringValue("Lucas"), TableCellOrString.StringValue("Kim")),
      arrayOf(TableCellOrString.StringValue("Zara"), TableCellOrString.StringValue("Haddad")),
      arrayOf(TableCellOrString.StringValue("Emma"), TableCellOrString.StringValue("Singh")),
      arrayOf(TableCellOrString.StringValue("Oliver"), TableCellOrString.StringValue("Garcia")),
      arrayOf(TableCellOrString.StringValue("Ava"), TableCellOrString.StringValue("Kowalski")),
      arrayOf(TableCellOrString.StringValue("Elijah"), TableCellOrString.StringValue("Ahmed")),
      arrayOf(TableCellOrString.StringValue("Isabella"), TableCellOrString.StringValue("Chen")),
      arrayOf(TableCellOrString.StringValue("Benjamin"), TableCellOrString.StringValue("Tanaka")),
      arrayOf(TableCellOrString.StringValue("Amelia"), TableCellOrString.StringValue("Dubois")),
      arrayOf(TableCellOrString.StringValue("James"), TableCellOrString.StringValue("López")),
      arrayOf(TableCellOrString.StringValue("Mila"), TableCellOrString.StringValue("Nakamura")),
      arrayOf(TableCellOrString.StringValue("Henry"), TableCellOrString.StringValue("Jensen")),
      arrayOf(TableCellOrString.StringValue("Grace"), TableCellOrString.StringValue("Kumar")),
      arrayOf(TableCellOrString.StringValue("William"), TableCellOrString.StringValue("Bakshi")),
      arrayOf(TableCellOrString.StringValue("Ella"), TableCellOrString.StringValue("Morales")),
      arrayOf(TableCellOrString.StringValue("Jack"), TableCellOrString.StringValue("Petrov")),
      arrayOf(TableCellOrString.StringValue("Lily"), TableCellOrString.StringValue("Hassan")),
      arrayOf(TableCellOrString.StringValue("Alexander"), TableCellOrString.StringValue("Silva")),
      arrayOf(TableCellOrString.StringValue("Aria"), TableCellOrString.StringValue("Bianchi")),
      arrayOf(TableCellOrString.StringValue("Daniel"), TableCellOrString.StringValue("O'Connor")),
      arrayOf(TableCellOrString.StringValue("Layla"), TableCellOrString.StringValue("Nasser")),
      arrayOf(TableCellOrString.StringValue("Logan"), TableCellOrString.StringValue("Schneider")),
      arrayOf(TableCellOrString.StringValue("Emily"), TableCellOrString.StringValue("Jin")),
      arrayOf(TableCellOrString.StringValue("Jacob"), TableCellOrString.StringValue("Popov")),
      arrayOf(TableCellOrString.StringValue("Hannah"), TableCellOrString.StringValue("Ali")),
      arrayOf(TableCellOrString.StringValue("Michael"), TableCellOrString.StringValue("Fernandez")),
      arrayOf(TableCellOrString.StringValue("Abigail"), TableCellOrString.StringValue("Iqbal")),
      arrayOf(TableCellOrString.StringValue("Sebastian"), TableCellOrString.StringValue("Nowak")),
      arrayOf(TableCellOrString.StringValue("Nora"), TableCellOrString.StringValue("Salim")),
      arrayOf(TableCellOrString.StringValue("Matthew"), TableCellOrString.StringValue("Carvalho")),
      arrayOf(TableCellOrString.StringValue("Leah"), TableCellOrString.StringValue("Georgiou")),
      arrayOf(TableCellOrString.StringValue("Aiden"), TableCellOrString.StringValue("Rossi")),
      arrayOf(TableCellOrString.StringValue("Zoey"), TableCellOrString.StringValue("Yilmaz")),
      arrayOf(TableCellOrString.StringValue("Jackson"), TableCellOrString.StringValue("Mehta")),
      arrayOf(TableCellOrString.StringValue("Riley"), TableCellOrString.StringValue("Santos")),
      arrayOf(TableCellOrString.StringValue("David"), TableCellOrString.StringValue("Müller")),
      arrayOf(TableCellOrString.StringValue("Luna"), TableCellOrString.StringValue("Andersson")),
      arrayOf(TableCellOrString.StringValue("Joseph"), TableCellOrString.StringValue("Kimura")),
      arrayOf(TableCellOrString.StringValue("Hazel"), TableCellOrString.StringValue("Jafari")),
      arrayOf(TableCellOrString.StringValue("Samuel"), TableCellOrString.StringValue("Takahashi")),
      arrayOf(TableCellOrString.StringValue("Ellie"), TableCellOrString.StringValue("Volkov")),
      arrayOf(TableCellOrString.StringValue("Carter"), TableCellOrString.StringValue("Dupont")),
      arrayOf(TableCellOrString.StringValue("Avery"), TableCellOrString.StringValue("Zhang")),
      arrayOf(TableCellOrString.StringValue("Wyatt"), TableCellOrString.StringValue("Costa")),
      arrayOf(TableCellOrString.StringValue("Violet"), TableCellOrString.StringValue("Matsumoto")),
      arrayOf(TableCellOrString.StringValue("Jayden"), TableCellOrString.StringValue("León")),
      arrayOf(TableCellOrString.StringValue("Penelope"), TableCellOrString.StringValue("Adebayo")),
      arrayOf(TableCellOrString.StringValue("Luke"), TableCellOrString.StringValue("van Dijk")),
      arrayOf(TableCellOrString.StringValue("Stella"), TableCellOrString.StringValue("Pereira")),
      arrayOf(TableCellOrString.StringValue("Grayson"), TableCellOrString.StringValue("Aliyev")),
      arrayOf(TableCellOrString.StringValue("Aurora"), TableCellOrString.StringValue("Rana")),
      arrayOf(TableCellOrString.StringValue("Levi"), TableCellOrString.StringValue("Ndlovu")),
      arrayOf(TableCellOrString.StringValue("Naomi"), TableCellOrString.StringValue("Andreev")),
      arrayOf(TableCellOrString.StringValue("Gabriel"), TableCellOrString.StringValue("Berger")),
      arrayOf(TableCellOrString.StringValue("Camila"), TableCellOrString.StringValue("Seo")),
      arrayOf(TableCellOrString.StringValue("Isaac"), TableCellOrString.StringValue("Sato")),
      arrayOf(TableCellOrString.StringValue("Eleanor"), TableCellOrString.StringValue("Toure")),
      arrayOf(TableCellOrString.StringValue("Julian"), TableCellOrString.StringValue("Obrien")),
      arrayOf(TableCellOrString.StringValue("Madeline"), TableCellOrString.StringValue("Koenig")),
      arrayOf(TableCellOrString.StringValue("Anthony"), TableCellOrString.StringValue("Padilla")),
      arrayOf(TableCellOrString.StringValue("Bella"), TableCellOrString.StringValue("Nakamoto")),
      arrayOf(TableCellOrString.StringValue("Andrew"), TableCellOrString.StringValue("Ahmedov")),
      arrayOf(TableCellOrString.StringValue("Sadie"), TableCellOrString.StringValue("Jabari")),
      arrayOf(TableCellOrString.StringValue("Joshua"), TableCellOrString.StringValue("Qureshi")),
      arrayOf(TableCellOrString.StringValue("Skylar"), TableCellOrString.StringValue("Iverson")),
      arrayOf(TableCellOrString.StringValue("Christopher"), TableCellOrString.StringValue("Tan")),
      arrayOf(TableCellOrString.StringValue("Paisley"), TableCellOrString.StringValue("Yamamoto")),
      arrayOf(TableCellOrString.StringValue("Lincoln"), TableCellOrString.StringValue("Duarte")),
      arrayOf(TableCellOrString.StringValue("Savannah"), TableCellOrString.StringValue("Berg")),
      arrayOf(TableCellOrString.StringValue("Nathan"), TableCellOrString.StringValue("Gomez")),
      arrayOf(TableCellOrString.StringValue("Brooklyn"), TableCellOrString.StringValue("Rahman")),
      arrayOf(TableCellOrString.StringValue("Dylan"), TableCellOrString.StringValue("Kapoor")),
      arrayOf(TableCellOrString.StringValue("Claire"), TableCellOrString.StringValue("Samaras")),
      arrayOf(TableCellOrString.StringValue("Ezra"), TableCellOrString.StringValue("Habib")),
      arrayOf(TableCellOrString.StringValue("Lucy"), TableCellOrString.StringValue("Wojcik")),
      arrayOf(TableCellOrString.StringValue("Thomas"), TableCellOrString.StringValue("Arslan")),
      arrayOf(TableCellOrString.StringValue("Aaliyah"), TableCellOrString.StringValue("Bukhari")),
      arrayOf(TableCellOrString.StringValue("Aaron"), TableCellOrString.StringValue("Hwang")),
      arrayOf(TableCellOrString.StringValue("Isla"), TableCellOrString.StringValue("Choudhury")),
      arrayOf(TableCellOrString.StringValue("Ryan"), TableCellOrString.StringValue("Markovic")),
      arrayOf(TableCellOrString.StringValue("Caroline"), TableCellOrString.StringValue("Gonzalez")),
      arrayOf(TableCellOrString.StringValue("Asher"), TableCellOrString.StringValue("Demir")),
      arrayOf(TableCellOrString.StringValue("Ivy"), TableCellOrString.StringValue("Stefanov")),
      arrayOf(TableCellOrString.StringValue("Nolan"), TableCellOrString.StringValue("Ng")),
      arrayOf(TableCellOrString.StringValue("Elena"), TableCellOrString.StringValue("Rahimi")),
      arrayOf(TableCellOrString.StringValue("Adrian"), TableCellOrString.StringValue("Saleh")),
      arrayOf(TableCellOrString.StringValue("Piper"), TableCellOrString.StringValue("Sharma")),
      arrayOf(TableCellOrString.StringValue("Eli"), TableCellOrString.StringValue("Svensson")),
      arrayOf(TableCellOrString.StringValue("Nova"), TableCellOrString.StringValue("Velasquez")),
      arrayOf(TableCellOrString.StringValue("Jonathan"), TableCellOrString.StringValue("Usman")),
      arrayOf(TableCellOrString.StringValue("Melody"), TableCellOrString.StringValue("Hashimoto")),
      arrayOf(TableCellOrString.StringValue("Jason"), TableCellOrString.StringValue("Khan")),
      arrayOf(TableCellOrString.StringValue("Alice"), TableCellOrString.StringValue("Roshan")),
      arrayOf(TableCellOrString.StringValue("Leo"), TableCellOrString.StringValue("Deng")),
      arrayOf(TableCellOrString.StringValue("Hailey"), TableCellOrString.StringValue("Abebe"))
    )

    return tab
  }
}
