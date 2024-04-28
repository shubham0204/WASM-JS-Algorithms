mod algos;

use wasm_bindgen::prelude::*;
use js_sys::Array;
use crate::algos::{impl_insertion_sort, impl_prime_factors};

#[wasm_bindgen]
pub fn insertion_sort( nums: Vec<i32> ) -> Array {
    let sorted_nums = impl_insertion_sort( nums ) ;
    let js_array : Array = Array::new();
    for i in 0..sorted_nums.len(){
        js_array.push(&wasm_bindgen::JsValue::from(sorted_nums[i]));
    }
    js_array
}

#[wasm_bindgen]
pub fn prime_factors( n: usize ) -> Array {
    let factors = impl_prime_factors( n ) ;
    let js_array : Array = Array::new();
    for i in 0..factors.len(){
        js_array.push(&wasm_bindgen::JsValue::from(factors[i]));
    }
    js_array
}
