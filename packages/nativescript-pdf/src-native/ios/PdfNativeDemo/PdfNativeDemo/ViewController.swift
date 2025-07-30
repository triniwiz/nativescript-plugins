//
//  ViewController.swift
//  PdfNativeDemo
//
//  Created by Osei Fortune on 25/06/2025.
//

import UIKit
import PdfNative

class ViewController: UIViewController {
  var pdf: NSCPdfView?
    override func viewDidLoad() {
      super.viewDidLoad()
    //                                                                               let image = NSData(contentsOf: URL(string: "https://static.wikia.nocookie.net/xmenmovies/images/9/94/Deadpool_Textless.jpg/")!)
//
      let document = NSCPdfDocument()
      let output = document.table(buildTable())
      //buildDoc(document: document)
      

      
    
      
      pdf = NSCPdfView(frame: view.bounds)

      
      
      if let pdf = pdf {
        self.view.addSubview(pdf)
      }
      
      
      pdf?.document = document
      

      
      // https://raw.githubusercontent.com/ajrcarey/pdfium-render/master/test/image-test.pdf
      // https://raw.githubusercontent.com/ajrcarey/pdfium-render/master/test/concat-test.pdf
      // large pdf https://research.nhm.org/pdfs/10840/10840.pdf
      // large 100 pages https://files.testfile.org/PDF/100MB-TESTFILE.ORG.pdf
      
//      pdf?.loadFromUrl( "https://files.testfile.org/PDF/100MB-TESTFILE.ORG.pdf", nil)
      
//      if let test = Bundle.main.url(forResource: "100MB-TESTFILE.ORG", withExtension: "pdf") {
//       // pdf?.loadFromPath(test.absoluteString, nil)
//      }else {
//        
//      }
      

  

    }
  

  
  func buildTable() -> NSCPdfTable{

        let style = NSCPdfStyleDef.default()
        style.fontStyle = NSCPdfFontStyle.bold
        style.fontSize = 20
        style.fillColor = NSCPdfColor(51, 51, 51)
  
        

        let first = NSCPdfTableCellOrString.Cell(
          NSCPdfTableCell(
            "First Name",
            1,
            1
          )
        )

        let last = NSCPdfTableCellOrString.Cell(
          NSCPdfTableCell(
            "Last Name",
            1,
            1
          )
        )
    
    
        let bodyStyle = style.clone()

    bodyStyle.fontStyle = NSCPdfFontStyle.normal
    bodyStyle.fontSize = 18
    bodyStyle.fillColor = nil

//    bodyStyle.horizontalAlign = NSCPdfHorizontalAlign.center
    

        let tab = NSCPdfTable()
        tab.theme = .grid
    tab.margin = NSCPdfMargin(uniform: 10)
        //tab.styles = style
        tab.styles = bodyStyle
        tab.headStyles = style
        tab.head = [[first, last]]
       // tab.foot = tab.head
        tab.body = []
    
    
        tab.body = [
          [NSCPdfTableCellOrString.String("Osei"), NSCPdfTableCellOrString.String("Fortune")],
          [NSCPdfTableCellOrString.String("Liam"), NSCPdfTableCellOrString.String("Nguyen")],
          [NSCPdfTableCellOrString.String("Sofia"), NSCPdfTableCellOrString.String("Martinez")],
          [NSCPdfTableCellOrString.String("Ethan"), NSCPdfTableCellOrString.String("Wang")],
          [NSCPdfTableCellOrString.String("Chloe"), NSCPdfTableCellOrString.String("Okafor")],
          [NSCPdfTableCellOrString.String("Noah"), NSCPdfTableCellOrString.String("Ivanov")],
          [NSCPdfTableCellOrString.String("Maya"), NSCPdfTableCellOrString.String("Patel")],
          [NSCPdfTableCellOrString.String("Lucas"), NSCPdfTableCellOrString.String("Kim")],
          [NSCPdfTableCellOrString.String("Zara"), NSCPdfTableCellOrString.String("Haddad")],
          [NSCPdfTableCellOrString.String("Emma"), NSCPdfTableCellOrString.String("Singh")],
          [NSCPdfTableCellOrString.String("Oliver"), NSCPdfTableCellOrString.String("Garcia")],
          [NSCPdfTableCellOrString.String("Ava"), NSCPdfTableCellOrString.String("Kowalski")],
          [NSCPdfTableCellOrString.String("Elijah"), NSCPdfTableCellOrString.String("Ahmed")],
          [NSCPdfTableCellOrString.String("Isabella"), NSCPdfTableCellOrString.String("Chen")],
          [NSCPdfTableCellOrString.String("Benjamin"), NSCPdfTableCellOrString.String("Tanaka")],
          [NSCPdfTableCellOrString.String("Amelia"), NSCPdfTableCellOrString.String("Dubois")],
          [NSCPdfTableCellOrString.String("James"), NSCPdfTableCellOrString.String("López")],
          [NSCPdfTableCellOrString.String("Mila"), NSCPdfTableCellOrString.String("Nakamura")],
          [NSCPdfTableCellOrString.String("Henry"), NSCPdfTableCellOrString.String("Jensen")],
          [NSCPdfTableCellOrString.String("Grace"), NSCPdfTableCellOrString.String("Kumar")],
          [NSCPdfTableCellOrString.String("William"), NSCPdfTableCellOrString.String("Bakshi")],
          [NSCPdfTableCellOrString.String("Ella"), NSCPdfTableCellOrString.String("Morales")],
          [NSCPdfTableCellOrString.String("Jack"), NSCPdfTableCellOrString.String("Petrov")],
          [NSCPdfTableCellOrString.String("Lily"), NSCPdfTableCellOrString.String("Hassan")],
          [NSCPdfTableCellOrString.String("Alexander"), NSCPdfTableCellOrString.String("Silva")],
          [NSCPdfTableCellOrString.String("Aria"), NSCPdfTableCellOrString.String("Bianchi")],
          [NSCPdfTableCellOrString.String("Daniel"), NSCPdfTableCellOrString.String("O'Connor")],
          [NSCPdfTableCellOrString.String("Layla"), NSCPdfTableCellOrString.String("Nasser")],
          [NSCPdfTableCellOrString.String("Logan"), NSCPdfTableCellOrString.String("Schneider")],
          [NSCPdfTableCellOrString.String("Emily"), NSCPdfTableCellOrString.String("Jin")],
          [NSCPdfTableCellOrString.String("Jacob"), NSCPdfTableCellOrString.String("Popov")],
          [NSCPdfTableCellOrString.String("Hannah"), NSCPdfTableCellOrString.String("Ali")],
          [NSCPdfTableCellOrString.String("Michael"), NSCPdfTableCellOrString.String("Fernandez")],
          [NSCPdfTableCellOrString.String("Abigail"), NSCPdfTableCellOrString.String("Iqbal")],
          [NSCPdfTableCellOrString.String("Sebastian"), NSCPdfTableCellOrString.String("Nowak")],
          [NSCPdfTableCellOrString.String("Nora"), NSCPdfTableCellOrString.String("Salim")],
          [NSCPdfTableCellOrString.String("Matthew"), NSCPdfTableCellOrString.String("Carvalho")],
          [NSCPdfTableCellOrString.String("Leah"), NSCPdfTableCellOrString.String("Georgiou")],
          [NSCPdfTableCellOrString.String("Aiden"), NSCPdfTableCellOrString.String("Rossi")],
          [NSCPdfTableCellOrString.String("Zoey"), NSCPdfTableCellOrString.String("Yilmaz")],
          [NSCPdfTableCellOrString.String("Jackson"), NSCPdfTableCellOrString.String("Mehta")],
          [NSCPdfTableCellOrString.String("Riley"), NSCPdfTableCellOrString.String("Santos")],
          [NSCPdfTableCellOrString.String("David"), NSCPdfTableCellOrString.String("Müller")],
          [NSCPdfTableCellOrString.String("Luna"), NSCPdfTableCellOrString.String("Andersson")],
          [NSCPdfTableCellOrString.String("Joseph"), NSCPdfTableCellOrString.String("Kimura")],
          [NSCPdfTableCellOrString.String("Hazel"), NSCPdfTableCellOrString.String("Jafari")],
          [NSCPdfTableCellOrString.String("Samuel"), NSCPdfTableCellOrString.String("Takahashi")],
          [NSCPdfTableCellOrString.String("Ellie"), NSCPdfTableCellOrString.String("Volkov")],
          [NSCPdfTableCellOrString.String("Carter"), NSCPdfTableCellOrString.String("Dupont")],
          [NSCPdfTableCellOrString.String("Avery"), NSCPdfTableCellOrString.String("Zhang")],
          [NSCPdfTableCellOrString.String("Wyatt"), NSCPdfTableCellOrString.String("Costa")],
          [NSCPdfTableCellOrString.String("Violet"), NSCPdfTableCellOrString.String("Matsumoto")],
          [NSCPdfTableCellOrString.String("Jayden"), NSCPdfTableCellOrString.String("León")],
          [NSCPdfTableCellOrString.String("Penelope"), NSCPdfTableCellOrString.String("Adebayo")],
          [NSCPdfTableCellOrString.String("Luke"), NSCPdfTableCellOrString.String("van Dijk")],
          [NSCPdfTableCellOrString.String("Stella"), NSCPdfTableCellOrString.String("Pereira")],
          [NSCPdfTableCellOrString.String("Grayson"), NSCPdfTableCellOrString.String("Aliyev")],
          [NSCPdfTableCellOrString.String("Aurora"), NSCPdfTableCellOrString.String("Rana")],
          [NSCPdfTableCellOrString.String("Levi"), NSCPdfTableCellOrString.String("Ndlovu")],
          [NSCPdfTableCellOrString.String("Naomi"), NSCPdfTableCellOrString.String("Andreev")],
          [NSCPdfTableCellOrString.String("Gabriel"), NSCPdfTableCellOrString.String("Berger")],
          [NSCPdfTableCellOrString.String("Camila"), NSCPdfTableCellOrString.String("Seo")],
          [NSCPdfTableCellOrString.String("Isaac"), NSCPdfTableCellOrString.String("Sato")],
          [NSCPdfTableCellOrString.String("Eleanor"), NSCPdfTableCellOrString.String("Toure")],
          [NSCPdfTableCellOrString.String("Julian"), NSCPdfTableCellOrString.String("Obrien")],
          [NSCPdfTableCellOrString.String("Madeline"), NSCPdfTableCellOrString.String("Koenig")],
          [NSCPdfTableCellOrString.String("Anthony"), NSCPdfTableCellOrString.String("Padilla")],
          [NSCPdfTableCellOrString.String("Bella"), NSCPdfTableCellOrString.String("Nakamoto")],
          [NSCPdfTableCellOrString.String("Andrew"), NSCPdfTableCellOrString.String("Ahmedov")],
          [NSCPdfTableCellOrString.String("Sadie"), NSCPdfTableCellOrString.String("Jabari")],
          [NSCPdfTableCellOrString.String("Joshua"), NSCPdfTableCellOrString.String("Qureshi")],
          [NSCPdfTableCellOrString.String("Skylar"), NSCPdfTableCellOrString.String("Iverson")],
          [NSCPdfTableCellOrString.String("Christopher"), NSCPdfTableCellOrString.String("Tan")],
          [NSCPdfTableCellOrString.String("Paisley"), NSCPdfTableCellOrString.String("Yamamoto")],
          [NSCPdfTableCellOrString.String("Lincoln"), NSCPdfTableCellOrString.String("Duarte")],
          [NSCPdfTableCellOrString.String("Savannah"), NSCPdfTableCellOrString.String("Berg")],
          [NSCPdfTableCellOrString.String("Nathan"), NSCPdfTableCellOrString.String("Gomez")],
          [NSCPdfTableCellOrString.String("Brooklyn"), NSCPdfTableCellOrString.String("Rahman")],
          [NSCPdfTableCellOrString.String("Dylan"), NSCPdfTableCellOrString.String("Kapoor")],
          [NSCPdfTableCellOrString.String("Claire"), NSCPdfTableCellOrString.String("Samaras")],
          [NSCPdfTableCellOrString.String("Ezra"), NSCPdfTableCellOrString.String("Habib")],
          [NSCPdfTableCellOrString.String("Lucy"), NSCPdfTableCellOrString.String("Wojcik")],
          [NSCPdfTableCellOrString.String("Thomas"), NSCPdfTableCellOrString.String("Arslan")],
          [NSCPdfTableCellOrString.String("Aaliyah"), NSCPdfTableCellOrString.String("Bukhari")],
          [NSCPdfTableCellOrString.String("Aaron"), NSCPdfTableCellOrString.String("Hwang")],
          [NSCPdfTableCellOrString.String("Isla"), NSCPdfTableCellOrString.String("Choudhury")],
          [NSCPdfTableCellOrString.String("Ryan"), NSCPdfTableCellOrString.String("Markovic")],
          [NSCPdfTableCellOrString.String("Caroline"), NSCPdfTableCellOrString.String("Gonzalez")],
          [NSCPdfTableCellOrString.String("Asher"), NSCPdfTableCellOrString.String("Demir")],
          [NSCPdfTableCellOrString.String("Ivy"), NSCPdfTableCellOrString.String("Stefanov")],
          [NSCPdfTableCellOrString.String("Nolan"), NSCPdfTableCellOrString.String("Ng")],
          [NSCPdfTableCellOrString.String("Elena"), NSCPdfTableCellOrString.String("Rahimi")],
          [NSCPdfTableCellOrString.String("Adrian"), NSCPdfTableCellOrString.String("Saleh")],
          [NSCPdfTableCellOrString.String("Piper"), NSCPdfTableCellOrString.String("Sharma")],
          [NSCPdfTableCellOrString.String("Eli"), NSCPdfTableCellOrString.String("Svensson")],
          [NSCPdfTableCellOrString.String("Nova"), NSCPdfTableCellOrString.String("Velasquez")],
          [NSCPdfTableCellOrString.String("Jonathan"), NSCPdfTableCellOrString.String("Usman")],
          [NSCPdfTableCellOrString.String("Melody"), NSCPdfTableCellOrString.String("Hashimoto")],
          [NSCPdfTableCellOrString.String("Jason"), NSCPdfTableCellOrString.String("Khan")],
          [NSCPdfTableCellOrString.String("Alice"), NSCPdfTableCellOrString.String("Roshan")],
          [NSCPdfTableCellOrString.String("Leo"), NSCPdfTableCellOrString.String("Deng")],
          [NSCPdfTableCellOrString.String("Hailey"), NSCPdfTableCellOrString.String("Abebe")]
        ]
    

        return tab
      
  }
  
