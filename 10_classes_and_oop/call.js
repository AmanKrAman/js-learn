function setUsername(username){
    //complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username , email , password){
    setUsername.call(this , username)       //es tareh call krte hain .call and this use krke
    this.email = email
    this.password = password
}

const user1 = new createUser("Aman" , "aman@gmail.com" ,"123aman")
console.log(user1);