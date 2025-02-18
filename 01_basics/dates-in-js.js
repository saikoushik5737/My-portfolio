// Dates

let myDate = new Date();
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2023, 4, 23)

// let myCreatedDate = new Date("2023-05-17")

let myCreatedDate = new Date("05-17-2023")
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})