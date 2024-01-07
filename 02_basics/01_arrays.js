//array

const myArr= [0,1,2,3,4,5,6]
// console.log(myArr[2]);

const heros = ["Aman" , "Kumar", "saurabh" ,"Anshu"]
// console.log(heros[0]);

const arr1 = new Array(1,2,3,4,5,6)
// console.log(arr1[2]);

/* *****************Array Methods *************** */

arr1.push(10);
// console.log(arr1);
arr1.pop()
// console.log(arr1);
arr1.unshift(10); //add from starting , but it is time consuming for larger data
// console.log(arr1);
// console.log(arr1.indexOf(-10));

const newarr = arr1.join()
// console.log(newarr);
// console.log(typeof newarr);

//slice  //splice

console.log("A" , arr1);

const newarr1 = arr1.slice(1,4);
console.log(newarr1);
console.log(newarr);
console.log("B" , arr1);
const newarr2 = arr1.splice(1,4);
console.log("C" , arr1);
console.log(newarr2);
console.log("D" , arr1);


//In slice output come from the original array but does not include the end range
//In splice the given range elements gets deleted from the array and give output excluding those elements as done in above example 





//node 02_basics/01_arrays.js