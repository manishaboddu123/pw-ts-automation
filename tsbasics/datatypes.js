"use strict";
let a = 10;
console.log(a);
let str1 = "hello";
let val = true;
let arr1 = [1, 2, 3, 4];
console.log(arr1);
let arr2 = [1, "a", true];
console.log(arr2);
//union type 
let num = 10;
console.log(num);
//union array type
let arr3 = [1, "a", 2, "b", 3, "c"];
console.log(arr3);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let x11 = Color.Red;
let x12 = Color.Green;
