use crate::{
    COLUMN_DEF, COLUMN_KEY, HOT_THINGS, JAVA_BOOLEAN_TYPE, JAVA_FLOAT_TYPE, JAVA_INT_TYPE,
    JAVA_OBJECT_TYPE, JAVA_VOID_TYPE, STYLE_DEF, TABLE_CELL, TABLE_CELL_OR_STRING,
};
use jni::objects::{
    JByteArray, JByteBuffer, JClass, JObject, JObjectArray, JString, JValue, ReleaseMode,
};
use jni::sys::{jfloat, jint, jlong, jobjectArray, jstring};
use jni::JNIEnv;
use pdf_core::document::{
    PdfNativeDocument, PdfNativeDocumentConfig, PdfNativeOrientation, PdfNativePaperSize,
    PdfNativeRotationDirection, PdfNativeRotationOrMatrix, PdfNativeStandardPaperSize,
    PdfNativeStyle, PdfNativeTextAlignment, PdfNativeTextBaseline, PdfNativeTextOptions,
    PdfNativeUnit,
};
use pdf_core::table::{
    CHorizontalAlign, CPdfNativePadding, CPdfNativePoints, CVerticalAlign, CellWidth, ColumnDef,
    ColumnKey, PdfNativeFontFamily, PdfNativeFontStyle, PdfNativeOverflow, PdfNativePageBreak,
    PdfNativeShowFoot, PdfNativeShowHead, PdfNativeTableTheme, PdfTable, StyleDef, TableCell,
    TableCellOrString,
};
use pdf_core::utils::{read_float, read_int, to_points};
use pdf_core::{PdfColor, PdfNative, PdfPoints};
use std::collections::HashMap;

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeInit(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
    type_: jint,
    width: jfloat,
    height: jfloat,
    orientation: jint,
    units: jint,
    device_scale: jfloat,
) -> jlong {
    unsafe {
        if instance == 0 {
            return 0;
        }
        let instance = &*(instance as *mut PdfNative);
        let mut config = PdfNativeDocumentConfig::default();
        match type_ {
            0 => config.set_size(PdfNativePaperSize::StandardPaper(
                PdfNativeStandardPaperSize::from_mm_dimensions(
                    width.floor() as u32,
                    height.floor() as u32,
                )
                .unwrap_or(PdfNativeStandardPaperSize::A4),
            )),
            1 => config.set_size(PdfNativePaperSize::Custom(width, height)),
            _ => {}
        }

        match orientation {
            0 => config.set_orientation(PdfNativeOrientation::Landscape),
            1 => config.set_orientation(PdfNativeOrientation::Portrait),
            _ => {}
        }

        config.set_units(match units {
            0 => PdfNativeUnit::Mm,
            1 => PdfNativeUnit::Points,
            2 => PdfNativeUnit::Cm,
            3 => PdfNativeUnit::Inches,
            _ => PdfNativeUnit::Mm,
        });

        config.set_scale(device_scale);

        match PdfNativeDocument::new(instance, config) {
            Ok(document) => Box::into_raw(Box::new(document)) as jlong,
            Err(_) => 0 as jlong,
        }
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeRelease(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let _ = Box::from_raw(instance as *mut PdfNativeDocument);
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeSaveToFile(
    mut env: JNIEnv,
    _class: JClass,
    instance: jlong,
    file: JString,
) -> jstring {
    unsafe {
        if instance == 0 {
            return env
                .new_string("Invalid document")
                .map(|string| string.into_raw())
                .unwrap_or(0 as _);
        }

        let instance = &*(instance as *mut PdfNativeDocument);

        if let Ok(file) = env.get_string(&file) {
            let file = file.to_string_lossy();
            match instance.save_to_file(file.as_ref()) {
                Ok(_) => 0 as _,
                Err(error) => env.new_string(format!("{}", error)).unwrap().into_raw(),
            }
        } else {
            0 as _
        }
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeCount(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
) -> jint {
    unsafe {
        if instance == 0 {
            return 0;
        }
        let instance = &*(instance as *mut PdfNativeDocument);
        instance.count() as jint
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeSetFontSize(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
    size: jfloat,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let instance = &mut *(instance as *mut PdfNativeDocument);
        instance.set_font_size(size);
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeGetFontSize(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
) -> jfloat {
    unsafe {
        if instance == 0 {
            return 0.0;
        }
        let instance = &mut *(instance as *mut PdfNativeDocument);
        instance.font_size() as jfloat
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeSetFontColor(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
    r: jint,
    g: jint,
    b: jint,
    a: jint,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let instance = &mut *(instance as *mut PdfNativeDocument);
        instance.set_font_color(r as u8, g as u8, b as u8, a as u8)
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeSetDrawColor(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
    r: jint,
    g: jint,
    b: jint,
    a: jint,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let instance = &mut *(instance as *mut PdfNativeDocument);
        instance.set_draw_color(r as u8, g as u8, b as u8, a as u8)
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeSetFillColor(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
    r: jint,
    g: jint,
    b: jint,
    a: jint,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let instance = &mut *(instance as *mut PdfNativeDocument);
        instance.set_fill_color(r as u8, g as u8, b as u8, a as u8)
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeSetLineWidth(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
    width: jfloat,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let instance = &mut *(instance as *mut PdfNativeDocument);
        instance.set_line_width(width)
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeGetLineWidth(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
) -> jfloat {
    unsafe {
        if instance == 0 {
            return 0.0;
        }
        let instance = &*(instance as *mut PdfNativeDocument);
        instance.line_width()
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeGetWidth(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
) -> jfloat {
    unsafe {
        if instance == 0 {
            return 0.;
        }
        let instance = &*(instance as *mut PdfNativeDocument);
        instance.current_page_width_point()
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeGetHeight(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
) -> jfloat {
    unsafe {
        if instance == 0 {
            return 0.;
        }
        let instance = &*(instance as *mut PdfNativeDocument);
        instance.current_page_height_point()
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeAddText(
    mut env: JNIEnv,
    _class: JClass,
    instance: jlong,
    text: JString,
    x: jfloat,
    y: jfloat,
    align: jint,
    baseline: jint,
    angle: jfloat,
    rotation_direction: jint,
    char_space: jint,
    horizontal_scale: jfloat,
    line_height_factor: jfloat,
    max_width: jint,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let align: Result<PdfNativeTextAlignment, &'static str> = align.try_into();
        let baseline: Result<PdfNativeTextBaseline, &'static str> = baseline.try_into();
        let rotation_direction: Result<PdfNativeRotationDirection, &'static str> =
            rotation_direction.try_into();
        let instance = &mut *(instance as *mut PdfNativeDocument);

        if let (Ok(text), Ok(align), Ok(baseline), Ok(rotation_direction)) =
            (env.get_string(&text), align, baseline, rotation_direction)
        {
            let text = text.to_string_lossy();
            let mut options = PdfNativeTextOptions::default();
            options.align = align;
            options.baseline = baseline;
            options.rotation_direction = rotation_direction;
            options.angle = PdfNativeRotationOrMatrix::rotation(angle);
            options.char_space = char_space.try_into().unwrap_or_default();
            options.horizontal_scale = horizontal_scale;
            options.line_height_factor = line_height_factor;
            options.max_width = max_width.try_into().unwrap_or_default();

            let _ = instance.add_text(text.as_ref(), x, y, options);
        }
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeAddTextMatrix(
    mut env: JNIEnv,
    _class: JClass,
    instance: jlong,
    text: JString,
    x: jfloat,
    y: jfloat,
    align: jint,
    baseline: jint,
    a: jfloat,
    b: jfloat,
    c: jfloat,
    d: jfloat,
    e: jfloat,
    f: jfloat,
    rotation_direction: jint,
    char_space: jint,
    horizontal_scale: jfloat,
    line_height_factor: jfloat,
    max_width: jint,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let align: Result<PdfNativeTextAlignment, &'static str> = align.try_into();
        let baseline: Result<PdfNativeTextBaseline, &'static str> = baseline.try_into();
        let rotation_direction: Result<PdfNativeRotationDirection, &'static str> =
            rotation_direction.try_into();
        let instance = &mut *(instance as *mut PdfNativeDocument);

        if let (Ok(text), Ok(align), Ok(baseline), Ok(rotation_direction)) =
            (env.get_string(&text), align, baseline, rotation_direction)
        {
            let text = text.to_string_lossy();
            let mut options = PdfNativeTextOptions::default();
            options.align = align;
            options.baseline = baseline;
            options.rotation_direction = rotation_direction;
            options.angle = PdfNativeRotationOrMatrix::matrix(a, b, c, d, e, f);
            options.char_space = char_space.try_into().unwrap_or_default();
            options.horizontal_scale = horizontal_scale;
            options.line_height_factor = line_height_factor;
            options.max_width = max_width.try_into().unwrap_or_default();

            let _ = instance.add_text(text.as_ref(), x, y, options);
        }
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeAddImageBitmap(
    env: JNIEnv,
    _class: JClass,
    instance: jlong,
    image: JObject,
    x: jfloat,
    y: jfloat,
    width: jint,
    height: jint,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let instance = &mut *(instance as *mut PdfNativeDocument);

        let bm = ndk::bitmap::AndroidBitmap::from_jni(env.get_raw(), image.as_raw());
        if let (Ok(info), Ok(addr)) = (bm.get_info(), bm.lock_pixels()) {
            let size = (info.height() * info.stride()) as usize;
            let buffer = std::slice::from_raw_parts_mut(addr as *mut u8, size);
            let width: Option<u32> = width.try_into().ok();
            let height: Option<u32> = height.try_into().ok();
            let _ = instance.add_image_raw(
                buffer,
                info.width(),
                info.height(),
                x,
                y,
                width.map(|v| v as f32),
                height.map(|v| v as f32),
            );
        }
        let _ = bm.unlock_pixels();
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeAddImage(
    mut env: JNIEnv,
    _class: JClass,
    instance: jlong,
    bytes: JByteArray,
    x: jfloat,
    y: jfloat,
    width: jint,
    height: jint,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let instance = &mut *(instance as *mut PdfNativeDocument);

        if let Ok(bytes) = env.get_array_elements_critical(&bytes, ReleaseMode::NoCopyBack) {
            if bytes.is_empty() {
                return;
            }
            let width: Option<u32> = width.try_into().ok();
            let height: Option<u32> = height.try_into().ok();
            let buffer = std::slice::from_raw_parts_mut(bytes.as_ptr() as *mut u8, bytes.len());
            let _ = instance.add_image(
                buffer,
                x,
                y,
                width.map(|v| v as f32),
                height.map(|v| v as f32),
            );
        }
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeAddImageBuffer(
    env: JNIEnv,
    _class: JClass,
    instance: jlong,
    buffer: JByteBuffer,
    x: jfloat,
    y: jfloat,
    width: jint,
    height: jint,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let instance = &mut *(instance as *mut PdfNativeDocument);

        if let (Ok(addr), Ok(cap)) = (
            env.get_direct_buffer_address(&buffer),
            env.get_direct_buffer_capacity(&buffer),
        ) {
            let bytes = std::slice::from_raw_parts(addr as *const u8, cap);
            if bytes.is_empty() {
                return;
            }
            let width: Option<u32> = width.try_into().ok();
            let height: Option<u32> = height.try_into().ok();
            let buffer = std::slice::from_raw_parts_mut(bytes.as_ptr() as *mut u8, bytes.len());
            let _ = instance.add_image(
                buffer,
                x,
                y,
                width.map(|v| v as f32),
                height.map(|v| v as f32),
            );
        }
    }
}
#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeAddPage(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
    size_type: jint,
    size_width: jfloat,
    size_height: jfloat,
    orientation: jint,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let instance = &mut *(instance as *mut PdfNativeDocument);
        let orientation = match orientation {
            0 => Some(PdfNativeOrientation::Landscape),
            1 => Some(PdfNativeOrientation::Portrait),
            _ => None,
        };
        match size_type {
            0 => {
                let size = PdfNativeStandardPaperSize::from_mm_dimensions(
                    size_width.floor() as u32,
                    size_height.floor() as u32,
                )
                .map(|size| PdfNativePaperSize::StandardPaper(size));

                let _ = instance.add_page(size, orientation);
            }
            1 => {
                let size = PdfNativePaperSize::Custom(size_width, size_height);

                let _ = instance.add_page(Some(size), orientation);
            }
            _ => {}
        }
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeCircle(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
    x: jfloat,
    y: jfloat,
    r: jfloat,
    style: jint,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let instance = &mut *(instance as *mut PdfNativeDocument);
        let style: Result<PdfNativeStyle, &'static str> = style.try_into();
        if let Ok(style) = style {
            let _ = instance.circle(x, y, r, style);
        }
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeEllipse(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
    x: jfloat,
    y: jfloat,
    rx: jfloat,
    ry: jfloat,
    style: jint,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let instance = &mut *(instance as *mut PdfNativeDocument);
        let style: Result<PdfNativeStyle, &'static str> = style.try_into();
        if let Ok(style) = style {
            let _ = instance.ellipse(x, y, rx, ry, style);
        }
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeRect(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
    x: jfloat,
    y: jfloat,
    width: jfloat,
    height: jfloat,
    style: jint,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let instance = &mut *(instance as *mut PdfNativeDocument);
        let style: Result<PdfNativeStyle, &'static str> = style.try_into();
        if let Ok(style) = style {
            let _ = instance.rect(x, y, width, height, style);
        }
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeRoundedRect(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
    x: jfloat,
    y: jfloat,
    width: jfloat,
    height: jfloat,
    rx: jfloat,
    ry: jfloat,
    style: jint,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let instance = &mut *(instance as *mut PdfNativeDocument);
        let style: Result<PdfNativeStyle, &'static str> = style.try_into();
        if let Ok(style) = style {
            let _ = instance.rounded_rect(x, y, width, height, rx, ry, style);
        }
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeRenderToBitmap(
    env: JNIEnv,
    _class: JClass,
    instance: jlong,
    index: jint,
    bitmap: JObject,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let instance = &*(instance as *mut PdfNativeDocument);
        let bm = ndk::bitmap::AndroidBitmap::from_jni(env.get_raw(), bitmap.as_raw());
        if let (Ok(info), Ok(addr)) = (bm.get_info(), bm.lock_pixels()) {
            let size = (info.height() * info.stride()) as usize;
            let buffer = std::slice::from_raw_parts_mut(addr as *mut u8, size);

            instance.render(index, info.width() as i32, info.height() as i32, buffer);
        }
        let _ = bm.unlock_pixels();
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeRenderToBitmapWithRect(
    env: JNIEnv,
    _class: JClass,
    instance: jlong,
    index: jint,
    bitmap: JObject,
    x: jint,
    y: jint,
    width: jint,
    height: jint,
    scale: jfloat,
) {
    unsafe {
        if instance == 0 {
            return;
        }
        let instance = &*(instance as *mut PdfNativeDocument);
        let bm = ndk::bitmap::AndroidBitmap::from_jni(env.get_raw(), bitmap.as_raw());
        if let (Ok(info), Ok(addr)) = (bm.get_info(), bm.lock_pixels()) {
            let size = (info.height() * info.stride()) as usize;
            let buffer = std::slice::from_raw_parts_mut(addr as *mut u8, size);

            let _ = instance.render_with_rect(
                index,
                info.width() as i32,
                info.height() as i32,
                x,
                y,
                width,
                height,
                scale,
                buffer,
            );
        }
        let _ = bm.unlock_pixels();
    }
}

// todo reusable buffer to read data
fn parse_style_def(env: &mut JNIEnv, value: &JObject, unit: PdfNativeUnit) -> Result<StyleDef, ()> {
    let mut style = StyleDef::default();
    let style_def = STYLE_DEF.get().unwrap();
    let hot_things = HOT_THINGS.get().unwrap();

    let ff = env
        .get_field_unchecked(&value, &style_def.font_id, JAVA_INT_TYPE)
        .and_then(|value| value.i())
        .map_err(|_| ())?;
    if let Ok(ff) = PdfNativeFontFamily::try_from(ff) {
        style.font = ff;
    }

    let font_style = env
        .get_field_unchecked(&value, &style_def.font_style_id, JAVA_INT_TYPE)
        .and_then(|value| value.i())
        .map_err(|_| ())?;
    if let Ok(font_style) = PdfNativeFontStyle::try_from(font_style) {
        style.font_style = font_style;
    }

    let overflow = env
        .get_field_unchecked(&value, &style_def.overflow_id, JAVA_INT_TYPE)
        .and_then(|value| value.i())
        .map_err(|_| ())?;
    if let Ok(overflow) = PdfNativeOverflow::try_from(overflow) {
        style.overflow = overflow;
    }

    // max 4 values, increase if a larger method is needed
    let mut value_buffer = [0u8; 16];
    let byte_buffer = unsafe {
        env.new_direct_byte_buffer(value_buffer.as_mut_ptr(), value_buffer.len())
            .map_err(|_| ())?
    };
    let has_fill_color = unsafe {
        env.call_method_unchecked(
            &value,
            &style_def.fill_color_id,
            JAVA_BOOLEAN_TYPE,
            &[JValue::from(&byte_buffer).as_jni()],
        )
        .and_then(|value| value.z())
        .map_err(|_| ())?
    };

    if has_fill_color {
        style.fill_color = Some(PdfColor::new(
            read_int(&value_buffer, 0_usize).clamp(0, 255) as u8,
            read_int(&value_buffer, 4_usize).clamp(0, 255) as u8,
            read_int(&value_buffer, 8_usize).clamp(0, 255) as u8,
            read_int(&value_buffer, 12_usize).clamp(0, 255) as u8,
        ))
    }

    // reset buffer
    unsafe {
        std::ptr::write_bytes(value_buffer.as_mut_ptr(), 0, value_buffer.len());
    }

    let has_text_color = unsafe {
        env.call_method_unchecked(
            &value,
            &style_def.text_color_id,
            JAVA_BOOLEAN_TYPE,
            &[JValue::from(&byte_buffer).as_jni()],
        )
        .and_then(|value| value.z())
        .map_err(|_| ())?
    };

    if has_text_color {
        style.text_color = Some(PdfColor::new(
            read_int(&value_buffer, 0_usize).clamp(0, 255) as u8,
            read_int(&value_buffer, 4_usize).clamp(0, 255) as u8,
            read_int(&value_buffer, 8_usize).clamp(0, 255) as u8,
            read_int(&value_buffer, 12_usize).clamp(0, 255) as u8,
        ))
    }

    // reset buffer
    unsafe {
        std::ptr::write_bytes(value_buffer.as_mut_ptr(), 0, value_buffer.len());
    }

    let _ = unsafe {
        env.call_method_unchecked(
            &value,
            &style_def.cell_width_id,
            JAVA_VOID_TYPE,
            &[JValue::from(&byte_buffer).as_jni()],
        )
        .map_err(|_| ())
    }?;

    style.cell_width = match read_int(&value_buffer, 0_usize) {
        1 => CellWidth::Wrap,
        2 => {
            let value = read_float(&value_buffer, 4_usize);
            CellWidth::Fixed(match unit {
                PdfNativeUnit::Mm => PdfPoints::from_mm(value),
                PdfNativeUnit::Points => PdfPoints::new(value),
                PdfNativeUnit::Cm => PdfPoints::from_cm(value),
                PdfNativeUnit::Inches => PdfPoints::from_inches(value),
            })
        }
        _ => CellWidth::Auto,
    };

    // reset buffer
    unsafe {
        std::ptr::write_bytes(value_buffer.as_mut_ptr(), 0, value_buffer.len());
    }

    let min_cell_width_object = env
        .get_field_unchecked(&value, &style_def.min_cell_width_id, JAVA_OBJECT_TYPE)
        .and_then(|value| value.l())
        .map_err(|_| ())?;

    if !min_cell_width_object.is_null() {
        unsafe {
            style.min_cell_width = Some(to_points(
                env.call_method_unchecked(
                    &min_cell_width_object,
                    &hot_things.float_value_id,
                    JAVA_FLOAT_TYPE,
                    &[],
                )
                .and_then(|value| value.f())
                .map_err(|_| ())?,
                unit,
            ));
        }
    }

    style.min_cell_height = to_points(
        env.get_field_unchecked(&value, &style_def.min_cell_height_id, JAVA_FLOAT_TYPE)
            .and_then(|value| value.f())
            .map_err(|_| ())?,
        unit,
    );

    let horizontal_align = env
        .get_field_unchecked(&value, &style_def.horizontal_align_id, JAVA_INT_TYPE)
        .and_then(|value| value.i())
        .map_err(|_| ())?;
    if let Ok(horizontal_align) = CHorizontalAlign::try_from(horizontal_align) {
        style.horizontal_align = horizontal_align;
    }

    let vertical_align = env
        .get_field_unchecked(&value, &style_def.vertical_align_id, JAVA_INT_TYPE)
        .and_then(|value| value.i())
        .map_err(|_| ())?;
    if let Ok(vertical_align) = CVerticalAlign::try_from(vertical_align) {
        style.vertical_align = vertical_align;
    }

    style.font_size = env
        .get_field_unchecked(&value, &style_def.font_size_id, JAVA_FLOAT_TYPE)
        .and_then(|value| value.f())
        .map_err(|_| ())?;

    let _ = unsafe {
        env.call_method_unchecked(
            &value,
            &style_def.cell_padding_id,
            JAVA_VOID_TYPE,
            &[JValue::from(&byte_buffer).as_jni()],
        )
    };

    style.cell_padding = CPdfNativePadding {
        left: CPdfNativePoints::new(read_float(&value_buffer, 0_usize), unit),
        top: CPdfNativePoints::new(read_float(&value_buffer, 4_usize), unit),
        bottom: CPdfNativePoints::new(read_float(&value_buffer, 12_usize), unit),
        right: CPdfNativePoints::new(read_float(&value_buffer, 8_usize), unit),
    };

    // reset buffer
    unsafe {
        std::ptr::write_bytes(value_buffer.as_mut_ptr(), 0, value_buffer.len());
    }

    let has_line_color = unsafe {
        env.call_method_unchecked(
            &value,
            &style_def.line_color_id,
            JAVA_BOOLEAN_TYPE,
            &[JValue::from(&byte_buffer).as_jni()],
        )
        .and_then(|value| value.z())
        .map_err(|_| ())?
    };

    if has_line_color {
        style.line_color = Some(PdfColor::new(
            read_int(&value_buffer, 0_usize).clamp(0, 255) as u8,
            read_int(&value_buffer, 4_usize).clamp(0, 255) as u8,
            read_int(&value_buffer, 8_usize).clamp(0, 255) as u8,
            read_int(&value_buffer, 12_usize).clamp(0, 255) as u8,
        ));
    }

    // reset buffer
    unsafe {
        std::ptr::write_bytes(value_buffer.as_mut_ptr(), 0, value_buffer.len());
    }

    style.line_width = env
        .get_field_unchecked(&value, &style_def.line_width_id, JAVA_FLOAT_TYPE)
        .and_then(|value| value.f())
        .map_err(|_| ())?;

    Ok(style)
}

fn parse_column_styles(
    env: &mut JNIEnv,
    keys: jobjectArray,
    values: jobjectArray,
    unit: PdfNativeUnit,
) -> Result<Option<HashMap<ColumnKey, StyleDef>>, ()> {
    if keys.is_null() || values.is_null() {
        return Ok(None);
    }
    let keys = unsafe { JObjectArray::from_raw(keys) };
    let values = unsafe { JObjectArray::from_raw(values) };
    let mut styles = HashMap::<ColumnKey, StyleDef>::new();
    let keys_len = env.get_array_length(&keys).unwrap();
    let values_len = env.get_array_length(&values).unwrap();
    let column_key = COLUMN_KEY.get().unwrap();
    if keys_len == values_len {
        if keys_len == 0 {
            return Ok(None);
        }

        for i in 0..keys_len {
            let key = env.get_object_array_element(&keys, i).unwrap();
            let mut col_key: Option<ColumnKey> = None;
            if let Ok(is_data_key) =
                env.get_field_unchecked(&key, column_key.is_data_key, JAVA_BOOLEAN_TYPE)
            {
                if let Ok(is_data_key) = is_data_key.z() {
                    col_key = if is_data_key {
                        env.get_field_unchecked(&key, column_key.data_key_id, JAVA_OBJECT_TYPE)
                            .and_then(|key| {
                                key.l()
                                    .and_then(|key| Ok(JString::from(key)))
                                    .and_then(|key| {
                                        env.get_string(&key).and_then(|key| {
                                            let key = key.to_string_lossy();
                                            Ok(ColumnKey::DataKey(key.to_string()))
                                        })
                                    })
                            })
                            .ok()
                    } else {
                        env.get_field_unchecked(&key, column_key.index_id, JAVA_INT_TYPE)
                            .and_then(|key| {
                                key.i().and_then(|key| Ok(ColumnKey::Index(key as usize)))
                            })
                            .ok()
                    };
                }
            }

            if col_key.is_none() {
                continue;
            }

            let value = env.get_object_array_element(&values, i).unwrap();

            let style = parse_style_def(env, &value, unit)?;

            if let Some(key) = col_key {
                styles.insert(key, style);
            }
        }
    }

    Ok(Some(styles))
}

fn parse_cell_data(
    env: &mut JNIEnv,
    value: &JObject,
    unit: PdfNativeUnit,
) -> Result<TableCellOrString, ()> {
    let table_data = TABLE_CELL_OR_STRING.get().unwrap();
    let is_cell = env
        .get_field_unchecked(value, table_data.is_cell, JAVA_BOOLEAN_TYPE)
        .and_then(|value| value.z())
        .map_err(|_| ())?;
    if is_cell {
        let table_cell = TABLE_CELL.get().unwrap();

        let cell = env
            .get_field_unchecked(value, table_data.cell_id, JAVA_OBJECT_TYPE)
            .and_then(|value| value.l())
            .map_err(|_| ())?;

        let content_value = env
            .get_field_unchecked(&cell, table_cell.content_id, JAVA_OBJECT_TYPE)
            .and_then(|value| value.l())
            .map_err(|_| ())?;

        let content = JString::from(content_value);
        let content = env.get_string(&content).map_err(|_| ())?;
        let content = content.to_string_lossy();

        let row_span = env
            .get_field_unchecked(&cell, table_cell.row_span_id, JAVA_INT_TYPE)
            .and_then(|value| value.i())
            .map_err(|_| ())?;

        let col_span = env
            .get_field_unchecked(&cell, table_cell.col_span_id, JAVA_INT_TYPE)
            .and_then(|value| value.i())
            .map_err(|_| ())?;

        let style_value = env
            .get_field_unchecked(&cell, table_cell.style_id, JAVA_OBJECT_TYPE)
            .and_then(|value| value.l())
            .map_err(|_| ())?;
        let style = parse_style_def(env, &style_value, unit)?;

        Ok(TableCellOrString::Cell(TableCell {
            content: content.to_string(),
            row_span: row_span as usize,
            col_span: col_span as usize,
            style,
        }))
    } else {
        let string = env
            .get_field_unchecked(value, table_data.value_id, JAVA_OBJECT_TYPE)
            .and_then(|value| value.l())
            .map_err(|_| ())?;
        let string = JString::from(string);
        let string = env.get_string(&string).map_err(|_| ())?;
        let string = string.to_string_lossy();
        Ok(TableCellOrString::String(string.to_string()))
    }
}

fn parse_table_data(
    env: &mut JNIEnv,
    value: jobjectArray,
    unit: PdfNativeUnit,
) -> Result<Vec<Vec<TableCellOrString>>, ()> {
    let mut ret = vec![];
    if value.is_null() {
        return Ok(ret);
    }
    let value = unsafe { JObjectArray::from_raw(value) };
    let len = env.get_array_length(&value).unwrap();
    for i in 0..len {
        let mut values = vec![];
        if let Ok(inner_value) = env.get_object_array_element(&value, i) {
            let inner_array = JObjectArray::from(inner_value);
            let inner_len = env.get_array_length(&inner_array).unwrap();
            for j in 0..inner_len {
                if let Ok(cell_data) = env.get_object_array_element(&inner_array, j) {
                    let head = parse_cell_data(env, &cell_data, unit)?;
                    values.push(head);
                }
            }
        }
        ret.push(values);
    }
    Ok(ret)
}

fn make(width: f32, height: f32) -> i64 {
    let w_bits = width.to_bits();
    let h_bits = height.to_bits();
    (w_bits as i64) << 32 | (h_bits as i64)
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfDocument_nativeTable(
    mut env: JNIEnv,
    _class: JClass,
    instance: jlong,
    columns: jobjectArray,
    column_styles_keys: jobjectArray,
    column_styles_value: jobjectArray,
    styles: JObject,
    alternate_row_styles: JObject,
    head_styles: JObject,
    body_styles: JObject,
    foot_styles: JObject,
    head: jobjectArray,
    body: jobjectArray,
    foot: jobjectArray,
    position_x: jfloat,
    position_y: jfloat,
    theme: jint,
    page_break: jint,
    show_head: jint,
    show_foot: jint,
) -> jlong {
    unsafe {
        if instance == 0 {
            return make(-1., -1.);
        }
        let instance = &mut *(instance as *mut PdfNativeDocument);
        let unit = instance.unit();
        let mut table = PdfTable::default();

        if !styles.is_null() {
            if let Ok(head_styles) = parse_style_def(&mut env, &styles, unit) {
                table.styles = Some(head_styles);
            }
        }

        if !alternate_row_styles.is_null() {
            if let Ok(head_styles) = parse_style_def(&mut env, &alternate_row_styles, unit) {
                table.alternate_row_styles = Some(head_styles);
            }
        }

        if !columns.is_null() {
            let columns = JObjectArray::from_raw(columns);
            let column_def = COLUMN_DEF.get().unwrap();
            let _ = env.get_array_length(&columns).map(|len| {
                for i in 0..len {
                    let _ = env.get_object_array_element(&columns, i).map(|col| {
                        let mut column = ColumnDef {
                            header: None,
                            data_key: None,
                        };
                        if let Ok(header) = env
                            .get_field_unchecked(&col, column_def.header_id, JAVA_OBJECT_TYPE)
                            .and_then(|value| value.l())
                        {
                            let header = JString::from(header);
                            if let Ok(header) = env.get_string(&header) {
                                let header = header.to_string_lossy();
                                column.header = Some(header.into());
                            }
                        }

                        if let Ok(data_key) = env
                            .get_field_unchecked(&col, column_def.data_key_id, JAVA_OBJECT_TYPE)
                            .and_then(|value| value.l())
                        {
                            let data_key = JString::from(data_key);
                            if let Ok(data_key) = env.get_string(&data_key) {
                                let data_key = data_key.to_string_lossy();
                                column.data_key = Some(data_key.into());
                            }
                        }
                    });
                }
            });
        };

        if let Ok(column_styles) =
            parse_column_styles(&mut env, column_styles_keys, column_styles_value, unit)
        {
            table.column_styles = column_styles;
        }

        if !head_styles.is_null() {
            if let Ok(head_styles) = parse_style_def(&mut env, &head_styles, unit) {
                table.head_styles = Some(head_styles);
            }
        }

        if !body_styles.is_null() {
            if let Ok(body_styles) = parse_style_def(&mut env, &body_styles, unit) {
                table.body_styles = Some(body_styles);
            }
        }

        if !foot_styles.is_null() {
            if let Ok(foot_styles) = parse_style_def(&mut env, &foot_styles, unit) {
                table.foot_styles = Some(foot_styles);
            }
        }

        if !head.is_null() {
            if let Ok(head) = parse_table_data(&mut env, head, unit) {
                table.head = head;
            }
        }

        if !body.is_null() {
            if let Ok(body) = parse_table_data(&mut env, body, unit) {
                table.body = body;
            }
        }

        if !foot.is_null() {
            if let Ok(foot) = parse_table_data(&mut env, foot, unit) {
                table.foot = foot;
            }
        }

        table.position = (to_points(position_x, unit), to_points(position_y, unit));

        if let Ok(theme) = PdfNativeTableTheme::try_from(theme) {
            table.theme = theme;
        }

        if let Ok(page_break) = PdfNativePageBreak::try_from(page_break) {
            table.page_break = page_break;
        }

        if let Ok(show_head) = PdfNativeShowHead::try_from(show_head) {
            table.show_head = show_head;
        }

        if let Ok(show_foot) = PdfNativeShowFoot::try_from(show_foot) {
            table.show_foot = show_foot;
        }

        let device_scale = instance.device_scale();

        let (x, y) = instance
            .table(&table)
            .map(|(x, y)| {
                let x = if x.value == 0.0 {
                    0f32
                } else {
                    x.value * device_scale
                };

                let y = if y.value == 0.0 {
                    0f32
                } else {
                    y.value * device_scale
                };

                (x, y)
            })
            .unwrap_or((-1., -1.));

        make(x, y)
    }
}
