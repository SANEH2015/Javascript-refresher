//Excercise One//

let myNumber = 50;
let myFloat = 5.5;

//perform operations//


let sumu = myNumber + 10;
let diff = myNumber - 30;
let pro = myNumber * 2;
let quat = myNumber / 5;
let remainder = myNumber % 3;
let exponent = myNumber ** 7;

//print the result//
console.log("myNumber:" , myNumber);
console.log("myFloat:", myFloat)
console.log("Additional:",sumu); 
console.log("Subtration:",diff); 
console.log("Multiplication:",pro); 
console.log("Division:",quat) 
console.log( "Modulas:",remainder); 
console.log( "Exponentiation:",exponent); 

//Excercise Two//

let number1 = 40;
let number2 = 2; 
 
let Equal = number1 === number2 ; false
let NotEqual = number1 !== number2 ; true
console.log( "Equal:",Equal);
console.log("NotEqual:", NotEqual); 

let x = 8;
let y = 12;

//check if x is greater than y//
if( x > y){
console.log("x is greater then y");

} else{
    console.log("x is not greater then y");
}

//chech if x is less or equal to y//
if(x <= y){
    console.log("x is less or equal to y");
} else{
    console.log("x is not less or equal to y");
}

//check if x is equal to y//
if(x === y){
    console.log("x is eqaul to y");
} else{
    console.log(" x is not equal to y");
}

//check if x is not equal to y//
if(x !== y){
    console.log("x is not equal to y");
} else{
   console.log("x is not equal to y");
} 

let a = true ;
let b = false;

// AND Operater//
console.log("a and b:" ,a && b);

// OR Operater//
console.log("a or b:", a|| b);

// Not Operater (!a)//
console.log("Not a:", !a); 

let p = 10;
//+= //
p += 4;
console.log("P += 4:" , p);

//-=//
p -= 3;
console.log("P -= 3:", p);

// *= //
p *= 10;
console.log("P *= 10:" , p);

// /= //
p /= 13;
console.log("p /= 13:" ,p);

// %= //
p %= 5;
console.log("P %= 5 :", p)