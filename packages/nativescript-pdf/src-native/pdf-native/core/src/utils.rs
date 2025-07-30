use crate::document::PdfNativeUnit;
use byteorder::ByteOrder;
use pdfium_render::prelude::{PdfPage, PdfPoints};

#[inline]
pub fn get_y(page: &PdfPage, y: f32, unit: PdfNativeUnit) -> PdfPoints {
    let height = page.height();
    let y = match unit {
        PdfNativeUnit::Mm => PdfPoints::from_mm(y),
        PdfNativeUnit::Points => PdfPoints::new(y),
        PdfNativeUnit::Cm => PdfPoints::from_cm(y),
        PdfNativeUnit::Inches => PdfPoints::from_inches(y),
    };
    height - y
}

#[inline]
pub fn get_y_points(page: &PdfPage, y: PdfPoints) -> PdfPoints {
    page.height() - y
}

#[inline]
pub fn to_points(value: f32, unit: PdfNativeUnit) -> PdfPoints {
    match unit {
        PdfNativeUnit::Mm => PdfPoints::from_mm(value),
        PdfNativeUnit::Points => PdfPoints::new(value),
        PdfNativeUnit::Cm => PdfPoints::from_cm(value),
        PdfNativeUnit::Inches => PdfPoints::from_inches(value),
    }
}

#[inline]
pub fn to_unit(value: PdfPoints, unit: PdfNativeUnit) -> f32 {
    match unit {
        PdfNativeUnit::Mm => value.to_mm(),
        PdfNativeUnit::Points => value.value,
        PdfNativeUnit::Cm => value.to_cm(),
        PdfNativeUnit::Inches => value.to_inches(),
    }
}

#[cfg(target_endian = "big")]
pub fn read_float(buffer: &[u8], offset: usize) -> f32 {
    let length = buffer.len();
    let buffer = &buffer[offset..length];
    byteorder::BigEndian::read_f32(buffer)
}

#[cfg(target_endian = "little")]
pub fn read_float(buffer: &[u8], offset: usize) -> f32 {
    let length = buffer.len();
    let buffer = &buffer[offset..length];
    byteorder::LittleEndian::read_f32(buffer)
}

#[cfg(target_endian = "big")]
pub fn read_int(buffer: &[u8], offset: usize) -> f32 {
    let length = buffer.len();
    let buffer = &buffer[offset..length];
    byteorder::BigEndian::read_i32(buffer)
}

#[cfg(target_endian = "little")]
pub fn read_int(buffer: &[u8], offset: usize) -> i32 {
    let length = buffer.len();
    let buffer = &buffer[offset..length];
    byteorder::LittleEndian::read_i32(buffer)
}