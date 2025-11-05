/* [1]. Var type variable:- It's a variable-> there are 2 types 
        (i). Function-scoped: variable use only inside the function.
        (ii). Globallly-scoped: variable use anywhere. */


    var b=25; // globally-scoped variable

function solve(){
    var age=20;
    console.log(age);
}
solve(); //output- 20

console.log(age); // error-> here varibale is not acessable beacuse this "var" is function-scoped.


var x=10;
var x=20;  // redecalreation / realocation is possible 



  /*  [2]. Let type variable:- it also variable type -> In which variable used only inside the block "{}"
    re-declaration is not possible.*/
{
    let a=10;
    console.log(a);
}

console.log(a) 

/* [3]. const type variable:- it used to decalre constant variable
         -> (re-assingment/re-declareation cannot be possible). */

const a=28;
console.log(a)

a=20;
console.log(a) 


// Data-Types:- 


let marks = 20.253;
marks= "sumit";
marks= "true";
console.log(marks);

let mark;
console.log(mark);

let me=null;
console.log(me);



