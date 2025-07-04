pub mod document;
pub mod table;
pub mod utils;

pub use pdfium_render::prelude::{PdfColor, PdfPoints};

use pdfium_render::prelude::*;
use std::path::PathBuf;
use std::sync::Arc;
use crate::document::PdfNativeDocument;

#[derive(Debug, Clone)]
pub struct PdfNative {
    pub(crate) pdf: Arc<Pdfium>,
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
            })
    }
}
