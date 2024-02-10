// Conditional Statement

/*if(Condition){
//execute source code
}else
{
//execute code
}*/

// If Hour between 6 to 12 print "Good Morning"
// If Hour between 12 to 18 print "Good Afternoon"
// Otherwise "Good Evening"

var hour = 5
if(hour >= 6 && hour < 12){
    console.log("Good Morning")
}
else if (hour >=12 && hour < 18){
    console.log("Good Afternoon")
}
else{
    console.log("Good Evening")
}

var ageismorethaneighteen = true 
var isUscitizen = true

if(ageismorethaneighteen && isUscitizen){
    console.log("Customer is Eligible for Driving License")
}
else{
    console.log("Customer is Not Eligible for Driving License")
}