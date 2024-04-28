import { execute_func } from '../../init.js'
import init , { insertion_sort } from '../../algos.js'

function load_wasm_module() {
    init().then( () => {
        console.log( "WASM module loaded" )
    } )
}

function js_impl_insertion_sort( nums ) {
    for ( var i = 0 ; i < nums.length ; i++ ) {
        for ( var j = i ; j > 0 ; j-- ) {
            if ( nums[j] < nums[j-1] ) {
                [ nums[j] , nums[j-1] ] = [ nums[j-1] , nums[j] ]
            }
        }
    }
    return nums
}

function compute_wasm() {
    const nums_str = document.querySelector("#nums").value
    const nums = nums_str.split(',').map(Number)
    execute_func( insertion_sort , [ nums ] )
        .then( (results) => { 
            document.querySelector("#result-sorted-nums").innerHTML = results.outputs
            document.querySelector("#result-time-taken").innerHTML = results.time
        } )
}

function compute_js() {
    const nums_str = document.querySelector("#nums").value
    const nums = nums_str.split(',').map(Number)
    execute_func( js_impl_insertion_sort , [ nums ] )
        .then( (results) => { 
            document.querySelector("#result-sorted-nums").innerHTML = results.outputs
            document.querySelector("#result-time-taken").innerHTML = results.time
        } )
}

// Exposing JS module functions to the HTML document
// Ref: https://stackoverflow.com/a/53630402/13546426
window.load_wasm_module = load_wasm_module
window.compute_wasm = compute_wasm
window.compute_js = compute_js