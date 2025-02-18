const name = "Kousik";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello! my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Kousik-ks')

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf('K'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4);
console.log(anotherString);

const anotherNewString = "  Kousik  "
console.log(anotherNewString);
console.log(anotherNewString.trim());

const url = "https://kousik.com/kousik%30pavani";

console.log(url.replace('%30','-'));

console.log(url.includes('kousik'));

console.log(gameName.split(''));
