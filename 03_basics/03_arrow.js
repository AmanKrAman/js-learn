// Run : node 03_basics/03_arrow.js


const user = {
    username : "Aman",
    price : 1999,

    welcomeMessage: function(){
        console.log(`${this.username} ,  Welcome to the website.`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username= "ajay"
// user.welcomeMessage()

// console.log(this);       // output : {}

function fun(){
    let username = "Aman"
    // console.log(this);
    // console.log(this.username);
}
// fun()

// const val = function () {
//     let username = "Aman"
//     console.log(this.username);
// }
// val()

const val =  () => {
    let username = "Aman"
    // console.log(this.username);
    // console.log(this);
}
// val()

//  Arrow function : ()=>{}

// const addTwo = (num1 , num2) => {
//     return num1+num2      // Explicit return , here return word required
// }
// // console.log(addTwo(8,9));

// const addTwo = (num1 , num2) =>  num1 + num2    //implicit return
// const addTwo = (num1 , num2) =>  (num1 + num2)
// const addTwo = (num1 , num2) =>  {return num1 + num2}
// const addTwo = (num1 , num2) =>  ({username : "Aman"})
// console.log(addTwo(8,9));

// if you are using curly braces in implicit return return or parenthsis required
