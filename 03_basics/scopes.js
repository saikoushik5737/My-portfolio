// var c = 200;
let a = 300

if (true) {
    let a = 10;
    const b = 20;
    // c = 30;
    // console.log("Inner: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

//******************NESTED SCOPE*********************//

function one() {
    const userName = "Sai"

    function two() {
        const website = "youtube"
        console.log(userName);    
    }
    // console.log(website); 

    two()
}

// one()

if (true) {
    const userName = "Sai"
    if (userName === "Sai"){
        const website = " Youtube"
        // console.log(userName + website);
        
    }
    // console.log(website);
    
}
// console.log(userName);


//*****************HOISTING*****************//

console.log(addone(5));

function addone(num) { //FUNCTION DECLARATION
    return num+1;
}


// addTwo(5)

const addTwo =  function addtwo(num) { //FUNCTION EXPRESSION    
    return num+2
}

