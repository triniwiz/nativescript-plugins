use crate::table::{draw_table, PdfTable};
use crate::utils::{get_y, to_points, to_unit};
use crate::{PdfImage, PdfNative};
use image::GenericImageView;
use parking_lot::{MappedMutexGuard, Mutex, MutexGuard};
use pdfium_render::prelude::*;
use std::collections::HashMap;
use std::ffi::{c_int, c_uint};
use std::fmt::{Debug, Formatter};
use std::path::{Path, PathBuf};

#[derive(Debug, Copy, Clone, PartialEq)]
pub enum PdfNativeState {
    Idle,
    DrawingTable,
}

const BEZIER_KAPPA: f32 = 0.552284749831;

#[repr(C)]
#[derive(Debug, Copy, Clone, PartialEq)]
pub enum PdfNativeStyle {
    S,
    F,
    DF,
    FD,
}

impl TryFrom<i32> for PdfNativeStyle {
    type Error = &'static str;

    fn try_from(value: i32) -> Result<Self, Self::Error> {
        match value {
            0 => Ok(Self::S),
            1 => Ok(Self::F),
            2 => Ok(Self::DF),
            3 => Ok(Self::FD),
            _ => Err("Invalid value!"),
        }
    }
}

#[repr(C)]
#[derive(Debug, Copy, Clone, PartialEq)]
pub enum PdfNativeRotationDirection {
    CW,
    CCW,
}

impl TryFrom<i32> for PdfNativeRotationDirection {
    type Error = &'static str;

    fn try_from(value: i32) -> Result<Self, Self::Error> {
        match value {
            0 => Ok(Self::CW),
            1 => Ok(Self::CCW),
            _ => Err("Invalid value!"),
        }
    }
}

impl Default for PdfNativeRotationDirection {
    fn default() -> Self {
        PdfNativeRotationDirection::CW
    }
}

#[repr(C)]
#[derive(Debug, Copy, Clone, PartialEq)]
pub enum PdfNativeTextAlignment {
    Left,
    Center,
    Right,
    Justify,
}

impl TryFrom<i32> for PdfNativeTextAlignment {
    type Error = &'static str;

    fn try_from(value: i32) -> Result<Self, Self::Error> {
        match value {
            0 => Ok(Self::Left),
            1 => Ok(Self::Center),
            2 => Ok(Self::Right),
            3 => Ok(Self::Justify),
            _ => Err("Invalid value!"),
        }
    }
}

impl Default for PdfNativeTextAlignment {
    fn default() -> Self {
        PdfNativeTextAlignment::Left
    }
}
#[repr(C)]
#[derive(Debug, Copy, Clone, PartialEq)]
pub enum PdfNativeTextBaseline {
    Alphabetic,
    Ideographic,
    Bottom,
    Top,
    Middle,
    Hanging,
}

impl TryFrom<i32> for PdfNativeTextBaseline {
    type Error = &'static str;

    fn try_from(value: i32) -> Result<Self, Self::Error> {
        match value {
            0 => Ok(Self::Alphabetic),
            1 => Ok(Self::Ideographic),
            2 => Ok(Self::Bottom),
            3 => Ok(Self::Top),
            4 => Ok(Self::Middle),
            5 => Ok(Self::Hanging),
            _ => Err("Invalid value!"),
        }
    }
}

impl Default for PdfNativeTextBaseline {
    fn default() -> Self {
        Self::Alphabetic
    }
}

#[repr(C)]
#[derive(Debug, Copy, Clone)]
pub struct PdfNativeRotationOrMatrix {
    pub kind: PdfNativeRotationOrMatrixKind,
    pub data: PdfNativeRotationOrMatrixData,
}

impl PdfNativeRotationOrMatrix {
    pub fn rotation(value: f32) -> Self {
        Self {
            kind: PdfNativeRotationOrMatrixKind::Rotation,
            data: PdfNativeRotationOrMatrixData { rotation: value },
        }
    }

    pub fn matrix(a: f32, b: f32, c: f32, d: f32, e: f32, f: f32) -> Self {
        Self {
            kind: PdfNativeRotationOrMatrixKind::Matrix,
            data: PdfNativeRotationOrMatrixData {
                matrix: [a, b, c, d, e, f],
            },
        }
    }
}

#[repr(C)]
#[derive(Debug, Copy, Clone, PartialEq)]
pub enum PdfNativeRotationOrMatrixKind {
    Rotation,
    Matrix,
}

#[repr(C)]
#[derive(Copy, Clone)]
pub union PdfNativeRotationOrMatrixData {
    pub rotation: f32,
    pub matrix: [f32; 6],
}

impl Debug for PdfNativeRotationOrMatrixData {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        unsafe {
            f.debug_struct("PdfNativeRotationOrMatrixData")
                .field("rotation", &self.rotation)
                .field("matrix", &self.matrix)
                .finish()
        }
    }
}

impl Default for PdfNativeRotationOrMatrix {
    fn default() -> Self {
        Self {
            kind: PdfNativeRotationOrMatrixKind::Rotation,
            data: PdfNativeRotationOrMatrixData { rotation: 0.0 },
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy)]
pub struct PdfNativeTextOptions {
    pub align: PdfNativeTextAlignment,
    pub baseline: PdfNativeTextBaseline,
    pub angle: PdfNativeRotationOrMatrix,
    pub rotation_direction: PdfNativeRotationDirection,
    pub char_space: u32,
    pub horizontal_scale: f32,
    pub line_height_factor: f32,
    pub max_width: u32,
}

impl Default for PdfNativeTextOptions {
    fn default() -> Self {
        Self {
            align: Default::default(),
            baseline: Default::default(),
            angle: Default::default(),
            rotation_direction: Default::default(),
            char_space: 0,
            horizontal_scale: 1.,
            line_height_factor: 1.15,
            max_width: 0,
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy, PartialEq)]
pub enum PdfNativeOrientation {
    Landscape,
    Portrait,
}

#[repr(C)]
#[derive(Debug, Clone, Copy, PartialEq)]
pub enum PdfNativeUnit {
    Mm,
    Points,
    Cm,
    Inches,
}

#[repr(C)]
#[derive(Debug, Copy, Clone, PartialEq)]
pub enum PdfNativeStandardPaperSize {
    /// ANSI Standard Paper A size (US Letter), 216 x 279 mm / 8.5 x 11.0 in
    USLetterAnsiA,

    /// US Half Letter size, 140 x 216 mm / 5.5 x 8.5 in
    USHalfLetter,

    /// US Government Letter size, 203 x 254 mm / 8.0 x 10.0 in
    USGovernmentLetter,

    /// US Legal size, 216 x 356 mm / 8.5 x 14.0 in
    USLegal,

    /// US Junior Legal size, 127 x 203 mm / 5.0 x 8.0 in
    USJuniorLegal,

    /// US Government Legal size, 216 x 330 mm / 8.5 x 13.0 in
    USGovernmentLegal,

    /// ANSI Standard Paper B size (US Ledger / Tabloid), 279 x 432 mm / 11.0 x 17.0 in
    USLedgerTabloidAnsiB,

    /// ISO 216 4A0, quadruple the size of ISO 216 standard A0, 1682 x 2378 mm
    A0x4,

    /// ISO 216 2A0, double the size of ISO 216 standard A0, 1189 x 1682 mm
    A0x2,

    /// ISO 216 A0, 841 x 1189 mm
    A0,

    /// ISO 216 A1, 594 x 841 mm
    A1,

    /// ISO 216 A2, 420 x 594 mm
    A2,

    /// ISO 216 A3, 297 x 420 mm
    A3,

    /// ISO 216 A4, 210 x 297 mm
    A4,

    /// ISO 216 A4R, equivalent to A4 rotated 90 degrees, 297 x 210 mm
    A4R,

    /// ISO 216 A5, 148 x 210 mm
    A5,

    /// ISO 216 A6, 105 x 148 mm
    A6,

    /// ISO 216 A7, 74 x 105 mm
    A7,

    /// ISO 216 A8, 52 x 74 mm
    A8,

    /// ISO 216 A9, 37 x 52 mm
    A9,

    /// ISO 216 A10, 26 x 37 mm
    A10,

    /// ISO 216 B0, 1000 x 1414 mm
    B0,

    /// ISO 216 B1, 707 x 1000 mm
    B1,

    /// ISO 216 B2, 500 x 707 mm
    B2,

    /// ISO 216 B3, 353 x 500 mm
    B3,

    /// ISO 216 B4, 250 x 353 mm
    B4,

    /// ISO 216 B5, 176 x 250 mm
    B5,

    /// ISO 216 B6, 125 x 176 mm
    B6,

    /// ISO 216 B7, 88 x 125 mm
    B7,

    /// ISO 216 B8, 62 x 88 mm
    B8,

    /// ISO 216 B9, 44 x 62 mm
    B9,

    /// ISO 216 B10, 31 x 44 mm
    B10,

    /// ISO 216 C0, 917 x 1297 mm
    C0,

    /// ISO 216 C1, 648 x 917 mm
    C1,

    /// ISO 216 C2, 458 x 648 mm
    C2,

    /// ISO 216 C3, 324 x 458 mm
    C3,

    /// ISO 216 C4, 229 x 324 mm
    C4,

    /// ISO 216 C5, 162 x 229 mm
    C5,

    /// ISO 216 C6, 114 x 162 mm
    C6,

    /// ISO 216 C7, 81 x 114 mm
    C7,

    /// ISO 216 C8, 57 x 81 mm
    C8,

    /// ISO 216 C9, 40 x 57 mm
    C9,

    /// ISO 216 C10, 28 x 40 mm
    C10,

