use crate::CPdfNative;
use pdf_core::document::{
    PdfNativeDocument, PdfNativeDocumentConfig, PdfNativeOrientation, PdfNativePaperSize,
    PdfNativeRotationOrMatrix, PdfNativeStyle, PdfNativeTextOptions,
};
use pdf_core::table::CPdfTable;
use std::ffi::{c_char, c_int, c_uint, CStr};

pub struct CPdfNativeDocument(pub(crate) PdfNativeDocument<'static>);

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
pub extern "C" fn pdf_native_document_width(instance: *mut CPdfNativeDocument) -> f32 {
    unsafe {
        if instance.is_null() {
            return 0.;
        }
        let instance = &*(instance);
        instance.0.current_page_width_point()
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_height(instance: *mut CPdfNativeDocument) -> f32 {
    unsafe {
        if instance.is_null() {
            return 0.;
        }
        let instance = &*(instance);
        instance.0.current_page_height_point()
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
pub extern "C" fn pdf_native_document_table(
    instance: *mut CPdfNativeDocument,
    config: *const CPdfTable,
) {
    unsafe {
        if instance.is_null() || config.is_null() {
            return;
        }
        let instance = &mut *(instance);
        let config = &*config;
        let config = config.into();
        let _ = instance.0.table(&config);
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_render_to_buffer(
    instance: *mut CPdfNativeDocument,
    index: c_int,
    width: c_uint,
    height: c_uint,
    buffer: *mut u8,
    size: usize,
) {
    unsafe {
        if instance.is_null() {
            return;
        }
        let instance = &*(instance);
        let buffer = std::slice::from_raw_parts_mut(buffer, size);

        instance
            .0
            .render(index, width as i32, height as i32, buffer);
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_document_render_with_buffer_size(
    instance: *mut CPdfNativeDocument,
    index: c_int,
    buffer: *mut u8,
    size: usize,
    viewport_width: f32,
    viewport_height: f32,
    scale_x: f32,
    scale_y: f32,
    x: f32,
    y: f32,
    width: f32,
    height: f32,
    scaled_x: f32,
    scaled_y: f32,
    scaled_width: f32,
    scaled_height: f32,
) {
    unsafe {
        if instance.is_null() {
            return;
        }
        let instance = &*(instance);
        let buffer = std::slice::from_raw_parts_mut(buffer, size);

        instance.0.render_with_size(
            index,
            viewport_width,
            viewport_height,
            scale_x,
            scale_y,
            x,
            y,
            width,
            height,
            scaled_x,
            scaled_y,
            scaled_width,
            scaled_height,
            buffer,
        );
    }
}
