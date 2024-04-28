

## Setup

```
$> git clone 
$> cargo build --release --target=wasm32-unknown-unknowncargo build --release --target=wasm32-unknown-unknown 
$> cargo install wasm-bindgen-cli
$> wasm-bindgen --out-dir out --target web --no-typescript target/wasm32-unknown-unknown/release/algos.wasm
```