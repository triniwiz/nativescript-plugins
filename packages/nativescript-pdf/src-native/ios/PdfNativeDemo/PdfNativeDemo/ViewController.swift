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
  var image: NSCPdfImage?
  override func viewDidLoad() {
    super.viewDidLoad()
    //                                                                               let image = NSData(contentsOf: URL(string: "https://static.wikia.nocookie.net/xmenmovies/images/9/94/Deadpool_Textless.jpg/")!)
    
    
    
    
    DispatchQueue.global().async { [self] in
      
      let jpg = URL(string: "https://static.wikia.nocookie.net/xmenmovies/images/9/94/Deadpool_Textless.jpg")!
      let data = NSData(contentsOf: jpg)
      
      let uiimage = UIImage(data: data! as Data)
      NSCPdfImage.fromImageAsync(uiimage!) { image in
        self.image = image
        DispatchQueue.main.async {
          self.loadPDF()
        }
      }
    }
   

  }
  
  func loadPDF(){
    DispatchQueue.global().async { [self] in
      let document = NSCPdfDocument()
      let tmp = NSTemporaryDirectory()
      
      
      let dp = tmp + "/dp.pdf"
      

      

      if(self.image == nil){
        if (FileManager.default.fileExists(atPath: dp)) {
          let data = NSData(contentsOf: URL(string: dp)!)
         image = NSCPdfImage.fromEncodedData(data!)
        } else {
          let jpg = URL(string: "https://static.wikia.nocookie.net/xmenmovies/images/9/94/Deadpool_Textless.jpg")!
          let path = URL(string: dp)!
          let data = NSData(contentsOf: jpg)
          data?.write(to: path, atomically: true)
          image = NSCPdfImage.fromEncodedData(data!)
          
        }
      }
      
      
      
      let output = document.table(buildTable(document: document))
      //buildDoc(document: document)
      
      
      DispatchQueue.main.async {
        pdf?.document = document
      }
    }
    
    pdf = NSCPdfView(frame: view.bounds)
    
    
    
    
    if let pdf = pdf {
      self.view.addSubview(pdf)
    }
    
    

    ////
    //      let tmp = NSTemporaryDirectory() + "/test.pdf"
    //
    //      document.saveSync(to: tmp)
    
    // pdf?.loadFromPath(tmp, nil)
    
    //print(tmp)
    
    
    // https://raw.githubusercontent.com/ajrcarey/pdfium-render/master/test/image-test.pdf
    // https://raw.githubusercontent.com/ajrcarey/pdfium-render/master/test/concat-test.pdf
    // large pdf https://research.nhm.org/pdfs/10840/10840.pdf
    // large 100 pages https://files.testfile.org/PDF/100MB-TESTFILE.ORG.pdf
    
    //      pdf?.loadFromUrl( "https://files.testfile.org/PDF/100MB-TESTFILE.ORG.pdf", nil)
    
    //      if let test = Bundle.main.url(forResource: "100MB-TESTFILE.ORG", withExtension: "pdf") {
    //       pdf?.loadFromPath(test.absoluteString, nil)
    //      }else {
    //
    //      }
    
    
    //            if let test = Bundle.main.url(forResource: "document", withExtension: "pdf") {
    //              pdf?.loadFromPath(test.absoluteString, nil)
    //            }else {
    //
    //            }
    //
  }
  
  
  
  func buildTable(document: NSCPdfDocument) -> NSCPdfTable{
    
    let style = NSCPdfStyleDef.default()
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
    
    
    let gn = NSCPdfTableCellOrString.Cell(
      NSCPdfTableCell(
        "Gender",
        1,
        1
      )
    )
    
    
    let bodyStyle = NSCPdfStyleDef.default()
    
    //    bodyStyle.horizontalAlign = NSCPdfHorizontalAlign.center
    
    document.setDrawColor(255, 255, 255)
    document.rect(0, 0, 10, 10, .f)
    
    let tab = NSCPdfTable()
    
    tab.willDrawCell = { hook in
      if (hook.section == .body && hook.columnIndex == 2){
        hook.content = ""
        return true
      }
      if (hook.section == .foot){
        hook.content = ""
        return false
      }
      return true
    }
    
    
    tab.didDrawCell = { hook in
      if (hook.section == .body && hook.columnIndex == 2){
        if let image = self.image {
          document.addImage(pdf: image, hook.x + hook.width / 2, hook.y + hook.height / 4  , width: hook.height / 2, height: hook.height / 2)
        }
      }
    }
    
    tab.theme = .grid
    tab.position = [0, document.height / 2]
    //tab.styles = style
    tab.styles = bodyStyle
    tab.headStyles = style
    tab.head = [[first, last, gn]]
    // tab.foot = tab.head
    //        tab.body = [
    //          [NSCPdfTableCellOrString(string: "" ), NSCPdfTableCellOrString.Cell(NSCPdfTableCell("", 1, 1) )],
    //        ]
    
    
    
    tab.body = [
      [NSCPdfTableCellOrString(string: "Osei"), NSCPdfTableCellOrString(string: "Fortune"), NSCPdfTableCellOrString(string: "√")],
                [NSCPdfTableCellOrString(string: "Liam"), NSCPdfTableCellOrString(string: "Nguyen")],
                [NSCPdfTableCellOrString(string: "Sofia"), NSCPdfTableCellOrString(string: "Martinez")],
                [NSCPdfTableCellOrString(string: "Ethan"), NSCPdfTableCellOrString(string: "Wang")],
                [NSCPdfTableCellOrString(string: "Chloe"), NSCPdfTableCellOrString(string: "Okafor")],
                [NSCPdfTableCellOrString(string: "Noah"), NSCPdfTableCellOrString(string: "Ivanov")],
                [NSCPdfTableCellOrString(string: "Maya"), NSCPdfTableCellOrString(string: "Patel")],
                [NSCPdfTableCellOrString(string: "Lucas"), NSCPdfTableCellOrString(string: "Kim")],
                [NSCPdfTableCellOrString(string: "Zara"), NSCPdfTableCellOrString(string: "Haddad")],
                [NSCPdfTableCellOrString(string: "Emma"), NSCPdfTableCellOrString(string: "Singh")],
                [NSCPdfTableCellOrString(string: "Oliver"), NSCPdfTableCellOrString(string: "Garcia")],
      //          [NSCPdfTableCellOrString(string: "Ava"), NSCPdfTableCellOrString(string: "Kowalski")],
      //          [NSCPdfTableCellOrString(string: "Elijah"), NSCPdfTableCellOrString(string: "Ahmed")],
      //          [NSCPdfTableCellOrString(string: "Isabella"), NSCPdfTableCellOrString(string: "Chen")],
      //          [NSCPdfTableCellOrString(string: "Benjamin"), NSCPdfTableCellOrString(string: "Tanaka")],
      //          [NSCPdfTableCellOrString(string: "Amelia"), NSCPdfTableCellOrString(string: "Dubois")],
      //          [NSCPdfTableCellOrString(string: "James"), NSCPdfTableCellOrString(string: "López")],
      //          [NSCPdfTableCellOrString(string: "Mila"), NSCPdfTableCellOrString(string: "Nakamura")],
      //          [NSCPdfTableCellOrString(string: "Henry"), NSCPdfTableCellOrString(string: "Jensen")],
      //          [NSCPdfTableCellOrString(string: "Grace"), NSCPdfTableCellOrString(string: "Kumar")],
      //          [NSCPdfTableCellOrString(string: "William"), NSCPdfTableCellOrString(string: "Bakshi")],
      //          [NSCPdfTableCellOrString(string: "Ella"), NSCPdfTableCellOrString(string: "Morales")],
      //          [NSCPdfTableCellOrString(string: "Jack"), NSCPdfTableCellOrString(string: "Petrov")],
      //          [NSCPdfTableCellOrString(string: "Lily"), NSCPdfTableCellOrString(string: "Hassan")],
      //          [NSCPdfTableCellOrString(string: "Alexander"), NSCPdfTableCellOrString(string: "Silva")],
      //          [NSCPdfTableCellOrString(string: "Aria"), NSCPdfTableCellOrString(string: "Bianchi")],
      //          [NSCPdfTableCellOrString(string: "Daniel"), NSCPdfTableCellOrString(string: "O'Connor")],
      //          [NSCPdfTableCellOrString(string: "Layla"), NSCPdfTableCellOrString(string: "Nasser")],
      //          [NSCPdfTableCellOrString(string: "Logan"), NSCPdfTableCellOrString(string: "Schneider")],
      //          [NSCPdfTableCellOrString(string: "Emily"), NSCPdfTableCellOrString(string: "Jin")],
      //          [NSCPdfTableCellOrString(string: "Jacob"), NSCPdfTableCellOrString(string: "Popov")],
      //          [NSCPdfTableCellOrString(string: "Hannah"), NSCPdfTableCellOrString(string: "Ali")],
      //          [NSCPdfTableCellOrString(string: "Michael"), NSCPdfTableCellOrString(string: "Fernandez")],
      //          [NSCPdfTableCellOrString(string: "Abigail"), NSCPdfTableCellOrString(string: "Iqbal")],
      //          [NSCPdfTableCellOrString(string: "Sebastian"), NSCPdfTableCellOrString(string: "Nowak")],
      //          [NSCPdfTableCellOrString(string: "Nora"), NSCPdfTableCellOrString(string: "Salim")],
      //          [NSCPdfTableCellOrString(string: "Matthew"), NSCPdfTableCellOrString(string: "Carvalho")],
      //          [NSCPdfTableCellOrString(string: "Leah"), NSCPdfTableCellOrString(string: "Georgiou")],
      //          [NSCPdfTableCellOrString(string: "Aiden"), NSCPdfTableCellOrString(string: "Rossi")],
      //          [NSCPdfTableCellOrString(string: "Zoey"), NSCPdfTableCellOrString(string: "Yilmaz")],
      //          [NSCPdfTableCellOrString(string: "Jackson"), NSCPdfTableCellOrString(string: "Mehta")],
      //          [NSCPdfTableCellOrString(string: "Riley"), NSCPdfTableCellOrString(string: "Santos")],
      //          [NSCPdfTableCellOrString(string: "David"), NSCPdfTableCellOrString(string: "Müller")],
      //          [NSCPdfTableCellOrString(string: "Luna"), NSCPdfTableCellOrString(string: "Andersson")],
      //          [NSCPdfTableCellOrString(string: "Joseph"), NSCPdfTableCellOrString(string: "Kimura")],
      //          [NSCPdfTableCellOrString(string: "Hazel"), NSCPdfTableCellOrString(string: "Jafari")],
      //          [NSCPdfTableCellOrString(string: "Samuel"), NSCPdfTableCellOrString(string: "Takahashi")],
      //          [NSCPdfTableCellOrString(string: "Ellie"), NSCPdfTableCellOrString(string: "Volkov")],
      //          [NSCPdfTableCellOrString(string: "Carter"), NSCPdfTableCellOrString(string: "Dupont")],
      //          [NSCPdfTableCellOrString(string: "Avery"), NSCPdfTableCellOrString(string: "Zhang")],
      //          [NSCPdfTableCellOrString(string: "Wyatt"), NSCPdfTableCellOrString(string: "Costa")],
      //          [NSCPdfTableCellOrString(string: "Violet"), NSCPdfTableCellOrString(string: "Matsumoto")],
      //          [NSCPdfTableCellOrString(string: "Jayden"), NSCPdfTableCellOrString(string: "León")],
      //          [NSCPdfTableCellOrString(string: "Penelope"), NSCPdfTableCellOrString(string: "Adebayo")],
      //          [NSCPdfTableCellOrString(string: "Luke"), NSCPdfTableCellOrString(string: "van Dijk")],
      //          [NSCPdfTableCellOrString(string: "Stella"), NSCPdfTableCellOrString(string: "Pereira")],
      //          [NSCPdfTableCellOrString(string: "Grayson"), NSCPdfTableCellOrString(string: "Aliyev")],
      //          [NSCPdfTableCellOrString(string: "Aurora"), NSCPdfTableCellOrString(string: "Rana")],
      //          [NSCPdfTableCellOrString(string: "Levi"), NSCPdfTableCellOrString(string: "Ndlovu")],
      //          [NSCPdfTableCellOrString(string: "Naomi"), NSCPdfTableCellOrString(string: "Andreev")],
      //          [NSCPdfTableCellOrString(string: "Gabriel"), NSCPdfTableCellOrString(string: "Berger")],
      //          [NSCPdfTableCellOrString(string: "Camila"), NSCPdfTableCellOrString(string: "Seo")],
      //          [NSCPdfTableCellOrString(string: "Isaac"), NSCPdfTableCellOrString(string: "Sato")],
      //          [NSCPdfTableCellOrString(string: "Eleanor"), NSCPdfTableCellOrString(string: "Toure")],
      //          [NSCPdfTableCellOrString(string: "Julian"), NSCPdfTableCellOrString(string: "Obrien")],
      //          [NSCPdfTableCellOrString(string: "Madeline"), NSCPdfTableCellOrString(string: "Koenig")],
      //          [NSCPdfTableCellOrString(string: "Anthony"), NSCPdfTableCellOrString(string: "Padilla")],
      //          [NSCPdfTableCellOrString(string: "Bella"), NSCPdfTableCellOrString(string: "Nakamoto")],
      //          [NSCPdfTableCellOrString(string: "Andrew"), NSCPdfTableCellOrString(string: "Ahmedov")],
      //          [NSCPdfTableCellOrString(string: "Sadie"), NSCPdfTableCellOrString(string: "Jabari")],
      //          [NSCPdfTableCellOrString(string: "Joshua"), NSCPdfTableCellOrString(string: "Qureshi")],
      //          [NSCPdfTableCellOrString(string: "Skylar"), NSCPdfTableCellOrString(string: "Iverson")],
      //          [NSCPdfTableCellOrString(string: "Christopher"), NSCPdfTableCellOrString(string: "Tan")],
      //          [NSCPdfTableCellOrString(string: "Paisley"), NSCPdfTableCellOrString(string: "Yamamoto")],
      //          [NSCPdfTableCellOrString(string: "Lincoln"), NSCPdfTableCellOrString(string: "Duarte")],
      //          [NSCPdfTableCellOrString(string: "Savannah"), NSCPdfTableCellOrString(string: "Berg")],
      //          [NSCPdfTableCellOrString(string: "Nathan"), NSCPdfTableCellOrString(string: "Gomez")],
      //          [NSCPdfTableCellOrString(string: "Brooklyn"), NSCPdfTableCellOrString(string: "Rahman")],
      //          [NSCPdfTableCellOrString(string: "Dylan"), NSCPdfTableCellOrString(string: "Kapoor")],
      //          [NSCPdfTableCellOrString(string: "Claire"), NSCPdfTableCellOrString(string: "Samaras")],
      //          [NSCPdfTableCellOrString(string: "Ezra"), NSCPdfTableCellOrString(string: "Habib")],
      //          [NSCPdfTableCellOrString(string: "Lucy"), NSCPdfTableCellOrString(string: "Wojcik")],
      //          [NSCPdfTableCellOrString(string: "Thomas"), NSCPdfTableCellOrString(string: "Arslan")],
      //          [NSCPdfTableCellOrString(string: "Aaliyah"), NSCPdfTableCellOrString(string: "Bukhari")],
      //          [NSCPdfTableCellOrString(string: "Aaron"), NSCPdfTableCellOrString(string: "Hwang")],
      //          [NSCPdfTableCellOrString(string: "Isla"), NSCPdfTableCellOrString(string: "Choudhury")],
      //          [NSCPdfTableCellOrString(string: "Ryan"), NSCPdfTableCellOrString(string: "Markovic")],
      //          [NSCPdfTableCellOrString(string: "Caroline"), NSCPdfTableCellOrString(string: "Gonzalez")],
      //          [NSCPdfTableCellOrString(string: "Asher"), NSCPdfTableCellOrString(string: "Demir")],
      //          [NSCPdfTableCellOrString(string: "Ivy"), NSCPdfTableCellOrString(string: "Stefanov")],
      //          [NSCPdfTableCellOrString(string: "Nolan"), NSCPdfTableCellOrString(string: "Ng")],
      //          [NSCPdfTableCellOrString(string: "Elena"), NSCPdfTableCellOrString(string: "Rahimi")],
      //          [NSCPdfTableCellOrString(string: "Adrian"), NSCPdfTableCellOrString(string: "Saleh")],
      //          [NSCPdfTableCellOrString(string: "Piper"), NSCPdfTableCellOrString(string: "Sharma")],
      //          [NSCPdfTableCellOrString(string: "Eli"), NSCPdfTableCellOrString(string: "Svensson")],
      //          [NSCPdfTableCellOrString(string: "Nova"), NSCPdfTableCellOrString(string: "Velasquez")],
      //          [NSCPdfTableCellOrString(string: "Jonathan"), NSCPdfTableCellOrString(string: "Usman")],
      //          [NSCPdfTableCellOrString(string: "Melody"), NSCPdfTableCellOrString(string: "Hashimoto")],
      //          [NSCPdfTableCellOrString(string: "Jason"), NSCPdfTableCellOrString(string: "Khan")],
      //          [NSCPdfTableCellOrString(string: "Alice"), NSCPdfTableCellOrString(string: "Roshan")],
      //          [NSCPdfTableCellOrString(string: "Leo"), NSCPdfTableCellOrString(string: "Deng")],
      //          [NSCPdfTableCellOrString(string: "Hailey"), NSCPdfTableCellOrString(string: "Abebe")]
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
    
    //    document.addText("\u{2713}", 120, 50)
    
    do {
      //
      //                  if let test = Bundle.main.url(forResource: "Roboto-Regular", withExtension: "ttf") {
      //                    let font = try Data(contentsOf: test)
      //                    let base64 = font.base64EncodedString()
      //                    document.addFileToVFS("Roboto-Regular.ttf", base64)
      //                    let added = document.addFont("Roboto-Regular.ttf", "Roboto", "normal")
      //                    document.setFont("Roboto", "normal")
      //                    print("Roboto", added)
      //                  }
      
      
      if let test = Bundle.main.url(forResource: "NotoSansSymbols-Regular", withExtension: "ttf") {
        let font = try Data(contentsOf: test)
        let base64 = font.base64EncodedString()
        document.addFileToVFS("NotoSansSymbols-Regular.ttf", base64)
        let added = document.addFont("NotoSansSymbols-Regular.ttf", "NotoSans", "normal")
        document.setFont("NotoSans", "normal")
        print("NotoSans", added)
      }
      
      
      
      /*let font = try Data(contentsOf: URL(string: "https://pixijs.com/assets/webfont-loader/ChaChicle.ttf")!)
       let base64 = font.base64EncodedString()
       document.addFileToVFS("ChaChicle.ttf", base64)
       let added = document.addFont("ChaChicle.ttf", "ChaChicle", "normal")
       print(added)
       */
    }catch {
      print(error)
    }
    
    //    document.setFont("ChaChicle", "normal")
    
    document.addText("✓ ??? Hello World", 120, 50)
    
    
    document.setFont("times", "normal")
    
    document.addText("✓ ??? Hello World", 120, 100)
    
    
    
    document.setFont("courier", "bold")
    
    document.addText("✓ ??? Hello World", 120, 150)
    
    do {
      let image = UIImage(data: try Data(contentsOf: URL(string: "https://static.wikia.nocookie.net/xmenmovies/images/9/94/Deadpool_Textless.jpg")!))
      document.addImage(image!, 0, 100, width: 100, height: 100)
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
    //  document.roundedRect(140, 20, 10, 10, 3, 3, NSCPdfStyle.fd)
    
    
    let x: Float = 100.0 / 2
    let y: Float = 100.0 / 2
    let width: Float = 200.0 / 2
    let height: Float = 100.0 / 2
    let rx: Float = 20.0
    let ry: Float = 20.0
    
    //         document.roundedRect(x, y, width, height, rx, ry, NSCPdfStyle.fd)
    
    // let _ = document.roundedRect(20.0, 100.0, 100.0, 60.0, 12, 12, NSCPdfStyle.fd)
    let _ = document.rect(20.0, 200.0, 100.0, 60.0, NSCPdfStyle.s)
    
    
  }
  
  
}