    /// ANSI Standard Paper B+ (Super B) size, equivalent to ANSI B with a 1 inch margin,
    /// 330 x 483 mm / 13.0 x 19.0 in
    AnsiBPlus,

    /// ANSI Standard Paper C size, 432 x 559 mm / 17.0 x 22.0 in
    AnsiC,

    /// ANSI Standard Paper D size, 559 x 864 mm / 22.0 x 34.0 in
    AnsiD,

    /// ANSI Standard Paper E size, 864 x 1118 mm / 34.0 x 44.0 in
    AnsiE,

    /// North American architectural A size, 229 x 305 mm / 9.0 x 12.0 in
    ArchA,

    /// North American architectural B size, 305 x 457 mm / 12.0 x 18.0 in
    ArchB,

    /// North American architectural C size, 457 x 610 mm / 18.0 x 24.0 in
    ArchC,

    /// North American architectural D size, 610 x 914 mm / 24.0 x 36.0 in
    ArchD,

    /// North American architectural E size, 762 x 1067 mm / 30.0 x 42.0 in
    ArchE,
}

impl PdfNativeStandardPaperSize {
    pub fn from_mm_dimensions(width: u32, height: u32) -> Option<PdfNativeStandardPaperSize> {
        match (width, height) {
            (216, 279) => Some(PdfNativeStandardPaperSize::USLetterAnsiA),
            (140, 216) => Some(PdfNativeStandardPaperSize::USHalfLetter),
            (203, 254) => Some(PdfNativeStandardPaperSize::USGovernmentLetter),
            (216, 356) => Some(PdfNativeStandardPaperSize::USLegal),
            (127, 203) => Some(PdfNativeStandardPaperSize::USJuniorLegal),
            (216, 330) => Some(PdfNativeStandardPaperSize::USGovernmentLegal),
            (279, 432) => Some(PdfNativeStandardPaperSize::USLedgerTabloidAnsiB),
            (1682, 2378) => Some(PdfNativeStandardPaperSize::A0x4),
            (1189, 1682) => Some(PdfNativeStandardPaperSize::A0x2),
            (841, 1189) => Some(PdfNativeStandardPaperSize::A0),
            (594, 841) => Some(PdfNativeStandardPaperSize::A1),
            (420, 594) => Some(PdfNativeStandardPaperSize::A2),
            (297, 420) => Some(PdfNativeStandardPaperSize::A3),
            (210, 297) => Some(PdfNativeStandardPaperSize::A4),
            (297, 210) => Some(PdfNativeStandardPaperSize::A4R),
            (148, 210) => Some(PdfNativeStandardPaperSize::A5),
            (105, 148) => Some(PdfNativeStandardPaperSize::A6),
            (74, 105) => Some(PdfNativeStandardPaperSize::A7),
            (52, 74) => Some(PdfNativeStandardPaperSize::A8),
            (37, 52) => Some(PdfNativeStandardPaperSize::A9),
            (26, 37) => Some(PdfNativeStandardPaperSize::A10),
            (1000, 1414) => Some(PdfNativeStandardPaperSize::B0),
            (707, 1000) => Some(PdfNativeStandardPaperSize::B1),
            (500, 707) => Some(PdfNativeStandardPaperSize::B2),
            (353, 500) => Some(PdfNativeStandardPaperSize::B3),
            (250, 353) => Some(PdfNativeStandardPaperSize::B4),
            (176, 250) => Some(PdfNativeStandardPaperSize::B5),
            (125, 176) => Some(PdfNativeStandardPaperSize::B6),
            (88, 125) => Some(PdfNativeStandardPaperSize::B7),
            (62, 88) => Some(PdfNativeStandardPaperSize::B8),
            (44, 62) => Some(PdfNativeStandardPaperSize::B9),
            (31, 44) => Some(PdfNativeStandardPaperSize::B10),
            (917, 1297) => Some(PdfNativeStandardPaperSize::C0),
            (648, 917) => Some(PdfNativeStandardPaperSize::C1),
            (458, 648) => Some(PdfNativeStandardPaperSize::C2),
            (324, 458) => Some(PdfNativeStandardPaperSize::C3),
            (229, 324) => Some(PdfNativeStandardPaperSize::C4),
            (162, 229) => Some(PdfNativeStandardPaperSize::C5),
            (114, 162) => Some(PdfNativeStandardPaperSize::C6),
            (81, 114) => Some(PdfNativeStandardPaperSize::C7),
            (57, 81) => Some(PdfNativeStandardPaperSize::C8),
            (40, 57) => Some(PdfNativeStandardPaperSize::C9),
            (28, 40) => Some(PdfNativeStandardPaperSize::C10),
            (330, 483) => Some(PdfNativeStandardPaperSize::AnsiBPlus),
            (432, 559) => Some(PdfNativeStandardPaperSize::AnsiC),
            (559, 864) => Some(PdfNativeStandardPaperSize::AnsiD),
            (864, 1118) => Some(PdfNativeStandardPaperSize::AnsiE),
            (229, 305) => Some(PdfNativeStandardPaperSize::ArchA),
            (305, 457) => Some(PdfNativeStandardPaperSize::ArchB),
            (457, 610) => Some(PdfNativeStandardPaperSize::ArchC),
            (610, 914) => Some(PdfNativeStandardPaperSize::ArchD),
            (762, 1067) => Some(PdfNativeStandardPaperSize::ArchE),
            _ => None,
        }
    }
}

impl Into<PdfPagePaperStandardSize> for PdfNativeStandardPaperSize {
    fn into(self) -> PdfPagePaperStandardSize {
        match self {
            PdfNativeStandardPaperSize::USLetterAnsiA => PdfPagePaperStandardSize::USLetterAnsiA,
            PdfNativeStandardPaperSize::USHalfLetter => PdfPagePaperStandardSize::USHalfLetter,
            PdfNativeStandardPaperSize::USGovernmentLetter => {
                PdfPagePaperStandardSize::USGovernmentLetter
            }
            PdfNativeStandardPaperSize::USLegal => PdfPagePaperStandardSize::USLegal,
            PdfNativeStandardPaperSize::USJuniorLegal => PdfPagePaperStandardSize::USJuniorLegal,
            PdfNativeStandardPaperSize::USGovernmentLegal => {
                PdfPagePaperStandardSize::USGovernmentLegal
            }
            PdfNativeStandardPaperSize::USLedgerTabloidAnsiB => {
                PdfPagePaperStandardSize::USLedgerTabloidAnsiB
            }
            PdfNativeStandardPaperSize::A0x4 => PdfPagePaperStandardSize::A0x4,
            PdfNativeStandardPaperSize::A0x2 => PdfPagePaperStandardSize::A0x2,
            PdfNativeStandardPaperSize::A0 => PdfPagePaperStandardSize::A0,
            PdfNativeStandardPaperSize::A1 => PdfPagePaperStandardSize::A1,
            PdfNativeStandardPaperSize::A2 => PdfPagePaperStandardSize::A2,
            PdfNativeStandardPaperSize::A3 => PdfPagePaperStandardSize::A3,
            PdfNativeStandardPaperSize::A4 => PdfPagePaperStandardSize::A4,
            PdfNativeStandardPaperSize::A4R => PdfPagePaperStandardSize::A4R,
            PdfNativeStandardPaperSize::A5 => PdfPagePaperStandardSize::A5,
            PdfNativeStandardPaperSize::A6 => PdfPagePaperStandardSize::A6,
            PdfNativeStandardPaperSize::A7 => PdfPagePaperStandardSize::A7,
            PdfNativeStandardPaperSize::A8 => PdfPagePaperStandardSize::A8,
            PdfNativeStandardPaperSize::A9 => PdfPagePaperStandardSize::A9,
            PdfNativeStandardPaperSize::A10 => PdfPagePaperStandardSize::A10,
            PdfNativeStandardPaperSize::B0 => PdfPagePaperStandardSize::B0,
            PdfNativeStandardPaperSize::B1 => PdfPagePaperStandardSize::B1,
            PdfNativeStandardPaperSize::B2 => PdfPagePaperStandardSize::B2,
            PdfNativeStandardPaperSize::B3 => PdfPagePaperStandardSize::B3,
            PdfNativeStandardPaperSize::B4 => PdfPagePaperStandardSize::B4,
            PdfNativeStandardPaperSize::B5 => PdfPagePaperStandardSize::B5,
            PdfNativeStandardPaperSize::B6 => PdfPagePaperStandardSize::B6,
            PdfNativeStandardPaperSize::B7 => PdfPagePaperStandardSize::B7,
            PdfNativeStandardPaperSize::B8 => PdfPagePaperStandardSize::B8,
            PdfNativeStandardPaperSize::B9 => PdfPagePaperStandardSize::B9,
            PdfNativeStandardPaperSize::B10 => PdfPagePaperStandardSize::B10,
            PdfNativeStandardPaperSize::C0 => PdfPagePaperStandardSize::C0,
            PdfNativeStandardPaperSize::C1 => PdfPagePaperStandardSize::C1,
            PdfNativeStandardPaperSize::C2 => PdfPagePaperStandardSize::C2,
            PdfNativeStandardPaperSize::C3 => PdfPagePaperStandardSize::C3,
            PdfNativeStandardPaperSize::C4 => PdfPagePaperStandardSize::C4,
            PdfNativeStandardPaperSize::C5 => PdfPagePaperStandardSize::C5,
            PdfNativeStandardPaperSize::C6 => PdfPagePaperStandardSize::C6,
            PdfNativeStandardPaperSize::C7 => PdfPagePaperStandardSize::C7,
            PdfNativeStandardPaperSize::C8 => PdfPagePaperStandardSize::C8,
            PdfNativeStandardPaperSize::C9 => PdfPagePaperStandardSize::C9,
            PdfNativeStandardPaperSize::C10 => PdfPagePaperStandardSize::C10,
            PdfNativeStandardPaperSize::AnsiBPlus => PdfPagePaperStandardSize::AnsiBPlus,
            PdfNativeStandardPaperSize::AnsiC => PdfPagePaperStandardSize::AnsiC,
            PdfNativeStandardPaperSize::AnsiD => PdfPagePaperStandardSize::AnsiD,
            PdfNativeStandardPaperSize::AnsiE => PdfPagePaperStandardSize::AnsiE,
            PdfNativeStandardPaperSize::ArchA => PdfPagePaperStandardSize::ArchA,
            PdfNativeStandardPaperSize::ArchB => PdfPagePaperStandardSize::ArchB,
            PdfNativeStandardPaperSize::ArchC => PdfPagePaperStandardSize::ArchC,
            PdfNativeStandardPaperSize::ArchD => PdfPagePaperStandardSize::ArchD,
            PdfNativeStandardPaperSize::ArchE => PdfPagePaperStandardSize::ArchE,
        }
    }
}

#[repr(C)]
#[derive(Debug, Copy, Clone)]
pub enum PdfNativePaperSize {
    StandardPaper(PdfNativeStandardPaperSize),
    Custom(f32, f32),
}

impl Default for PdfNativePaperSize {
    fn default() -> Self {
        Self::StandardPaper(PdfNativeStandardPaperSize::A4)
    }
}

impl PdfNativePaperSize {
    pub fn to_pdfium(
        &self,
        orientation: PdfNativeOrientation,
        units: PdfNativeUnit,
        scale: f32,
    ) -> PdfPagePaperSize {
        let is_portrait = orientation == PdfNativeOrientation::Portrait;
        match *self {
            PdfNativePaperSize::StandardPaper(size) => {
                if is_portrait {
                    return PdfPagePaperSize::Portrait(size.into());
                }

                PdfPagePaperSize::Landscape(size.into())
            }
            PdfNativePaperSize::Custom(width, height) => {
                let (width, height) = match units {
                    PdfNativeUnit::Mm => (PdfPoints::from_mm(width), PdfPoints::from_mm(height)),
                    PdfNativeUnit::Points => (PdfPoints::new(width), PdfPoints::new(height)),
                    PdfNativeUnit::Cm => (PdfPoints::from_cm(width), PdfPoints::from_cm(height)),
                    PdfNativeUnit::Inches => (
                        PdfPoints::from_inches(width),
                        PdfPoints::from_inches(height),
                    ),
                };
                PdfPagePaperSize::Custom(width, height)
            }
        }
    }
}

#[derive(Debug)]
pub struct PdfNativeDocumentData {
    pub(crate) orientation: PdfNativeOrientation,
    pub(crate) size: PdfNativePaperSize,
    pub(crate) units: PdfNativeUnit,
    pub(crate) current_page: PdfPageIndex,
    pub(crate) font_size: f32,
    pub(crate) text_color: PdfColor,
    pub(crate) device_scale: f32,
    pub(crate) fill_color: PdfColor,
    pub(crate) stroke_color: PdfColor,
    pub(crate) line_width: f32,
    pub(crate) font: PdfFontInfo,
    pub(crate) state: PdfNativeState,
}

impl Default for PdfNativeDocumentData {
    fn default() -> Self {
        Self {
            orientation: PdfNativeOrientation::Portrait,
            size: PdfNativePaperSize::default(),
            units: PdfNativeUnit::Mm,
            current_page: 0,
            font_size: 16.0,
            text_color: PdfColor::BLACK,
            device_scale: 1.0,
            fill_color: PdfColor::BLACK,
            stroke_color: PdfColor::BLACK,
            line_width: 0.2,
            font: PdfFontInfo::default(),
            state: PdfNativeState::Idle,
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy)]
pub struct PdfNativeDocumentConfig {
    orientation: PdfNativeOrientation,
    size: PdfNativePaperSize,
    units: PdfNativeUnit,
    device_scale: f32,
}

impl PdfNativeDocumentConfig {
    pub fn device_scale(&self) -> f32 {
        self.device_scale
    }

