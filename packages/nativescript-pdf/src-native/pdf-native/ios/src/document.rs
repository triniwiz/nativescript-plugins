use crate::{CPdfNative, NSCPdfInfo};
use objc2::__framework_prelude::Retained;
use objc2_foundation::{NSArray, NSData};
use pdf_core::document::{
    PdfNativeDocument, PdfNativeDocumentConfig, PdfNativeOrientation, PdfNativePaperSize,
    PdfNativeRotationOrMatrix, PdfNativeStyle, PdfNativeTextOptions,
};
use pdf_core::table::CPdfTable;
use pdf_core::utils::to_unit;
use pdf_core::{PdfImage, PdfNative};
use std::ffi::{c_char, c_int, c_uint, c_void, CStr, CString};
use std::slice;

pub struct CPdfNativeDocument(pub(crate) PdfNativeDocument<'static>);

#[repr(C)]
pub struct CPdfNativeRenderInfo {
    pub data: *const c_void,
    pub width: u32,
    pub height: u32,
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_init(
    instance: *mut CPdfNative,
    config: *const PdfNativeDocumentConfig,
) -> *mut CPdfNativeDocument {
    unsafe {
        if instance.is_null() {
            return 0 as _;
        }
        let instance = &*(instance);

        let config = if config.is_null() {
            PdfNativeDocumentConfig::default()
        } else {
            *(config)
        };

        match PdfNativeDocument::new(&instance.0, config) {
            Ok(document) => Box::into_raw(Box::new(CPdfNativeDocument(document))),
            Err(_) => 0 as _,
        }
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_release(instance: *mut CPdfNativeDocument) {
    unsafe {
        if instance.is_null() {
            return;
        }

        let _ = Box::from_raw(instance);
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_save_to_file(
    instance: *mut CPdfNativeDocument,
    file: *const c_char,
) -> *const c_char {
    unsafe {
        if instance.is_null() {
            return CString::new("Invalid document").unwrap().into_raw();
        }

        if file.is_null() {
            return CString::new("Invalid file path").unwrap().into_raw();
        }

        let instance = &*(instance);

        let file = CStr::from_ptr(file);
        let file = file.to_string_lossy();
        match instance.0.save_to_file(file.as_ref()) {
            Ok(_) => 0 as _,
            Err(error) => CString::new(format!("{}", error)).unwrap().into_raw(),
        }
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_count(instance: *mut CPdfNativeDocument) -> c_int {
    unsafe {
        if instance.is_null() {
            return 0;
        }
        let instance = &*(instance);
        instance.0.count()
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_page_info(
    instance: *mut CPdfNativeDocument,
    buffer: *mut u8,
    size: usize,
) {
    unsafe {
        if instance.is_null() {
            return;
        }
        let instance = &*(instance);
        if buffer.is_null() || size == 0 {
            return;
        }

        let bytes = std::slice::from_raw_parts_mut(buffer, size);

        let info = instance.0.pages_info();

        if size == (info.len() * 12) {
            let mut offset = 0;
            let is_le = if cfg!(target_endian = "little") {
                true
            } else {
                false
            };
            for page in info {
                let idx = page.index + 1;

                let idx_bytes = if is_le {
                    idx.to_le_bytes()
                } else {
                    idx.to_be_bytes()
                };
                bytes[offset..offset + 4].copy_from_slice(&idx_bytes);
                offset += 4;

                let width_bytes = if is_le {
                    page.width.to_le_bytes()
                } else {
                    page.width.to_be_bytes()
                };
                bytes[offset..offset + 4].copy_from_slice(&width_bytes);
                offset += 4;

                let height_bytes = if is_le {
                    page.height.to_le_bytes()
                } else {
                    page.height.to_be_bytes()
                };
                bytes[offset..offset + 4].copy_from_slice(&height_bytes);
                offset += 4;
            }
        }
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_width(instance: *mut CPdfNativeDocument) -> f32 {
    unsafe {
        if instance.is_null() {
            return 0.;
        }
        let instance = &*(instance);
        instance.0.current_page_width()
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_height(instance: *mut CPdfNativeDocument) -> f32 {
    unsafe {
        if instance.is_null() {
            return 0.;
        }
        let instance = &*(instance);
        instance.0.current_page_height()
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_current_page(instance: *mut CPdfNativeDocument) -> c_uint {
    unsafe {
        if instance.is_null() {
            return 0;
        }
        let instance = &*(instance);
        instance.0.current_page()
    }
}
#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_set_font(
    instance: *mut CPdfNativeDocument,
    font_name: *const c_char,
    font_style: *const c_char,
    font_weight: *const c_char,
) {
    unsafe {
        if instance.is_null()
            || font_name.is_null()
            || font_style.is_null()
            || font_weight.is_null()
        {
            return;
        }
        let instance = &mut *(instance);
        let font_name = CStr::from_ptr(font_name);
        let font_name = font_name.to_string_lossy();
        let font_style = CStr::from_ptr(font_style);
        let font_style = font_style.to_string_lossy();
        let font_weight = CStr::from_ptr(font_weight);
        let font_weight = font_weight.to_string_lossy();

        instance.0.set_font(
            font_name.as_ref(),
            font_style.as_ref(),
            font_weight.as_ref(),
        )
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_add_font(
    instance: *mut CPdfNativeDocument,
    path: *const c_char,
    id: *const c_char,
    style: *const c_char,
    weight: *const c_char,
    is_ttf: bool,
    is_cid_font: bool,
) -> bool {
    unsafe {
        if instance.is_null()
            || path.is_null()
            || id.is_null()
            || style.is_null()
            || weight.is_null()
        {
            return false;
        }
        let instance = &mut *(instance);
        let path = CStr::from_ptr(path);
        let path = path.to_string_lossy();
        let name = CStr::from_ptr(id);
        let name = name.to_string_lossy();
        let style = CStr::from_ptr(style);
        let style = style.to_string_lossy();
        let weight = CStr::from_ptr(weight);
        let weight = weight.to_string_lossy();

        instance.0.add_font(
            path.as_ref(),
            name.as_ref(),
            style.as_ref(),
            weight.as_ref(),
            is_ttf,
            is_cid_font,
        )
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_add_font_with_bytes(
    instance: *mut CPdfNativeDocument,
    bytes: *const u8,
    size: usize,
    id: *const c_char,
    style: *const c_char,
    weight: *const c_char,
    is_ttf: bool,
    is_cid_font: bool,
) -> bool {
    unsafe {
        if instance.is_null()
            || bytes.is_null()
            || size == 0
            || id.is_null()
            || style.is_null()
            || weight.is_null()
        {
            return false;
        }
        let instance = &mut *(instance);
        let bytes = slice::from_raw_parts(bytes, size);
        let name = CStr::from_ptr(id);
        let name = name.to_string_lossy();
        let style = CStr::from_ptr(style);
        let style = style.to_string_lossy();
        let weight = CStr::from_ptr(weight);
        let weight = weight.to_string_lossy();
        instance.0.add_font_with_bytes(
            bytes,
            name.as_ref(),
            style.as_ref(),
            weight.as_ref(),
            is_ttf,
            is_cid_font,
        )
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_add_page(
    instance: *mut CPdfNativeDocument,
    size: PdfNativePaperSize,
    orientation: PdfNativeOrientation,
) {
    unsafe {
        if instance.is_null() {
            return;
        }
        let instance = &mut *(instance);
        let _ = instance.0.add_page(Some(size), Some(orientation));
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_circle(
    instance: *mut CPdfNativeDocument,
    x: f32,
    y: f32,
    r: f32,
    style: PdfNativeStyle,
) {
    unsafe {
        if instance.is_null() {
            return;
        }
        let instance = &mut *(instance);
        let _ = instance.0.circle(x, y, r, style);
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_ellipse(
    instance: *mut CPdfNativeDocument,
    x: f32,
    y: f32,
    rx: f32,
    ry: f32,
    style: PdfNativeStyle,
) {
    unsafe {
        if instance.is_null() {
            return;
        }
        let instance = &mut *(instance);
        let _ = instance.0.ellipse(x, y, rx, ry, style);
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_rect(
    instance: *mut CPdfNativeDocument,
    x: f32,
    y: f32,
    width: f32,
    height: f32,
    style: PdfNativeStyle,
) {
    unsafe {
        if instance.is_null() {
            return;
        }
        let instance = &mut *(instance);
        let _ = instance.0.rect(x, y, width, height, style);
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_rounded_rect(
    instance: *mut CPdfNativeDocument,
    x: f32,
    y: f32,
    width: f32,
    height: f32,
    rx: f32,
    ry: f32,
    style: PdfNativeStyle,
) {
    unsafe {
        if instance.is_null() {
            return;
        }
        let instance = &mut *(instance);
        let _ = instance.0.rounded_rect(x, y, width, height, rx, ry, style);
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_delete_page(
    instance: *mut CPdfNativeDocument,
    index: c_uint,
) {
    unsafe {
        if instance.is_null() {
            return;
        }
        let instance = &mut *(instance);
        instance.0.delete_page(index);
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_set_page(instance: *mut CPdfNativeDocument, index: c_uint) {
    unsafe {
        if instance.is_null() {
            return;
        }
        let instance = &mut *(instance);
        instance.0.set_page(index);
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_set_font_size(instance: *mut CPdfNativeDocument, size: f32) {
    unsafe {
        if instance.is_null() {
            return;
        }
        let instance = &mut *(instance);
        instance.0.set_font_size(size);
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_get_font_size(instance: *mut CPdfNativeDocument) -> f32 {
    unsafe {
        if instance.is_null() {
            return 0.;
        }
        let instance = &*(instance);
        instance.0.font_size()
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_set_font_color(
    instance: *mut CPdfNativeDocument,
    r: i32,
    g: i32,
    b: i32,
    a: i32,
) {
    unsafe {
        if instance.is_null() {
            return;
        }
        let instance = &mut *(instance);
        instance
            .0
            .set_font_color(r as u8, g as u8, b as u8, a as u8)
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_set_draw_color(
    instance: *mut CPdfNativeDocument,
    r: i32,
    g: i32,
    b: i32,
    a: i32,
) {
    unsafe {
        if instance.is_null() {
            return;
        }
        let instance = &mut *(instance);
        instance
            .0
            .set_draw_color(r as u8, g as u8, b as u8, a as u8)
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_set_fill_color(
    instance: *mut CPdfNativeDocument,
    r: i32,
    g: i32,
    b: i32,
    a: i32,
) {
    unsafe {
        if instance.is_null() {
            return;
        }
        let instance = &mut *(instance);
        instance
            .0
            .set_fill_color(r as u8, g as u8, b as u8, a as u8)
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_set_line_width(
    instance: *mut CPdfNativeDocument,
    width: f32,
) {
    unsafe {
        if instance.is_null() {
            return;
        }
        let instance = &mut *(instance);
        instance.0.set_line_width(width)
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_get_line_width(instance: *mut CPdfNativeDocument) -> f32 {
    unsafe {
        if instance.is_null() {
            return 0.;
        }
        let instance = &mut *(instance);
        instance.0.line_width()
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_add_text(
    instance: *mut CPdfNativeDocument,
    text: *const c_char,
    x: f32,
    y: f32,
    options: *const PdfNativeTextOptions,
) {
    unsafe {
        if instance.is_null() || text.is_null() {
            return;
        }
        let instance = &mut *(instance);
        let text = CStr::from_ptr(text);
        let text = text.to_string_lossy();
        if options.is_null() {
            let opts = PdfNativeTextOptions::default();
            let _ = instance.0.add_text(text.as_ref(), x, y, opts);
        } else {
            let opts = &*options;
            let _ = instance.0.add_text(text.as_ref(), x, y, *opts);
        }
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_add_text_matrix(
    instance: *mut CPdfNativeDocument,
    text: *const c_char,
    x: f32,
    y: f32,
    options: *const PdfNativeTextOptions,
    a: f32,
    b: f32,
    c: f32,
    d: f32,
    e: f32,
    f: f32,
) {
    unsafe {
        if instance.is_null() || text.is_null() {
            return;
        }
        let instance = &mut *(instance);
        let text = CStr::from_ptr(text);
        let text = text.to_string_lossy();
        let opts = if options.is_null() {
            let mut opts = PdfNativeTextOptions::default();
            opts.angle = PdfNativeRotationOrMatrix::matrix(a, b, c, d, e, f);
            opts
        } else {
            *options
        };

        let _ = instance.0.add_text(text.as_ref(), x, y, opts);
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_add_image(
    instance: *mut CPdfNativeDocument,
    image_data: *const u8,
    image_size: c_uint,
    x: f32,
    y: f32,
    width: i32,
    height: i32,
) {
    unsafe {
        if instance.is_null() || image_data.is_null() {
            return;
        }
        let image_data = std::slice::from_raw_parts(image_data, image_size as usize);
        let instance = &mut *(instance);
        let _ = instance
            .0
            .add_image(image_data, x, y, Some(width as f32), Some(height as f32));
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_add_image_pdf(
    instance: *mut CPdfNativeDocument,
    image: *mut CPdfNativeImage,
    x: f32,
    y: f32,
    width: i32,
    height: i32,
) {
    unsafe {
        if instance.is_null() || image.is_null() {
            return;
        }
        let image = &mut *(image);
        let instance = &mut *(instance);
        let _ = instance
            .0
            .add_pdf_image(&mut image.0, x, y, Some(width as f32), Some(height as f32));
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_add_raw_image(
    instance: *mut CPdfNativeDocument,
    image_data: *const u8,
    image_size: c_uint,
    image_width: u32,
    image_height: u32,
    x: f32,
    y: f32,
    width: i32,
    height: i32,
) {
    unsafe {
        if instance.is_null() || image_data.is_null() {
            return;
        }
        let image_data = std::slice::from_raw_parts(image_data, image_size as usize);
        let instance = &mut *(instance);
        let _ = instance.0.add_image_raw(
            image_data,
            image_width,
            image_height,
            x,
            y,
            Some(width as f32),
            Some(height as f32),
        );
    }
}

fn make(width: f32, height: f32) -> i64 {
    let w_bits = width.to_bits();
    let h_bits = height.to_bits();
    (w_bits as i64) << 32 | (h_bits as i64)
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_table(
    instance: *mut CPdfNativeDocument,
    config: *const CPdfTable,
) -> i64 {
    unsafe {
        if instance.is_null() || config.is_null() {
            return make(-1.0, -1.0);
        }
        let instance = &mut *(instance);
        let config = &*config;
        let config = config.into();
        let (x, y) = instance
            .0
            .table(&config)
            .map(|(x, y)| {
                let unit = instance.0.unit();
                (to_unit(x, unit), to_unit(y, unit))
            })
            .unwrap_or((-1., -1.));

        make(x, y)
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_render_into_buffer(
    instance: *mut CPdfNativeDocument,
    index: c_int,
    buffer: *mut u8,
    buffer_size: usize,
    width: c_uint,
    height: c_uint,
) {
    unsafe {
        if instance.is_null() || buffer.is_null() {
            return;
        }

        let instance = &*(instance);

        let buffer = std::slice::from_raw_parts_mut(buffer, buffer_size);

        instance
            .0
            .render(index, width as i32, height as i32, buffer);
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_render_into_buffer_with_scale(
    instance: *mut CPdfNativeDocument,
    index: c_int,
    viewport_width: f32,
    viewport_height: f32,
    scale_x: f32,
    scale_y: f32,
    x: f32,
    y: f32,
    width: f32,
    height: f32,
    buffer: *mut u8,
    buffer_size: usize,
) {
    unsafe {
        if instance.is_null() || buffer.is_null() {
            return;
        }
        let instance = &*(instance);
        let buffer = std::slice::from_raw_parts_mut(buffer, buffer_size);

        let _ = instance.0.render_with_size(
            index,
            viewport_width,
            viewport_height,
            scale_x,
            scale_y,
            x,
            y,
            width,
            height,
            buffer,
        );
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_render_to_buffer(
    instance: *mut CPdfNativeDocument,
    index: c_int,
    width: c_uint,
    height: c_uint,
    flip_vertical: bool,
    flip_horizontal: bool,
) -> *mut CPdfNativeRenderInfo {
    unsafe {
        if instance.is_null() {
            return 0 as _;
        }

        let instance = &*(instance);

        instance
            .0
            .render_to_buffer(
                index,
                width as i32,
                height as i32,
                flip_vertical,
                flip_horizontal,
            )
            .map(|(width, height, buffer)| {
                let data = NSData::from_vec(buffer);
                let data = Retained::into_raw(data) as *const c_void;

                Box::into_raw(Box::new(CPdfNativeRenderInfo {
                    data,
                    width,
                    height,
                }))
            })
            .unwrap_or(0 as _)
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_render_to_buffer_with_scale(
    instance: *mut CPdfNativeDocument,
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
) -> *mut CPdfNativeRenderInfo {
    unsafe {
        if instance.is_null() {
            return 0 as _;
        }
        let instance = &*(instance);

        instance
            .0
            .render_with_size_to_buffer(
                index,
                viewport_width,
                viewport_height,
                scale_x,
                scale_y,
                x,
                y,
                width,
                height,
                flip_vertical,
                flip_horizontal,
            )
            .map(|(width, height, buffer)| {
                let data = NSData::from_vec(buffer);
                let data = Retained::into_raw(data) as *const c_void;

                Box::into_raw(Box::new(CPdfNativeRenderInfo {
                    data,
                    width,
                    height,
                }))
            })
            .unwrap_or(0 as _)
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_render_to_buffers(
    instance: *mut CPdfNativeDocument,
    indices: *const c_int,
    indices_size: usize,
    width: c_uint,
    height: c_uint,
    flip_vertical: bool,
    flip_horizontal: bool,
) -> *mut c_void {
    unsafe {
        if instance.is_null() || indices.is_null() || indices_size == 0 {
            return 0 as _;
        }
        let instance = &*(instance);
        let indices = std::slice::from_raw_parts(indices, indices_size);

        instance
            .0
            .render_to_buffers(
                indices,
                width as i32,
                height as i32,
                flip_vertical,
                flip_horizontal,
            )
            .map(|info| {
                let buffer = info
                    .into_iter()
                    .map(|(width, height, buffer)| {
                        let data = NSData::from_vec(buffer);
                        NSCPdfInfo::new(width, height, data).0
                    })
                    .collect::<Vec<_>>();
                let data = NSArray::from_retained_slice(buffer.as_slice());
                Retained::into_raw(data) as _
            })
            .unwrap_or(0 as _)
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_render_to_buffers_with_scale(
    instance: *mut CPdfNativeDocument,
    indices: *const c_int,
    indices_size: usize,
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
) -> *mut c_void {
    unsafe {
        if instance.is_null() || indices.is_null() || indices_size == 0 {
            return 0 as _;
        }
        let instance = &*(instance);
        let indices = std::slice::from_raw_parts(indices, indices_size);
        instance
            .0
            .render_with_size_to_buffers(
                indices,
                viewport_width,
                viewport_height,
                scale_x,
                scale_y,
                x,
                y,
                width,
                height,
                flip_vertical,
                flip_horizontal,
            )
            .map(|info| {
                let buffer = info
                    .into_iter()
                    .map(|(width, height, buffer)| {
                        let data = NSData::from_vec(buffer);
                        NSCPdfInfo::new(width, height, data).0
                    })
                    .collect::<Vec<_>>();
                let data = NSArray::from_retained_slice(buffer.as_slice());
                Retained::into_raw(data) as _
            })
            .unwrap_or(0 as _)
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_render_to_buffer_with_scale_and_tile(
    instance: *mut CPdfNativeDocument,
    index: c_int,
    tile_width: c_uint,
    tile_height: c_uint,
    viewport_width: f32,
    viewport_height: f32,
    scale: f32,
    row: c_uint,
    column: c_uint,
) -> *mut CPdfNativeRenderInfo {
    unsafe {
        if instance.is_null() {
            return 0 as _;
        }
        let instance = &*(instance);

        instance
            .0
            .render_with_size_to_buffer_with_tile(
                index,
                tile_width,
                tile_height,
                viewport_width,
                viewport_height,
                scale,
                row,
                column,
            )
            .map(|(width, height, buffer)| {
                let data = NSData::from_vec(buffer);
                let data = Retained::into_raw(data) as *const c_void;

                Box::into_raw(Box::new(CPdfNativeRenderInfo {
                    data,
                    width,
                    height,
                }))
            })
            .unwrap_or(0 as _)
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_render_to_buffer_with_viewport_offset_and_size(
    instance: *mut CPdfNativeDocument,
    index: c_int,
    viewport_width: f32,
    viewport_height: f32,
    scale: f32,
    x: f32,
    y: f32,
    width: f32,
    height: f32,
) -> *mut CPdfNativeRenderInfo {
    unsafe {
        if instance.is_null() {
            return 0 as _;
        }
        let instance = &*(instance);

        instance
            .0
            .render_with_viewport_offset_and_size_to_buffer(
                index,
                viewport_width,
                viewport_height,
                scale,
                x,
                y,
                width,
                height,
            )
            .map(|(width, height, buffer)| {
                let data = NSData::from_vec(buffer);
                let data = Retained::into_raw(data) as *const c_void;

                Box::into_raw(Box::new(CPdfNativeRenderInfo {
                    data,
                    width,
                    height,
                }))
            })
            .unwrap_or(0 as _)
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_render_info_release(instance: *mut CPdfNativeRenderInfo) {
    unsafe {
        if instance.is_null() {
            return;
        }

        let _ = Box::from_raw(instance);
    }
}

pub struct CPdfNativeImage(PdfImage);


#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_image_get_width(instance: *mut CPdfNativeImage) -> u32 {
    if instance.is_null() {
        return 0;
    }

    unsafe {
       let instance = &*(instance);
        instance.0.width()
    }
}


#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_image_get_height(instance: *mut CPdfNativeImage) -> u32 {
    if instance.is_null() {
        return 0;
    }

    unsafe {
        let instance = &*(instance);
        instance.0.height()
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_image_release(instance: *mut CPdfNativeImage) {
    if instance.is_null() {
        return;
    }

    unsafe {
        let _ = Box::from_raw(instance);
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_image_from_data(
    instance: *mut CPdfNativeDocument,
    image: *const u8,
    size: usize,
    width: u32,
    height: u32,
) -> *mut CPdfNativeImage {
    let mut ret: Option<CPdfNativeImage> = None;
    unsafe {
        if instance.is_null() {
            return 0 as _;
        }
        let instance = &*(instance as *mut PdfNative);

        let buffer = slice::from_raw_parts(image, size);
        ret = image::RgbaImage::from_raw(width, height, buffer.to_vec()).and_then(|image| {
            let image = PdfImage::new(instance, image::DynamicImage::from(image)).ok()?;
            Some(CPdfNativeImage(image))
        });
    }

    match ret {
        None => 0 as _,
        Some(image) => Box::into_raw(Box::new(image)),
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_image_from_encoded_data(
    instance: *mut CPdfNativeDocument,
    image: *const u8,
    size: usize,
) -> *mut CPdfNativeImage {
    let mut ret: Option<CPdfNativeImage> = None;

    unsafe {
        if instance.is_null() {
            return 0 as _;
        }
        let instance = &*(instance as *mut PdfNative);

        let buffer = slice::from_raw_parts(image, size);
        ret = image::load_from_memory(buffer).ok().and_then(|image| {
            let image = PdfImage::new(instance, image).ok()?;
            Some(CPdfNativeImage(image))
        });
    }

    match ret {
        None => 0 as _,
        Some(image) => Box::into_raw(Box::new(image)),
    }
}
