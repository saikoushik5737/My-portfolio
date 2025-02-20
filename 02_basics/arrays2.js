const marvelHeroes = ["Thor", "Ironman", "Spiderman"]
const dcHeroes = ["Superman", "Batman", "Flash"]

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes);

// console.log(marvelHeroes[3][0]);

const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);


//SPREAD OPERATOR

const allNewHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allNewHeroes);

const anotherArray = [1,2,3,[4,5,6],7,[5,4,[7,8]]]

const realAnotherArray = anotherArray.flat(3)

// console.log(realAnotherArray);


// console.log(Array.isArray("Kousik"));   //Checks for an array
// console.log(Array.from("Kousik"));     //Forms an array

// console.log(Array.from({name: "Kousik"}));     //Gives empty array if no array is passed

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

