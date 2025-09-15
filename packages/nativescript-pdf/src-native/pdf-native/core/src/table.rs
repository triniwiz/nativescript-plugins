use crate::document::{PdfNativeDocument, PdfNativeState, PdfNativeUnit};
use crate::utils::{get_y_points, to_points, to_unit};
use pdfium_render::prelude::*;
use std::cmp::PartialEq;
use std::collections::HashMap;
use std::ffi::{c_char, c_void, CStr, CString};
use std::fmt::{Debug, Formatter};

#[repr(C)]
#[derive(Debug, Clone, Copy, PartialEq, Eq, Default)]
pub enum PdfNativeShowFoot {
    #[default]
    EveryPage,
    LastPage,
    Never,
}

impl TryFrom<i32> for PdfNativeShowFoot {
    type Error = &'static str;
    fn try_from(value: i32) -> Result<Self, Self::Error> {
        match value {
            0 => Ok(Self::EveryPage),
            1 => Ok(Self::LastPage),
            2 => Ok(Self::Never),
            _ => Err("Invalid value!"),
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy, PartialEq, Eq, Default)]
pub enum PdfNativeShowHead {
    #[default]
    EveryPage,
    FirstPage,
    Never,
}

impl TryFrom<i32> for PdfNativeShowHead {
    type Error = &'static str;

    fn try_from(value: i32) -> Result<Self, Self::Error> {
        match value {
            0 => Ok(Self::EveryPage),
            1 => Ok(Self::FirstPage),
            2 => Ok(Self::Never),
            _ => Err("Invalid value!"),
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy, Default)]
pub enum PdfNativePageBreak {
    #[default]
    Auto,
    Avoid,
    Always,
}

impl TryFrom<i32> for PdfNativePageBreak {
    type Error = &'static str;

