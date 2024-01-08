const bheros = ["khan" , "amir" , "akshay" , "ajay"]
const cheros = ["gauri" , "babita" , "ravina" , "kajol"]
//  bheros.push(cheros)
// console.log(bheros);
// console.log(bheros[4][2]);

//  bheros.concat(cheros)   //it means concat and push are the same thing in this way 
// console.log(bheros); 

// const allarr = bheros.concat(cheros);
// console.log(allarr);

const allheros = [...bheros , ...cheros] //it is also a way to merge array commonly called spread
// console.log(allheros);

const anotherarr = [1,2,3,[4,5,6],8,9,10,[11,12,13, [19,20,21]],15]

const anotherarrreal = anotherarr.flat(Infinity)
// console.log(anotherarrreal);

console.log(Array.isArray("Aman"))
console.log(Array.from("Aman"));
console.log(Array.from({name: "Aman"})); //intersting , it will give empty case


console.log(Array.from({"Aman" ,"Kumar"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2 , score3));




//node 02_basics/02_array.js