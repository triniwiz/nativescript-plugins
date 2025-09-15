mod document;

use android_logger::Config;
use jni::objects::{
    GlobalRef, JByteArray, JByteBuffer, JClass, JFieldID, JMethodID, JObject, JString, ReleaseMode,
};
use jni::signature::ReturnType;
use jni::sys::{jbyte, jfloat, jint, jlong, JNI_TRUE};
use jni::{JNIEnv, JavaVM};
use log::LevelFilter;
use once_cell::sync::OnceCell;
use pdf_core::{PdfImage, PdfNative};
use std::os::raw::c_void;

pub(crate) struct ColumnKeyCache {
    pub index_class: GlobalRef,
    pub data_key_class: GlobalRef,
    pub index_id: JFieldID,
    pub data_key_id: JFieldID,
    pub is_data_key: JFieldID,
}

pub(crate) struct ColumnDefCache {
    pub column_def_class: GlobalRef,
    pub header_id: JFieldID,
    pub data_key_id: JFieldID,
}

pub(crate) struct StyleDefCache {
    pub style_def_class: GlobalRef,
    pub font_id: JFieldID,
    pub font_style_id: JFieldID,
    pub overflow_id: JFieldID,
    pub fill_color_id: JMethodID,
    pub text_color_id: JMethodID,
    pub cell_width_id: JMethodID,
    pub min_cell_width_id: JFieldID,
    pub min_cell_height_id: JFieldID,
    pub horizontal_align_id: JFieldID,
    pub vertical_align_id: JFieldID,
    pub font_size_id: JFieldID,
    pub cell_padding_id: JMethodID,
    pub line_color_id: JMethodID,
    pub line_width_id: JFieldID,
}

pub(crate) struct TableCellOrStringCache {
    pub table_cell_or_string_class: GlobalRef,
    pub table_cell_or_string_cell_class: GlobalRef,
    pub table_cell_or_string_string_class: GlobalRef,
    pub value_id: JFieldID,
    pub cell_id: JFieldID,
    pub is_cell: JFieldID,
}

pub(crate) struct TableCellCache {
    pub table_cell_class: GlobalRef,
    pub content_id: JFieldID,
    pub row_span_id: JFieldID,
    pub col_span_id: JFieldID,
    pub style_id: JFieldID,
}

pub(crate) const JAVA_FLOAT_TYPE: ReturnType =
    ReturnType::Primitive(jni::signature::Primitive::Float);

pub(crate) const JAVA_VOID_TYPE: ReturnType =
    ReturnType::Primitive(jni::signature::Primitive::Void);

pub(crate) const JAVA_INT_TYPE: ReturnType = ReturnType::Primitive(jni::signature::Primitive::Int);
pub(crate) const JAVA_BOOLEAN_TYPE: ReturnType =
    ReturnType::Primitive(jni::signature::Primitive::Boolean);

pub(crate) const JAVA_OBJECT_TYPE: ReturnType = ReturnType::Object;

pub static COLUMN_KEY: OnceCell<ColumnKeyCache> = OnceCell::new();
pub static COLUMN_DEF: OnceCell<ColumnDefCache> = OnceCell::new();
pub static STYLE_DEF: OnceCell<StyleDefCache> = OnceCell::new();

pub static TABLE_CELL_OR_STRING: OnceCell<TableCellOrStringCache> = OnceCell::new();

pub static TABLE_CELL: OnceCell<TableCellCache> = OnceCell::new();

const STYLE_DEF_CLASS: &str = "io/github/triniwiz/plugins/pdf/table/StyleDef";
const COLUMN_DEF_CLASS: &str = "io/github/triniwiz/plugins/pdf/table/ColumnDef";
const COLUMN_KEY_INDEX_CLASS: &str = "io/github/triniwiz/plugins/pdf/table/ColumnKey$Index";
const COLUMN_KEY_DATA_KEY_CLASS: &str = "io/github/triniwiz/plugins/pdf/table/ColumnKey$DataKey";

