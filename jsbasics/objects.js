// let person = {
//     name:"Manisha",
//     age: 27,
//     city:"warangal",
//     hobbies:["badminton","movies"],
//     greet:function(){
//         console.log("hi, my name is"+this.name)
//     } ,
//     sayhobbies(){
//         console.log("my hobbies are:"+this.hobbies)
//     }
// }

// console.log(person.sayhobbies())

let person = {
    name:"Manisha",
 
    city:"warangal",
    hobbies:["badminton","movies"],
    greet(){ 
        console.log("hi, my name is"+this.name)
    } ,
    sayhobbies(){
        console.log("my hobbies are:"+this.hobbies)
    }
}

console.log(person.city)
person.greet()