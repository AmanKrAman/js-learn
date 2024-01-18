//Run : node 05_iterations/eight.js

const arr= [1,2,3]

// const i =0;
// const sum = arr.reduce((acc,curr) => acc+curr, i)
// console.log(sum);

// const sum = arr.reduce((acc,curr) => acc+curr,0)
// console.log(sum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const ans = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(ans);