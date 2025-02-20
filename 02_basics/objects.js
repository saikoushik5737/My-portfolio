// SINGLETON

// OBJECT LITERALS

const mySymbol = Symbol("key 1")

const jsUser = {
    name: "Kousik",
    "full name": "Sai Kousik",
    [mySymbol]: "myKey 1",
    age: 25,
    location: "Nellore",
    email: "sai@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

//console.log(jsUser["full name"]);

//console.log(typeof jsUser[mySymbol]);

jsUser.email = "kousik@chatgpt.com"

// console.log(jsUser.email);

// Object.freeze(jsUser); //This will freeze the object which prevent to override the data in the object

jsUser.email = "kousik@microsoft.com"

// console.log(jsUser);


jsUser.greetings = function(){
    console.log("Hello JS user");
}

jsUser.greetings2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetings2());
