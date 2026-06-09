"use strict"
let num=4;
if (num%2==0){
    console.log("num is even")
}else{  
    console.log("num is odd")
}

let x=10
let y=2
if (x>y){
    console.log("x is greater than y")
} else if(y>x){
    console.log("y is greater than x")
}else {
    console.log("both numbers are equal")
}

// Print number 10 for 5 times
for(let i=1;i<=5;i++){
            console.log(10)
    }
// print numbers from 1 to 10
for(let i=1;i<=10;i++){
    console.log(i);
    
}

// print numbers from 10 to 1
for (let i=10;i>=1;i--){
    console.log(i);  
}

// print odd numbers between 1 to 30
for(let i=1;i<=30;i+=2){
    console.log(i);
    
}
// print even numbers between 1 to 30
for(let i=2;i<=30;i+=2){
    console.log(i);
    
}
// print odd numbers with standard logic
for(let i=1;i<=30;i++){
    if(i%2==1){
        console.log(i);
    }
}