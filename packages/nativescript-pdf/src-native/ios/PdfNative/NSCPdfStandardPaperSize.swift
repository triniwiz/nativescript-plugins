//
//  NSCPdfStandardPaperSize.swift
//  PdfNative
//
//  Created by Osei Fortune on 28/06/2025.
//

@objc(NSCPdfStandardPaperSize)
public enum NSCPdfStandardPaperSize: UInt32, RawRepresentable {
  /// ANSI Standard Paper A size (US Letter), 216 x 279 mm / 8.5 x 11.0 in
  case USLetterAnsiA
  
  /// US Half Letter size, 140 x 216 mm / 5.5 x 8.5 in
  case USHalfLetter
  
  /// US Government Letter size, 203 x 254 mm / 8.0 x 10.0 in
  case USGovernmentLetter
  
  /// US Legal size, 216 x 356 mm / 8.5 x 14.0 in
  case USLegal
  
  /// US Junior Legal size, 127 x 203 mm / 5.0 x 8.0 in
  case USJuniorLegal
  
  /// US Government Legal size, 216 x 330 mm / 8.5 x 13.0 in
  case USGovernmentLegal
  
  /// ANSI Standard Paper B size (US Ledger / Tabloid), 279 x 432 mm / 11.0 x 17.0 in
  case USLedgerTabloidAnsiB
  
  /// ISO 216 4A0, quadruple the size of ISO 216 standard A0, 1682 x 2378 mm
  case A0x4
  
  /// ISO 216 2A0, double the size of ISO 216 standard A0, 1189 x 1682 mm
  case A0x2
  
  /// ISO 216 A0, 841 x 1189 mm
  case A0
  
  /// ISO 216 A1, 594 x 841 mm
  case A1
  
  /// ISO 216 A2, 420 x 594 mm
  case A2
  
  /// ISO 216 A3, 297 x 420 mm
  case A3
  
  /// ISO 216 A4, 210 x 297 mm
  case A4
  
  /// ISO 216 A4R, equivalent to A4 rotated 90 degrees, 297 x 210 mm
  case A4R
  
  /// ISO 216 A5, 148 x 210 mm
  case A5
  
  /// ISO 216 A6, 105 x 148 mm
  case A6
  
  /// ISO 216 A7, 74 x 105 mm
  case A7
  
  /// ISO 216 A8, 52 x 74 mm
  case A8
  
  /// ISO 216 A9, 37 x 52 mm
  case A9
  
  /// ISO 216 A10, 26 x 37 mm
  case A10
  
  /// ISO 216 B0, 1000 x 1414 mm
  case B0
  
  /// ISO 216 B1, 707 x 1000 mm
  case B1
  
  /// ISO 216 B2, 500 x 707 mm
  case B2
  
  /// ISO 216 B3, 353 x 500 mm
  case B3
  
  /// ISO 216 B4, 250 x 353 mm
  case B4
  
  /// ISO 216 B5, 176 x 250 mm
  case B5
  
  /// ISO 216 B6, 125 x 176 mm
  case B6
  
  /// ISO 216 B7, 88 x 125 mm
  case B7
  
  /// ISO 216 B8, 62 x 88 mm
  case B8
  
  /// ISO 216 B9, 44 x 62 mm
  case B9
  
  /// ISO 216 B10, 31 x 44 mm
  case B10
  
  /// ISO 216 C0, 917 x 1297 mm
  case C0
  
  /// ISO 216 C1, 648 x 917 mm
  case C1
  
  /// ISO 216 C2, 458 x 648 mm
  case C2
  
  /// ISO 216 C3, 324 x 458 mm
  case C3
  
  /// ISO 216 C4, 229 x 324 mm
  case C4
  
  /// ISO 216 C5, 162 x 229 mm
  case C5
  
  /// ISO 216 C6, 114 x 162 mm
  case C6
  
  /// ISO 216 C7, 81 x 114 mm
  case C7
  
  /// ISO 216 C8, 57 x 81 mm
  case C8
  
  /// ISO 216 C9, 40 x 57 mm
  case C9
  
  /// ISO 216 C10, 28 x 40 mm
  case C10
  
  /// ANSI Standard Paper B+ (Super B) size, equivalent to ANSI B with a 1 inch margin,
  /// 330 x 483 mm / 13.0 x 19.0 in
  case AnsiBPlus
  
