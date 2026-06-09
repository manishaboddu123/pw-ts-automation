type person={ 
    name: string;
    age: number;
}

let person1:person = {
    name: "John",
    age: 25
}

console.log(person1.name)

interface  human{
    name:string;
    age:number;
    wakeup():void;
}



class employee implements human {
    name: string;
    age: number;
    city: string = "hyderabad";
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    wakeup() {
        console.log("Wake up at 7 am");
    }
}

let emp1: employee = new employee("John", 30);

console.log(emp1.city);

function getvalue<T>(a:T):T{
    return a
}

console.log(getvalue<string>("hello"))
console.log(getvalue<number>(2))

function add<T>(a:T, b:T):T{
    if (typeof a=="number" && typeof b=="number"){
        return (a+b) as T;
    }
    if (typeof a=="string" && typeof b=="string"){
        return (a+b) as T;
    }
    else{
        throw new Error("Invalid type");
    }
}

console.log(add(1,2));
console.log(add('a', 'b'));
// console.log(add('a', 1));
console.log(add(true, false));