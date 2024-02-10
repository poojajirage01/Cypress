// Concatenation and Interpolation
var price = 50
var itemname = "Table"
var messageToprint = "The price for your "+itemname+ " is "+price+" dollars" //Concatenation
var messageToprint2 = `The price for your ${itemname} is ${price} dollars`
console.log(messageToprint)
console.log(messageToprint2)