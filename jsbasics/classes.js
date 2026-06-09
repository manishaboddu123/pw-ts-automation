class user{
    constructor(name, city){
        this.name = name;
        this.city = city;
    }
    greet(){
        console.log("hi, my name is "+this.name);    }   
}

let user1 = new user("Manisha", "warangal");
console.log(user1.city);
user1.greet();