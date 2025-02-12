const accountId = 12345
let accountEmail = "koushik@gmail.com"
var accountPassword = "11223344"
accountCity = "Hyderabad"
let accountState;

// accountId = 2 //Not allowed 

console.log(accountId);
accountEmail = "sai@gmail.com"
accountPassword = "4321"
accountCity = "Nellore"

/*
Prefer not to use "var" because of issue in block scope and functional scope
*/

console.table([
    accountId, accountEmail, accountPassword, accountCity, accountState])