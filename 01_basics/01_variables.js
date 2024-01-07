const accountId = 12456
let accountEmail = "abc@gmail.com"
var accountPassword = "12358"
accountCity = "Delhi"

let accountState
let accountType = "Student"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// accountId = 654789
accountEmail = "xyz@gmail.com"
accountCity = "Banglore"
accountPassword = "123456"
// console.log(accountId);
console.table([accountEmail , accountId , accountPassword , accountCity , accountState, accountType]);
// console.log(typeof accountEmail);
// console.log(typeof accountCity);
// console.log(typeof accountPassword);