    pub fn set_orientation(&mut self, orientation: PdfNativeOrientation) {
        self.orientation = orientation;
    }

    pub fn orientation(&self) -> PdfNativeOrientation {
        self.orientation
    }

    pub fn set_size(&mut self, size: PdfNativePaperSize) {
        self.size = size;
    }
    pub fn size(&self) -> PdfNativePaperSize {
        self.size
    }

    pub fn set_units(&mut self, units: PdfNativeUnit) {
        self.units = units;
    }
    pub fn units(&self) -> PdfNativeUnit {
        self.units
    }
    pub fn scale(&self) -> f32 {
        self.device_scale
    }

    pub fn set_scale(&mut self, scale: f32) {
        self.device_scale = scale;
    }
}

impl Default for PdfNativeDocumentConfig {
    fn default() -> Self {
        Self {
            orientation: PdfNativeOrientation::Portrait,
            size: PdfNativePaperSize::StandardPaper(PdfNativeStandardPaperSize::A4),
            units: PdfNativeUnit::Mm,
            device_scale: 1.,
        }
    }
}
#[derive(Debug)]
pub struct PdfNativeDocument<'a> {
    pub(crate) data: Mutex<PdfNativeDocumentData>,
    pub(crate) document: PdfDocument<'a>,
    pub(crate) path_: Option<PathBuf>,
    pub(crate) password_: Option<String>,
    pub(crate) pdf_: PdfNative,
    pub(crate) fonts: HashMap<String, PdfFontEntries>,
}

#[derive(Debug, Default)]
pub struct PdfFontEntryWeight {
    pub thin: Option<PdfFontInfo>,
    pub extra_light: Option<PdfFontInfo>,
    pub light: Option<PdfFontInfo>,
    pub normal: Option<PdfFontInfo>,
    pub medium: Option<PdfFontInfo>,
    pub semi_bold: Option<PdfFontInfo>,
    pub bold: Option<PdfFontInfo>,
    pub extra_bold: Option<PdfFontInfo>,
    pub black: Option<PdfFontInfo>,
    pub extra_black: Option<PdfFontInfo>,
}

#[derive(Debug, Default)]
pub struct PdfFontEntries {
    pub normal: PdfFontEntryWeight,
    pub bold: PdfFontEntryWeight,
    pub italic: PdfFontEntryWeight,
    pub bolditalic: PdfFontEntryWeight,
}

#[derive(Debug, Clone)]
pub struct PdfFontInfo {
    name: String,
    style: String,
    weight: String,
    token: Option<PdfFontToken>,
}

impl Default for PdfFontInfo {
    fn default() -> Self {
        Self {
            name: "helvetica".to_string(),
            style: "normal".to_string(),
            weight: "normal".to_string(),
            token: None,
        }
    }
}
impl PdfFontInfo {
    pub fn new(name: String, style: String, weight: String, token: PdfFontToken) -> Self {
        Self {
            name,
            style,
            weight,
            token: Some(token),
        }
    }

