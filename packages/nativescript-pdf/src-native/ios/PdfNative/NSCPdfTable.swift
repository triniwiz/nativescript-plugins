//
//  NSCPdfTable.swift
//  PdfNative
//
//  Created by Osei Fortune on 02/07/2025.
//

@objcMembers
@objc(NSCPdfColumnDef)
public class NSCPdfColumnDef: NSObject {
  public var header: String = "" {
    didSet {
      updateCStruct()
    }
  }
  public var dataKey: String?{
    didSet {
      updateCStruct()
    }
  }
  
  private var cHeader: UnsafeMutablePointer<CChar>?
  private var cDataKey: UnsafeMutablePointer<CChar>?
  
  var pdfium: CColumnDef!
  
  public init(header: String, dataKey: String? = nil) {
    self.header = header
    self.dataKey = dataKey
    self.pdfium = CColumnDef(header: nil, data_key: nil)
    super.init()
  }
  
  private func updateCStruct() {
    if let ptr = cHeader { free(ptr) }
    if let ptr = cDataKey { free(ptr) }
    
    cHeader = strdup(header)
    cDataKey = dataKey != nil ? strdup(dataKey!) : nil
    
    if cHeader != nil {
      pdfium.header = UnsafePointer(cHeader!)
    }
    
    if cDataKey != nil {
      pdfium.data_key = UnsafePointer(cDataKey!)
    }else {
      pdfium.data_key = nil
    }
    
  }
  
  deinit {
    if let ptr = cHeader { free(ptr) }
    if let ptr = cDataKey { free(ptr) }
  }
}

@objc(NSCPdfColumnKey)
public class NSCPdfColumnKey: NSObject {
  var index: Int = 0
  var dataKey: String = ""
  var isDataKey = false
  private var cDataKey: UnsafeMutablePointer<CChar>?
  var pdfium = CColumnKey(type_: CColumnKeyType_Index, index: 0, data_key: nil)
  public static func Index(_ value: Int) -> NSCPdfColumnKey {
    let ret = NSCPdfColumnKey()
    ret.index = value
    ret.pdfium.index = UInt(value)
    return ret
  }
  
  public static func DataKey(_ value: String) -> NSCPdfColumnKey {
    let ret = NSCPdfColumnKey()
    ret.dataKey = value
    ret.isDataKey = true
    ret.cDataKey = strdup(value)
    ret.pdfium.type_ = CColumnKeyType_DataKey
    ret.pdfium.data_key = UnsafePointer(ret.cDataKey!)
    return ret
  }
  
  
  deinit {
    if let ptr = cDataKey { free(ptr) }
  }
}

@objcMembers
@objc(NSCPdfTableCellOrString)
public class NSCPdfTableCellOrString: NSObject {
  var string: String
  var cell: NSCPdfTableCell?
  var isCell = false
  var pdfium: CTableCellOrString!
  private var stringC: UnsafeMutablePointer<CChar>?
  private var cellC: UnsafeMutablePointer<CTableCell>?
  
  public init(string: String, cell: NSCPdfTableCell? = nil) {
    self.string = string
    self.cell = cell
    self.isCell = cell != nil
  }
  
  public static func String(_ value: String) -> NSCPdfTableCellOrString {
    return NSCPdfTableCellOrString(string: value)
  }
  
  public static func Cell(_ value: NSCPdfTableCell) -> NSCPdfTableCellOrString {
    return NSCPdfTableCellOrString(string: "", cell: value)
  }
  
  func pdfium(_ unit: NSCPdfUnit) -> CTableCellOrString {
    if let cell = cell {
      let cc = UnsafeMutablePointer<CTableCell>.allocate(capacity: 1)
      cc.pointee.content = UnsafePointer(strdup(cell.content))
      cc.pointee.col_span = UInt(cell.colSpan)
      cc.pointee.row_span = UInt(cell.rowSpan)
      let style = UnsafeMutablePointer<CStyleDef>.allocate(capacity: 1)
      style.initialize(to: cell.style.pdfium(unit))
      cc.pointee.style = UnsafePointer(style)
      pdfium = CTableCellOrString(string: nil, cell: cc)
    }else {
      stringC = strdup(string)
      pdfium = CTableCellOrString(string: UnsafePointer(stringC), cell: nil)
    }
    return pdfium
  }

}

@objcMembers
@objc(NSCPdfTableCell)
public class NSCPdfTableCell: NSObject {
  var content: String
  var style: NSCPdfStyleDef
  var colSpan: Int
  var rowSpan: Int
  public init(_ content: String, _ colSpan: Int, _ rowSpan: Int, _ style: NSCPdfStyleDef = NSCPdfStyleDef.default()) {
    self.content = content
    self.style = style
    self.colSpan = colSpan
    self.rowSpan = rowSpan
  }
}


