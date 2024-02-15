//ES6
// class student{
//     constructor(username , email , password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptpassword(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const user1 = new student("aman","aman@js.com", "123456")
// console.log(user1);
// console.log(user1.encryptpassword());
// console.log(user1.changeUsername());


//behind the scene
function user(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptpassword = function(){
    return `${this.password}abc`;
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}
const user2 = new user("akash","aksh@js.com", "123582")
console.log(user2);
console.log(user2.encryptpassword());
console.log(user2.changeUsername());