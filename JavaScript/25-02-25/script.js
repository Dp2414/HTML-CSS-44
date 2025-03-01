// console.log(4+5);
// console.log(5-3);
// console.log(5*3);
// console.log(10%2);
// console.log(10/5);
// console.log(3**2);


//Assignment Operator
/*let x=10;

x!=10;
x+=10;
x=x+10;
x-=10;
x=x-10;
x*=10;
x=x*10;
console.log(x); */


//Comparision Operator

console.log(10 =="10");  //true
console.log(10 === "10"); //false
console.log(10 != "10");  //false   
console.log(10 !== "10");  //true


//Logcial Operators : && (AND),OR (||),!


console.log(true&&false); //false
console.log(true||false); //true
let a =10;
console.log(!a);


//Ternary Operator is alsoused in REACT
//condition ? true : false

let b=18;
let result=b>20?"you can drive":"you cannot drive";
console.log(result);


//typeof and instanceof

console.log(typeof "10");

console.log(typeof 5);
console.log(typeof [1,2,3]);


//String Operator
let first="something";
let last=" nothing";
console.log(first+last);

console.log(+true);
console.log(+false);
console.log(+"10");
console.log(+null);

//increment and decrement
//++ and --

//Postfix increment(x++) and prefix increment(++x)
//Postfix Decrement(x--) and prefix decrement(--x)
let x=10;
console.log(x++); //10   11
console.log(x--); //11  10
console.log(x); //10
console.log(++x); //11
console.log(--x);//10

console.log(x); //10

let add=5;
let result1=add++ + ++add + add-- + --add;
console.log(result1);


let $a=4;
let $b=5;
let $c=$a++ * --$b + ++$a * $b-- -$a-- * $b++;
console.log($a,$b,$c);
4*4+6*4-6*3
16+24-18
//4 5 a
//4 b 
//6 a
//4 3b
//6 5a
//3 4b
// 5a,4b,27
