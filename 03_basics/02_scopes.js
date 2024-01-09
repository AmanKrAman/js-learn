//Run : node 03_basics/02_scopes.js


// var c = 300  :  we do not use var because it does not follow the scope rule

let a = 200
if(true){
    let a = 10
    const b = 20
    // console.log("Inner : ", a);
}
// console.log(a);

// console.log(a);
// console.log(b);


function one(){
    const username = "Aman"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

if(true){
    const name = "Aman"
    if(name === "Aman"){
        const website = " instagram"
        // console.log( name + website);
    }
    // console.log(website);     // not definedn: out of the scope
}



// ++++++++++++++++++intersting+++++++++++++++

//addone(5);    //it will execute successfully
function addone(num){
    return num+1
}
console.log(addone(5));


// addTwo(5);    //it will give error
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5));