    fn load_token(&mut self, document: &mut PdfDocument) {
        let fonts = document.fonts_mut();
        let token = match self.name.as_ref() {
            "helvetica" => match self.style.as_ref() {
                "normal" => Some(fonts.helvetica()),
                "bold" => Some(fonts.helvetica_bold()),
                "italic" => Some(fonts.helvetica_oblique()),
                "bolditalic" => Some(fonts.helvetica_bold_oblique()),
                _ => None,
            },
            "times" => match self.style.as_ref() {
                "normal" => Some(fonts.times_roman()),
                "bold" => Some(fonts.times_bold()),
                "italic" => Some(fonts.times_italic()),
                "bolditalic" => Some(fonts.times_bold_italic()),
                _ => None,
            },
            "courier" => match self.style.as_ref() {
                "normal" => Some(fonts.courier()),
                "bold" => Some(fonts.courier_bold()),
                "italic" => Some(fonts.courier_oblique()),
                "bolditalic" => Some(fonts.courier_bold_oblique()),
                _ => None,
            },
            _ => None,
        };

        if let Some(token) = token {
            self.token = Some(token);
        }
    }
}

#[derive(Debug, Copy, Clone)]
pub struct PdfNativePageInfo {
    pub index: u32,
    pub width: f32,
    pub height: f32,
}

fn default_fonts(document: &mut PdfDocument) -> HashMap<String, PdfFontEntries> {
    let fonts = document.fonts_mut();
    HashMap::from([
        (
            "helvetica".to_string(),
            PdfFontEntries {
                normal: PdfFontEntryWeight {
                    normal: Some(PdfFontInfo::new(
                        "helvetica".to_string(),
                        "normal".to_string(),
                        "normal".to_string(),
                        fonts.helvetica(),
                    )),
                    ..PdfFontEntryWeight::default()
                },
                bold: PdfFontEntryWeight {
                    bold: Some(PdfFontInfo::new(
                        "helvetica".to_string(),
                        "bold".to_string(),
                        "bold".to_string(),
                        fonts.helvetica_bold(),
                    )),
                    ..PdfFontEntryWeight::default()
                },
                italic: PdfFontEntryWeight {
                    normal: Some(PdfFontInfo::new(
                        "helvetica".to_string(),
                        "italic".to_string(),
                        "normal".to_string(),
                        fonts.helvetica_oblique(),
                    )),
                    ..PdfFontEntryWeight::default()
                },
                bolditalic: PdfFontEntryWeight {
                    bold: Some(PdfFontInfo::new(
                        "helvetica".to_string(),
                        "bolditalic".to_string(),
                        "bold".to_string(),
                        fonts.helvetica_bold_oblique(),
                    )),
                    ..PdfFontEntryWeight::default()
                },
            },
        ),
        (
            "times".to_string(),
            PdfFontEntries {
                normal: PdfFontEntryWeight {
                    normal: Some(PdfFontInfo::new(
                        "times".to_string(),
                        "normal".to_string(),
                        "normal".to_string(),
                        fonts.times_roman(),
                    )),
                    ..PdfFontEntryWeight::default()
                },
                bold: PdfFontEntryWeight {
                    bold: Some(PdfFontInfo::new(
                        "times".to_string(),
                        "bold".to_string(),
                        "bold".to_string(),
                        fonts.times_bold(),
                    )),
                    ..PdfFontEntryWeight::default()
                },
                italic: PdfFontEntryWeight {
                    normal: Some(PdfFontInfo::new(
                        "times".to_string(),
                        "italic".to_string(),
                        "normal".to_string(),
                        fonts.times_italic(),
                    )),
                    ..PdfFontEntryWeight::default()
                },
                bolditalic: PdfFontEntryWeight {
                    bold: Some(PdfFontInfo::new(
                        "times".to_string(),
                        "bolditalic".to_string(),
                        "bold".to_string(),
                        fonts.times_bold_italic(),
                    )),
                    ..PdfFontEntryWeight::default()
                },
            },
        ),
        (
            "courier".to_string(),
            PdfFontEntries {
                normal: PdfFontEntryWeight {
                    normal: Some(PdfFontInfo::new(
                        "courier".to_string(),
                        "normal".to_string(),
                        "normal".to_string(),
                        fonts.courier(),
                    )),
                    ..PdfFontEntryWeight::default()
                },
                bold: PdfFontEntryWeight {
                    bold: Some(PdfFontInfo::new(
                        "courier".to_string(),
                        "bold".to_string(),
                        "bold".to_string(),
                        fonts.courier_bold(),
                    )),
                    ..PdfFontEntryWeight::default()
                },
                italic: PdfFontEntryWeight {
                    normal: Some(PdfFontInfo::new(
                        "courier".to_string(),
                        "italic".to_string(),
                        "normal".to_string(),
                        fonts.courier_oblique(),
                    )),
                    ..PdfFontEntryWeight::default()
                },
                bolditalic: PdfFontEntryWeight {
                    bold: Some(PdfFontInfo::new(
                        "courier".to_string(),
                        "bolditalic".to_string(),
                        "bold".to_string(),
                        fonts.courier_bold_oblique(),
                    )),
                    ..PdfFontEntryWeight::default()
                },
            },
        ),
    ])
}

impl<'a> PdfNativeDocument<'a> {
    pub fn new(
        instance: &'a PdfNative,
        config: PdfNativeDocumentConfig,
    ) -> Result<Self, PdfiumError> {
        let mut document = instance.pdf.create_new_pdf()?;

        let paper_size =
            config
                .size
                .to_pdfium(config.orientation, config.units, config.device_scale);

        document.pages_mut().create_page_at_start(paper_size)?;

        let mut data = PdfNativeDocumentData::default();
        data.units = config.units;
        data.device_scale = config.device_scale;
        data.size = config.size;
        data.orientation = config.orientation;
        data.font = PdfFontInfo::new(
            "helvetica".to_string(),
            "normal".to_string(),
            "normal".to_string(),
            document.fonts_mut().helvetica(),
        );
        let fonts = default_fonts(&mut document);
        Ok(Self {
            pdf_: instance.clone(),
            path_: None,
            password_: None,
            document,
            data: Mutex::new(data),
            fonts,
        })
    }

    pub fn pages_info(&self) -> Vec<PdfNativePageInfo> {
        let pages = self.document.pages();
        let count = pages.len() as u32;
        let mut ret = Vec::with_capacity(count as usize);
        for (index, page) in pages.iter().enumerate() {
            ret.push(PdfNativePageInfo {
                index: index as u32,
                width: page.width().value,
                height: page.height().value,
            })
        }
        ret
    }

    pub fn device_scale(&self) -> f32 {
        self.data.lock().device_scale
    }

    pub fn save_to_file(&self, file: &str) -> Result<(), PdfiumError> {
        let path = PathBuf::from(file);
        self.document.save_to_file(&path)
    }

    pub fn save_to_bytes(&self) -> Result<Vec<u8>, PdfiumError> {
        self.document.save_to_bytes()
    }

    pub fn custom_fonts(&self) -> &HashMap<String, PdfFontEntries> {
        &self.fonts
    }

    pub fn set_font(&mut self, name: &str, style: &str, weight: &str) {
        if let Some(font) = self
            .get_font_internal(name, style, weight)
            .map(|font| font.clone())
        {
            self.data.lock().font = font;
        }
    }

    pub fn get_font(&self) -> MappedMutexGuard<PdfFontInfo> {
        MutexGuard::map(self.data.lock(), |lock| &mut lock.font)
    }
    fn get_font_internal(&self, name: &str, style: &str, weight: &str) -> Option<PdfFontInfo> {
        if let Some(entries) = self.fonts.get(name) {
            return if let Some(entry) = match style {
                "normal" => Some(&entries.normal),
                "bold" => Some(&entries.bold),
                "italic" => Some(&entries.italic),
                "bolditalic" => Some(&entries.bolditalic),
                _ => None,
            } {
                match weight {
                    "100" | "thin" => entry.thin.clone(),
                    "200" | "extralight" | "extra light" => entry.extra_light.clone(),
                    "300" | "light" => entry.extra_light.clone(),
                    "400" | "normal" => entry.normal.clone(),
                    "500" | "medium" => entry.medium.clone(),
                    "600" | "semi-bold" | "semi bold " => entry.semi_bold.clone(),
                    "700" | "bold" => entry.bold.clone(),
                    "800" | "extra-bold" | "extra bold" => entry.extra_bold.clone(),
                    "900" | "black" | "heavy" => entry.black.clone(),
                    "950" | "1000" | "extra-black" | "extra black" => entry.extra_black.clone(),
                    _ => None,
                }
            } else {
                None
            };
        }
        None
    }

    fn add_font_internal(
        &mut self,
        name: &str,
        style: &str,
        weight: &str,
        info: PdfFontInfo,
    ) -> bool {
        if !self.fonts.contains_key(name) {
            self.fonts
                .insert(name.to_string(), PdfFontEntries::default());
        }
        if let Some(entries) = self.fonts.get_mut(name) {
            return if let Some(entry) = match style {
                "normal" => Some(&mut entries.normal),
                "bold" => Some(&mut entries.bold),
                "italic" => Some(&mut entries.italic),
                "bolditalic" => Some(&mut entries.bolditalic),
                _ => None,
            } {
                match weight {
                    "100" | "thin" => {
                        entry.thin = Some(info);
                        true
                    }
                    "200" | "extralight" | "extra light" => {
                        entry.extra_light = Some(info);
                        true
                    }
                    "300" | "light" => {
                        entry.light = Some(info);
                        true
                    }
                    "400" | "normal" => {
                        entry.normal = Some(info);
                        true
                    }
                    "500" | "medium" => {
                        entry.medium = Some(info);
                        true
                    }
                    "600" | "semi-bold" | "semi bold " => {
                        entry.semi_bold = Some(info);
                        true
                    }
                    "700" | "bold" => {
                        entry.bold = Some(info);
                        true
                    }
                    "800" | "extra-bold" | "extra bold" => {
                        entry.extra_bold = Some(info);
                        true
                    }
                    "900" | "black" | "heavy" => {
                        entry.black = Some(info);
                        true
                    }
                    "950" | "1000" | "extra-black" | "extra black" => {
                        entry.extra_black = Some(info);
                        true
                    }
                    _ => false,
                }
            } else {
                false
            };
        }
        false
    }

    pub fn add_font(
        &mut self,
        path: &str,
        name: &str,
        style: &str,
        weight: &str,
        is_ttf: bool,
        is_cid_font: bool,
    ) -> bool {
        if style != "normal" && style != "bold" && style != "italic" && style != "bolditalic" {
            return false;
        }

        if let Ok(font) = if is_ttf {
            self.document
                .fonts_mut()
                .load_true_type_from_file(Path::new(path), is_cid_font)
        } else {
            self.document
                .fonts_mut()
                .load_true_type_from_file(Path::new(path), is_cid_font)
        } {
            let info = PdfFontInfo::new(
                name.to_string(),
                style.to_string(),
                weight.to_string(),
                font,
            );
            self.add_font_internal(name, style, weight, info)
        } else {
            false
        }
    }

    pub fn add_font_with_bytes(
        &mut self,
        font: &[u8],
        name: &str,
        style: &str,
        weight: &str,
        is_ttf: bool,
        is_cid_font: bool,
    ) -> bool {
        if style != "normal" && style != "bold" && style != "italic" && style != "bolditalic" {
            return false;
        }

        if let Ok(font) = if is_ttf {
            self.document
                .fonts_mut()
                .load_true_type_from_bytes(font, is_cid_font)
        } else {
            self.document
                .fonts_mut()
                .load_type1_from_bytes(font, is_cid_font)
        } {
            let info = PdfFontInfo::new(
                name.to_string(),
                style.to_string(),
                weight.to_string(),
                font,
            );
            self.add_font_internal(name, style, weight, info)
        } else {
            false
        }
    }

