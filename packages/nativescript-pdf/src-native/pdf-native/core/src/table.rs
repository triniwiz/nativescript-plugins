use crate::document::{PdfNativeDocumentData, PdfNativeUnit};
use crate::utils::{get_y_points, to_points};
use parking_lot::lock_api::MutexGuard;
use parking_lot::RawMutex;
use pdfium_render::prelude::*;
use std::cmp::PartialEq;
use std::collections::HashMap;
use std::ffi::{c_char, CStr};
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
}

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
        }
    }
}

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
        }
    }
}

#[derive(Debug, Clone)]
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
    grid.iter()
        .enumerate()
        .map(|(row_idx, row)| {
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

        let content_lines = if matches!(style.cell_width, CellWidth::Wrap) {
            wrap_text(
                document,
                &cell.content,
                font,
                PdfPoints::new(style.font_size),
                cell_width - padding.left.into() - padding.right.into(),
            )
            .unwrap_or_else(|_| vec![cell.content.clone()])
        } else {
            vec![cell.content.clone()]
        };

        let line_height = PdfPoints::new(style.font_size * 1.2);
        let total_text_height = line_height * content_lines.len() as f32;
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

        for line in content_lines {
            let mut text_obj =
                PdfPageTextObject::new(document, &line, font, PdfPoints::new(style.font_size))?;

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

        cursor_x += cell_width;
    }

    Ok(cursor_y - row_height)
}

pub fn draw_table<'a>(
    document: &mut PdfDocument<'a>,
    page: PdfPage<'a>,
    table: &PdfTable,
    data: &mut MutexGuard<RawMutex, PdfNativeDocumentData>,
) -> Result<(PdfPoints, PdfPoints), PdfiumError> {
    let column_keys = resolve_columns(table);

    let head = resolve_rows_2d(&table.head, &column_keys, table, Section::Header);
    let body = resolve_rows_2d(&table.body, &column_keys, table, Section::Body);
    let foot = resolve_rows_2d(&table.foot, &column_keys, table, Section::Footer);

    let mut rows = vec![];
    rows.extend(head.iter().cloned());
    rows.extend(body.iter().cloned());
    rows.extend(foot.iter().cloned());

    let auto_widths = compute_auto_column_widths(document, &rows, column_keys.len(), data.units)?;

    let mut current_page = page;

    let page_width = current_page.width();
    let page_height = current_page.height();

    let margin_top = to_points(
        table.margin.top.value,
        if table.margin.top.changed {
            data.units
        } else {
            PdfNativeUnit::Points
        },
    );
    let margin_left = to_points(
        table.margin.left.value,
        if table.margin.left.changed {
            data.units
        } else {
            PdfNativeUnit::Points
        },
    );
    let margin_right = to_points(
        table.margin.right.value,
        if table.margin.right.changed {
            data.units
        } else {
            PdfNativeUnit::Points
        },
    );
    let margin_bottom = to_points(
        table.margin.bottom.value,
        if table.margin.bottom.changed {
            data.units
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

    let footer_height = foot
        .iter()
        .map(|row| compute_row_height(document, row, &scaled_widths, data.units))
        .try_fold(PdfPoints::ZERO, |acc, h| h.map(|h| acc + h))?;

    let mut cursor_y = get_y_points(&current_page, y_start);

    current_page.set_content_regeneration_strategy(PdfPageContentRegenerationStrategy::Manual);

    if matches!(
        table.show_head,
        PdfNativeShowHead::EveryPage | PdfNativeShowHead::FirstPage
    ) {
        for row in &head {
            cursor_y = draw_row(
                document,
                &mut current_page,
                row,
                cursor_y,
                x_start,
                &scaled_widths,
                data.units,
            )?;
        }
    }

    for row in &body {
        let row_height = compute_row_height(document, row, &scaled_widths, data.units)?;
        let remaining_space = cursor_y - bottom_margin - footer_height;

        if row_height > remaining_space {
            let mut footer_cursor_y = bottom_margin + footer_height;
            for footer_row in &foot {
                footer_cursor_y = draw_row(
                    document,
                    &mut current_page,
                    footer_row,
                    footer_cursor_y,
                    x_start,
                    &scaled_widths,
                    data.units,
                )?;
            }

            let (mut next_page, index) = add_new_page(document)?;
            data.current_page = index;
            next_page.set_content_regeneration_strategy(PdfPageContentRegenerationStrategy::Manual);

            cursor_y = get_y_points(&next_page, y_start);

            if matches!(table.show_head, PdfNativeShowHead::EveryPage) {
                for header_row in &head {
                    cursor_y = draw_row(
                        document,
                        &mut next_page,
                        header_row,
                        cursor_y,
                        x_start,
                        &scaled_widths,
                        data.units,
                    )?;
                }
            }

            current_page.set_content_regeneration_strategy(
                PdfPageContentRegenerationStrategy::AutomaticOnEveryChange,
            );
            current_page.regenerate_content()?;
            current_page = next_page;
        }

        cursor_y = draw_row(
            document,
            &mut current_page,
            row,
            cursor_y,
            x_start,
            &scaled_widths,
            data.units,
        )?;
    }

    let mut final_x = x_start;
    let mut final_y = cursor_y;

    if matches!(
        table.show_foot,
        PdfNativeShowFoot::EveryPage | PdfNativeShowFoot::LastPage
    ) {
        let mut footer_cursor_y = cursor_y;
        for footer_row in &foot {
            footer_cursor_y = draw_row(
                document,
                &mut current_page,
                footer_row,
                footer_cursor_y,
                table.position.0,
                &scaled_widths,
                data.units,
            )?;
            final_y = footer_cursor_y;
        }
    }

    current_page.set_content_regeneration_strategy(
        PdfPageContentRegenerationStrategy::AutomaticOnEveryChange,
    );
    current_page.regenerate_content()?;

    let mut y_device = page_height - final_y;

    if y_device.value < 0f32 || y_device.value.is_nan() {
        y_device.value = 0f32;
    }

    Ok((final_x, y_device))
}
