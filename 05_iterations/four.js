//Run : node 05_iterations/four.js

const myObj = {
    Js : 'JavaScript',
    Cpp : 'C++',
    Rb :'Rubby'
}

// for(const key in myObj){
//     console.log(myObj[key]);
// }

const code = ["js","c++","Rb"]
for(const key in code){
    // console.log(code[key]);
}

const map = new Map()
map.set('Js', "Javascript")
map.set('Cpp', "C++")
map.set('Rb', "Rubby")

for (const key in map) {
    // console.log(map[key]);
    // console.log(key);
}

