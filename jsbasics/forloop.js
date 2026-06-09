let arr1 = [10,20,30];
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

//for in loop to iterate over properties of an object
for (let i in arr1){
    console.log(arr1[i])
}

//for of loop to iterate over objects like arrays
for(let i of arr1){
    console.log(i)
}

let userdata = {username:"test", pswd:123456};
for (let k in userdata){
        console.log(k)
        // console.log(userdata[k])
}

//foreach loop
let fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit, index){
    console.log("fruit:"+fruit+", Index" +index);
});

//arr fun syntax
fruits.forEach((fruit, index)=> {
    console.log(`${index}:${fruit}`);
});

