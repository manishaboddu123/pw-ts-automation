function user(name, city){
    this.name = name,
    this.city = city,
    this.greet=function(){
        console.log("hi, my name is "+this.name)
    }
}
let user1 = new user("gowtham","khammam");
console.log(user1.name);
user1.greet();