const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "reguser@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sai",
            lastName: "Kousik"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id:1,
        email: "123@gmail.com"
    },
    {
        id:2,
        email: "456@gmail.com"
    },
    {
        id:3,
        email: "789@gmail.com"
    },
    {
        id:4,
        email: "901@gmail.com"
    }
]

// user[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));    //GETS KEYS IN AN ARRAY
// console.log(Object.values(tinderUser));      //GETS VALUES IN AN ARRAY
// console.log(Object.entries(tinderUser));     //GETS KEY VALUE PAIRS IN AN ARRAY


console.log(tinderUser.hasOwnProperty("isLoggedIn"));
