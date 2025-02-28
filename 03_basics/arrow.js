const user = {
    userName: "Sai",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.userName}, Welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let userName = "Sai"
//     console.log(this.userName);   
// }

// chai()


// const chai = function () {
    //     let userName = "Sai"
    //     console.log(this.userName);   
    // }
    
    // chai()
    
    //*****************ARROW FUNCTION****************/

// const chai = () => {
//     let userName = "Sai"
//     console.log(this);   
// }

// chai()

// const addTwo = (num1, num2) => {  //EXPLICIT RETURN
//     return num1+num2
// }
// console.log(addTwo(2,3));

// const addTwo = (num1, num2) =>  num1 + num2 //IMPLICIT RETURN

// const addTwo = (num1, num2) => (num1 + num2) //IMPLICIT RETURN //MOSTLY USED IN REACT

/////////////////// if we use {} then "return" key word should be used
/////////////////// if we use () then "return" key word should not be used

const addTwo = (num1, num2) => ({userName: "Sai"}) //TO RETURN OBJECT

console.log(addTwo(2,3));