    fn try_from(value: i32) -> Result<Self, Self::Error> {
        match value {
            0 => Ok(Self::Auto),
            1 => Ok(Self::Avoid),
            2 => Ok(Self::Always),
            _ => Err("Invalid value!"),
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PdfNativeTableTheme {
    Striped,
    Grid,
    Plain,
}

impl Default for PdfNativeTableTheme {
    fn default() -> Self {
        PdfNativeTableTheme::Striped
    }
}

impl TryFrom<i32> for PdfNativeTableTheme {
    type Error = &'static str;

    fn try_from(value: i32) -> Result<Self, Self::Error> {
        match value {
            0 => Ok(Self::Striped),
            1 => Ok(Self::Grid),
            2 => Ok(Self::Plain),
            _ => Err("Invalid value!"),
        }
    }
}

#[derive(Debug, Clone, Hash, Eq, PartialEq)]
pub enum ColumnKey {
    Index(usize),
    DataKey(String),
}

#[derive(Debug, Clone)]
pub struct ColumnDef {
    pub header: Option<String>,
    pub data_key: Option<String>,
}

#[derive(Debug, Clone)]
pub enum TableCellOrString {
    String(String),
    Cell(TableCell),
}

impl From<&str> for TableCellOrString {
    fn from(value: &str) -> Self {
        TableCellOrString::String(value.to_string())
    }
}

impl From<String> for TableCellOrString {
    fn from(value: String) -> Self {
        TableCellOrString::String(value)
    }
}

impl From<TableCell> for TableCellOrString {
    fn from(value: TableCell) -> Self {
        TableCellOrString::Cell(value)
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PdfNativeFontFamily {
    Helvetica,
    Times,
    Courier,
}

impl Default for PdfNativeFontFamily {
    fn default() -> Self {
        PdfNativeFontFamily::Helvetica
    }
}

impl TryFrom<i32> for PdfNativeFontFamily {
    type Error = &'static str;

    fn try_from(value: i32) -> Result<Self, Self::Error> {
        match value {
            0 => Ok(Self::Helvetica),
            1 => Ok(Self::Times),
            2 => Ok(Self::Courier),
            _ => Err("Invalid value!"),
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PdfNativeFontStyle {
    Normal,
    Bold,
    Italic,
    BoldItalic,
}

impl TryFrom<i32> for PdfNativeFontStyle {
    type Error = &'static str;

    fn try_from(value: i32) -> Result<Self, Self::Error> {
        match value {
            0 => Ok(Self::Normal),
            1 => Ok(Self::Bold),
            2 => Ok(Self::Italic),
            3 => Ok(Self::BoldItalic),
            _ => Err("Invalid value!"),
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy)]
pub enum PdfNativeOverflow {
    LineBreak,
    Ellipsize,
    Visible,
    Hidden,
}

impl TryFrom<i32> for PdfNativeOverflow {
    type Error = &'static str;

    fn try_from(value: i32) -> Result<Self, Self::Error> {
        match value {
            0 => Ok(Self::LineBreak),
            1 => Ok(Self::Ellipsize),
            2 => Ok(Self::Visible),
            3 => Ok(Self::Hidden),
            _ => Err("Invalid value!"),
        }
    }
}

#[derive(Debug, Clone, Copy)]
pub enum CellWidth {
    Auto,
    Wrap,
    Fixed(PdfPoints),
}

#[repr(C)]
#[derive(Debug, Clone, Copy)]
pub enum CCellWidthType {
    Auto,
    Wrap,
    Fixed,
}

#[repr(C)]
#[derive(Debug, Clone, Copy)]
pub struct CCellWidth {
    pub type_: CCellWidthType,
    pub value: CPdfNativePoints,
}

impl CCellWidth {
    pub fn auto() -> Self {
        Self {
            type_: CCellWidthType::Auto,
            value: CPdfNativePoints {
                value: 0.0,
                unit: PdfNativeUnit::Points,
                changed: true,
            },
        }
    }

    pub fn wrap() -> Self {
        Self {
            type_: CCellWidthType::Wrap,
            value: CPdfNativePoints {
                value: 0.0,
                unit: PdfNativeUnit::Points,
                changed: true,
            },
        }
    }

    pub fn fixed(value: CPdfNativePoints) -> Self {
        Self {
            type_: CCellWidthType::Fixed,
            value,
        }
    }
}
impl Default for CCellWidth {
    fn default() -> Self {
        Self::auto()
    }
}
impl Into<CellWidth> for CCellWidth {
    fn into(self) -> CellWidth {
        match self.type_ {
            CCellWidthType::Auto => CellWidth::Auto,
            CCellWidthType::Wrap => CellWidth::Wrap,
            CCellWidthType::Fixed => CellWidth::Fixed(self.value.into()),
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy, PartialEq)]
pub enum CHorizontalAlign {
    Left,
    Center,
    Right,
}

impl TryFrom<i32> for CHorizontalAlign {
    type Error = &'static str;

    fn try_from(value: i32) -> Result<Self, Self::Error> {
        match value {
            0 => Ok(Self::Left),
            1 => Ok(Self::Center),
            2 => Ok(Self::Right),
            _ => Err("Invalid value!"),
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy, PartialEq)]
pub enum CVerticalAlign {
    Top,
    Middle,
    Bottom,
}

impl TryFrom<i32> for CVerticalAlign {
    type Error = &'static str;

    fn try_from(value: i32) -> Result<Self, Self::Error> {
        match value {
            0 => Ok(Self::Top),
            1 => Ok(Self::Middle),
            2 => Ok(Self::Bottom),
            _ => Err("Invalid value!"),
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy)]
pub struct CPdfNativePoints {
    pub value: f32,
    pub unit: PdfNativeUnit,
    pub(crate) changed: bool,
}

impl CPdfNativePoints {
    pub fn new(value: f32, unit: PdfNativeUnit) -> Self {
        CPdfNativePoints {
            value,
            unit,
            changed: true,
        }
    }

    pub fn new_state(value: f32, unit: PdfNativeUnit, state: bool) -> Self {
        CPdfNativePoints {
            value,
            unit,
            changed: state,
        }
    }
}

impl Into<PdfPoints> for CPdfNativePoints {
    fn into(self) -> PdfPoints {
        match self.unit {
            PdfNativeUnit::Mm => PdfPoints::from_mm(self.value),
            PdfNativeUnit::Points => PdfPoints::new(self.value),
            PdfNativeUnit::Cm => PdfPoints::from_cm(self.value),
            PdfNativeUnit::Inches => PdfPoints::from_inches(self.value),
        }
    }
}

#[repr(C)]
#[derive(Clone, Copy, Debug)]
pub enum CPdfNativePointsOptionalType {
    None,
    Some,
}

#[repr(C)]
#[derive(Clone, Copy)]
pub union CPdfNativePointsOptionalData {
    pub value: CPdfNativePoints,
}

#[repr(C)]
#[derive(Clone, Copy)]
pub struct CPdfNativePointsOptional {
    pub kind: CPdfNativePointsOptionalType,
    pub data: CPdfNativePointsOptionalData,
}

impl Debug for CPdfNativePointsOptional {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        let mut info = f.debug_struct("CPdfNativePointsOptional");
        info.field("kind", &self.kind);

        if let CPdfNativePointsOptionalType::Some = self.kind {
            unsafe {
                info.field("data", &self.data.value);
            }
        } else {
            info.field("data", &"");
        }
        info.finish()
    }
}

impl Into<Option<PdfPoints>> for CPdfNativePointsOptional {
    fn into(self) -> Option<PdfPoints> {
        unsafe {
            match self.kind {
                CPdfNativePointsOptionalType::None => None,
                CPdfNativePointsOptionalType::Some => Some(self.data.value.into()),
            }
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy)]
pub struct CPdfNativePadding {
    pub top: CPdfNativePoints,
    pub right: CPdfNativePoints,
    pub bottom: CPdfNativePoints,
    pub left: CPdfNativePoints,
}

impl CPdfNativePadding {
    pub fn all(p: CPdfNativePoints) -> Self {
        Self {
            top: p,
            right: p,
            bottom: p,
            left: p,
        }
    }
    pub fn merge(&mut self, other: &CPdfNativePadding) {
        if other.top.changed {
            self.top = other.top;
        }
        if other.bottom.changed {
            self.bottom = other.bottom;
        }
        if other.left.changed {
            self.left = other.left;
        }
        if other.right.changed {
            self.right = other.right;
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy)]
pub struct CPdfNativeMargin {
    pub top: CPdfNativePoints,
    pub right: CPdfNativePoints,
    pub bottom: CPdfNativePoints,
    pub left: CPdfNativePoints,
}

impl CPdfNativeMargin {
    pub fn all(p: CPdfNativePoints) -> Self {
        Self {
            top: p,
            right: p,
            bottom: p,
            left: p,
        }
    }
    pub fn merge(&mut self, other: &CPdfNativePadding) {
        if other.top.changed {
            self.top = other.top;
        }
        if other.bottom.changed {
            self.bottom = other.bottom;
        }
        if other.left.changed {
            self.left = other.left;
        }
        if other.right.changed {
            self.right = other.right;
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy)]
pub struct CPdfNativeColor {
    pub r: i32,
    pub g: i32,
    pub b: i32,
    pub a: i32,
}

impl Into<PdfColor> for CPdfNativeColor {
    fn into(self) -> PdfColor {
        PdfColor::new(
            self.r.clamp(0, 255) as u8,
            self.g.clamp(0, 255) as u8,
            self.b.clamp(0, 255) as u8,
            self.a.clamp(0, 255) as u8,
        )
    }
}

#[repr(C)]
#[derive(Clone, Copy, Debug)]
pub enum CPdfNativeColorOptionalType {
    None,
    Some,
}

#[repr(C)]
#[derive(Clone, Copy)]
pub union CPdfNativeColorOptionalData {
    pub value: CPdfNativeColor,
}

#[repr(C)]
#[derive(Clone, Copy)]
pub struct CPdfNativeColorOptional {
    pub kind: CPdfNativeColorOptionalType,
    pub data: CPdfNativeColorOptionalData,
}

impl Debug for CPdfNativeColorOptional {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        let mut info = f.debug_struct("CPdfNativeColorOptional");
        info.field("kind", &self.kind);

        if let CPdfNativeColorOptionalType::Some = self.kind {
            unsafe {
                info.field("data", &self.data.value);
            }
        } else {
            info.field("data", &"");
        }
        info.finish()
    }
}

impl Into<Option<PdfColor>> for CPdfNativeColorOptional {
    fn into(self) -> Option<PdfColor> {
        unsafe {
            match self.kind {
                CPdfNativeColorOptionalType::None => None,
                CPdfNativeColorOptionalType::Some => Some(self.data.value.into()),
            }
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy)]
pub struct CStyleDef {
    pub font: PdfNativeFontFamily,
    pub font_style: PdfNativeFontStyle,
    pub overflow: PdfNativeOverflow,
    pub fill_color: CPdfNativeColorOptional,
    pub text_color: CPdfNativeColorOptional,
    pub cell_width: CCellWidth,
    pub min_cell_width: CPdfNativePointsOptional,
    pub min_cell_height: CPdfNativePoints,
    pub horizontal_align: CHorizontalAlign,
    pub vertical_align: CVerticalAlign,
    pub font_size: f32,
    pub cell_padding: CPdfNativePadding,
    pub line_color: CPdfNativeColorOptional,
    pub line_width: f32,
}

impl Into<StyleDef> for CStyleDef {
    fn into(self) -> StyleDef {
        StyleDef {
            font: self.font,
            font_style: self.font_style,
            overflow: self.overflow,
            fill_color: self.fill_color.into(),
            text_color: self.text_color.into(),
            cell_width: self.cell_width.into(),
            min_cell_width: self.min_cell_width.into(),
            min_cell_height: self.min_cell_height.into(),
            horizontal_align: self.horizontal_align.into(),
            vertical_align: self.vertical_align.into(),
            font_size: self.font_size,
            cell_padding: self.cell_padding.into(),
            line_color: self.line_color.into(),
            line_width: self.line_width,
            font_changed: self.font_size != 10.,
        }
    }
}

impl From<&CStyleDef> for StyleDef {
    fn from(value: &CStyleDef) -> Self {
        StyleDef {
            font: value.font,
            font_style: value.font_style,
            overflow: value.overflow,
            fill_color: value.fill_color.into(),
            text_color: value.text_color.into(),
            cell_width: value.cell_width.into(),
            min_cell_width: value.min_cell_width.into(),
            min_cell_height: value.min_cell_height.into(),
            horizontal_align: value.horizontal_align.into(),
            vertical_align: value.vertical_align.into(),
            font_size: value.font_size,
            cell_padding: value.cell_padding.into(),
            line_color: value.line_color.into(),
            line_width: value.line_width,
            font_changed: value.font_size != 10.,
        }
    }
}

#[derive(Debug, Clone)]
pub struct StyleDef {
    pub font: PdfNativeFontFamily,
    pub font_style: PdfNativeFontStyle,
    pub overflow: PdfNativeOverflow,
    pub fill_color: Option<PdfColor>,
    pub text_color: Option<PdfColor>,
    pub cell_width: CellWidth,
    pub min_cell_width: Option<PdfPoints>,
    pub min_cell_height: PdfPoints,
    pub horizontal_align: CHorizontalAlign,
    pub vertical_align: CVerticalAlign,
    pub font_size: f32,
    pub cell_padding: CPdfNativePadding,
    pub line_color: Option<PdfColor>,
    pub line_width: f32,
    font_changed: bool,
}

impl StyleDef {
    pub fn merge(&mut self, other: &StyleDef) {
        if other.fill_color.is_some() {
            self.fill_color = other.fill_color;
        }
        if other.text_color.is_some() {
            self.text_color = other.text_color;
        }
        if other.line_width != 0.0 {
            self.line_width = other.line_width;
        }
        if other.font_changed && other.font_size != 0.0 {
            self.font_size = other.font_size;
        }
        if other.text_color.is_some() {
            self.text_color = other.text_color;
        }

        if other.font != PdfNativeFontFamily::default() {
            self.font = other.font;
        }

        if other.font_style != PdfNativeFontStyle::Normal {
            self.font_style = other.font_style;
        }
        self.horizontal_align = other.horizontal_align;
        self.vertical_align = other.vertical_align;
        self.cell_width = other.cell_width.clone();
        if other.min_cell_width.is_some() {
            self.min_cell_width = other.min_cell_width;
        }
        self.cell_padding.merge(&other.cell_padding);
    }
}

impl Default for StyleDef {
    fn default() -> Self {
        StyleDef {
            font: PdfNativeFontFamily::Helvetica,
            font_style: PdfNativeFontStyle::Normal,
            overflow: PdfNativeOverflow::LineBreak,
            fill_color: None,
            text_color: None,
            cell_width: CellWidth::Auto,
            min_cell_width: Some(PdfPoints::new(10.0)),
            min_cell_height: PdfPoints::ZERO,
            horizontal_align: CHorizontalAlign::Left,
            vertical_align: CVerticalAlign::Top,
            font_size: 10.0,
            cell_padding: CPdfNativePadding::all(CPdfNativePoints {
                value: 10.0,
                unit: PdfNativeUnit::Points,
                changed: false,
            }),
            line_color: None,
            line_width: 0.0,
            font_changed: false,
        }
    }
}

#[derive(Debug, Clone)]
pub struct TableCell {
    pub content: String,
    pub row_span: usize,
    pub col_span: usize,
    pub style: StyleDef,
}

impl Default for TableCell {
    fn default() -> Self {
        TableCell {
            content: String::new(),
            row_span: 1,
            col_span: 1,
            style: StyleDef::default(),
        }
    }
}

#[derive(Debug, Clone)]
pub struct TableRow {
    pub cells: Vec<TableCell>,
}

#[derive(Debug, Clone, Copy, PartialEq)]
enum Section {
    Header,
    Body,
    Footer,
}

#[repr(C)]
#[derive(Debug, Clone)]
pub struct CColumnDef {
    pub header: *const c_char,
    pub data_key: *const c_char,
}

impl Into<ColumnDef> for CColumnDef {
    fn into(self) -> ColumnDef {
        let header = if self.header.is_null() {
            None
        } else {
            Some(
                unsafe { CStr::from_ptr(self.header) }
                    .to_string_lossy()
                    .to_string(),
            )
        };

        let data_key = if self.data_key.is_null() {
            None
        } else {
            Some(
                unsafe { CStr::from_ptr(self.data_key) }
                    .to_string_lossy()
                    .to_string(),
            )
        };
        ColumnDef { header, data_key }
    }
}

impl From<&CColumnDef> for ColumnDef {
    fn from(value: &CColumnDef) -> Self {
        let header = if value.header.is_null() {
            None
        } else {
            Some(
                unsafe { CStr::from_ptr(value.header) }
                    .to_string_lossy()
                    .to_string(),
            )
        };

        let data_key = if value.data_key.is_null() {
            None
        } else {
            Some(
                unsafe { CStr::from_ptr(value.data_key) }
                    .to_string_lossy()
                    .to_string(),
            )
        };
        ColumnDef { header, data_key }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Hash, Eq, PartialEq)]
pub enum CColumnKeyType {
    Index,
    DataKey,
}

#[repr(C)]
#[derive(Debug, Clone, Hash, Eq, PartialEq)]
pub struct CColumnKey {
    pub type_: CColumnKeyType,
    pub index: usize,
    pub data_key: *const c_char,
}

impl Into<ColumnKey> for CColumnKey {
    fn into(self) -> ColumnKey {
        match self.type_ {
            CColumnKeyType::Index => ColumnKey::Index(self.index),
            CColumnKeyType::DataKey => {
                let data_key = if self.data_key.is_null() {
                    String::new()
                } else {
                    let data_key = unsafe { CStr::from_ptr(self.data_key) };
                    let data_key = data_key.to_string_lossy();
                    data_key.to_string()
                };
                ColumnKey::DataKey(data_key)
            }
        }
    }
}

impl From<&CColumnKey> for ColumnKey {
    fn from(value: &CColumnKey) -> Self {
        match value.type_ {
            CColumnKeyType::Index => ColumnKey::Index(value.index),
            CColumnKeyType::DataKey => {
                let data_key = if value.data_key.is_null() {
                    String::new()
                } else {
                    let data_key = unsafe { CStr::from_ptr(value.data_key) };
                    let data_key = data_key.to_string_lossy();
                    data_key.to_string()
                };
                ColumnKey::DataKey(data_key)
            }
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone)]
pub struct CTableCell {
    pub content: *const c_char,
    pub row_span: usize,
    pub col_span: usize,
    pub style: *const CStyleDef,
}

impl Into<TableCell> for CTableCell {
    fn into(self) -> TableCell {
        let content = if self.content.is_null() {
            String::new()
        } else {
            let content = unsafe { CStr::from_ptr(self.content).to_string_lossy() };
            content.to_string()
        };

        let style = if self.style.is_null() {
            Default::default()
        } else {
            unsafe { (*self.style).into() }
        };

        TableCell {
            content,
            row_span: self.row_span,
            col_span: self.col_span,
            style,
        }
    }
}

impl From<&CTableCell> for TableCell {
    fn from(value: &CTableCell) -> Self {
        let content = if value.content.is_null() {
            String::new()
        } else {
            let content = unsafe { CStr::from_ptr(value.content).to_string_lossy() };
            content.to_string()
        };

        let style = if value.style.is_null() {
            Default::default()
        } else {
            unsafe { (*value.style).into() }
        };

        TableCell {
            content,
            row_span: value.row_span,
            col_span: value.col_span,
            style,
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone)]
pub struct CTableCellOrString {
    pub string: *const c_char,
    pub cell: *const CTableCell,
}

impl Into<TableCellOrString> for CTableCellOrString {
    fn into(self) -> TableCellOrString {
        let string = if self.string.is_null() {
            None
        } else {
            let string = unsafe { CStr::from_ptr(self.string).to_string_lossy() };
            Some(string.to_string())
        };

        let cell = if self.cell.is_null() {
            None
        } else {
            let cell = unsafe { &*self.cell };
            Some(cell.into())
        };

        match (cell, string) {
            (Some(cell), None) => TableCellOrString::Cell(cell),
            (None, Some(string)) => TableCellOrString::String(string),
            _ => TableCellOrString::String("".to_string()),
        }
    }
}

impl From<&CTableCellOrString> for TableCellOrString {
    fn from(value: &CTableCellOrString) -> Self {
        let string = if value.string.is_null() {
            None
        } else {
            let string = unsafe { CStr::from_ptr(value.string).to_string_lossy() };
            Some(string.to_string())
        };

        let cell = if value.cell.is_null() {
            None
        } else {
            let cell = unsafe { &*value.cell };
            Some(cell.into())
        };

        match (cell, string) {
            (Some(cell), None) => TableCellOrString::Cell(cell),
            (None, Some(string)) => TableCellOrString::String(string),
            _ => TableCellOrString::String("".to_string()),
        }
    }
}

fn parse_table_cell_or_string(
    value: *const *const CTableCellOrString,
    size: usize,
    sizes: *const usize,
    sizes_size: usize,
) -> Vec<Vec<TableCellOrString>> {
    if value.is_null() || sizes.is_null() || size == 0 || sizes_size == 0 {
        return Vec::new();
    }

    unsafe {
        let slice = std::slice::from_raw_parts(value, size);
        let sizes = std::slice::from_raw_parts(sizes, sizes_size);

        slice
            .iter()
            .enumerate()
            .map(|(i, value)| {
                let len = sizes[i];
                let slice = std::slice::from_raw_parts(*value, len);
                slice.iter().map(|value| value.into()).collect::<Vec<_>>()
            })
            .collect::<Vec<_>>()
    }
}

fn parse_style_def(value: *const CStyleDef) -> Option<StyleDef> {
    if value.is_null() {
        return None;
    }

    unsafe { Some((*value).into()) }
}

#[cfg(not(target_os = "android"))]
#[repr(C)]
#[derive(Debug, Clone)]
pub struct CPdfTable {
    pub columns: *const CColumnDef,
    pub columns_size: usize,
    pub column_styles_keys: *const CColumnKey,
    pub column_styles_keys_size: usize,
    pub column_styles_values: *const CStyleDef,
    pub column_styles_values_size: usize,
    pub styles: *const CStyleDef,
    pub alternate_row_styles: *const CStyleDef,
    pub head_styles: *const CStyleDef,
    pub body_styles: *const CStyleDef,
    pub foot_styles: *const CStyleDef,
    pub head: *const *const CTableCellOrString,
    pub head_size: usize,
    pub header_inner_sizes: *const usize,
    pub header_inner_size: usize,
    pub body: *const *const CTableCellOrString,
    pub body_size: usize,
    pub body_inner_sizes: *const usize,
    pub body_inner_size: usize,
    pub foot: *const *const CTableCellOrString,
    pub foot_size: usize,
    pub foot_inner_sizes: *const usize,
    pub foot_inner_size: usize,
    pub position_x: CPdfNativePoints,
    pub position_y: CPdfNativePoints,
    pub theme: PdfNativeTableTheme,
    pub page_break: PdfNativePageBreak,
    pub show_head: PdfNativeShowHead,
    pub show_foot: PdfNativeShowFoot,
    pub margin: CPdfNativeMargin,
    pub will_draw_page: Option<extern "C" fn(*const std::os::raw::c_void, u32, f32, f32)>,
    pub will_draw_page_data: *const std::os::raw::c_void,
    pub did_draw_page: Option<extern "C" fn(*const std::os::raw::c_void, u32, f32, f32)>,
    pub did_draw_page_data: *const std::os::raw::c_void,
    pub will_draw_cell:
        Option<extern "C" fn(*const std::os::raw::c_void, *mut PdfNativeCellRenderInfo) -> bool>,
    pub will_draw_cell_data: *const std::os::raw::c_void,
    pub did_draw_cell:
        Option<extern "C" fn(*const std::os::raw::c_void, *mut PdfNativeCellRenderInfo)>,
    pub did_draw_cell_data: *const std::os::raw::c_void,
}

#[cfg(not(target_os = "android"))]
impl Into<PdfTable> for CPdfTable {
    fn into(self) -> PdfTable {
        let mut columns: Option<Vec<ColumnDef>> = None;
        if !self.columns.is_null() && self.columns_size > 0 {
            let slice = unsafe { std::slice::from_raw_parts(self.columns, self.columns_size) };
            columns = Some(slice.iter().map(|c| c.into()).collect());
        }

        let mut column_styles: Option<HashMap<ColumnKey, StyleDef>> = None;

        if !self.column_styles_keys.is_null()
            && !self.column_styles_values.is_null()
            && (self.column_styles_keys_size == self.column_styles_values_size)
        {
            let keys = unsafe {
                std::slice::from_raw_parts(self.column_styles_keys, self.column_styles_keys_size)
            };
            let values = unsafe {
                std::slice::from_raw_parts(
                    self.column_styles_values,
                    self.column_styles_values_size,
                )
            };

            let map: HashMap<ColumnKey, StyleDef> = keys.into_iter().zip(values.into_iter()).fold(
                HashMap::with_capacity(keys.len()),
                |mut acc, (key, value)| {
                    acc.insert(key.into(), value.into());
                    acc
                },
            );

            // let keys = keys.iter()
            //     .map(|key| key.into()).collect::<Vec<ColumnKey>>();
            // let values = values.iter().map(|v| v.into()).collect::<Vec<StyleDef>>();

            // let kv = keys.into_iter().zip(values.into_iter()).collect::<Vec<_>>();
            // let map =

            column_styles = Some(map);
        }

        let will_draw_page: Option<PdfNativeDrawPage> = if self.will_draw_page.is_some() {
            let f = self.will_draw_page;
            Some(PdfNativeDrawPage::new(
                Box::new(move |idx, x, y, data| {
                    if let Some(cb) = f {
                        cb(data, idx, x, y)
                    }
                }),
                self.will_draw_page_data as _,
            ))
        } else {
            None
        };

        let did_draw_page: Option<PdfNativeDrawPage> = if self.did_draw_page.is_some() {
            let f = self.did_draw_page;
            Some(PdfNativeDrawPage::new(
                Box::new(move |idx, x, y, data| {
                    if let Some(cb) = f {
                        cb(data, idx, x, y)
                    }
                }),
                self.did_draw_page_data as _,
            ))
        } else {
            None
        };

        let will_draw_cell: Option<PdfNativeDrawCell> = if self.will_draw_cell.is_some() {
            let f = self.will_draw_cell;
            Some(PdfNativeDrawCell::new(
                true,
                Box::new(move |info, data| {
                    if let Some(cb) = f {
                        return cb(data, info as *mut _);
                    }
                    true
                }),
                self.will_draw_cell_data as _,
            ))
        } else {
            None
        };

        let did_draw_cell: Option<PdfNativeDrawCell> = if self.did_draw_cell.is_some() {
            let f = self.did_draw_cell;
            Some(PdfNativeDrawCell::new(
                false,
                Box::new(move |info, data| {
                    if let Some(cb) = f {
                        cb(data, info as *mut _);
                    }
                    true
                }),
                self.did_draw_cell_data as _,
            ))
        } else {
            None
        };

        PdfTable {
            styles: parse_style_def(self.styles),
            alternate_row_styles: parse_style_def(self.alternate_row_styles),
            columns,
            column_styles,
            head_styles: parse_style_def(self.head_styles),
            body_styles: parse_style_def(self.body_styles),
            foot_styles: parse_style_def(self.foot_styles),
            head: parse_table_cell_or_string(
                self.head,
                self.head_size,
                self.header_inner_sizes,
                self.header_inner_size,
            ),
            body: parse_table_cell_or_string(
                self.body,
                self.body_size,
                self.body_inner_sizes,
                self.body_inner_size,
            ),
            foot: parse_table_cell_or_string(
                self.foot,
                self.foot_size,
                self.foot_inner_sizes,
                self.foot_inner_size,
            ),
            position: (self.position_x.into(), self.position_y.into()),
            theme: self.theme,
            page_break: self.page_break,
            show_head: self.show_head,
            show_foot: self.show_foot,
            margin: self.margin,
            will_draw_page,
            did_draw_page,
            will_draw_cell,
            did_draw_cell,
        }
    }
}

#[cfg(not(target_os = "android"))]
impl From<&CPdfTable> for PdfTable {
    fn from(value: &CPdfTable) -> Self {
        let mut columns: Option<Vec<ColumnDef>> = None;
        if !value.columns.is_null() && value.columns_size > 0 {
            let slice = unsafe { std::slice::from_raw_parts(value.columns, value.columns_size) };
            columns = Some(slice.iter().map(|c| c.into()).collect());
        }

        let mut column_styles: Option<HashMap<ColumnKey, StyleDef>> = None;

        if !value.column_styles_keys.is_null()
            && !value.column_styles_values.is_null()
            && (value.column_styles_keys_size == value.column_styles_values_size)
        {
            let keys = unsafe {
                std::slice::from_raw_parts(value.column_styles_keys, value.column_styles_keys_size)
            };
            let values = unsafe {
                std::slice::from_raw_parts(
                    value.column_styles_values,
                    value.column_styles_values_size,
                )
            };

            let map: HashMap<ColumnKey, StyleDef> = keys.into_iter().zip(values.into_iter()).fold(
                HashMap::with_capacity(keys.len()),
                |mut acc, (key, value)| {
                    acc.insert(key.into(), value.into());
                    acc
                },
            );

            column_styles = Some(map);
        }

        let will_draw_page: Option<PdfNativeDrawPage> = if value.will_draw_page.is_some() {
            let f = value.will_draw_page;
            Some(PdfNativeDrawPage::new(
                Box::new(move |idx, x, y, data| {
                    if let Some(cb) = f {
                        cb(data, idx, x, y)
                    }
                }),
                value.will_draw_page_data as _,
            ))
        } else {
            None
        };

        let did_draw_page: Option<PdfNativeDrawPage> = if value.did_draw_page.is_some() {
            let f = value.did_draw_page;
            Some(PdfNativeDrawPage::new(
                Box::new(move |idx, x, y, data| {
                    if let Some(cb) = f {
                        cb(data, idx, x, y)
                    }
                }),
                value.did_draw_page_data as _,
            ))
        } else {
            None
        };

        let will_draw_cell_func = value.will_draw_cell;
        let will_draw_cell: Option<PdfNativeDrawCell> = match will_draw_cell_func {
            None => None,
            Some(will_draw_cell) => {
                Some(PdfNativeDrawCell::new(
                    true,
                    Box::new(move |info, data| {
                        will_draw_cell(data, info as *mut _)
                    }),
                    value.will_draw_cell_data as _,
                ))
            }
        };

        let did_draw_cell: Option<PdfNativeDrawCell> = if value.did_draw_cell.is_some() {
            let f = value.did_draw_cell;
            Some(PdfNativeDrawCell::new(
                false,
                Box::new(move |info, data| {
                    if let Some(cb) = f {
                        cb(data, info as *mut _);
                    }
                    true
                }),
                value.did_draw_cell_data as _,
            ))
        } else {
            None
        };

        PdfTable {
            styles: parse_style_def(value.styles),
            alternate_row_styles: parse_style_def(value.alternate_row_styles),
            columns,
            column_styles,
            head_styles: parse_style_def(value.head_styles),
            body_styles: parse_style_def(value.body_styles),
            foot_styles: parse_style_def(value.foot_styles),
            head: parse_table_cell_or_string(
                value.head,
                value.head_size,
                value.header_inner_sizes,
                value.header_inner_size,
            ),
            body: parse_table_cell_or_string(
                value.body,
                value.body_size,
                value.body_inner_sizes,
                value.body_inner_size,
            ),
            foot: parse_table_cell_or_string(
                value.foot,
                value.foot_size,
                value.foot_inner_sizes,
                value.foot_inner_size,
            ),
            position: (value.position_x.into(), value.position_y.into()),
            theme: value.theme,
            page_break: value.page_break,
            show_head: value.show_head,
            show_foot: value.show_foot,
            margin: value.margin,
            will_draw_page,
            did_draw_page,
            will_draw_cell,
            did_draw_cell,
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PdfNativeSection {
    Head,
    Body,
    Foot,
}

impl From<PdfNativeSection> for i32 {
    fn from(s: PdfNativeSection) -> Self {
        match s {
            PdfNativeSection::Head => 0,
            PdfNativeSection::Body => 1,
            PdfNativeSection::Foot => 2,
        }
    }
}

impl From<Section> for PdfNativeSection {
    fn from(s: Section) -> Self {
        match s {
            Section::Header => PdfNativeSection::Head,
            Section::Body => PdfNativeSection::Body,
            Section::Footer => PdfNativeSection::Foot,
        }
    }
}

impl From<Section> for i32 {
    fn from(s: Section) -> Self {
        match s {
            Section::Header => 0,
            Section::Body => 1,
            Section::Footer => 2,
        }
    }
}

#[derive(Debug, Clone)]
pub enum PdfNativeCellRenderInfoContentInner {
    Owned(CString),
    Borrowed(*const c_char),
    Empty,
}

#[derive(Debug, Clone)]
pub struct PdfNativeCellRenderInfoContent(pub(crate) PdfNativeCellRenderInfoContentInner);

impl PdfNativeCellRenderInfoContent {
    pub fn new(content: &str) -> PdfNativeCellRenderInfoContent {
        let content = if content.is_empty() {
            PdfNativeCellRenderInfoContentInner::Empty
        } else {
            PdfNativeCellRenderInfoContentInner::Owned(CString::new(content).unwrap())
        };
        PdfNativeCellRenderInfoContent(content)
    }

    pub fn new_borrowed(content: *const c_char) -> PdfNativeCellRenderInfoContent {
        let content = if content.is_null() {
            PdfNativeCellRenderInfoContentInner::Empty
        } else {
            PdfNativeCellRenderInfoContentInner::Borrowed(content)
        };
        PdfNativeCellRenderInfoContent(content)
    }

    pub fn empty() -> PdfNativeCellRenderInfoContent {
        PdfNativeCellRenderInfoContent(PdfNativeCellRenderInfoContentInner::Empty)
    }

    pub fn content(&self) -> &CStr {
        match &self.0 {
            PdfNativeCellRenderInfoContentInner::Owned(content) => content.as_c_str(),
            PdfNativeCellRenderInfoContentInner::Borrowed(content) => unsafe {
                CStr::from_ptr(*content)
            },
            PdfNativeCellRenderInfoContentInner::Empty => c"",
        }
    }
}

#[repr(C)]
#[derive(Debug, Clone)]
pub struct PdfNativeCellRenderInfo {
    pub section: PdfNativeSection,
    pub row_index: u32,
    pub column_index: u32,
    pub page_index: u32,

    pub x: f32,
    pub y: f32,
    pub width: f32,
    pub height: f32,

    pub col_span: u32,
    pub row_span: u32,
    pub line_count: u32,

    pub content: *mut PdfNativeCellRenderInfoContent,
}

impl Drop for PdfNativeCellRenderInfo {
    fn drop(&mut self) {
        if !self.content.is_null() {
            let _ = unsafe { Box::from_raw(self.content) };
        }
    }
}

impl PdfNativeCellRenderInfo {
    pub fn get_content(&self) -> &CStr {
        if self.content.is_null() {
            return c"";
        }
        unsafe {
            let content = &*self.content;
            content.content()
        }
    }
}

pub struct PdfNativeDrawPage {
    #[cfg(target_os = "android")]
    pub(crate) object: jni::objects::GlobalRef,
    #[cfg(target_os = "android")]
    pub(crate) will_draw: bool,
    #[cfg(not(target_os = "android"))]
    pub(crate) cb: Box<dyn Fn(u32, f32, f32, *mut c_void)>,
    #[cfg(not(target_os = "android"))]
    pub(crate) cb_data: *mut c_void,
}

impl PdfNativeDrawPage {
    #[cfg(not(target_os = "android"))]
    pub fn new(cb: Box<dyn Fn(u32, f32, f32, *mut c_void)>, data: *mut c_void) -> Self {
        Self { cb, cb_data: data }
    }

    #[cfg(target_os = "android")]
    pub fn new(object: jni::objects::GlobalRef, will_draw: bool) -> Self {
        Self { object, will_draw }
    }

    #[cfg(not(target_os = "android"))]
    pub fn emit(&self, index: u32, x: f32, y: f32) {
        (self.cb)(index, x, y, self.cb_data);
    }

    #[cfg(target_os = "android")]
    pub fn emit(&self, index: u32, x: f32, y: f32) {
        if let (Some(object), Some(jvm)) = (Some(self.object.as_obj()), crate::JVM.get()) {
            let name = if self.will_draw {
                "onWillDrawPage"
            } else {
                "onDidDrawPage"
            };
            let vm = jvm.attach_current_thread();
            let mut env = vm.unwrap();
            env.call_method(
                object,
                name,
                "(IFF)V",
                &[
                    jni::objects::JValue::from(index as i32),
                    jni::objects::JValue::from(x),
                    jni::objects::JValue::from(y),
                ],
            );
        }
    }
}

impl Debug for PdfNativeDrawPage {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_str("<PdfNativeDrawPage closure>")
    }
}

pub struct PdfNativeDrawCell {
    #[cfg(target_os = "android")]
    pub(crate) object: jni::objects::GlobalRef,
    pub(crate) will_draw: bool,
    #[cfg(not(target_os = "android"))]
    pub(crate) cb: Box<dyn Fn(&mut PdfNativeCellRenderInfo, *mut c_void) -> bool>,
    #[cfg(not(target_os = "android"))]
    pub(crate) cb_data: *mut c_void,
}

impl PdfNativeDrawCell {
    #[cfg(not(target_os = "android"))]
    pub fn new(
        will_draw: bool,
        cb: Box<dyn Fn(&mut PdfNativeCellRenderInfo, *mut c_void) -> bool>,
        data: *mut c_void,
    ) -> Self {
        Self {
            will_draw,
            cb,
            cb_data: data,
        }
    }

    #[cfg(target_os = "android")]
    pub fn new(object: jni::objects::GlobalRef, will_draw: bool) -> Self {
        Self { object, will_draw }
    }

    #[cfg(not(target_os = "android"))]
    pub fn emit(&self, mut info: PdfNativeCellRenderInfo) -> (bool, Option<String>) {
        let previous = info.content;
        let proceed = (self.cb)(&mut info, self.cb_data);
        // Capture possible modified content for will_draw
        let updated = if self.will_draw {
            if std::ptr::eq(previous, info.content) {
                return (proceed, None);
            }
            let content = unsafe { *Box::from_raw(info.content) };
            let content = match content.0 {
                PdfNativeCellRenderInfoContentInner::Owned(content) => {
                    content.into_string().unwrap()
                }
                PdfNativeCellRenderInfoContentInner::Borrowed(content) => {
                    if content.is_null() {
                        String::new()
                    } else {
                        unsafe { CStr::from_ptr(content).to_string_lossy().to_string() }
                    }
                }
                PdfNativeCellRenderInfoContentInner::Empty => String::new(),
            };
            info.content = 0 as _;
            Some(content)
        } else {
            None
        };

        (proceed, updated)
    }

    #[cfg(target_os = "android")]
    pub fn emit(&self, mut info: PdfNativeCellRenderInfo) -> (bool, Option<String>) {
        use jni::objects::{JString, JValue};
        if let (Some(object), Some(jvm)) = (Some(self.object.as_obj()), crate::JVM.get()) {
            let vm = jvm.attach_current_thread();
            let mut env = vm.unwrap();

            let content = if info.content.is_null() {
                env.new_string("").unwrap()
            } else {
                let content = unsafe { *Box::from_raw(info.content) };
                let content = match content.0 {
                    PdfNativeCellRenderInfoContentInner::Owned(content) => {
                        content.into_string().unwrap()
                    }
                    PdfNativeCellRenderInfoContentInner::Borrowed(content) => {
                        if content.is_null() {
                            String::new()
                        } else {
                            unsafe { CStr::from_ptr(content).to_string_lossy().to_string() }
                        }
                    }
                    PdfNativeCellRenderInfoContentInner::Empty => String::new(),
                };
                info.content = 0 as _;

                env.new_string(content).unwrap()
            };

            return if let (Some(table_cache), Some(cache)) =
                (crate::TABLE.get(), crate::HOT_THINGS.get())
            {
                let section: i32 = info.section.try_into().unwrap();
                if self.will_draw {
                    let content_value = jni::objects::JValue::Object(&content);
                    let ret = unsafe {
                        env.call_method_unchecked(
                            object,
                            table_cache.will_draw_cell_id,
                            jni::signature::ReturnType::Object,
                            &[
                                jni::objects::JValue::from(info.page_index as i32).as_jni(),
                                jni::objects::JValue::from(info.x).as_jni(),
                                jni::objects::JValue::from(info.y).as_jni(),
                                jni::objects::JValue::from(section).as_jni(),
                                jni::objects::JValue::from(info.row_index as i32).as_jni(),
                                jni::objects::JValue::from(info.column_index as i32).as_jni(),
                                jni::objects::JValue::from(info.width).as_jni(),
                                jni::objects::JValue::from(info.height).as_jni(),
                                jni::objects::JValue::from(info.col_span as i32).as_jni(),
                                jni::objects::JValue::from(info.row_span as i32).as_jni(),
                                jni::objects::JValue::from(info.line_count as i32).as_jni(),
                                content_value.as_jni(),
                            ],
                        )
                        .and_then(|value| value.l())
                    };

                    if let Ok(pair) = ret {
                        return if !pair.is_null() {
                            let clazz = unsafe {
                                jni::objects::JClass::from_raw(cache.jni_helper_class.as_raw() as _)
                            };
                            let first = unsafe {
                                env.call_static_method_unchecked(
                                    &clazz,
                                    cache.jni_helper_pair_first_id,
                                    jni::signature::ReturnType::Primitive(
                                        jni::signature::Primitive::Boolean,
                                    ),
                                    &[JValue::from(&pair).as_jni()],
                                )
                                .and_then(|first| first.z())
                            };

                            let second = unsafe {
                                env.call_static_method_unchecked(
                                    &clazz,
                                    cache.jni_helper_pair_second_id,
                                    jni::signature::ReturnType::Object,
                                    &[JValue::from(&pair).as_jni()],
                                )
                                .and_then(|second| second.l())
                            };
                            match (first, second) {
                                (Ok(proceed), Ok(updated)) => {
                                    let updated = if updated.is_null() {
                                        None
                                    } else {
                                        let string = JString::from(updated);
                                        env.get_string(&string)
                                            .and_then(|string| {
                                                let string = string.to_string_lossy();
                                                Ok(string.to_string())
                                            })
                                            .ok()
                                    };
                                    (proceed, updated)
                                }
                                _ => (true, None),
                            }
                        } else {
                            (true, None)
                        };
                    }

                    (true, None)
                } else {
                    let content_value = jni::objects::JValue::Object(&content);
                    unsafe {
                        env.call_method_unchecked(
                            object,
                            table_cache.did_draw_cell_id,
                            jni::signature::ReturnType::Primitive(jni::signature::Primitive::Void),
                            &[
                                jni::objects::JValue::from(info.page_index as i32).as_jni(),
                                jni::objects::JValue::from(info.x).as_jni(),
                                jni::objects::JValue::from(info.y).as_jni(),
                                jni::objects::JValue::from(section).as_jni(),
                                jni::objects::JValue::from(info.row_index as i32).as_jni(),
                                jni::objects::JValue::from(info.column_index as i32).as_jni(),
                                jni::objects::JValue::from(info.width).as_jni(),
                                jni::objects::JValue::from(info.height).as_jni(),
                                jni::objects::JValue::from(info.col_span as i32).as_jni(),
                                jni::objects::JValue::from(info.row_span as i32).as_jni(),
                                jni::objects::JValue::from(info.line_count as i32).as_jni(),
                                content_value.as_jni(),
                            ],
                        );
                    };
                    (true, None)
                }
            } else {
                (true, None)
            };
        }
        (true, None)
    }
}

impl Debug for PdfNativeDrawCell {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_str("<PdfNativeDrawCell closure>")
    }
}

#[derive(Debug)]
pub struct PdfTable {
    pub columns: Option<Vec<ColumnDef>>,
    pub column_styles: Option<HashMap<ColumnKey, StyleDef>>,
    pub styles: Option<StyleDef>,
    pub alternate_row_styles: Option<StyleDef>,
    pub head_styles: Option<StyleDef>,
    pub body_styles: Option<StyleDef>,
    pub foot_styles: Option<StyleDef>,
    pub head: Vec<Vec<TableCellOrString>>,
    pub body: Vec<Vec<TableCellOrString>>,
    pub foot: Vec<Vec<TableCellOrString>>,
    pub position: (PdfPoints, PdfPoints),
    pub theme: PdfNativeTableTheme,
    pub page_break: PdfNativePageBreak,
    pub show_head: PdfNativeShowHead,
    pub show_foot: PdfNativeShowFoot,
    pub margin: CPdfNativeMargin,
    pub will_draw_page: Option<PdfNativeDrawPage>,
    pub did_draw_page: Option<PdfNativeDrawPage>,
    pub will_draw_cell: Option<PdfNativeDrawCell>,
    pub did_draw_cell: Option<PdfNativeDrawCell>,
}

impl Default for PdfTable {
    fn default() -> Self {
        Self {
            styles: None,
            alternate_row_styles: None,
            columns: None,
            column_styles: None,
            head_styles: None,
            body_styles: None,
            foot_styles: None,
            head: vec![],
            body: vec![],
            foot: vec![],
            position: (PdfPoints::ZERO, PdfPoints::ZERO),
            theme: Default::default(),
            page_break: Default::default(),
            show_head: Default::default(),
            show_foot: Default::default(),
            margin: CPdfNativeMargin::all(CPdfNativePoints {
                value: 40.0,
                unit: PdfNativeUnit::Mm,
                changed: false,
            }),
            will_draw_page: None,
            did_draw_page: None,
            will_draw_cell: None,
            did_draw_cell: None,
        }
    }
}

fn add_new_page<'a>(
    document: &mut PdfDocument<'a>,
) -> Result<(PdfPage<'a>, PdfPageIndex), PdfiumError> {
    let last_page = document.pages().last()?;
    let width = last_page.width();
    let height = last_page.height();
    let mut new_page = document
        .pages_mut()
        .create_page_at_end(PdfPagePaperSize::Custom(width, height))?;
    new_page.set_rotation(last_page.rotation()?);
    Ok((
        new_page,
        document
            .pages()
            .len()
            .checked_sub(1)
            .ok_or(PdfiumError::PageIndexOutOfBounds)?,
    ))
}
fn resolve_columns(table: &PdfTable) -> Vec<ColumnKey> {
    if let Some(cols) = &table.columns {
        cols.iter()
            .enumerate()
            .map(|(i, c)| {
                c.data_key
                    .as_ref()
                    .map(|key| ColumnKey::DataKey(key.clone()))
                    .unwrap_or(ColumnKey::Index(i))
            })
            .collect()
    } else if let Some(first_row) = table.head.first().or_else(|| table.body.first()) {
        (0..first_row.len()).map(ColumnKey::Index).collect()
    } else {
        vec![]
    }
}

fn resolve_column_style(
    key: &ColumnKey,
    section: Section,
    table: &PdfTable,
    base: &StyleDef,
    row_idx: usize,
) -> StyleDef {
    let mut style = StyleDef::default();
    match table.theme {
        PdfNativeTableTheme::Striped => {
            if section == Section::Header || section == Section::Footer {
                style.text_color = Some(PdfColor::WHITE);
            } else {
                style.text_color = Some(PdfColor::new(80, 80, 80, 255));
            }

            if (section == Section::Body || section == Section::Footer) && row_idx % 2 == 1 {
                style.fill_color = Some(PdfColor::new(240, 240, 240, 255));
            }
            style.line_width = 0.0;
        }
        PdfNativeTableTheme::Grid => {
            if section == Section::Header || section == Section::Footer {
                style.text_color = Some(PdfColor::WHITE);
                style.font_style = PdfNativeFontStyle::Bold;
                style.fill_color = Some(PdfColor::new(26, 188, 156, 255));
                style.line_width = 0.;
            } else {
                style.line_width = 0.5;
                style.text_color = Some(PdfColor::new(80, 80, 80, 255));
            }

            style.line_color = Some(PdfColor::new(200, 200, 200, 255));
        }
        PdfNativeTableTheme::Plain => {
            style.text_color = Some(PdfColor::new(20, 20, 20, 255));
            if section == Section::Header || section == Section::Footer {
                style.font_style = PdfNativeFontStyle::Bold;
            }
            style.line_width = 0.0;
        }
    };

    if let Some(global) = &table.styles {
        style.merge(global)
    }

    let section_style = match section {
        Section::Header => table.head_styles.as_ref(),
        Section::Body => table.body_styles.as_ref(),
        Section::Footer => table.foot_styles.as_ref(),
    };
    if let Some(section) = section_style {
        style.merge(section);
    }

    if matches!(section, Section::Body) && row_idx % 2 == 1 {
        if let Some(alternate) = &table.alternate_row_styles {
            style.merge(alternate);
        }
    }

    if let Some(column_styles) = &table.column_styles {
        if let Some(column_style) = column_styles.get(key) {
            style.merge(column_style);
        }
    }

    style.merge(base);

    style
}

fn resolve_rows_2d(
    grid: &[Vec<TableCellOrString>],
    column_keys: &[ColumnKey],
    table: &PdfTable,
    section: Section,
) -> Vec<TableRow> {
    let target_cols = column_keys.len();

    grid.iter()
        .enumerate()
        .map(|(row_idx, raw_row)| {
            // Pad (or truncate) to the target column count.
            // If there are fewer cells than columns, add empty cells.
            // If there are more, truncate (mirrors jsPDF autoTable behavior).
            let mut row: Vec<TableCellOrString> = if raw_row.len() >= target_cols {
                raw_row[..target_cols].to_vec()
            } else {
                let mut r = raw_row.clone();
                while r.len() < target_cols {
                    r.push(TableCellOrString::String(String::new()));
                }
                r
            };

            let cells = row
                .iter()
                .enumerate()
                .map(|(col_idx, value)| {
                    let key = column_keys
                        .get(col_idx)
                        .cloned()
                        .unwrap_or(ColumnKey::Index(col_idx));

                    let base_cell = match value {
                        TableCellOrString::Cell(c) => c.clone(),
                        TableCellOrString::String(s) => TableCell {
                            content: s.clone(),
                            ..Default::default()
                        },
                    };

                    let style =
                        resolve_column_style(&key, section, table, &base_cell.style, row_idx);

                    TableCell {
                        content: base_cell.content,
                        row_span: base_cell.row_span,
                        col_span: base_cell.col_span,
                        style,
                    }
                })
                .collect();

            TableRow { cells }
        })
        .collect()
}

fn wrap_text<'a>(
    document: &mut PdfDocument<'a>,
    text: &str,
    font: PdfFontToken,
    font_size: PdfPoints,
    max_width: PdfPoints,
) -> Result<Vec<String>, PdfiumError> {
    let words = text.split_whitespace();
    let mut lines = Vec::new();
    let mut current = String::new();

    for word in words {
        let test_line = if current.is_empty() {
            word.to_string()
        } else {
            format!("{current} {word}")
        };

        let text = PdfPageTextObject::new(document, test_line.as_str(), font, font_size)?;

        if text.width()? > max_width {
            if !current.is_empty() {
                lines.push(current);
            }
            current = word.to_string();
        } else {
            current = test_line;
        }
    }

    if !current.is_empty() {
        lines.push(current);
    }
    if lines.is_empty() {
        lines.push(String::new());
    }

    Ok(lines)
}

fn compute_auto_column_widths<'a>(
    document: &mut PdfDocument<'a>,
    rows: &[TableRow],
    column_count: usize,
    unit: PdfNativeUnit,
) -> Result<Vec<PdfPoints>, PdfiumError> {
    let mut max_widths = vec![PdfPoints::ZERO; column_count];

    if column_count == 0 {
        return Ok(vec![]);
    }

    for row in rows {
        for (i, cell) in row.cells.iter().enumerate().take(column_count) {
            let style = &cell.style;

            if let CellWidth::Auto | CellWidth::Wrap = style.cell_width {
                let font = match style.font {
                    PdfNativeFontFamily::Helvetica => match style.font_style {
                        PdfNativeFontStyle::Normal => document.fonts_mut().helvetica(),
                        PdfNativeFontStyle::Bold => document.fonts_mut().helvetica_bold(),
                        PdfNativeFontStyle::Italic => document.fonts_mut().helvetica_oblique(),
                        PdfNativeFontStyle::BoldItalic => {
                            document.fonts_mut().helvetica_bold_oblique()
                        }
                    },
                    PdfNativeFontFamily::Times => match style.font_style {
                        PdfNativeFontStyle::Normal => document.fonts_mut().times_roman(),
                        PdfNativeFontStyle::Bold => document.fonts_mut().times_bold(),
                        PdfNativeFontStyle::Italic => document.fonts_mut().times_italic(),
                        PdfNativeFontStyle::BoldItalic => document.fonts_mut().times_bold_italic(),
                    },
                    PdfNativeFontFamily::Courier => match style.font_style {
                        PdfNativeFontStyle::Normal => document.fonts_mut().courier(),
                        PdfNativeFontStyle::Bold => document.fonts_mut().courier_bold(),
                        PdfNativeFontStyle::Italic => document.fonts_mut().courier_oblique(),
                        PdfNativeFontStyle::BoldItalic => {
                            document.fonts_mut().courier_bold_oblique()
                        }
                    },
                };
                let font_size = PdfPoints::new(style.font_size);
                let text =
                    PdfPageTextObject::new(document, cell.content.as_str(), font, font_size)?;

                let width = text.width()?;

                let cell_padding_left = if style.cell_padding.left.changed {
                    to_points(style.cell_padding.left.value, unit)
                } else {
                    to_points(style.cell_padding.left.value, PdfNativeUnit::Points)
                };

                let cell_padding_right = if style.cell_padding.right.changed {
                    to_points(style.cell_padding.right.value, unit)
                } else {
                    to_points(style.cell_padding.right.value, PdfNativeUnit::Points)
                };

                let total = width + cell_padding_left + cell_padding_right;
                let min = style.min_cell_width.unwrap_or(PdfPoints::ZERO);
                max_widths[i] = max_widths[i].max(total.max(min));
            }
        }
    }

    Ok(max_widths)
}

fn compute_row_height<'a>(
    document: &mut PdfDocument<'a>,
    row: &TableRow,
    scaled_widths: &[PdfPoints],
    unit: PdfNativeUnit,
) -> Result<PdfPoints, PdfiumError> {
    let mut max_height = PdfPoints::ZERO;

    for (i, cell) in row.cells.iter().enumerate() {
        let style = &cell.style;
        let font_size = PdfPoints::new(style.font_size);
        let font = match style.font {
            PdfNativeFontFamily::Helvetica => match style.font_style {
                PdfNativeFontStyle::Normal => document.fonts_mut().helvetica(),
                PdfNativeFontStyle::Bold => document.fonts_mut().helvetica_bold(),
                PdfNativeFontStyle::Italic => document.fonts_mut().helvetica_oblique(),
                PdfNativeFontStyle::BoldItalic => document.fonts_mut().helvetica_bold_oblique(),
            },
            PdfNativeFontFamily::Times => match style.font_style {
                PdfNativeFontStyle::Normal => document.fonts_mut().times_roman(),
                PdfNativeFontStyle::Bold => document.fonts_mut().times_bold(),
                PdfNativeFontStyle::Italic => document.fonts_mut().times_italic(),
                PdfNativeFontStyle::BoldItalic => document.fonts_mut().times_bold_italic(),
            },
            PdfNativeFontFamily::Courier => match style.font_style {
                PdfNativeFontStyle::Normal => document.fonts_mut().courier(),
                PdfNativeFontStyle::Bold => document.fonts_mut().courier_bold(),
                PdfNativeFontStyle::Italic => document.fonts_mut().courier_oblique(),
                PdfNativeFontStyle::BoldItalic => document.fonts_mut().courier_bold_oblique(),
            },
        };

        let cell_padding_left = if style.cell_padding.left.changed {
            to_points(style.cell_padding.left.value, unit)
        } else {
            to_points(style.cell_padding.left.value, PdfNativeUnit::Points)
        };

        let cell_padding_right = if style.cell_padding.right.changed {
            to_points(style.cell_padding.right.value, unit)
        } else {
            to_points(style.cell_padding.right.value, PdfNativeUnit::Points)
        };

        let cell_padding_top = if style.cell_padding.top.changed {
            to_points(style.cell_padding.top.value, unit)
        } else {
            to_points(style.cell_padding.top.value, PdfNativeUnit::Points)
        };

        let cell_padding_bottom = if style.cell_padding.bottom.changed {
            to_points(style.cell_padding.bottom.value, unit)
        } else {
            to_points(style.cell_padding.bottom.value, PdfNativeUnit::Points)
        };

        let available_width = match style.cell_width {
            CellWidth::Fixed(w) => w,
            _ => scaled_widths
                .get(i)
                .copied()
                .unwrap_or(PdfPoints::new(10.0)),
        } - cell_padding_left
            - cell_padding_right;

        let lines = if matches!(style.cell_width, CellWidth::Wrap) {
            wrap_text(document, &cell.content, font, font_size, available_width)?
        } else {
            vec![cell.content.clone()]
        };

        let line_height = PdfPoints::new(style.font_size * 1.2);
        let height = line_height * lines.len() as f32 + cell_padding_top + cell_padding_bottom;

        max_height = max_height.max(height);
    }

    Ok(max_height)
}

fn draw_row<'a>(
    document: &mut PdfDocument<'a>,
    page: &mut PdfPage<'a>,
    row: &TableRow,
    cursor_y: PdfPoints,
    x_origin: PdfPoints,
    column_widths: &[PdfPoints],
    unit: PdfNativeUnit,
    section: Section,
    row_index: usize,
    page_index: u32,
    table: &PdfTable,
) -> Result<PdfPoints, PdfiumError> {
    let row_height = compute_row_height(document, row, column_widths, unit)?;
    let mut cursor_x = x_origin;

    for (i, cell) in row.cells.iter().enumerate() {
        let style = &cell.style;
        let padding = style.cell_padding;
        let cell_width = match style.cell_width {
            CellWidth::Fixed(w) => w,
            CellWidth::Auto | CellWidth::Wrap => column_widths[i],
        };

        let font = match style.font {
            PdfNativeFontFamily::Helvetica => match style.font_style {
                PdfNativeFontStyle::Normal => document.fonts_mut().helvetica(),
                PdfNativeFontStyle::Bold => document.fonts_mut().helvetica_bold(),
                PdfNativeFontStyle::Italic => document.fonts_mut().helvetica_oblique(),
                PdfNativeFontStyle::BoldItalic => document.fonts_mut().helvetica_bold_oblique(),
            },
            PdfNativeFontFamily::Times => match style.font_style {
                PdfNativeFontStyle::Normal => document.fonts_mut().times_roman(),
                PdfNativeFontStyle::Bold => document.fonts_mut().times_bold(),
                PdfNativeFontStyle::Italic => document.fonts_mut().times_italic(),
                PdfNativeFontStyle::BoldItalic => document.fonts_mut().times_bold_italic(),
            },
            PdfNativeFontFamily::Courier => match style.font_style {
                PdfNativeFontStyle::Normal => document.fonts_mut().courier(),
                PdfNativeFontStyle::Bold => document.fonts_mut().courier_bold(),
                PdfNativeFontStyle::Italic => document.fonts_mut().courier_oblique(),
                PdfNativeFontStyle::BoldItalic => document.fonts_mut().courier_bold_oblique(),
            },
        };
        let original_content = cell.content.clone();
        let original_lines = if matches!(style.cell_width, CellWidth::Wrap) {
            wrap_text(
                document,
                &original_content,
                font,
                PdfPoints::new(style.font_size),
                cell_width - padding.left.into() - padding.right.into(),
            )
            .unwrap_or_else(|_| vec![original_content.clone()])
        } else {
            vec![original_content.clone()]
        };

        // Build render info (line_count reflects original before potential mutation)
        let will_info_content = PdfNativeCellRenderInfoContent::new(original_content.as_str());
        let will_info = PdfNativeCellRenderInfo {
            section: section.into(),
            row_index: row_index as u32,
            column_index: i as u32,
            page_index,
            x: to_unit(cursor_x, unit),
            y: to_unit(page.height() - cursor_y, unit),
            width: to_unit(cell_width, unit),
            height: to_unit(row_height, unit),
            col_span: cell.col_span as u32,
            row_span: cell.row_span as u32,
            line_count: original_lines.len() as u32,
            content: Box::into_raw(Box::new(will_info_content)),
        };

        let mut replace_page = false;
        // Invoke will_draw_cell (may mutate content and/or cancel drawing)
        let (proceed, updated) = if let Some(cb) = table.will_draw_cell.as_ref() {
            replace_page = true;
            cb.emit(will_info)
        } else {
            (true, None)
        };

        if replace_page {
            page.regenerate_content()?;
            let _ = std::mem::replace(page, document.pages_mut().get(page_index as PdfPageIndex)?);
        }

        if !proceed {
            // Skip drawing & did_draw callback
            cursor_x += cell_width;
            continue;
        }

        // Decide final content string
        let final_content = updated.unwrap_or_else(|| original_content.clone());

        let font = match style.font {
            PdfNativeFontFamily::Helvetica => match style.font_style {
                PdfNativeFontStyle::Normal => document.fonts_mut().helvetica(),
                PdfNativeFontStyle::Bold => document.fonts_mut().helvetica_bold(),
                PdfNativeFontStyle::Italic => document.fonts_mut().helvetica_oblique(),
                PdfNativeFontStyle::BoldItalic => document.fonts_mut().helvetica_bold_oblique(),
            },
            PdfNativeFontFamily::Times => match style.font_style {
                PdfNativeFontStyle::Normal => document.fonts_mut().times_roman(),
                PdfNativeFontStyle::Bold => document.fonts_mut().times_bold(),
                PdfNativeFontStyle::Italic => document.fonts_mut().times_italic(),
                PdfNativeFontStyle::BoldItalic => document.fonts_mut().times_bold_italic(),
            },
            PdfNativeFontFamily::Courier => match style.font_style {
                PdfNativeFontStyle::Normal => document.fonts_mut().courier(),
                PdfNativeFontStyle::Bold => document.fonts_mut().courier_bold(),
                PdfNativeFontStyle::Italic => document.fonts_mut().courier_oblique(),
                PdfNativeFontStyle::BoldItalic => document.fonts_mut().courier_bold_oblique(),
            },
        };

        // Recompute wrapped lines if content changed
        let content_lines = if matches!(style.cell_width, CellWidth::Wrap) {
            wrap_text(
                document,
                &final_content,
                font,
                PdfPoints::new(style.font_size),
                cell_width - padding.left.into() - padding.right.into(),
            )
            .unwrap_or_else(|_| vec![final_content.clone()])
        } else {
            vec![final_content.clone()]
        };

        // Background / border
        if style.line_width > 0.0 || style.fill_color.is_some() {
            let mut path = PdfPagePathObject::new(
                document,
                PdfPoints::ZERO,
                PdfPoints::ZERO,
                if style.line_width > 0.0 {
                    Some(style.line_color.unwrap_or(PdfColor::new(10, 10, 10, 255)))
                } else {
                    None
                },
                if style.line_width > 0.0 {
                    Some(PdfPoints::new(style.line_width))
                } else {
                    None
                },
                style.fill_color,
            )?;
            path.move_to(cursor_x, cursor_y)?;
            path.line_to(cursor_x + cell_width, cursor_y)?;
            path.line_to(cursor_x + cell_width, cursor_y - row_height)?;
            path.line_to(cursor_x, cursor_y - row_height)?;
            path.close_path()?;
            page.objects_mut().add_path_object(path)?;
        }

        // Font selection
        let font = match style.font {
            PdfNativeFontFamily::Helvetica => match style.font_style {
                PdfNativeFontStyle::Normal => document.fonts_mut().helvetica(),
                PdfNativeFontStyle::Bold => document.fonts_mut().helvetica_bold(),
                PdfNativeFontStyle::Italic => document.fonts_mut().helvetica_oblique(),
                PdfNativeFontStyle::BoldItalic => document.fonts_mut().helvetica_bold_oblique(),
            },
            PdfNativeFontFamily::Times => match style.font_style {
                PdfNativeFontStyle::Normal => document.fonts_mut().times_roman(),
                PdfNativeFontStyle::Bold => document.fonts_mut().times_bold(),
                PdfNativeFontStyle::Italic => document.fonts_mut().times_italic(),
                PdfNativeFontStyle::BoldItalic => document.fonts_mut().times_bold_italic(),
            },
            PdfNativeFontFamily::Courier => match style.font_style {
                PdfNativeFontStyle::Normal => document.fonts_mut().courier(),
                PdfNativeFontStyle::Bold => document.fonts_mut().courier_bold(),
                PdfNativeFontStyle::Italic => document.fonts_mut().courier_oblique(),
                PdfNativeFontStyle::BoldItalic => document.fonts_mut().courier_bold_oblique(),
            },
        };

        let line_height = PdfPoints::new(style.font_size * 1.2);
        let available_width = cell_width - padding.left.into() - padding.right.into();
        let available_height = row_height - padding.top.into() - padding.bottom.into();

        let mut text_y = match style.vertical_align {
            CVerticalAlign::Top => cursor_y - padding.top.into() - line_height,
            CVerticalAlign::Middle => {
                cursor_y - padding.top.into() - (available_height / 2.0)
                    + (line_height * (content_lines.len() as f32 / 2.0 - 1.0))
            }
            CVerticalAlign::Bottom => {
                cursor_y - row_height
                    + padding.bottom.into()
                    + line_height * (content_lines.len() as f32 - 1.0)
            }
        };

        for line in &content_lines {
            let mut text_obj =
                PdfPageTextObject::new(document, line, font, PdfPoints::new(style.font_size))?;
            let text_width = text_obj.width()?;
            if let Some(color) = style.text_color {
                text_obj.set_fill_color(color)?;
            }
            let text_x = match style.horizontal_align {
                CHorizontalAlign::Left => cursor_x + padding.left.into(),
                CHorizontalAlign::Center => {
                    cursor_x + padding.left.into() + (available_width - text_width) / 2.0
                }
                CHorizontalAlign::Right => {
                    cursor_x + cell_width - padding.right.into() - text_width
                }
            };
            text_obj.translate(text_x, text_y)?;
            page.objects_mut().add_text_object(text_obj)?;
            text_y -= line_height;
        }

        let mut replace_page = false;

        // did_draw_cell with updated content
        if let Some(cb) = table.did_draw_cell.as_ref() {
            let did_info_content = PdfNativeCellRenderInfoContent::new(final_content.as_str());
            let did_info = PdfNativeCellRenderInfo {
                section: section.into(),
                row_index: row_index as u32,
                column_index: i as u32,
                page_index,
                x: to_unit(cursor_x, unit),
                y: to_unit(page.height() - cursor_y, unit),
                width: to_unit(cell_width, unit),
                height: to_unit(row_height, unit),
                col_span: cell.col_span as u32,
                row_span: cell.row_span as u32,
                line_count: content_lines.len() as u32,
                content: Box::into_raw(Box::new(did_info_content)),
            };
            replace_page = true;
            cb.emit(did_info);
        }

        if replace_page {
            page.regenerate_content()?;
            let _ = std::mem::replace(page, document.pages_mut().get(page_index as PdfPageIndex)?);
        }

        cursor_x += cell_width;
    }

    Ok(cursor_y - row_height)
}

pub fn draw_table<'a>(
    doc: &mut PdfNativeDocument,
    table: &PdfTable,
) -> Result<(PdfPoints, PdfPoints), PdfiumError> {
    let (units, index) = {
        let mut lock = doc.data.lock();
        lock.state = PdfNativeState::DrawingTable;
        (lock.units, lock.current_page)
    };
    // let index = data.current_page;
    let document = &mut doc.document;
    let page = document.pages_mut().get(index)?;

    let column_keys = resolve_columns(table);

    let head = resolve_rows_2d(&table.head, &column_keys, table, Section::Header);
    let body = resolve_rows_2d(&table.body, &column_keys, table, Section::Body);
    let foot = resolve_rows_2d(&table.foot, &column_keys, table, Section::Footer);

    let mut rows = vec![];
    rows.extend(head.iter().cloned());
    rows.extend(body.iter().cloned());
    rows.extend(foot.iter().cloned());

    let auto_widths = compute_auto_column_widths(document, &rows, column_keys.len(), units)?;

    let mut current_page = page;

    let page_width = current_page.width();
    let page_height = current_page.height();

    let margin_top = to_points(
        table.margin.top.value,
        if table.margin.top.changed {
            units
        } else {
            PdfNativeUnit::Points
        },
    );
    let margin_left = to_points(
        table.margin.left.value,
        if table.margin.left.changed {
            units
        } else {
            PdfNativeUnit::Points
        },
    );
    let margin_right = to_points(
        table.margin.right.value,
        if table.margin.right.changed {
            units
        } else {
            PdfNativeUnit::Points
        },
    );
    let margin_bottom = to_points(
        table.margin.bottom.value,
        if table.margin.bottom.changed {
            units
        } else {
            PdfNativeUnit::Points
        },
    );

    let x_start = table.position.0 + margin_left;
    let y_start = if table.position.1.value > 0.0 {
        table.position.1
    } else {
        margin_top
    };

    let current_page_index = index as u32;

    if let Some(cb) = table.will_draw_page.as_ref() {
        unsafe {
            cb.emit(
                current_page_index,
                to_unit(x_start, units),
                to_unit(y_start, units),
            )
        };
    }

    let available_width = page_width - x_start - margin_right;

    let total_auto_width = auto_widths
        .iter()
        .copied()
        .fold(PdfPoints::ZERO, |a, b| a + b);

    let scaled_widths: Vec<PdfPoints> = if total_auto_width > PdfPoints::ZERO {
        auto_widths
            .iter()
            .map(|w| (*w / total_auto_width.value) * available_width.value)
            .collect()
    } else {
        vec![PdfPoints::ZERO; auto_widths.len()]
    };

    let bottom_margin = margin_bottom;

    let actual_footer_height = foot
        .iter()
        .map(|row| compute_row_height(document, row, &scaled_widths, units))
        .try_fold(PdfPoints::ZERO, |acc, h| h.map(|h| acc + h))?;

    // Reserve footer space only if we actually draw it on every page
    let footer_height = if matches!(table.show_foot, PdfNativeShowFoot::EveryPage) {
        actual_footer_height
    } else {
        PdfPoints::ZERO
    };

    let mut cursor_y = get_y_points(&current_page, y_start);

    current_page.set_content_regeneration_strategy(PdfPageContentRegenerationStrategy::Manual);

    if matches!(
        table.show_head,
        PdfNativeShowHead::EveryPage | PdfNativeShowHead::FirstPage
    ) {
        for (idx, row) in head.iter().enumerate() {
            cursor_y = draw_row(
                document,
                &mut current_page,
                row,
                cursor_y,
                x_start,
                &scaled_widths,
                units,
                Section::Header,
                idx,
                current_page_index,
                table,
            )?;
        }
    }

    for (body_row_idx, row) in body.iter().enumerate() {
        let row_height = compute_row_height(document, row, &scaled_widths, units)?;
        let remaining_space = cursor_y - bottom_margin - footer_height;

        if row_height > remaining_space {
            // Draw footer for the page we are finishing ONLY when EveryPage
            if matches!(table.show_foot, PdfNativeShowFoot::EveryPage) {
                let mut footer_cursor_y = bottom_margin + actual_footer_height;
                let index = { doc.data.lock().current_page };
                for (idx, footer_row) in foot.iter().enumerate() {
                    footer_cursor_y = draw_row(
                        document,
                        &mut current_page,
                        footer_row,
                        footer_cursor_y,
                        x_start,
                        &scaled_widths,
                        units,
                        Section::Footer,
                        idx,
                        index as u32,
                        table,
                    )?;
                }

                if let Some(cb) = table.did_draw_page.as_ref() {
                    unsafe {
                        cb.emit(
                            index as u32,
                            to_unit(x_start, units),
                            to_unit(footer_cursor_y, units),
                        )
                    };
                }
            } else {
                // Even if no footer, still fire did_draw_page if callback exists
                if let Some(cb) = table.did_draw_page.as_ref() {
                    let index = { doc.data.lock().current_page };
                    unsafe {
                        cb.emit(
                            index as u32,
                            to_unit(x_start, units),
                            to_unit(cursor_y, units),
                        )
                    };
                }
            }

            let (mut next_page, index) = add_new_page(document)?;
            {
                doc.data.lock().current_page = index
            }
            next_page.set_content_regeneration_strategy(PdfPageContentRegenerationStrategy::Manual);

            cursor_y = get_y_points(&next_page, margin_top);

            if let Some(cb) = table.will_draw_page.as_ref() {
                unsafe {
                    cb.emit(
                        index as u32,
                        to_unit(x_start, units),
                        to_unit(cursor_y, units),
                    )
                };
            }

            if matches!(table.show_head, PdfNativeShowHead::EveryPage) {
                for (idx, header_row) in head.iter().enumerate() {
                    cursor_y = draw_row(
                        document,
                        &mut next_page,
                        header_row,
                        cursor_y,
                        x_start,
                        &scaled_widths,
                        units,
                        Section::Header,
                        idx,
                        index as u32,
                        table,
                    )?;
                }
            }

            current_page.regenerate_content()?;
            current_page = next_page;
        }

        let (index) = { doc.data.lock().current_page };

        cursor_y = draw_row(
            document,
            &mut current_page,
            row,
            cursor_y,
            x_start,
            &scaled_widths,
            units,
            Section::Body,
            body_row_idx,
            index as u32,
            table,
        )?;
    }

    let mut final_x = x_start;
    let mut final_y = cursor_y;

    if matches!(
        table.show_foot,
        PdfNativeShowFoot::EveryPage | PdfNativeShowFoot::LastPage
    ) {
        // Determine required footer height for this final draw
        let needed_footer_height = if matches!(table.show_foot, PdfNativeShowFoot::EveryPage) {
            // already reserved earlier
            actual_footer_height
        } else {
            // LastPage: may not have reserved space; ensure it fits, else new page
            if cursor_y - bottom_margin < actual_footer_height {
                // Not enough space: finish current page & start new one
                if let Some(cb) = table.did_draw_page.as_ref() {
                    let index = { doc.data.lock().current_page };
                    unsafe {
                        cb.emit(
                            index as u32,
                            to_unit(x_start, units),
                            to_unit(cursor_y, units),
                        )
                    };
                }
                let (mut next_page, index) = add_new_page(document)?;
                {
                    doc.data.lock().current_page = index;
                }
                next_page
                    .set_content_regeneration_strategy(PdfPageContentRegenerationStrategy::Manual);
                cursor_y = get_y_points(&next_page, margin_top);

                if let Some(cb) = table.will_draw_page.as_ref() {
                    unsafe {
                        cb.emit(
                            index as u32,
                            to_unit(x_start, units),
                            to_unit(cursor_y, units),
                        )
                    };
                }

                if matches!(table.show_head, PdfNativeShowHead::EveryPage) {
                    for (idx, header_row) in head.iter().enumerate() {
                        cursor_y = draw_row(
                            document,
                            &mut next_page,
                            header_row,
                            cursor_y,
                            x_start,
                            &scaled_widths,
                            units,
                            Section::Header,
                            idx,
                            index as u32,
                            table,
                        )?;
                    }
                }

                current_page.regenerate_content()?;
                current_page = next_page;
            }
            actual_footer_height
        };

        // Draw footer now (final page or EveryPage case already handled earlier but we still re-draw only if LastPage or last occurrence)
        if needed_footer_height > PdfPoints::ZERO {
            let mut footer_cursor_y = cursor_y;
            let (index) = { doc.data.lock().current_page };
            for (idx, footer_row) in foot.iter().enumerate() {
                footer_cursor_y = draw_row(
                    document,
                    &mut current_page,
                    footer_row,
                    footer_cursor_y,
                    x_start,
                    &scaled_widths,
                    units,
                    Section::Footer,
                    idx,
                    index as u32,
                    table,
                )?;
                final_y = footer_cursor_y;
            }
        } else {
            final_y = cursor_y;
        }
    }

    current_page.set_content_regeneration_strategy(PdfPageContentRegenerationStrategy::Manual);
    current_page.regenerate_content()?;

    {
        let mut lock = doc.data.lock();
        lock.state = PdfNativeState::Idle;
    };

    let mut y_device = page_height - final_y;

    if y_device.value < 0f32 || y_device.value.is_nan() {
        y_device.value = 0f32;
    }

    Ok((final_x, y_device))
}
