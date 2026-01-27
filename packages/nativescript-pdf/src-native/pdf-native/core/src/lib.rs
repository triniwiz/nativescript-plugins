pub mod document;
pub mod table;
pub mod utils;

pub use pdfium_render::prelude::{PdfColor, PdfPoints};
use std::fmt::{Debug, Formatter};

use crate::document::PdfNativeDocument;
use image::{EncodableLayout, GenericImageView};
use pdfium_render::prelude::*;
use std::path::PathBuf;
use std::sync::Arc;

#[cfg(target_os = "android")]
pub static JVM: std::sync::OnceLock<jni::JavaVM> = std::sync::OnceLock::new();

#[cfg(target_os = "android")]
pub struct HotCache {
    pub float_class: jni::objects::GlobalRef,
    pub float_value_id: jni::objects::JMethodID,
    pub pair_class: jni::objects::GlobalRef,
    pub pair_first_id: jni::objects::JFieldID,
    pub pair_second_id: jni::objects::JFieldID,
    pub boolean_class: jni::objects::GlobalRef,
    pub boolean_value_id: jni::objects::JMethodID,
    pub jni_helper_class: jni::objects::GlobalRef,
    pub jni_helper_pair_first_id: jni::objects::JStaticMethodID,
    pub jni_helper_pair_second_id: jni::objects::JStaticMethodID,
}

#[cfg(target_os = "android")]
pub static HOT_THINGS: once_cell::sync::OnceCell<HotCache> = once_cell::sync::OnceCell::new();

#[cfg(target_os = "android")]
pub struct TableCache {
    pub table_class: jni::objects::GlobalRef,
    pub will_draw_page_id: jni::objects::JMethodID,
    pub did_draw_page_id: jni::objects::JMethodID,
    pub will_draw_cell_id: jni::objects::JMethodID,
    pub did_draw_cell_id: jni::objects::JMethodID,
}

#[cfg(target_os = "android")]
pub static TABLE: once_cell::sync::OnceCell<TableCache> = once_cell::sync::OnceCell::new();

pub struct PdfImage {
    pub(crate) pdf: PdfNative,
    pub(crate) image_data: Vec<u8>,
    pub(crate) width: u32,
    pub(crate) height: u32,
    pub(crate) format: PdfBitmapFormat,
}

impl Clone for PdfImage {
    fn clone(&self) -> Self {
        let mut data = self.image_data.clone();
        Self {
            pdf: self.pdf.clone(),
            image_data: data,
            width: self.width,
            height: self.height,
            format: self.format,
        }
    }
}

impl Debug for PdfImage {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("PdfImage")
            .field("width", &self.width)
            .field("height", &self.width)
            .field("format", &self.format)
            .finish()
    }
}

impl PdfImage {
    pub fn dimensions(&self) -> (u32, u32) {
        (self.width, self.height)
    }

    pub fn width(&self) -> u32 {
        self.width
    }

    pub fn height(&self) -> u32 {
        self.height
    }

    fn rgba_to_bgra(bytes: &[u8]) -> Vec<u8> {
        bytes
            .chunks_exact(4)
            .flat_map(|channels| [channels[2], channels[1], channels[0], channels[3]])
            .collect::<Vec<_>>()
    }
    pub fn new(pdf: &PdfNative, image: image::DynamicImage) -> Result<Self, PdfiumError> {
        let (width, height) = image.dimensions();

        let mut data = if let Some(image) = image.as_rgba8() {
            // The given image is already in RGBA format.

            PdfImage::rgba_to_bgra(image.as_bytes())
        } else {
            // The image must be converted to RGBA first.

            let image = image.to_rgba8();

            PdfImage::rgba_to_bgra(image.as_bytes())
        };

        Ok(Self {
            pdf: pdf.clone(),
            image_data: data,
            width,
            height,
            format: PdfBitmapFormat::BGRA,
        })
    }

    pub fn bitmap(&mut self) -> Result<PdfBitmap, PdfiumError> {
        unsafe {
            PdfBitmap::from_bytes(
                self.width
                    .try_into()
                    .map_err(|_| PdfiumError::ImageSizeOutOfBounds)?,
                self.height
                    .try_into()
                    .map_err(|_| PdfiumError::ImageSizeOutOfBounds)?,
                PdfBitmapFormat::BGRA,
                self.image_data.as_mut_slice(),
                self.pdf.bindings(),
            )
        }
    }
}

#[derive(Debug, Clone)]
pub struct PdfNative {
    pub(crate) pdf: Arc<Pdfium>,
}

impl PdfNative {
    pub fn bindings(&self) -> &dyn PdfiumLibraryBindings {
        self.pdf.bindings()
    }
}

impl Default for PdfNative {
    fn default() -> Self {
        Self::new()
    }
}

unsafe impl Send for PdfNative {}
unsafe impl Sync for PdfNative {}

impl PdfNative {
    pub fn new() -> Self {
        Self {
            pdf: Arc::new(Pdfium::default()),
        }
    }

    pub fn load_from_bytes(
        &'_ self,
        data: &[u8],
        password: Option<&str>,
    ) -> Result<PdfNativeDocument<'_>, PdfiumError> {
        let bytes = data.to_vec();
        self.pdf
            .load_pdf_from_byte_vec(bytes, password.as_deref())
            .map(|doc| PdfNativeDocument {
                pdf_: self.clone(),
                path_: None,
                document: doc,
                password_: None,
                data: Default::default(),
                fonts: Default::default(),
            })
    }

    pub fn load_from_path(
        &'_ self,
        path: &str,
        password: Option<&str>,
    ) -> Result<PdfNativeDocument<'_>, PdfiumError> {
        let path = PathBuf::from(path);
        let password = password.map(|password| password.to_string());
        self.pdf
            .load_pdf_from_file(
                &path,
                password.as_ref().map(|password| unsafe {
                    std::str::from_utf8_unchecked(std::slice::from_raw_parts(
                        password.as_ptr(),
                        password.len(),
                    ))
                }),
            )
            .map(move |doc| PdfNativeDocument {
                pdf_: self.clone(),
                path_: Some(path),
                password_: password,
                document: doc,
                data: Default::default(),
                fonts: Default::default(),
            })
    }
}
