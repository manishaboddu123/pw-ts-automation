const { type } = require("os")
const { use } = require("react")

// "use strict" //for strict mode declaration
let x=1 //let used to declare a var
let y=2
let z= x+y
console.log(z)

let msg="hello"
console.log(msg)

//js is case sensitive 
let X=10;
console.log(X);

const PI=3.14;
console.log(PI);

person1 = 'manisha'
person2 = "pravalika"
person3 = `hi ${person1}`//template literal
//for creating multi linr str
let sentence = `this is a
multi line string`

console.log(sentence)

console.log("name"=="name")
console.log(2=="2")
console.log(2==="2")//=== for checking type and equality


let existence = true;
console .log(typeof(existence)); //boolean

let num1 = 45676575344444444444444444444444444444444444n; //bigint type
console.log(typeof num1) 

let a; //undefined
console.log(a);

//null
let b = null;
console.log(typeof b);

let arr1 = [2,3,1,4];
console.log(typeof arr1);
console.log(arr1.indexOf(1))



let userdata = {
    name:"manisha",
    city:"hyderabad"
}

console.log(userdata.name)


let data ={
    toolname:"playwright",
    "isopensource":true,
    "supportedlang":['c#', "JS"],
    "company":{
        "name":"microsoft"
    }
}

console.log(data.toolname)