@objcMembers
@objc(NSCPdfTable)
public class NSCPdfTable: NSObject {
  public var columns: Array<NSCPdfColumnDef>? = nil
  public var columnStyles: Dictionary<NSCPdfColumnKey, NSCPdfStyleDef>? = nil
  public var headStyles: NSCPdfStyleDef? = nil
  public var bodyStyles: NSCPdfStyleDef? = nil
  public var footStyles: NSCPdfStyleDef? = nil
  public var head: Array<Array<NSCPdfTableCellOrString>> = []
  public var body: Array<Array<NSCPdfTableCellOrString>> = []
  public var foot: Array<Array<NSCPdfTableCellOrString>> = []
  public var position: [Float] = [0,0]
  public var theme = NSCPdfTableTheme.default()
  public var pageBreak = NSCPdfPageBreak.default()
  public var showHead = NSCPdfShowHead.default()
  public var showFoot = NSCPdfShowFoot.default()
  
  
  
  public func updatePosition(_ x: Float, _ y: Float){
    position[0] = x
    position[1] = y
  }
  
  static func parseColumnStyles(_ value: Dictionary<NSCPdfColumnKey, NSCPdfStyleDef>?, _ unit: NSCPdfUnit) -> (UnsafeMutablePointer<CColumnKey>?, UInt, UnsafeMutablePointer<CStyleDef>?, UInt) {
    guard let value = value else { return (nil, 0, nil, 0) }
    
    let column_styles_keys = Array(value.keys)
    let column_styles_values = Array(value.values)
    
    let keys_count = column_styles_keys.count
    let values_count = column_styles_keys.count
    
    let keys = UnsafeMutablePointer<CColumnKey>.allocate(capacity: keys_count)
    for (i, key) in column_styles_keys.enumerated() {
      keys[i] = key.pdfium
    }

    
    let values = UnsafeMutablePointer<CStyleDef>.allocate(capacity: values_count)
    for (i, value) in column_styles_values.enumerated() {
      values[i] = value.pdfium(unit)
    }

    return (keys, UInt(keys_count), values, UInt(values_count))
    
  }
  
  
  static func parseTableData(_ value: Array<Array<NSCPdfTableCellOrString>>, _ unit: NSCPdfUnit) -> (
    UnsafePointer<UnsafePointer<CTableCellOrString>?>, UInt, UnsafePointer<UInt>
  ) {
    let rowCount = value.count


    let outerPtr = UnsafeMutablePointer<UnsafePointer<CTableCellOrString>?>.allocate(capacity: rowCount)
    var countPtr = UnsafeMutablePointer<UInt>.allocate(capacity: rowCount)
      for (i, row) in value.enumerated() {
          let colCount = row.count
        countPtr[i] = UInt(colCount)
        
          let rowPtr = UnsafeMutablePointer<CTableCellOrString>.allocate(capacity: colCount)

          for (j, cell) in row.enumerated() {
            rowPtr[j] = cell.pdfium(unit)
          }

        outerPtr[i] = UnsafePointer(rowPtr)
      }
    
  
    return (UnsafePointer(outerPtr), UInt(rowCount), UnsafePointer(countPtr))
  }
  
  
  func pdfium(_ unit: NSCPdfUnit) -> CPdfTable {
    var columnsCArray:  UnsafeMutablePointer<CColumnDef>? = nil
    
    if let columns = columns {
      let array = UnsafeMutablePointer<CColumnDef>.allocate(capacity: columns.count)
      for (i, col) in columns.enumerated() {
        array[i] = col.pdfium
      }
    }
    
    let (column_styles_keys, column_styles_keys_size, column_styles_values, column_styles_values_size) = NSCPdfTable.parseColumnStyles(columnStyles, unit)

    
    var (head, headCount, headInner) = NSCPdfTable.parseTableData(head, unit)
    
    var (body, bodyCount, bodyInner) = NSCPdfTable.parseTableData(body, unit)
    
    var (foot, footCount, footInner) = NSCPdfTable.parseTableData(foot, unit)
    
    var table = CPdfTable()
    table.columns = UnsafePointer(columnsCArray)
    table.columns_size = UInt(columns?.count ?? 0)
    
    table.column_styles_keys = UnsafePointer(column_styles_keys)
    table.column_styles_keys_size = column_styles_keys_size
    
    table.column_styles_values = UnsafePointer(column_styles_values)
    table.column_styles_values_size = column_styles_values_size

    table.head_styles = headStyles?.pdfiumRaw(unit)
    table.body_styles = bodyStyles?.pdfiumRaw(unit)
    table.foot_styles = footStyles?.pdfiumRaw(unit)
    
    table.head = head
    table.head_size = headCount
    table.header_inner_sizes = headInner
    table.header_inner_size = headCount
    
    table.body = body
    table.body_size = bodyCount
    table.body_inner_sizes = bodyInner
    table.body_inner_size = bodyCount
    
    
    table.foot = foot
    table.foot_size = headCount
    table.foot_inner_sizes = footInner
    table.foot_inner_size = footCount
    
    table.position_x =  CPdfNativePoints(value: position[0], unit: unit.pdfium)
    table.position_y =  CPdfNativePoints(value: position[1], unit: unit.pdfium)
    
    table.theme = theme.pdfium
    table.page_break = pageBreak.pdfium
    table.show_head = showHead.pdfium
    table.show_foot = showFoot.pdfium
    
    
    return table
    
  }
}
