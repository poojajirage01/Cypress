// Classes and Methods

// import from other js file
import { customer } from "../helpers/printhelper.js";
var cust = new customer()
cust.firstname('Pooja')
cust.lastname('Jirage')

//
import { cust1 } from "../helpers/printhelper.js";
//var cust1 = new customer()
cust1.fname('Pooja')
cust1.lname('Jirage')

// Class and object in same file
class Demo{
    f_name(fname){
        console.log(fname)
    }
    l_name(lname){
        console.log(lname)
    }
}
var d = new Demo()
d.f_name('Pooja')