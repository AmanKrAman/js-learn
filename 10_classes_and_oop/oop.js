
const user = {
    username: "Aman",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}



// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("Aman", 12, true)
const userTwo = new User("Learning OOP", 11, false)
const userThree =new User("Learning React", 10, true)
console.log(userOne.constructor);
console.log(userOne instanceof User);
console.log(userTwo instanceof User);
console.log(userThree instanceof User);
// console.log(userOne);
// console.log(userTwo);