  /// ANSI Standard Paper C size, 432 x 559 mm / 17.0 x 22.0 in
  case AnsiC
  
  /// ANSI Standard Paper D size, 559 x 864 mm / 22.0 x 34.0 in
  case AnsiD
  
  /// ANSI Standard Paper E size, 864 x 1118 mm / 34.0 x 44.0 in
  case AnsiE
  
  /// North American architectural A size, 229 x 305 mm / 9.0 x 12.0 in
  case ArchA
  
  /// North American architectural B size, 305 x 457 mm / 12.0 x 18.0 in
  case ArchB
  
  /// North American architectural C size, 457 x 610 mm / 18.0 x 24.0 in
  case ArchC
  
  /// North American architectural D size, 610 x 914 mm / 24.0 x 36.0 in
  case ArchD
  
  /// North American architectural E size, 762 x 1067 mm / 30.0 x 42.0 in
  case ArchE
  
  public typealias RawValue = UInt32
  
  internal var pdfium: PdfNativeStandardPaperSize {
    return PdfNativeStandardPaperSize(rawValue: rawValue)
  }
  
  public init?(rawValue: RawValue) {
    switch rawValue {
        case 0: self = .USLetterAnsiA
        case 1: self = .USHalfLetter
        case 2: self = .USGovernmentLetter
        case 3: self = .USLegal
        case 4: self = .USJuniorLegal
        case 5: self = .USGovernmentLegal
        case 6: self = .USLedgerTabloidAnsiB
        case 7: self = .A0x4
        case 8: self = .A0x2
        case 9: self = .A0
        case 10: self = .A1
        case 11: self = .A2
        case 12: self = .A3
        case 13: self = .A4
        case 14: self = .A4R
        case 15: self = .A5
        case 16: self = .A6
        case 17: self = .A7
        case 18: self = .A8
        case 19: self = .A9
        case 20: self = .A10
        case 21: self = .B0
        case 22: self = .B1
        case 23: self = .B2
        case 24: self = .B3
        case 25: self = .B4
        case 26: self = .B5
        case 27: self = .B6
        case 28: self = .B7
        case 29: self = .B8
        case 30: self = .B9
        case 31: self = .B10
        case 32: self = .C0
        case 33: self = .C1
        case 34: self = .C2
        case 35: self = .C3
        case 36: self = .C4
        case 37: self = .C5
        case 38: self = .C6
        case 39: self = .C7
        case 40: self = .C8
        case 41: self = .C9
        case 42: self = .C10
        case 43: self = .AnsiBPlus
        case 44: self = .AnsiC
        case 45: self = .AnsiD
        case 46: self = .AnsiE
        case 47: self = .ArchA
        case 48: self = .ArchB
        case 49: self = .ArchC
        case 50: self = .ArchD
        case 51: self = .ArchE
        default: return nil
        }
  }
  
  public var rawValue: RawValue {
      switch self {
      case .USLetterAnsiA: return 0
      case .USHalfLetter: return 1
      case .USGovernmentLetter: return 2
      case .USLegal: return 3
      case .USJuniorLegal: return 4
      case .USGovernmentLegal: return 5
      case .USLedgerTabloidAnsiB: return 6
      case .A0x4: return 7
      case .A0x2: return 8
      case .A0: return 9
      case .A1: return 10
      case .A2: return 11
      case .A3: return 12
      case .A4: return 13
      case .A4R: return 14
      case .A5: return 15
      case .A6: return 16
      case .A7: return 17
      case .A8: return 18
      case .A9: return 19
      case .A10: return 20
      case .B0: return 21
      case .B1: return 22
      case .B2: return 23
      case .B3: return 24
      case .B4: return 25
      case .B5: return 26
      case .B6: return 27
      case .B7: return 28
      case .B8: return 29
      case .B9: return 30
      case .B10: return 31
      case .C0: return 32
      case .C1: return 33
      case .C2: return 34
      case .C3: return 35
      case .C4: return 36
      case .C5: return 37
      case .C6: return 38
      case .C7: return 39
      case .C8: return 40
      case .C9: return 41
      case .C10: return 42
      case .AnsiBPlus: return 43
      case .AnsiC: return 44
      case .AnsiD: return 45
      case .AnsiE: return 46
      case .ArchA: return 47
      case .ArchB: return 48
      case .ArchC: return 49
      case .ArchD: return 50
      case .ArchE: return 51
      }
    }
  
}
