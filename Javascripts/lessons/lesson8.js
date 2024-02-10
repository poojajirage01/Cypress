// Functions
// Declarative Function
helloone()
function helloone(){
console.log("Hello One!")
}


// Anonymus Function
var hellotwo = function(){
    console.log("Hello Two!")
}
hellotwo()

//ES6 function or Arrow function
var hellothreee = () =>{
    console.log("Hello Three!")
}
hellothreee()

// Function with arguments
function printName(firstname , lastname){
    console.log(firstname,lastname)
}
printName('Pooja','Jirage')

// Function with return
function Demo(number){
    var result = number * 2
    return result
}
var myresult = Demo(5)
console.log(myresult)

// Import Function Inputs

import {printage} from '../helpers/printhelper.js'
printage(5)

// Import everything
import * as helper from '../helpers/printhelper.js'
printage(10)
