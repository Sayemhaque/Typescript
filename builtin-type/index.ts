// built in dataTypes = number , string , boolean , void , undefined, null

let userId : number;
let userName : string;
let isSingle : boolean;

userId = 1;
userName = "Md sayem";
isSingle = true;


console.log(userId)
console.log(userName)
console.log(isSingle)

let id ; //if we dont set any data type staticly the default data type will be set to any.


function displayUser  () : void {
  console.log("I dont return anything")
} 


console.log(displayUser())