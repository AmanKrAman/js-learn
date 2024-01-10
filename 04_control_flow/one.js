//Run:  node 04_control_flow/one.js

//if

// const isuserloggedin = true
// if(isuserloggedin){
//     console.log("Logged In");
// }

// const temperature = 52
// if(temperature < 50){
//     console.log("lesser than 50");
// }else{
//     console.log("Not less than 50");
// }
// console.log(Execute);
//  < ,> ,==,<=, >= , != , === , !==

// const score = 2000
// if(score>100){
//     let power = "fly"
//     console.log(`UserPower : ${power}`);
// }
// console.log(`UserPower : ${power}`);   //power not defined

// const balance = 1000
// if(balance >400) console.log("Great");   //use this way

// if(balance >400) console.log("Great") , console.log("achievement"); //this is true but not a good practice 

// if(balance < 500) console.log("Less than");
// else if(balance < 750) console.log("Less than 750");
// else if(balance < 1200) console.log("Less than 1200");
// else console.log("Nothing");

// const userloggedIn = true , debitcard = true;
// if(userloggedIn && debitcard ) console.log("Allowed");

const userloggedInGoogle = false , userloggedInEmail = true;
if(userloggedInEmail || userloggedInGoogle )  console.log("Allowed");





