// Loops
// for i loop
for(var i =0;i<5;i++){
console.log("Hello World",+i)
}

//for of loop
var cars = ["Volvo","Tesla","Tata"]
for(let car of cars){
console.log(car)
if(car == "Tesla"){
    break
}
}
9
//ES6 Syntax for each loop
cars.forEach(car =>
    console.log(car)
    )