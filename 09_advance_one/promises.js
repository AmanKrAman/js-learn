// fetch('https://www.something.com').then().catch().finally()

const promiseOne = new Promise(function(resolve , reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log("async task is complete");
    }, 1000)
    resolve();
    
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
    }, 1000)
    resolve()
    
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({username: "Aman" , email: "aman@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error=  false;
        if(!error){
            resolve({username: "Akash" , password:"12356798"})
        }else{
            reject('ERROR: Something Went Wrong')
        }
    }, 2000);
})
const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error=  true;
        if(!error){
            resolve({username: "Ajay" , password:"12356798"})
        }else{
            reject('ERROR: JS Went Wrong')
        }
    }, 1000);
});

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log("found error");
    }
}
consumePromiseFive()


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()  //ye bi convert hone me time lagata hai esliye aapko yahaa bhi await lagana hoga 
        console.log(data);
        // console.log(response);
    } catch (error) {
        console.log("Found Error:" , error);
    }
}
getAllUsers()



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
}).catch(() => {
    console.log("Error: ", error);
})




// promise.all
// yes this is also available, kuch reading aap b kro.