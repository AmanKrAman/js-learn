//Run : node 02_basics/03_objects.js

//singleton 
// Object.create
//object literals
const mySym = Symbol("key1")   //method to use symbol ...continue...
const jsUser ={
    name:"Aman",
    "full name":"AmanKumar",
    [mySym] : "myKey1",               //method to use symbol.
    age:23,
    location: "delhi",
    email:"aman63280@gmail.com",
    lastloginDays:["Mon", "wed" ,"fri"]
}
//By default name , age , location , email , lastloginDays are string bydefault
// console.log(jsUser.email);
// console.log(typeof jsUser.email);
// console.log(jsUser["email"]);
// console.log(typeof jsUser["email"]);

// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof mySym);
jsUser.email = "ak582@gmail.com"
//  Object.freeze(jsUser)   //here object get freeze
jsUser.email = "aman45646131@jk.com" //no further change occur because object are freeze
//  console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
// console.log(jsUser.greeting());
// console.log(jsUser.greeting);
jsUser.greetingtwo = function(){
     console.log(`Hello js user , ${this.name}`);
}
console.log(jsUser.greetingtwo());