    pub fn add_page(
        &mut self,
        size: Option<PdfNativePaperSize>,
        orientation: Option<PdfNativeOrientation>,
    ) -> Result<(), PdfiumError> {
        let (index, units, device_scale) = {
            let lock = self.data.lock();
            (lock.current_page, lock.units, lock.device_scale)
        };

        let size = match size {
            None => PdfPagePaperSize::a4(),
            Some(size) => size.to_pdfium(
                orientation.unwrap_or(PdfNativeOrientation::Portrait),
                units,
                device_scale,
            ),
        };
        self.document.pages_mut().create_page_at_end(size).map(|_| {
            self.data.lock().current_page = index + 1;
            ()
        })
    }

    pub fn insert_page(&mut self, index: u32) -> Result<(), PdfiumError> {
        let (orientation, units, device_scale, size) = {
            let lock = self.data.lock();
            (lock.orientation, lock.units, lock.device_scale, lock.size)
        };

        self.document
            .pages_mut()
            .create_page_at_index(
                size.to_pdfium(orientation, units, device_scale),
                index as PdfPageIndex,
            )
            .map(|_| {
                self.data.lock().current_page = index as PdfPageIndex;
                ()
            })
    }

    pub fn delete_page(&mut self, index: u32) {
        let count = self.document.pages().len() as u32;
        if let Some(count) = count.checked_sub(1) {
            if index <= count {
                // todo update the current page index ?
                if let Ok(page) = self.document.pages_mut().get(index as PdfPageIndex) {
                    let _ = page.delete();
                }
            }
        }
    }

    pub fn set_page(&mut self, index: u32) {
        let count = self.document.pages().len() as u32;
        if let Some(count) = count.checked_sub(1) {
            if index <= count {
                self.data.lock().current_page = index as PdfPageIndex;
            }
        }
    }

    pub fn unit(&self) -> PdfNativeUnit {
        self.data.lock().units
    }

    pub fn current_page(&self) -> c_uint {
        self.data.lock().current_page as c_uint
    }

    pub fn count(&self) -> c_int {
        self.document.pages().len() as c_int
    }

    pub fn set_font_size(&mut self, size: f32) {
        self.data.lock().font_size = size;
    }

    pub fn font_size(&self) -> f32 {
        self.data.lock().font_size
    }

    pub fn font_color(&self) -> PdfColor {
        self.data.lock().text_color
    }

    pub fn set_font_color(&mut self, r: u8, g: u8, b: u8, a: u8) {
        self.data.lock().text_color = PdfColor::new(r, g, b, a);
    }

    pub fn draw_color(&self) -> PdfColor {
        self.data.lock().stroke_color
    }

    pub fn set_draw_color(&mut self, r: u8, g: u8, b: u8, a: u8) {
        self.data.lock().stroke_color = PdfColor::new(r, g, b, a);
    }

    pub fn line_width(&self) -> f32 {
        self.data.lock().line_width
    }

    pub fn set_line_width(&self, width: f32) {
        self.data.lock().line_width = width;
    }

    pub fn fill_color(&self) -> PdfColor {
        self.data.lock().fill_color
    }

    pub fn set_fill_color(&mut self, r: u8, g: u8, b: u8, a: u8) {
        self.data.lock().fill_color = PdfColor::new(r, g, b, a);
    }

    pub fn circle(
        &mut self,
        x: f32,
        y: f32,
        r: f32,
        style: PdfNativeStyle,
    ) -> Result<(), PdfiumError> {
        let data = self.data.lock();
        let index = data.current_page;
        let unit = data.units;
        let document = &mut self.document;
        let mut page = document.pages_mut().get(index)?;
        let (stroke_color, stroke_width, fill_color) = match style {
            PdfNativeStyle::S => (
                Some(data.stroke_color),
                Some(to_points(data.line_width, data.units)),
                None,
            ),
            PdfNativeStyle::F => (None, None, Some(data.fill_color)),
            PdfNativeStyle::FD | PdfNativeStyle::DF => (
                Some(data.stroke_color),
                Some(to_points(data.line_width, data.units)),
                Some(data.fill_color),
            ),
        };

        let circle = PdfPagePathObject::new_circle_at(
            document,
            to_points(x, unit),
            get_y(&page, 0., data.units) - to_points(y, unit),
            to_points(r, unit),
            stroke_color,
            stroke_width,
            fill_color,
        )?;

        page.objects_mut().add_path_object(circle)?;

        Ok(())
    }

    pub fn ellipse(
        &mut self,
        x: f32,
        y: f32,
        rx: f32,
        ry: f32,
        style: PdfNativeStyle,
    ) -> Result<(), PdfiumError> {
        let (index, units, stroke_color, fill_color, state, line_width) = {
            let lock = self.data.lock();
            (
                lock.current_page,
                lock.units,
                lock.stroke_color,
                lock.fill_color,
                lock.state,
                lock.line_width,
            )
        };

        let mut document = &mut self.document;
        let mut page = document.pages_mut().get(index)?;
        let (stroke_color, stroke_width, fill_color) = match style {
            PdfNativeStyle::S => (Some(stroke_color), Some(to_points(line_width, units)), None),
            PdfNativeStyle::F => (None, None, Some(fill_color)),
            PdfNativeStyle::FD | PdfNativeStyle::DF => (
                Some(stroke_color),
                Some(to_points(line_width, units)),
                Some(fill_color),
            ),
        };

        let ellipse = PdfPagePathObject::new_ellipse_at(
            document,
            to_points(x, units),
            get_y(&page, 0., units) - to_points(y, units),
            to_points(rx, units),
            to_points(ry, units),
            stroke_color,
            stroke_width,
            fill_color,
        )?;

        page.objects_mut().add_path_object(ellipse)?;

        Ok(())
    }

    pub fn add_text(
        &mut self,
        text: &str,
        x: f32,
        y: f32,
        options: PdfNativeTextOptions,
    ) -> Result<(), PdfiumError> {
        let document = &mut self.document;

        let (index, font_size, color, font, units, state) = {
            let mut lock = self.data.lock();

            if lock.font.token.is_none() {
                lock.font.load_token(document)
            }

            (
                lock.current_page,
                PdfPoints::new(lock.font_size),
                lock.text_color,
                lock.font.token.unwrap_or(document.fonts_mut().helvetica()),
                lock.units,
                lock.state,
            )
        };

        if options.align == PdfNativeTextAlignment::Justify {
            let mut page = document.pages_mut().get(index)?;
            let x = to_points(x, units);
            let y = get_y(&page, y, units);
            let _ = Self::draw_justified_text(
                document,
                page.objects_mut(),
                font,
                font_size,
                text,
                x,
                y,
                to_points(options.max_width as f32, units),
            )?;
            return Ok(());
        }

        let font_data = document
            .fonts_mut()
            .get(font)
            .and_then(|font| Some((font.ascent(font_size).ok()?, font.descent(font_size).ok()?)));

        if let Some((ascent, descent)) = font_data {
            let mut page = document.pages_mut().get(index)?;

            let mut text_object = PdfPageTextObject::new(document, text, font, font_size)?;

            let x = to_points(x, units);
            let y = get_y(&page, y, units);
            let width = text_object.width()?;
            let height = text_object.height()?;

            let x_aligned = match options.align {
                PdfNativeTextAlignment::Left => x,
                PdfNativeTextAlignment::Center => x - width / 2.0,
                PdfNativeTextAlignment::Right => x - width,
                PdfNativeTextAlignment::Justify => x,
            };

            let y_aligned = match options.baseline {
                PdfNativeTextBaseline::Alphabetic => y,
                PdfNativeTextBaseline::Top => y - ascent,
                PdfNativeTextBaseline::Middle => y - (height / 2.0),
                PdfNativeTextBaseline::Bottom => y - height,
                PdfNativeTextBaseline::Ideographic => y - (descent * 0.8),
                PdfNativeTextBaseline::Hanging => y - (ascent * 0.8),
            };

            unsafe {
                match options.angle.kind {
                    PdfNativeRotationOrMatrixKind::Rotation => {
                        if options.angle.data.rotation != 0. {
                            match options.rotation_direction {
                                PdfNativeRotationDirection::CW => {
                                    text_object
                                        .rotate_clockwise_degrees(options.angle.data.rotation)?;
                                }
                                PdfNativeRotationDirection::CCW => {
                                    text_object.rotate_counter_clockwise_degrees(
                                        options.angle.data.rotation,
                                    )?;
                                }
                            }
                        }
                    }
                    PdfNativeRotationOrMatrixKind::Matrix => {
                        text_object.apply_matrix(PdfMatrix::new(
                            options.angle.data.matrix[0],
                            options.angle.data.matrix[1],
                            options.angle.data.matrix[2],
                            options.angle.data.matrix[3],
                            options.angle.data.matrix[4],
                            options.angle.data.matrix[5],
                        ))?;
                    }
                }
            }

            if options.horizontal_scale > 0. {
                text_object.scale(options.horizontal_scale, 1.)?;
            }

            text_object.translate(x_aligned, y_aligned)?;
            text_object.set_fill_color(color)?;
            page.objects_mut().add_text_object(text_object)?;
        }

        Ok(())
    }

