package io.github.triniwiz.plugins.pdf

enum class PdfStandardPaperSize(val value: Int, val width: Int, val height: Int) {
  /// ANSI Standard Paper A size (US Letter), 216 x 279 mm / 8.5 x 11.0 in
  USLetterAnsiA(0, 216, 279),

  /// US Half Letter size, 140 x 216 mm / 5.5 x 8.5 in
  USHalfLetter(1, 140, 216),

  /// US Government Letter size, 203 x 254 mm / 8.0 x 10.0 in
  USGovernmentLetter(2, 203, 254),

  /// US Legal size, 216 x 356 mm / 8.5 x 14.0 in
  USLegal(3, 216, 356),

  /// US Junior Legal size, 127 x 203 mm / 5.0 x 8.0 in
  USJuniorLegal(4, 127, 203),

  /// US Government Legal size, 216 x 330 mm / 8.5 x 13.0 in
  USGovernmentLegal(5, 216, 330),

  /// ANSI Standard Paper B size (US Ledger / Tabloid), 279 x 432 mm / 11.0 x 17.0 in
  USLedgerTabloidAnsiB(6, 279, 432),

  /// ISO 216 4A0, quadruple the size of ISO 216 standard A0, 1682 x 2378 mm
  A0x4(7, 1682, 2378),

  /// ISO 216 2A0, double the size of ISO 216 standard A0, 1189 x 1682 mm
  A0x2(8, 1189, 1682),

  /// ISO 216 A0, 841 x 1189 mm
  A0(9, 841, 1189),

  /// ISO 216 A1, 594 x 841 mm
  A1(10, 594, 841),

  /// ISO 216 A2, 420 x 594 mm
  A2(11, 420, 594),

  /// ISO 216 A3, 297 x 420 mm
  A3(12, 297, 420),

  /// ISO 216 A4, 210 x 297 mm
  A4(13, 210, 297),

  /// ISO 216 A4R, equivalent to A4 rotated 90 degrees, 297 x 210 mm
  A4R(14, 297, 210),

  /// ISO 216 A5, 148 x 210 mm
  A5(15, 148, 210),

  /// ISO 216 A6, 105 x 148 mm
  A6(16, 105, 148),

  /// ISO 216 A7, 74 x 105 mm
  A7(17, 74, 105),

  /// ISO 216 A8, 52 x 74 mm
  A8(18, 52, 74),

  /// ISO 216 A9, 37 x 52 mm
  A9(19, 37, 52),

  /// ISO 216 A10, 26 x 37 mm
  A10(20, 26, 37),

  /// ISO 216 B0, 1000 x 1414 mm
  B0(21, 1000, 1414),

  /// ISO 216 B1, 707 x 1000 mm
  B1(22, 707, 1000),

  /// ISO 216 B2, 500 x 707 mm
  B2(23, 500, 707),

  /// ISO 216 B3, 353 x 500 mm
  B3(24, 353, 500),

  /// ISO 216 B4, 250 x 353 mm
  B4(25, 250, 353),

  /// ISO 216 B5, 176 x 250 mm
  B5(26, 176, 250),

  /// ISO 216 B6, 125 x 176 mm
  B6(27, 125, 176),

  /// ISO 216 B7, 88 x 125 mm
  B7(28, 88, 125),

  /// ISO 216 B8, 62 x 88 mm
  B8(29, 62, 88),

  /// ISO 216 B9, 44 x 62 mm
  B9(30, 44, 62),

  /// ISO 216 B10, 31 x 44 mm
  B10(31, 31, 44),

  /// ISO 216 C0, 917 x 1297 mm
  C0(32, 917, 1297),

  /// ISO 216 C1, 648 x 917 mm
  C1(33, 648, 917),

  /// ISO 216 C2, 458 x 648 mm
  C2(34, 458, 648),

  /// ISO 216 C3, 324 x 458 mm
  C3(35, 324, 458),

  /// ISO 216 C4, 229 x 324 mm
  C4(36, 229, 324),

  /// ISO 216 C5, 162 x 229 mm
  C5(37, 162, 229),

  /// ISO 216 C6, 114 x 162 mm
  C6(38, 114, 162),

  /// ISO 216 C7, 81 x 114 mm
  C7(39, 81, 114),

  /// ISO 216 C8, 57 x 81 mm
  C8(40, 57, 81),

  /// ISO 216 C9, 40 x 57 mm
  C9(41, 40, 57),

  /// ISO 216 C10, 28 x 40 mm
  C10(42, 28, 40),

  /// ANSI Standard Paper B+ (Super B) size, equivalent to ANSI B with a 1 inch margin,
  /// 330 x 483 mm / 13.0 x 19.0 in
  AnsiBPlus(43, 330, 483),

  /// ANSI Standard Paper C size, 432 x 559 mm / 17.0 x 22.0 in
  AnsiC(44, 432, 559),

  /// ANSI Standard Paper D size, 559 x 864 mm / 22.0 x 34.0 in
  AnsiD(45, 559, 864),

  /// ANSI Standard Paper E size, 864 x 1118 mm / 34.0 x 44.0 in
  AnsiE(46, 864, 1118),

  /// North American architectural A size, 229 x 305 mm / 9.0 x 12.0 in
  ArchA(47, 229, 305),

  /// North American architectural B size, 305 x 457 mm / 12.0 x 18.0 in
  ArchB(48, 305, 457),

  /// North American architectural C size, 457 x 610 mm / 18.0 x 24.0 in
  ArchC(49, 457, 610),

  /// North American architectural D size, 610 x 914 mm / 24.0 x 36.0 in
  ArchD(50, 610, 914),

  /// North American architectural E size, 762 x 1067 mm / 30.0 x 42.0 in
  ArchE(51, 762, 1067);
}
