//  IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

//DEFINITION - To prevent the pollution caused by the global scope variables we use IIFE

//(Function declaration)(Calling function)

(function chai() { //NAMED IIFE
    console.log(`DB Connection`);
})(); //Should end with ";" when using iife, everytime to prevent errors 

(() => { //UNNAMED IIFE
    console.log(`DB Connection 2`);
})();

((name) => { //UNNAMED IIFE
    console.log(`DB Connection 2 ${name}`);
})("Sai")