# Implementation of Algorithms in WebAssembly and Javascript

## Problems / Algorithms

* [Insertion Sort](https://shubham0204.github.io/WASM-JS-Algorithms/pages/insertion_sort/index.html)
* [Finding Prime Factors (Brute-force)](https://shubham0204.github.io/WASM-JS-Algorithms/pages/prime_factors/index.html)

## Goals

* Demonstrate the use of WebAssembly modules, compiled from Rust, in a simple HTML + JS webpage
* Compare the execution time of WASM and plain JS implementations
* Explore [`wasm-bindgen`](https://rustwasm.github.io/wasm-bindgen/introduction.html) and [`js-sys`](https://crates.io/crates/js-sys) crates for Rust-WASM compilation

## Setup

1. Install [Rust](https://www.rust-lang.org/tools/install) and `wasm32-unknown-unknown` toolchain with `rustup`.

```
$> rustup target add wasm32-unknown-unknown
```

2. Clone the repository and compile the target which results in a `algo.wasm` module in
`target/wasm32-unknown-unknown/release`,

```
$> git clone https://github.com/shubham0204/WASM-JS-Algorithms
$> cd WASM-JS-Algorithms
$> cargo build --release --target=wasm32-unknown-unknowncargo build --release --target=wasm32-unknown-unknown 
```

3. Install `wasm-bindgen-cli` and use it to produce Javascript glue code 
for `algo.wasm` in the `web` directory.

```
$> cargo install wasm-bindgen-cli
$> wasm-bindgen --out-dir web --target web --no-typescript target/wasm32-unknown-unknown/release/algos.wasm
```
