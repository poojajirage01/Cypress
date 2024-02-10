// Objects and Arrays
var customer = {
    firstname: 'John',
    lastname: 'Smith',
    cars: ["Volvo","Tata","Tesla"] 
}
//Dot notation
customer.firstname = "Mike"
//Bracket notation
customer['lastname'] = "Silver"

console.log(`${customer.firstname}`)
//console.log(`${customer.firstname} ${customer.lastname}`)
console.log(customer[`lastname`])

// Arrays
var car = ["Volvo","Tata","Tesla"]
//car[0] = "BMW"
//console.log(car[0])
console.log(customer.cars[1])