//Primitive
//1.Number
const myNumber=9324943;
const myId=94.34;

//2.String - ""and ''
let myName="John doe";
let newName="Something";

//3.Boolean
let isStudent=false;

//4.Undefined
let fruit;

console.log(fruit);

//5.Null - when you dont want to assign any value to the variable but you have to give some value then it take null

let myGoal=null;
console.log(myGoal);


//Symbol - unique 
let myId1 = Symbol("2332");
let myId2 = Symbol("2332");
console.log(myId1 == myId2);

//Array
let myArray=[1,"name",true,undefined,null];
console.log(myArray);
console.table(myArray);
console.log(myArray[5]);

console.log(myArray.length);

//object

const car={
    color:"red",
    model: "alto",
    price : 500000,
    isSevenSeater:false,
};
console.table(car);
console.log(car.price);
console.log(car["model"]);

