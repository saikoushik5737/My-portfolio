function sayMyName() {
    console.log("K");
    console.log("O");
    console.log("U");
    console.log("S");
    console.log("I");
    console.log("K");
}

// sayMyName()

// function addTwoNumbers(num1, num2) {
//    console.log(num1+num2);
// }

function addTwoNumbers(num1, num2) {
   let result = num1+num2;
   return result
}

const result = addTwoNumbers(3, 5)
// console.log(result);

function loginUserMessage(username = "Sam"){  //DEFAULT PARAMETER
    if (!username) {
        console.log("Please enter a username");
        return
    }
        return `${username} just logged in`;
}

// console.log(loginUserMessage("Kousik"));

// console.log(loginUserMessage("Sai"));



function calculateCartPrice(val1, val2, ...num1){ //REST or SPREAD OPERATOR
    return num1
}


// console.log(calculateCartPrice(200, 300, 400, 500, 600));

const user = {
    userName: "Sai",
    price: 99
}

function handleObject(anyObject){
    console.log(`The name is ${anyObject.userName} and the price is ${anyObject.price}`);   
}

// handleObject(user);

// handleObject({
//     userName: "Kousik",
//     price: 200
// })

const myNewArray = [100, 300, 200, 400, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 600]));
