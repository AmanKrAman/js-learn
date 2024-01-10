//Run: node 04_control_flow/truthy.js


const userEmail = "aman@aman.com "
// if(userEmail){
//     console.log("Got the Email");
// }else{
//     console.log("Not a valid email");
// }
// if(userEmail.length === 0){
//     console.log("User is empty");
// }
// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


const emptyObj = {}
if(Object.keys(emptyObj).length === 0 ){
    console.log("Empty");
}

// Nullish coalescing operator (??) : null undefined
// let val1;
// val1 = 5??10
// val1 = null??10   //check safety , if value is null it handles the value o/p : 10
// val1 = undefined ?? 15 // o/p : 15
// val1 = 20 ?? undefined  //o/p : 20
// val1 = null ?? 10 ?? 20  //o/p : 10

// console.log(val1);

//Terniary Operator
// condition ? true : false

// const price = 50
// price > 80 ? console.log("Greater than 80") : console.log("Less than 80");

