const name = "Aman-kumar"
const roll = 50
// console.log(name + roll + "Value");
console.log(`Hello my name is ${name.toUpperCase()} and my roll number is ${roll}`);

const str = new String('Aman')
console.log(str);
console.log(str.__proto__);

console.log(str.length);
console.log(str.charAt(3));
console.log(str.indexOf('n'));

const newstr = str.substring(0,2) // it does not include negative index
console.log(newstr);

const anotherstr = str.slice(-5,2)  //it includes negative index also
console.log(anotherstr);   

const stringone = "     Aman Kumar   "
console.log(stringone);
console.log(stringone.trim());

const url = "https://aman.com/aman%20kumar"
console.log(url.replace('%20', '-'));
console.log(url.includes('aman'));    //true


const sentence = "I am a boy who do not like ISKCON morning program from the begining but m forced by the leader of the ISKCON BACE"
const words = sentence.split(' ')
console.log(words);