let  a:number=10;
console.log(a);

let str1:string = "hello";

let val:boolean =true;

let arr1:number[] = [1,2,3,4];
console.log(arr1)

let arr2:[number,string,boolean] = [1,"a",true];
console.log(arr2);

//union type 
let num:number | string =10; 
console.log(num); 

//union array type
let arr3:(number | string)[] = [1,"a",2,"b",3,"c"]; 
console.log(arr3);

enum Color {
    Red,
    Green,
    Blue
}
let x11:Color = Color.Red;

let x12:Color = Color.Green;