    fn draw_justified_text(
        document: &PdfDocument<'a>,
        objects: &mut PdfPageObjects<'a>,
        font: PdfFontToken,
        font_size: PdfPoints,
        text: &str,
        x: PdfPoints,
        y: PdfPoints,
        max_width: PdfPoints,
    ) -> Result<(), PdfiumError> {
        let words: Vec<&str> = text.split_whitespace().collect();
        let gaps = words.len().saturating_sub(1);

        if gaps == 0 || max_width <= PdfPoints::ZERO {
            let mut object = PdfPageTextObject::new(document, text, font, font_size)?;
            object.translate(x, y)?;
            let _ = objects.add_text_object(object)?;
            return Ok(());
        }

        let mut measure_obj = PdfPageTextObject::new(document, "", font, font_size)?;

        let mut width_cache = HashMap::new();
        let mut total_word_width = PdfPoints::ZERO;
        let mut word_widths = Vec::with_capacity(words.len());

        for &word in &words {
            let width = *width_cache.entry(word).or_insert_with(|| {
                measure_obj
                    .set_text(word)
                    .and_then(|_| {
                        let b = measure_obj.bounds()?;
                        Ok(b.right() - b.left())
                    })
                    .unwrap_or(PdfPoints::ZERO)
            });

            word_widths.push(width);
            total_word_width += width;
        }

        let extra_space = (max_width - total_word_width) / gaps as f32;

        let mut cursor_x = x;
        for (i, &word) in words.iter().enumerate() {
            let mut object = PdfPageTextObject::new(document, word, font, font_size)?;
            object.translate(cursor_x, y)?;

            objects.add_text_object(object)?;

            cursor_x += word_widths[i];
            if i < gaps {
                cursor_x += extra_space;
            }
        }

        Ok(())
    }

    pub fn add_pdf_image(
        &mut self,
        image: &mut PdfImage,
        x: f32,
        y: f32,
        width: Option<f32>,
        height: Option<f32>,
    ) -> Result<(), PdfiumError> {
        let (scale, index, units, state) = {
            let lock = self.data.lock();
            (lock.device_scale, lock.current_page, lock.units, lock.state)
        };
        let document = &mut self.document;
        let mut page = document.pages_mut().get(index)?;
        let y = get_y(&page, y, units);

        let dimensions = image.dimensions();
        let mut object = PdfPageImageObject::new(document)?;
        object.set_bitmap(&image.bitmap()?)?;
        let image_width = object.width()?;
        let image_height = object.height()?;
        let width = width
            .map(|v| to_points(v, units))
            .or_else(|| Some(
                PdfPoints::new(dimensions.0 as f32 / scale)
            ));

        let height = height
            .map(|v| to_points(v, units))
            .or_else(|| Some(
                PdfPoints::new(dimensions.1 as f32 / scale)
            ));

        let mut scaled_width = dimensions.0 as f32 / scale;
        let mut scaled_height = dimensions.1 as f32 / scale;
        match (width, height) {
            (Some(width), Some(height)) => {
                scaled_height = height.value;
                scaled_width = width.value;
                object.scale(width.value, height.value)?;
            }
            (Some(width), None) => {
                let aspect_ratio = image_height as f32 / image_width as f32;

                let height = width * aspect_ratio;

                scaled_height = height.value;
                scaled_width = width.value;

                object.scale(width.value, height.value)?;
            }
            (None, Some(height)) => {
                let aspect_ratio = image_height as f32 / image_width as f32;

                let width = height / aspect_ratio;

                scaled_height = height.value;
                scaled_width = width.value;

                object.scale(width.value, height.value)?;
            }
            (None, None) => {}
        };

        let _ = object.translate(to_points(x, units), y - PdfPoints::new(scaled_height))?;

        page.objects_mut().add_image_object(object)?;

        Ok(())
    }

    pub fn add_image(
        &mut self,
        image_data: &[u8],
        x: f32,
        y: f32,
        width: Option<f32>,
        height: Option<f32>,
    ) -> Result<(), PdfiumError> {
        let mut image = image::load_from_memory(image_data)
            .map_err(|e| PdfiumError::ImageError)
            .and_then(|image| PdfImage::new(&self.pdf_, image))?;

        self.add_pdf_image(&mut image, x, y, width, height)?;
        Ok(())
    }

    pub fn add_image_raw(
        &mut self,
        image_data: &[u8],
        image_width: u32,
        image_height: u32,
        x: f32,
        y: f32,
        width: Option<f32>,
        height: Option<f32>,
    ) -> Result<(), PdfiumError> {
        let mut image = image::RgbaImage::from_raw(image_width, image_height, image_data.to_vec())
            .ok_or(PdfiumError::ImageError)
            .and_then(|image| PdfImage::new(&self.pdf_, image::DynamicImage::from(image)))?;
        self.add_pdf_image(&mut image, x, y, width, height)?;
        Ok(())
    }

    pub fn current_page_width(&self) -> f32 {
        let (index, unit) = {
            let data = self.data.lock();
            (data.current_page, data.units)
        };
        self.document
            .pages()
            .get(index)
            .map(|value| to_unit(value.width(), unit))
            .unwrap_or_default()
    }

    pub fn current_page_height(&self) -> f32 {
        let (index, unit) = {
            let data = self.data.lock();
            (data.current_page, data.units)
        };
        self.document
            .pages()
            .get(index)
            .map(|value| to_unit(value.height(), unit))
            .unwrap_or_default()
    }

    pub fn page_height_px(&self, index: c_int, density: f32) -> f32 {
        PdfPageIndex::try_from(index)
            .map_err(|_| PdfiumError::PageIndexOutOfBounds)
            .map_or(0., |index| {
                self.document
                    .pages()
                    .get(index)
                    .map(|page| page.height().value * density)
                    .unwrap_or_default()
            })
    }
    pub fn page_width_px(&self, index: c_int, density: f32) -> f32 {
        PdfPageIndex::try_from(index)
            .map_err(|_| PdfiumError::PageIndexOutOfBounds)
            .map_or(0., |index| {
                self.document
                    .pages()
                    .get(index)
                    .map(|page| page.width().value * density)
                    .unwrap_or_default()
            })
    }
    pub fn page_height_point(&self, index: c_int) -> f32 {
        PdfPageIndex::try_from(index)
            .map_err(|_| PdfiumError::PageIndexOutOfBounds)
            .map_or(0., |index| {
                self.document
                    .pages()
                    .get(index)
                    .map(|page| page.height().value)
                    .unwrap_or_default()
            })
    }
    pub fn page_width_point(&self, index: c_int) -> f32 {
        PdfPageIndex::try_from(index)
            .map_err(|_| PdfiumError::PageIndexOutOfBounds)
            .map_or(0., |index| {
                self.document
                    .pages()
                    .get(index)
                    .map(|page| page.width().value)
                    .unwrap_or_default()
            })
    }

    pub fn rect(
        &mut self,
        x: f32,
        y: f32,
        width: f32,
        height: f32,
        style: PdfNativeStyle,
    ) -> Result<(), PdfiumError> {
        let data = self.data.lock();
        let index = data.current_page;
        let unit = data.units;
        let document = &mut self.document;
        let mut page = document.pages_mut().get(index)?;
        let (stroke_color, stroke_width, fill_color) = match style {
            PdfNativeStyle::S => (
                Some(data.stroke_color),
                Some(to_points(data.line_width, data.units)),
                None,
            ),
            PdfNativeStyle::F => (None, None, Some(data.fill_color)),
            PdfNativeStyle::FD | PdfNativeStyle::DF => (
                Some(data.stroke_color),
                Some(to_points(data.line_width, data.units)),
                Some(data.fill_color),
            ),
        };

        let x = to_points(x, unit);
        let y = get_y(&page, 0., data.units) - to_points(y, unit);
        let width = to_points(width, unit);
        let height = to_points(height, unit);
        let rect = PdfPagePathObject::new_rect(
            document,
            PdfRect::new(
                PdfPoints::from(y),
                PdfPoints::from(x),
                PdfPoints::from(y + height),
                PdfPoints::from(x + width),
            ),
            stroke_color,
            stroke_width,
            fill_color,
        )?;

        page.objects_mut().add_path_object(rect)?;

        Ok(())
    }

    pub fn rounded_rect(
        &mut self,
        x: f32,
        y: f32,
        width: f32,
        height: f32,
        rx: f32,
        ry: f32,
        style: PdfNativeStyle,
    ) -> Result<(), PdfiumError> {
        if rx <= 0. || ry <= 0. {
            return Ok(());
        }
        let data = self.data.lock();
        let index = data.current_page;
        let unit = data.units;
        let document = &mut self.document;
        let mut page = document.pages_mut().get(index)?;
        let (stroke_color, stroke_width, fill_color) = match style {
            PdfNativeStyle::S => (
                Some(data.stroke_color),
                Some(to_points(data.line_width, data.units)),
                None,
            ),
            PdfNativeStyle::F => (None, None, Some(data.fill_color)),
            PdfNativeStyle::FD | PdfNativeStyle::DF => (
                Some(data.stroke_color),
                Some(to_points(data.line_width, data.units)),
                Some(data.fill_color),
            ),
        };

        let mut path = PdfPagePathObject::new(
            document,
            PdfPoints::ZERO,
            PdfPoints::ZERO,
            stroke_color,
            stroke_width,
            fill_color,
        )?;

        let x = to_points(x, unit);
        let y = get_y(&page, y, data.units);
        let width = to_points(width, unit);
        let height = to_points(height, unit);
        let rx = to_points(rx, unit);
        let ry = to_points(ry, unit);

        let rx = rx.min(width / 2.0);
        let ry = ry.min(height / 2.0);

        let ox = rx * BEZIER_KAPPA;
        let oy = ry * BEZIER_KAPPA;

        path.move_to(x + rx, y)?;

        path.line_to(x + width - rx, y)?;

        path.bezier_to(
            x + width - rx + ox,
            y,
            x + width,
            y + ry - oy,
            x + width,
            y + ry,
        )?;

        path.line_to(x + width, y + height - ry)?;

        path.bezier_to(
            x + width,
            y + height - ry + oy,
            x + width - rx + ox,
            y + height,
            x + width - rx,
            y + height,
        )?;

        path.line_to(x + rx, y + height)?;

        path.bezier_to(
            x + rx - ox,
            y + height,
            x,
            y + height - ry + oy,
            x,
            y + height - ry,
        )?;

        path.line_to(x, y + ry)?;

        path.bezier_to(x, y + ry - oy, x + rx - ox, y, x + rx, y)?;

        path.close_path()?;

        page.objects_mut().add_path_object(path)?;

        Ok(())
    }

