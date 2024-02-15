class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username , email ,password){
        super(username)
        this.email= email;
        this.password = password;
    }
    addUser(){
        console.log(`Teacher added the new course ${this.username}`);
    }
}

const user1 = new Teacher("ajay", "ajay@ajay.com", "654987")
// console.log(user1);
user1.addUser();
user1.logMe();
const user2 = new User("Ankit");
user2.logMe();
console.log(user2 instanceof Teacher);
console.log(user1 instanceof Teacher);
console.log(user2 instanceof User);  //ye user2 User se bani hai 
console.log(user1 instanceof User);  //instance phie uska instance esliye true hai