  func buildDoc(document: NSCPdfDocument){
    
    document.fontSize = 20
    document.setFontColor(100, 100, 100)
    let options = NSCPdfTextOptions()
    options.baseline = NSCPdfTextBaseline.top
    options.align = NSCPdfTextAlignment.center
    document.addText("Hello World 1", (document.width / 2), 20, options)
    
    document.addText("Hello World 2", 120, 50)
    
    do {
      let image = UIImage(data: try Data(contentsOf: URL(string: "https://static.wikia.nocookie.net/xmenmovies/images/9/94/Deadpool_Textless.jpg")!))
      document.addImage(image!, 0, 100, 100, 100)
    }catch {}
         document.addPage()
         document.fontSize = 50
         document.setFontColor(
           255,
           0,
           0
         )
         document.addText("Hello World 2", 10, 100)
         document.addPage()
         document.setFontColor(
           0,
           0,
           0
         )
         document.addText("Hello World 3", 10, 100)
         document.addPage()


         document.ellipse(40, 20, 10, 5)

         document.setFillColor(0, 0, 255)
         document.ellipse(80, 20, 10, 5, NSCPdfStyle.f)

         document.lineWidth = 1
         document.setDrawColor(0, 0, 0)
         document.setFillColor(255, 0, 0)
         document.circle(120, 20, 5, NSCPdfStyle.fd)


         document.addPage()
    
    
    // Empty square
         document.rect(20, 20, 10, 10)


   // Filled square
         document.rect(40, 20, 10, 10, NSCPdfStyle.f)

   // Empty red square
         document.setDrawColor(255, 0, 0)
         document.rect(60, 20, 10, 10)

   // Filled square with red borders
         document.setDrawColor(255, 0, 0);
         document.rect(80, 20, 10, 10, NSCPdfStyle.fd)

   // Filled red square
         document.setDrawColor(0, 0, 0)
         document.setFillColor(255, 0, 0)
         document.rect(100, 20, 10, 10, NSCPdfStyle.f)

   // Filled red square with black borders
         document.setDrawColor(0, 0, 0)
         document.setFillColor(255, 0, 0);
         document.rect(120, 20, 10, 10, NSCPdfStyle.fd)

   // Black square with rounded corners
         document.setDrawColor(0, 0, 0)
         document.setFillColor(255, 255, 255)
   //      document.roundedRect(140f, 20f, 10f, 10f, 3f, 3f, PdfStyle.FD)


    let x: Float = 100.0 / 2
    let y: Float = 100.0 / 2
    let width: Float = 200.0 / 2
    let height: Float = 100.0 / 2
    let rx: Float = 20.0
    let ry: Float = 20.0

       //  document.roundedRect(x, y, width, height, rx, ry, NSCPdfStyle.fd)
    
    
  }


}

