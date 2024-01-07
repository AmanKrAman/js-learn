// const tinderUser  = new Object()
const tinderUser = {}
tinderUser.id = "213abc"
tinderUser.name = "Aman"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName:"AMAN",
            lastName:"KUMAR"
        }
    }
}

// console.log(regularUser.fullName.userFullName);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

// const obj3 = Object.assign({} , obj1, obj2)
const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

const user = [
    {
        id:"1",
        email:"abc@gmail.com"
    },
    {
        id:"2",
        email:"abcdef@gmail.com"
    },
    {
        id:"3",
        email:"abcdefghijkl@gmail.com"
    }
]

// console.log(user[2].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
