console.log("Rathore")

// OPERATORS:- 

// [1]. Arithmetic operator:
let a = 5;
let b = 10;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b); // Exponential

a += 10; //perivous 'a' consider as a=5-> a++
console.log(a) // output 15 

a = 10;
console.log(--a);  



// [3]. comparison operator:
let a = 10;
let b = 5;

console.log(a>b);
console.log(a<b);
console.log(a==b);
console.log(a>=b);
console.log(a<=b);
console.log(a!==b);
console.log(a!=b);

let c = 15;
let d = '15';
console.log(c===d); // Strict equality -> vale & dataype must be same [output: false]
console.log(c==d); // loose equality -> only value same [output: true]


//[6]. Ternanry operator

let age = 55;
let status1 = (age > 18) ? 'I can vote' : 'I can not vote';
console.log(status1);  // Output -> I can vote


 // [4]. Logical Operator: 

let a= false;
let b= true;
let c = 'sumit';

console.log(a&&b);
console.log(a||b);
console.log(!b);

console.log(a&&c); // output - false
console.log(a||c); // output - sumit  


// Conditionals:- 

let a = 1;
if(a>5){
    console.log('True');
}
console.log('false')

let b =10;
if(b>=10){
    console.log('this is matching matching!');
    if(b>5){
    console.log('True b=10');
    }
}
else if(b<=10){
    console.log('Not bad')
}
else if(b==0){
    console.log('Sorry, please give higher number')
}
else{
    console.log('Invalid Input')
}

let num=1;
switch(num){
    case 1: console.log("Eligible");
    break;
    case 2: console.log(" Not Eligible");
    break;
    case 3: console.log("Invalid");
    break;
    default: console.log("better luck next time")
    
} 
