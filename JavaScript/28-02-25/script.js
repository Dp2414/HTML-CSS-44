let first=10;
let second=20;
let third=22;

if(first>second&&first>third){
console.log("a is the greatest number");
}
else if(second>first&&second>third){
    console.log("second is the greatest number");
}
else if(third>first&&third>second){
    console.log("third is the greatest number");
    
}
else{

    console.log("All are equal");
}


// let a=5;
// let b=a++ + ++a + --a + a--;
// console.log(b);

let a=3;
let b=4;
let c=19;
if (a+b>c && a+c>b&& b+c>a){
    console.log("a valid triangle");
    }
else{
    console.log("not a valid triangle");
    }


let num=110;
if(num%5==0 && num%11==0){
    console.log("Given numberis divisible by both 5 and 11");
    
}
else{
    console.log("Not divisibleby 5 and 11");
    
}

let celsius="55";
if(typeof celsius !=="number"){
    console.log("Please enter valid number");
    
}
else{
    let fahrenheit=celsius+9/5+32;
    console.log(`The value of celsius ${celsius} is converted to ${fahrenheit}`);
    
}
