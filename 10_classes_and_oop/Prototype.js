//Run :  node 10_classes_and_oop/Prototype.js

// let myName = "AMAN"
// console.log(myName.trueLength);


let myHeros = ["Spiderman" , "Superman"]

let herosPower = {
    Spiderman:"strong",
    Superman:"clever",

    getPower : function(){
        console.log(`Heros power ${this.Spiderman}`);
    }
} 

Object.prototype.aman = function(){
    console.log("Aman is present in all object");
}
// herosPower.aman()
// myHeros.aman()

//function , array , stirng ek object se hi gjarta hai to humne aman() ko object pe hi define kr diya to sabhi jageh chla gya wo power

Array.prototype.heyAman = function(){
    console.log("Aman says Hello!");
}


// myHeros.aman()
// myHeros.heyAman()
// herosPower.heyAman()

//inheritance

const User ={
    username :"Aman",
    email : "aman@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "aman      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"saurabh".trueLength()
"anshu    ".trueLength()
