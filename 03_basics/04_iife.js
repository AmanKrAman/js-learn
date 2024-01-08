//Immediately Invoked Function Expressions (IIFE)

(function fun() {
    console.log("DB Connected");
})();

//first () : means definition of the function
//Second () : means execution
//in the last ";" is required after 2nd parenthesis, to stop the execution , by default IIFE do not know where to stop
// we use IIFE to protect from global pollution


(function value(){
    console.log("datebase connected again");
})();

((name) => {
    console.log(`DataBase Connected again, ${name}` );
})('Aman');