const TABLE_CELL_OR_STRING_CLASS: &str = "io/github/triniwiz/plugins/pdf/table/TableCellOrString";
const TABLE_CELL_OR_STRING_STRING_CLASS: &str =
    "io/github/triniwiz/plugins/pdf/table/TableCellOrString$StringValue";
const TABLE_CELL_OR_STRING_CELL_CLASS: &str =
    "io/github/triniwiz/plugins/pdf/table/TableCellOrString$Cell";

const TABLE_CELL_CLASS: &str = "io/github/triniwiz/plugins/pdf/table/TableCell";

const TABLE_CLASS: &str = "io/github/triniwiz/plugins/pdf/table/PdfTable";

const PAIR_CLASS: &str = "android/util/Pair";

const FLOAT_CLASS: &str = "java/lang/Float";

const BOOLEAN_CLASS: &str = "java/lang/Boolean";

const JNI_HELPERS_CLASS: &str = "io/github/triniwiz/plugins/pdf/JNIHelpers";

use pdf_core::document::PdfNativeDocument;
use pdf_core::{HotCache, TableCache, HOT_THINGS, JVM, TABLE};

#[unsafe(no_mangle)]
pub extern "system" fn JNI_OnLoad(vm: JavaVM, _reserved: *const c_void) -> jint {
    android_logger::init_once(Config::default().with_max_level(LevelFilter::Info));

    if let Ok(mut env) = vm.get_env() {
        let index_class = env.find_class(COLUMN_KEY_INDEX_CLASS).unwrap();
        let index_id = env.get_field_id(&index_class, "index", "I").unwrap();

        let data_class = env.find_class(COLUMN_KEY_DATA_KEY_CLASS).unwrap();
        let data_key_id = env
            .get_field_id(&data_class, "key", "Ljava/lang/String;")
            .unwrap();

        let is_data_key = env.get_field_id(&data_class, "isDataKey", "Z").unwrap();

        COLUMN_KEY.get_or_init(|| ColumnKeyCache {
            index_class: env.new_global_ref(index_class).unwrap(),
            data_key_class: env.new_global_ref(data_class).unwrap(),
            index_id,
            data_key_id,
            is_data_key,
        });

        let col_def_class = env.find_class(COLUMN_DEF_CLASS).unwrap();
        let header_id = env
            .get_field_id(&col_def_class, "header", "Ljava/lang/String;")
            .unwrap();

        let data_key_id = env
            .get_field_id(&col_def_class, "dataKey", "Ljava/lang/String;")
            .unwrap();

        COLUMN_DEF.get_or_init(|| ColumnDefCache {
            column_def_class: env.new_global_ref(col_def_class).unwrap(),
            header_id,
            data_key_id,
        });

        let style_def_class = env.find_class(STYLE_DEF_CLASS).unwrap();

        let font_id = env
            .get_field_id(&style_def_class, "fontValue", "I")
            .unwrap();

        let font_style_id = env
            .get_field_id(&style_def_class, "fontStyleValue", "I")
            .unwrap();

        let overflow_id = env
            .get_field_id(&style_def_class, "overflowValue", "I")
            .unwrap();

        let fill_color_id = env
            .get_method_id(
                &style_def_class,
                "getFillColorValue",
                "(Ljava/nio/ByteBuffer;)Z",
            )
            .unwrap();

        let line_color_id = env
            .get_method_id(
                &style_def_class,
                "getLineColorValue",
                "(Ljava/nio/ByteBuffer;)Z",
            )
            .unwrap();

        let text_color_id = env
            .get_method_id(
                &style_def_class,
                "getTextColorValue",
                "(Ljava/nio/ByteBuffer;)Z",
            )
            .unwrap();

        let cell_width_id = env
            .get_method_id(
                &style_def_class,
                "getCellWidthValue",
                "(Ljava/nio/ByteBuffer;)V",
            )
            .unwrap();

        let min_cell_width_id = env
            .get_field_id(&style_def_class, "minCellWidth", "Ljava/lang/Float;")
            .unwrap();

        let min_cell_height_id = env
            .get_field_id(&style_def_class, "minCellHeight", "F")
            .unwrap();

        let horizontal_align_id = env
            .get_field_id(&style_def_class, "horizontalAlignValue", "I")
            .unwrap();

        let vertical_align_id = env
            .get_field_id(&style_def_class, "verticalAlignValue", "I")
            .unwrap();

        let font_size_id = env.get_field_id(&style_def_class, "fontSize", "F").unwrap();

        let cell_padding_id = env
            .get_method_id(
                &style_def_class,
                "getCellPadding",
                "(Ljava/nio/ByteBuffer;)V",
            )
            .unwrap();

        let line_width_id = env
            .get_field_id(&style_def_class, "lineWidth", "F")
            .unwrap();

        STYLE_DEF.get_or_init(|| StyleDefCache {
            style_def_class: env.new_global_ref(style_def_class).unwrap(),
            font_id,
            font_style_id,
            overflow_id,
            fill_color_id,
            text_color_id,
            cell_width_id,
            min_cell_width_id,
            min_cell_height_id,
            horizontal_align_id,
            vertical_align_id,
            font_size_id,
            cell_padding_id,
            line_color_id,
            line_width_id,
        });

        let float_class = env.find_class(FLOAT_CLASS).unwrap();
        let float_value_id = env
            .get_method_id(&float_class, "floatValue", "()F")
            .unwrap();

        let pair_class = env.find_class(PAIR_CLASS).unwrap();
        let pair_first_id = env
            .get_field_id(&pair_class, "first", "Ljava/lang/Object;")
            .unwrap();

        let pair_second_id = env
            .get_field_id(&pair_class, "second", "Ljava/lang/Object;")
            .unwrap();

        let boolean_class = env.find_class(BOOLEAN_CLASS).unwrap();
        let boolean_value_id = env
            .get_method_id(&boolean_class, "booleanValue", "()Z")
            .unwrap();

        let jni_helper_class = env.find_class(JNI_HELPERS_CLASS).unwrap();
        let jni_helper_pair_first_id = env
            .get_static_method_id(&jni_helper_class, "pairFirst", "(Landroid/util/Pair;)Z")
            .unwrap();

        let jni_helper_pair_second_id = env
            .get_static_method_id(
                &jni_helper_class,
                "pairSecond",
                "(Landroid/util/Pair;)Ljava/lang/String;",
            )
            .unwrap();

        HOT_THINGS.get_or_init(|| HotCache {
            float_class: env.new_global_ref(float_class).unwrap(),
            float_value_id,
            pair_class: env.new_global_ref(pair_class).unwrap(),
            pair_first_id,
            pair_second_id,
            boolean_class: env.new_global_ref(boolean_class).unwrap(),
            boolean_value_id,
            jni_helper_class: env.new_global_ref(jni_helper_class).unwrap(),
            jni_helper_pair_first_id,
            jni_helper_pair_second_id,
        });

        let table_cell_or_string_class = env.find_class(TABLE_CELL_OR_STRING_CLASS).unwrap();
        let table_cell_or_string_string_class =
            env.find_class(TABLE_CELL_OR_STRING_STRING_CLASS).unwrap();
        let table_cell_or_string_cell_class =
            env.find_class(TABLE_CELL_OR_STRING_CELL_CLASS).unwrap();
        let value_id = env
            .get_field_id(
                &table_cell_or_string_string_class,
                "value",
                "Ljava/lang/String;",
            )
            .unwrap();

        let cell_id = env
            .get_field_id(
                &table_cell_or_string_cell_class,
                "cell",
                "Lio/github/triniwiz/plugins/pdf/table/TableCell;",
            )
            .unwrap();

        let is_cell = env
            .get_field_id(&table_cell_or_string_class, "isCell", "Z")
            .unwrap();

        TABLE_CELL_OR_STRING.get_or_init(|| TableCellOrStringCache {
            table_cell_or_string_class: env.new_global_ref(table_cell_or_string_class).unwrap(),
            table_cell_or_string_string_class: env
                .new_global_ref(table_cell_or_string_string_class)
                .unwrap(),
            table_cell_or_string_cell_class: env
                .new_global_ref(table_cell_or_string_cell_class)
                .unwrap(),
            value_id,
            cell_id,
            is_cell,
        });

        let table_cell_class = env.find_class(TABLE_CELL_CLASS).unwrap();
        let content_id = env
            .get_field_id(&table_cell_class, "content", "Ljava/lang/String;")
            .unwrap();

        let row_span_id = env.get_field_id(&table_cell_class, "rowSpan", "I").unwrap();

        let col_span_id = env.get_field_id(&table_cell_class, "colSpan", "I").unwrap();

        let style_id = env
            .get_field_id(
                &table_cell_class,
                "style",
                "Lio/github/triniwiz/plugins/pdf/table/StyleDef;",
            )
            .unwrap();

        TABLE_CELL.get_or_init(|| TableCellCache {
            table_cell_class: env.new_global_ref(table_cell_class).unwrap(),
            content_id,
            row_span_id,
            col_span_id,
            style_id,
        });

        let table_class = env.find_class(TABLE_CLASS).unwrap();

        let will_draw_page_id = env
            .get_method_id(&table_class, "onWillDrawPage", "(IFF)V")
            .unwrap();

        let did_draw_page_id = env
            .get_method_id(&table_class, "onDidDrawPage", "(IFF)V")
            .unwrap();

        let will_draw_cell_id = env
            .get_method_id(
                &table_class,
                "onWillDrawCell",
                "(IFFIIIFFIIILjava/lang/String;)Landroid/util/Pair;",
            )
            .unwrap();

        let did_draw_cell_id = env
            .get_method_id(
                &table_class,
                "onDidDrawCell",
                "(IFFIIIFFIIILjava/lang/String;)V",
            )
            .unwrap();

        TABLE.get_or_init(|| TableCache {
            table_class: env.new_global_ref(table_class).unwrap(),
            will_draw_page_id,
            did_draw_page_id,
            will_draw_cell_id,
            did_draw_cell_id,
        });
    }

    JVM.get_or_init(|| vm);

    log::info!(target: "JS","Pdf library loaded");

    jni::sys::JNI_VERSION_1_6
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_Pdf_nativeInit(
    _: JNIEnv,
    _class: JClass,
) -> jlong {
    Box::into_raw(Box::new(PdfNative::new())) as jlong
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_Pdf_nativeRelease(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
) {
    if instance == 0 {
        return;
    }
    unsafe {
        let _ = Box::from_raw(instance as *mut PdfNative);
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_Pdf_nativeLoadFromPath(
    mut env: JNIEnv,
    _class: JClass,
    instance: jlong,
    path: JString,
    password: JString,
) -> jlong {
    unsafe {
        if instance == 0 {
            return 0;
        }
        let instance = &*(instance as *mut PdfNative);
        let password = env
            .get_string(&password)
            .map(|password| password.to_string_lossy().to_string())
            .ok();
        if let Ok(path) = env.get_string(&path) {
            let path = path.to_string_lossy();
            instance
                .load_from_path(path.as_ref(), password.as_deref())
                .map(|document| Box::into_raw(Box::new(document)) as jlong)
                .unwrap_or(0)
        } else {
            0
        }
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_Pdf_nativeLoadFromBuffer(
    mut env: JNIEnv,
    _class: JClass,
    instance: jlong,
    buffer: JByteBuffer,
    password: JString,
) -> jlong {
    unsafe {
        if instance == 0 {
            return 0;
        }
        let instance = &*(instance as *mut PdfNative);
        let password = env
            .get_string(&password)
            .map(|password| password.to_string_lossy().to_string())
            .ok();

        if let (Ok(addr), Ok(cap)) = (
            env.get_direct_buffer_address(&buffer),
            env.get_direct_buffer_capacity(&buffer),
        ) {
            let slice = std::slice::from_raw_parts(addr as *const u8, cap);
            instance
                .load_from_bytes(slice, password.as_deref())
                .map(|document| Box::into_raw(Box::new(document)) as jlong)
                .unwrap_or(0)
        } else {
            0
        }
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_Pdf_nativeLoadFromBytes(
    mut env: JNIEnv,
    _class: JClass,
    instance: jlong,
    bytes: JByteArray,
    password: JString,
) -> jlong {
    unsafe {
        if instance == 0 {
            return 0;
        }
        let instance = &*(instance as *mut PdfNative);
        let password = env
            .get_string(&password)
            .map(|password| password.to_string_lossy().to_string())
            .ok();

        if let Ok(bytes) = env.get_array_elements_critical(&bytes, ReleaseMode::NoCopyBack) {
            let slice = std::slice::from_raw_parts(bytes.as_ptr() as *const u8, bytes.len());
            instance
                .load_from_bytes(slice, password.as_deref())
                .map(|document| Box::into_raw(Box::new(document)) as jlong)
                .unwrap_or(0)
        } else {
            0
        }
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfImage_nativeRelease(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
) {
    if instance == 0 {
        return;
    }

    unsafe {
        let _ = Box::from_raw(instance as *mut PdfImage);
    }
}


#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfImage_nativeGetWidth(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
) -> jint {
    if instance == 0 {
        return 0;
    }

    unsafe {
        let instance = &*(instance as *mut PdfImage);
        instance.width() as i32
    }
}


#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfImage_nativeGetHeight(
    _: JNIEnv,
    _class: JClass,
    instance: jlong,
) -> jint {
    if instance == 0 {
        return 0;
    }

    unsafe {
        let instance = &*(instance as *mut PdfImage);
        instance.height() as i32
    }
}


#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfImage_nativeImageBitmap(
    env: JNIEnv,
    _class: JClass,
    instance: jlong,
    image: JObject,
) -> jlong {
    let mut ret: Option<PdfImage> = None;
    unsafe {
        if instance == 0 {
            return 0;
        }
        let instance = &*(instance as *mut PdfNative);
        let bm = ndk::bitmap::AndroidBitmap::from_jni(env.get_raw(), image.as_raw());
        if let (Ok(info), Ok(addr)) = (bm.get_info(), bm.lock_pixels()) {
            let size = (info.height() * info.stride()) as usize;
            let buffer = std::slice::from_raw_parts_mut(addr as *mut u8, size);
            ret = image::RgbaImage::from_raw(info.width(), info.height(), buffer.to_vec())
                .and_then(|image| PdfImage::new(instance, image::DynamicImage::from(image)).ok());
        }
        let _ = bm.unlock_pixels();
    }

    match ret {
        None => 0,
        Some(image) => Box::into_raw(Box::new(image)) as jlong,
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfImage_nativeEncodedImage(
    mut env: JNIEnv,
    _class: JClass,
    instance: jlong,
    bytes: JByteArray,
) -> jlong {
    let mut ret: Option<PdfImage> = None;
    unsafe {
        if instance == 0 {
            return 0;
        }
        let instance = &*(instance as *mut PdfNative);
        if let Ok(len) = env.get_array_length(&bytes) {
            let mut buffer: Vec<u8> = vec![0; len as usize];
            let slice =
                std::slice::from_raw_parts_mut(buffer.as_mut_ptr() as *mut jbyte, len as usize);
            if let Ok(_) = env.get_byte_array_region(&bytes, 0, slice) {
                ret = image::load_from_memory(buffer.as_slice())
                    .ok()
                    .and_then(|image| PdfImage::new(instance, image).ok());
            }
        }
    }

    match ret {
        None => 0,
        Some(image) => Box::into_raw(Box::new(image)) as jlong,
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfImage_nativeEncodedImageBuffer(
    env: JNIEnv,
    _class: JClass,
    instance: jlong,
    buffer: JByteBuffer,
) -> jlong {
    let mut ret: Option<PdfImage> = None;
    unsafe {
        if instance == 0 {
            return 0;
        }
        let instance = &*(instance as *mut PdfNative);
        if let (Ok(addr), Ok(cap)) = (
            env.get_direct_buffer_address(&buffer),
            env.get_direct_buffer_capacity(&buffer),
        ) {
            let bytes = std::slice::from_raw_parts(addr as *const u8, cap);
            if bytes.is_empty() {
                return 0;
            }
            let buffer = std::slice::from_raw_parts_mut(bytes.as_ptr() as *mut u8, bytes.len());

            ret = image::load_from_memory(buffer)
                .ok()
                .and_then(|image| PdfImage::new(instance, image).ok());
        }
    }

    match ret {
        None => 0,
        Some(image) => Box::into_raw(Box::new(image)) as jlong,
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfImage_nativeImage(
    mut env: JNIEnv,
    _class: JClass,
    instance: jlong,
    bytes: JByteArray,
    width: jint,
    height: jint,
) -> jlong {
    let mut ret: Option<PdfImage> = None;
    unsafe {
        if instance == 0 {
            return 0;
        }
        let instance = &*(instance as *mut PdfNative);
        if let Ok(len) = env.get_array_length(&bytes) {
            let mut buffer: Vec<u8> = vec![0; len as usize];
            let slice =
                std::slice::from_raw_parts_mut(buffer.as_mut_ptr() as *mut jbyte, len as usize);
            if let Ok(_) = env.get_byte_array_region(&bytes, 0, slice) {
                let width: Option<u32> = width.try_into().ok();
                let height: Option<u32> = height.try_into().ok();

                if let (Some(width), Some(height)) = (width, height) {
                    ret = image::RgbaImage::from_raw(width, height, buffer).and_then(|image| {
                        PdfImage::new(instance, image::DynamicImage::from(image)).ok()
                    });
                }
            }
        }
    }

    match ret {
        None => 0,
        Some(image) => Box::into_raw(Box::new(image)) as jlong,
    }
}

#[unsafe(no_mangle)]
pub extern "system" fn Java_io_github_triniwiz_plugins_pdf_PdfImage_nativeImageBuffer(
    env: JNIEnv,
    _class: JClass,
    instance: jlong,
    buffer: JByteBuffer,
    width: jint,
    height: jint,
) -> jlong {
    let mut ret: Option<PdfImage> = None;
    unsafe {
        if instance == 0 {
            return 0;
        }
        let instance = &*(instance as *mut PdfNative);
        if let (Ok(addr), Ok(cap)) = (
            env.get_direct_buffer_address(&buffer),
            env.get_direct_buffer_capacity(&buffer),
        ) {
            let bytes = std::slice::from_raw_parts(addr as *const u8, cap);
            if bytes.is_empty() {
                return 0;
            }
            let buffer = std::slice::from_raw_parts_mut(bytes.as_ptr() as *mut u8, bytes.len());

            let width: Option<u32> = width.try_into().ok();
            let height: Option<u32> = height.try_into().ok();
            if let (Some(width), Some(height)) = (width, height) {
                ret =
                    image::RgbaImage::from_raw(width, height, buffer.to_vec()).and_then(|image| {
                        PdfImage::new(instance, image::DynamicImage::from(image)).ok()
                    });
            }
        }
    }

    match ret {
        None => 0,
        Some(image) => Box::into_raw(Box::new(image)) as jlong,
    }
}
