// ARRAYS

const myArray = [0,1,2,3,4,5]
const myHeroes = ["Ram", "Krishna", "Narasimha", "Shiva"]
// console.log(myArray[1]);


const myArray2 = new Array(5,4,3,2,1,0)
// console.log(myArray2[0]);

// ARRAY METHODS

myArray.push(6);
myArray.pop();

myArray.unshift(9);
myArray.shift();

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

const newArr = myArray.join()

// console.log(myArray);
// console.log(typeof newArr);

// Slice, splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3);

console.log(myn1);
console.log("B ", myArray);

let myArrPart = myArray.splice(1,2);
console.log("C ", myArray);
console.log(myArrPart);
