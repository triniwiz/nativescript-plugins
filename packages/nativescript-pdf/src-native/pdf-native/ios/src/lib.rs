mod document;

use crate::document::CPdfNativeDocument;
use objc2::rc::Retained;
use objc2::runtime::NSObject;
use objc2::{class, msg_send};
use objc2_foundation::NSData;
use pdf_core::PdfNative;
use std::ffi::{c_char, CStr, CString};
use std::ops::Deref;

pub struct NSCPdfInfo(Retained<NSObject>);

impl NSCPdfInfo {
    pub fn new(width: u32, height: u32, data: Retained<NSData>) -> Self {
        unsafe {
            let instance: *mut NSObject = msg_send![class!(NSCPdfInfo), alloc];
            let width: usize = width as usize;
            let height: usize = height as usize;

            let instance: *mut NSObject =
                msg_send![instance, initWithWidth: width, height:height, data: &*data];
            let id = Retained::from_raw(instance).unwrap();
            Self(id)
        }
    }
}

impl Deref for NSCPdfInfo {
    type Target = NSObject;

    fn deref(&self) -> &Self::Target {
        &*self.0
    }
}

pub struct CPdfNative(PdfNative);
#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_init() -> *mut CPdfNative {
    Box::into_raw(Box::new(CPdfNative(PdfNative::new())))
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_release(instance: *mut CPdfNative) {
    if instance.is_null() {
        return;
    }
    unsafe {
        let _ = Box::from_raw(instance);
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_string_release(string: *const c_char) {
    if string.is_null() {
        return;
    }
    unsafe {
        let _ = CString::from_raw(string as *mut c_char);
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_load_from_path(
    instance: *mut CPdfNative,
    path: *const c_char,
    password: *const c_char,
) -> *mut CPdfNativeDocument {
    unsafe {
        if instance.is_null() || path.is_null() {
            return 0 as _;
        }
        let instance = &*(instance);
        let password = if !password.is_null() {
            Some(CStr::from_ptr(password).to_string_lossy())
        } else {
            None
        };

        let path = CStr::from_ptr(path);
        let path = path.to_string_lossy();
        instance
            .0
            .load_from_path(path.as_ref(), password.as_deref())
            .and_then(|document| Ok(Box::into_raw(Box::new(CPdfNativeDocument(document)))))
            .unwrap_or_else(|_| 0 as *mut _)
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn pdf_native_load_from_bytes(
    instance: *mut CPdfNative,
    buffer: *const u8,
    size: usize,
    password: *const c_char,
) -> *mut CPdfNativeDocument {
    unsafe {
        if instance.is_null() || buffer.is_null() || size == 0 {
            return 0 as _;
        }
        let instance = &*(instance);
        let password = if !password.is_null() {
            Some(CStr::from_ptr(password).to_string_lossy())
        } else {
            None
        };
        let slice = std::slice::from_raw_parts(buffer, size);

        instance
            .0
            .load_from_bytes(slice, password.as_deref())
            .map(|document| Box::into_raw(Box::new(CPdfNativeDocument(document))))
            .unwrap_or(0 as _)
    }
}
