import { execute_func } from '../../init.js'
import init , { prime_factors } from '../../algos.js'

function load_wasm_module() {
    init().then( () => {
        console.log( "WASM module loaded" )
    } )
}

function js_impl( num ) {
    const factors = []
    var i = 2
    while (i*i <= num) {
        if (num % i != 0) {
            i += 1
        }
        else {
            num = Math.floor(num / i)
            factors.push( i )
        }
    }
    if (num > 1) {
        factors.push(num)
    }
    return factors
}

function compute_wasm() {
    const num = parseInt(document.querySelector("#input").value)
    execute_func( prime_factors , [ num ] )
        .then( (results) => { 
            document.querySelector("#result-prime-factors").innerHTML = results.outputs
            document.querySelector("#result-time-taken").innerHTML = results.time
        } )
}

function compute_js() {
    const num = parseInt(document.querySelector("#input").value)
    execute_func( js_impl , [ num ] )
        .then( (results) => { 
            document.querySelector("#result-prime-factors").innerHTML = results.outputs
            document.querySelector("#result-time-taken").innerHTML = results.time
        } )
}

// Exposing JS module functions to the HTML document
// Ref: https://stackoverflow.com/a/53630402/13546426
window.load_wasm_module = load_wasm_module
window.compute_wasm = compute_wasm
window.compute_js = compute_js