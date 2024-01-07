function sayMyName() {
    console.log("a");
    console.log("m");
    console.log("a");
    console.log("n");
}

// sayMyName()    //sayMyName : reference  // sayMyName() : function call or execution

// function add(num1, num2){
//     console.log(num1 + num2);
// }
// const result =  add(5,9)
// console.log(result);

// function add(num1, num2){
//     let ans = num1+num2
//     return ans;
// }
// const result =  add(5,9)
// console.log(result);

// function add(num1, num2){
//     return num1+num2
// }
// const ans = add(8,2)
// console.log("answer : ", ans);

function logInUserMessage(username){
    if(!username){
        console.log("please enter a username"); 
        return
    }
    return `${username} just Logged In`
}
// console.log(logInUserMessage());


function calculateCartPrice(...num1){ 
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));

function calculateCartPrice(val1 , val2 , ...num1){ 
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username : "Aman",
    price : 2000
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} ans price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username:"aman",
    price:5000
})

const myNewArray = [500,200,300,600]
function returnSecondValue(getArray){
    return getArray[3];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([500,200,300,600]));