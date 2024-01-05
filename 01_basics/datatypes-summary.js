//Primitive datatypes
//7 types: String , Number , Boolean , null, undefined , Symbol , BigInt 

const ansValue = 100
const ans1Value = 102.3
// console.log(ansValue);
// console.log(ans1Value);

const isLoggedIn = false
// console.log(isLoggedIn);

const outsidetemp = null
// console.log(outsidetemp);

const id = Symbol('1230')
const anotherId = Symbol('1230')

// console.log(id === anotherId);

const bigNum = 1235465613113626111616161661664946131n
// console.log(bigNum);
// console.log(typeof bigNum);

//Reference type or non premetive : Array , Objects ,Function

const heros = ["Aman" , "Kumar" , "Saurabh" , "Anshu"]
console.log(heros[0]);

let myObj = {
    name: "AMAN",
    age: 24
}

const myFun = function(){
    console.log("Hello World");
}

console.log(typeof myFun);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