    pub fn table(&mut self, options: &PdfTable) -> Result<(PdfPoints, PdfPoints), PdfiumError> {
        // let mut data = self.data.lock();
        // let index = data.current_page;
        // let document = &mut self.document;
        // let page = document.pages_mut().get(index)?;
        draw_table(self, options)
    }

    pub fn render_with_rect(
        &self,
        index: c_int,
        viewport_width: i32, // Size of Android bitmap (output)
        viewport_height: i32,
        x: i32, // Region of the PDF to show
        y: i32,
        width: i32,
        height: i32,
        scale: f32, // Zoom level
        buffer: &mut [u8],
    ) -> Result<(), PdfiumError> {
        let pages = self.document.pages();
        let index = PdfPageIndex::try_from(index).map_err(|_| PdfiumError::PageIndexOutOfBounds)?;
        let page = pages.get(index)?;

        let device_scale = self.data.lock().device_scale;

        let pdf_to_px_x = scale * device_scale;
        let pdf_to_px_y = scale * device_scale;

        let transform = PdfMatrix::new(
            pdf_to_px_x,
            0.0,
            0.0,
            pdf_to_px_y,
            -x as f32 * pdf_to_px_x,
            -y as f32 * pdf_to_px_y,
        );

        let mut config = PdfRenderConfig::default()
            .set_target_size(viewport_width, viewport_height)
            .apply_matrix(transform)?
            .render_form_data(true)
            .render_annotations(true)
            .use_lcd_text_rendering(true)
            .clear_before_rendering(true)
            .clip(0, 0, viewport_width, viewport_height);

        #[cfg(target_os = "ios")]
        {
            config = config.set_reverse_byte_order(false);
        }

        let mut bitmap = unsafe {
            PdfBitmap::from_bytes(
                viewport_width,
                viewport_height,
                PdfBitmapFormat::default(),
                buffer,
                self.pdf_.pdf.bindings(),
            )?
        };

        page.render_into_bitmap_with_config(&mut bitmap, &config)?;
        Ok(())
    }

    pub fn render(&self, index: c_int, width: i32, height: i32, buffer: &mut [u8]) {
        if let Ok(page) = PdfPageIndex::try_from(index)
            .map_err(|_| PdfiumError::PageIndexOutOfBounds)
            .and_then(|index| self.document.pages().get(index))
        {
            let mut config = PdfRenderConfig::default()
                .set_target_size(width, height)
                .render_form_data(true)
                .clear_before_rendering(true);

            // ensure it uses rgba for non ios
            #[cfg(target_os = "ios")]
            {
                config = config.set_reverse_byte_order(false);
            }

            let bitmap = unsafe {
                PdfBitmap::from_bytes(
                    width,
                    height,
                    PdfBitmapFormat::default(),
                    buffer,
                    self.pdf_.pdf.bindings(),
                )
            };

            if let Ok(mut bitmap) = bitmap {
                let _ = page.render_into_bitmap_with_config(&mut bitmap, &config);
            }
        }
    }

    pub fn render_to_buffer(
        &self,
        index: c_int,
        width: i32,
        height: i32,
        flip_vertical: bool,
        flip_horizontal: bool,
    ) -> Result<(u32, u32, Vec<u8>), PdfiumError> {
        let pages = self.document.pages();
        let index = PdfPageIndex::try_from(index).map_err(|_| PdfiumError::PageIndexOutOfBounds)?;
        let page = pages.get(index)?;

        let mut config = PdfRenderConfig::default()
            .set_target_size(width, height)
            .render_form_data(true)
            .clear_before_rendering(true);

        if flip_horizontal {
            config = config.flip_horizontally()?
        }

        if flip_vertical {
            config = config.flip_vertically()?
        }

        // ensure it uses rgba for non ios
        #[cfg(target_os = "ios")]
        {
            config = config.set_reverse_byte_order(false);
        }

        let mut buffer = vec![255_u8; width as usize * height as usize * 4];

        {
            let bitmap = unsafe {
                PdfBitmap::from_bytes(
                    width,
                    height,
                    PdfBitmapFormat::default(),
                    buffer.as_mut_slice(),
                    self.pdf_.pdf.bindings(),
                )
            };

            if let Ok(mut bitmap) = bitmap {
                let _ = page.render_into_bitmap_with_config(&mut bitmap, &config);
            }
        }

        Ok((width as u32, height as u32, buffer))
    }

    pub fn render_to_buffers(
        &self,
        indices: &[c_int],
        width: i32,
        height: i32,
        flip_vertical: bool,
        flip_horizontal: bool,
    ) -> Result<Vec<(u32, u32, Vec<u8>)>, PdfiumError> {
        let pages = self.document.pages();

        let page_indices: Result<Vec<PdfPageIndex>, PdfiumError> = indices
            .iter()
            .map(|index| {
                PdfPageIndex::try_from(*index).map_err(|_| PdfiumError::PageIndexOutOfBounds)
            })
            .collect();

        page_indices?
            .into_iter()
            .map(|index| {
                let page = pages.get(index)?;

                let mut config = PdfRenderConfig::default()
                    .set_target_size(width, height)
                    .render_form_data(true)
                    .clear_before_rendering(true);

                if flip_horizontal {
                    config = config.flip_horizontally()?
                }

                if flip_vertical {
                    config = config.flip_vertically()?
                }

                // ensure it uses rgba for non ios
                #[cfg(target_os = "ios")]
                {
                    config = config.set_reverse_byte_order(false);
                }

                let mut buffer = vec![255_u8; width as usize * height as usize * 4];

                {
                    let bitmap = unsafe {
                        PdfBitmap::from_bytes(
                            width,
                            height,
                            PdfBitmapFormat::default(),
                            buffer.as_mut_slice(),
                            self.pdf_.pdf.bindings(),
                        )
                    };

                    if let Ok(mut bitmap) = bitmap {
                        let _ = page.render_into_bitmap_with_config(&mut bitmap, &config);
                    }
                }

                Ok((width as u32, height as u32, buffer))
            })
            .collect::<Result<Vec<_>, PdfiumError>>()
    }

    pub fn render_with_size(
        &self,
        index: c_int,
        viewport_width: f32,
        viewport_height: f32,
        scale_x: f32,
        scale_y: f32,
        x: f32,
        y: f32,
        width: f32,
        height: f32,
        buffer: &mut [u8],
    ) -> Result<(), PdfiumError> {
        let pages = self.document.pages();
        let index = PdfPageIndex::try_from(index).map_err(|_| PdfiumError::PageIndexOutOfBounds)?;
        let page = pages.get(index)?;

        let logical_to_pdf_scale_x = page.width().value / viewport_width;
        let logical_to_pdf_scale_y = page.height().value / viewport_height;

        let px_width = (width * scale_x).round() as i32;
        let px_height = (height * scale_y).round() as i32;

        let transform = PdfMatrix::new(scale_x, 0.0, 0.0, scale_y, -x * scale_x, -y * scale_y);

        let mut config = PdfRenderConfig::default()
            .scale_page_width_by_factor(logical_to_pdf_scale_x)
            .scale_page_height_by_factor(logical_to_pdf_scale_y)
            .apply_matrix(transform)?
            .render_form_data(false)
            .render_annotations(true)
            .use_lcd_text_rendering(true)
            .clear_before_rendering(true)
            .clip(0, 0, px_width, px_height);

        // ensure it uses rgba for non ios
        #[cfg(target_os = "ios")]
        {
            config = config.set_reverse_byte_order(false);
        }

        let mut bitmap = unsafe {
            PdfBitmap::from_bytes(
                px_width,
                px_height,
                PdfBitmapFormat::default(),
                buffer,
                self.pdf_.pdf.bindings(),
            )?
        };

        page.render_into_bitmap_with_config(&mut bitmap, &config)?;
        Ok(())
    }

    pub fn render_with_size_to_buffer(
        &self,
        index: c_int,
        viewport_width: f32,
        viewport_height: f32,
        scale_x: f32,
        scale_y: f32,
        x: f32,
        y: f32,
        width: f32,
        height: f32,
        flip_vertical: bool,
        flip_horizontal: bool,
    ) -> Result<(u32, u32, Vec<u8>), PdfiumError> {
        let pages = self.document.pages();
        let index = PdfPageIndex::try_from(index).map_err(|_| PdfiumError::PageIndexOutOfBounds)?;
        let page = pages.get(index)?;

        let pdf_scale_x = page.width().value / viewport_width;
        let pdf_scale_y = page.height().value / viewport_height;

        let pdf_x = x * pdf_scale_x;
        let pdf_y = y * pdf_scale_y;

        let pdf_width = width * pdf_scale_x;
        let pdf_height = height * pdf_scale_y;

        let px_width = (pdf_width * scale_x).round() as i32;
        let px_height = (pdf_height * scale_y).round() as i32;

        let mut buffer = vec![255_u8; px_width as usize * px_height as usize * 4];

        let mut flip_scale_x = scale_x;
        let mut flip_scale_y = scale_y;

        if flip_horizontal {
            flip_scale_x = -scale_x;
        }

        if flip_vertical {
            flip_scale_y = -scale_y;
        }

        let transform = PdfMatrix::new(
            flip_scale_x,
            0.0,
            0.0,
            flip_scale_y,
            -pdf_x * scale_x,
            if flip_scale_y < 0.0 {
                -pdf_y * scale_y + pdf_height
            } else {
                -pdf_y * scale_y
            },
        );

        let mut config = PdfRenderConfig::default()
            .apply_matrix(transform)?
            .render_form_data(false)
            .render_annotations(true)
            .use_lcd_text_rendering(true)
            .clear_before_rendering(true)
            .clip(0, 0, px_width, px_height);

        // ensure it uses rgba for non ios
        #[cfg(target_os = "ios")]
        {
            config = config.set_reverse_byte_order(false);
        }

        {
            let mut bitmap = unsafe {
                PdfBitmap::from_bytes(
                    px_width,
                    px_height,
                    PdfBitmapFormat::default(),
                    buffer.as_mut_slice(),
                    self.pdf_.pdf.bindings(),
                )?
            };

            page.render_into_bitmap_with_config(&mut bitmap, &config)?;
        }

        Ok((px_width as u32, px_height as u32, buffer))
    }

