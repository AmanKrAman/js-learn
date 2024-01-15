//node 05_iterations/one.js

//for loop

for(let i =0;i<=10;i++){
    // console.log(i);
}

//nested for loop
// for(let i =1;i<=10;i++){
//     console.log(`Table of ${i}`);
//     for(let j =1;j<=10;j++){
//         // console.log(`inner loop ${j} , outer loop ${i}`);
//         console.log(i + `*`+ j +`=`+ i*j);
//     }
// }

// let arr= ["aman","saurabh","anshu"]
// for(let i =1;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let i =0,j=1;i<=10,j<=10;i++,j++){
//     console.log(i);
//     console.log(i +`+`+ j );
// }

// for (let i = 0; i <= 10; i++) {
//     if(i==5){console.log(`detected 5`); break;}
//     console.log(i);
// }

for (let i = 0; i <= 10; i++) {
    if(i==5){console.log(`detected 5`); continue;}
    console.log(i);
}