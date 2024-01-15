// Run :  node 05_iterations/five.js

const coding = ["Js" , "Java" ,"Ruby", "Javascript"]
// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function print(item){
//     console.log(item);
// }
// coding.forEach(print)

// coding.forEach( (item , index ,arr) => {
//     console.log(item , index , arr);
// })

const myCode = [
    {
        lang : "js",
        language : "Javascript"
    },
    {
        lang : "Rb",
        language : "Ruby"
    },
    {
        lang : "Cpp",
        language : "C++"
    }
    
]

myCode.forEach((item) => {
    console.log(item.lang  +':-'+ item.language);
})