    pub fn render_with_size_to_buffers(
        &self,
        indices: &[c_int],
        viewport_width: f32,
        viewport_height: f32,
        scale_x: f32,
        scale_y: f32,
        x: f32,
        y: f32,
        width: f32,
        height: f32,
        flip_vertical: bool,
        flip_horizontal: bool,
    ) -> Result<Vec<(u32, u32, Vec<u8>)>, PdfiumError> {
        let pages = self.document.pages();

        let page_indices: Result<Vec<PdfPageIndex>, PdfiumError> = indices
            .iter()
            .map(|index| {
                PdfPageIndex::try_from(*index).map_err(|_| PdfiumError::PageIndexOutOfBounds)
            })
            .collect();

        page_indices?
            .into_iter()
            .map(|index| {
                let page = pages.get(index)?;

                let pdf_scale_x = page.width().value / viewport_width;
                let pdf_scale_y = page.height().value / viewport_height;

                let pdf_x = x * pdf_scale_x;
                let pdf_y = y * pdf_scale_y;

                let pdf_width = width * pdf_scale_x;
                let pdf_height = height * pdf_scale_y;

                let px_width = (pdf_width * scale_x).round() as i32;
                let px_height = (pdf_height * scale_y).round() as i32;

                let mut buffer = vec![255_u8; px_width as usize * px_height as usize * 4];

                let mut flip_scale_x = scale_x;
                let mut flip_scale_y = scale_y;

                if flip_horizontal {
                    flip_scale_x = -scale_x;
                }

                if flip_vertical {
                    flip_scale_y = -scale_y;
                }

                let transform = PdfMatrix::new(
                    flip_scale_x,
                    0.0,
                    0.0,
                    flip_scale_y,
                    -pdf_x * scale_x,
                    if flip_scale_y < 0.0 {
                        -pdf_y * scale_y + pdf_height
                    } else {
                        -pdf_y * scale_y
                    },
                );

                let mut config = PdfRenderConfig::default()
                    .apply_matrix(transform)?
                    .render_form_data(false)
                    .render_annotations(true)
                    .use_lcd_text_rendering(true)
                    .clear_before_rendering(true)
                    .clip(0, 0, px_width, px_height);

                // ensure it uses rgba for non ios
                #[cfg(target_os = "ios")]
                {
                    config = config.set_reverse_byte_order(false);
                }

                {
                    let mut bitmap = unsafe {
                        PdfBitmap::from_bytes(
                            px_width,
                            px_height,
                            PdfBitmapFormat::default(),
                            buffer.as_mut_slice(),
                            self.pdf_.pdf.bindings(),
                        )?
                    };

                    page.render_into_bitmap_with_config(&mut bitmap, &config)?;
                }

                Ok((px_width as u32, px_height as u32, buffer))
            })
            .collect::<Result<Vec<_>, PdfiumError>>()
    }

    pub fn render_with_size_to_buffer_with_tile(
        &self,
        index: c_int,
        tile_width: u32,
        tile_height: u32,
        viewport_width: f32,
        viewport_height: f32,
        scale: f32,
        row: u32,
        column: u32,
    ) -> Result<(u32, u32, Vec<u8>), PdfiumError> {
        let pages = self.document.pages();
        let index = PdfPageIndex::try_from(index).map_err(|_| PdfiumError::PageIndexOutOfBounds)?;
        let page = pages.get(index)?;

        let page_width = page.width().value;
        let page_height = page.height().value;

        // Step 1: Convert tile position (row, column) into viewport space
        let x = column as f32 * tile_width as f32;
        let y = row as f32 * tile_height as f32;

        // Compute edge tile sizes in float to preserve fractional remainder
        let width = (viewport_width - x).max(0.0).min(tile_width as f32);
        let height = (viewport_height - y).max(0.0).min(tile_height as f32);

        // Step 2: Convert from viewport space to PDF coordinates
        let pdf_scale_x = page_width / viewport_width;
        let pdf_scale_y = page_height / viewport_height;

        let pdf_x = x * pdf_scale_x;
        // Convert from top-left origin (viewport) to bottom-left origin (PDF)
        let pdf_y = (viewport_height - y - height) * pdf_scale_y;

        let pdf_width = width * pdf_scale_x;
        let pdf_height = height * pdf_scale_y;

        // Step 3: Convert to pixel size (include device scale, ceil to avoid gaps; ensure at least 1px)
        let device_scale = self.data.lock().device_scale;
        let effective_scale = scale * device_scale;
        let px_width = ((pdf_width * effective_scale).ceil() as i32).max(1);
        let px_height = ((pdf_height * effective_scale).ceil() as i32).max(1);

        let mut buffer = vec![255_u8; (px_width * px_height * 4) as usize];

        // Step 4: Build the transform
        let transform = PdfMatrix::new(
            effective_scale, // scaleX
            0.0,
            0.0,
            effective_scale,          // scaleY
            -pdf_x * effective_scale, // translateX
            -pdf_y * effective_scale, // translateY
        );

        let mut config = PdfRenderConfig::default()
            .apply_matrix(transform)?
            .render_form_data(false)
            .render_annotations(true)
            .use_lcd_text_rendering(true)
            .clear_before_rendering(true)
            .clip(0, 0, px_width, px_height);

        #[cfg(target_os = "ios")]
        {
            config = config.set_reverse_byte_order(false);
        }

        {
            let mut bitmap = unsafe {
                PdfBitmap::from_bytes(
                    px_width,
                    px_height,
                    PdfBitmapFormat::default(),
                    buffer.as_mut_slice(),
                    self.pdf_.pdf.bindings(),
                )?
            };

            page.render_into_bitmap_with_config(&mut bitmap, &config)?;
        }

        Ok((px_width as u32, px_height as u32, buffer))
    }

    /// Renders a tile given a viewport-space offset (top-left origin) and size.
    ///
    /// Parameters:
    /// - viewport_width/height: logical viewport/canvas size that the offset+size are based on (typically the page size in PDF units).
    /// - scale: zoom factor to apply (will be multiplied by device scale internally).
    /// - x, y: top-left offset of the tile within the viewport (top-left origin).
    /// - width, height: size of the tile within the viewport.
    pub fn render_with_viewport_offset_and_size_to_buffer(
        &self,
        index: c_int,
        viewport_width: f32,
        viewport_height: f32,
        scale: f32,
        x: f32,
        y: f32,
        width: f32,
        height: f32,
    ) -> Result<(u32, u32, Vec<u8>), PdfiumError> {
        let pages = self.document.pages();
        let index = PdfPageIndex::try_from(index).map_err(|_| PdfiumError::PageIndexOutOfBounds)?;
        let page = pages.get(index)?;

        let page_width = page.width().value;
        let page_height = page.height().value;

        // Convert from viewport (top-left origin) to PDF coordinates (bottom-left origin)
        let pdf_scale_x = page_width / viewport_width;
        let pdf_scale_y = page_height / viewport_height;

        let pdf_x = x * pdf_scale_x;
        let pdf_y = (viewport_height - y - height) * pdf_scale_y;

        let pdf_width = width * pdf_scale_x;
        let pdf_height = height * pdf_scale_y;

        // Convert to pixel size using effective scale (zoom * device scale)
        let device_scale = self.data.lock().device_scale;
        let effective_scale = scale; //* device_scale;
        let px_width = ((pdf_width * effective_scale).ceil() as i32).max(1);
        let px_height = ((pdf_height * effective_scale).ceil() as i32).max(1);

        let mut buffer = vec![255_u8; (px_width * px_height * 4) as usize];

        // Build transform to render the requested rect into the pixel buffer
        let transform = PdfMatrix::new(
            effective_scale,
            0.0,
            0.0,
            effective_scale,
            -pdf_x * effective_scale,
            -pdf_y * effective_scale,
        );

        let mut config = PdfRenderConfig::default()
            .apply_matrix(transform)?
            .render_form_data(false)
            .render_annotations(true)
            .use_lcd_text_rendering(true)
            .clear_before_rendering(true)
            .clip(0, px_height, px_width, 0);

        #[cfg(target_os = "ios")]
        {
            config = config.set_reverse_byte_order(false);
        }

        {
            let mut bitmap = unsafe {
                PdfBitmap::from_bytes(
                    px_width,
                    px_height,
                    PdfBitmapFormat::default(),
                    buffer.as_mut_slice(),
                    self.pdf_.pdf.bindings(),
                )?
            };

            page.render_into_bitmap_with_config(&mut bitmap, &config)?;
        }

        Ok((px_width as u32, px_height as u32, buffer))
    }
}
