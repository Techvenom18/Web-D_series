
// class Human{

//     // Properties
//     age = 19; // public
//     #wt = 63; //private
//     ht= 180;

//     // behavior
//     walking(){
//         console.log("I am Walking", this.#wt);
//     }

//     runing(){
//         console.log("I am runing");
//     }
// }

// let obj = new Human();
// // console.log(obj #wt); // error occur due to private object
// obj.walking();


// Getter & Setter function

class Human{

    // Properties
    age = 19; // public
    #wt = 63; //private
    ht= 180;

    constructor(newAge, newHeight, newWeight){
        this.newAge;
        this.newHeight;
        this.newWeight;
    }

    // behavior
    walking(){
        console.log("I am Walking", this.#wt);
    }

    runing(){
        console.log("I am runing");
    }

    get fetchWeight(){
        return this.#wt;
    }

    set modifyWeight(val = 11){
        this.#wt = val;
    }

}

let object = new Human(50, 120, 129);
console.log(object.ht);
console.log(object.fetchWeight);
object.walking();  


// Default parameters: 

function sayName(fname = "Uday", lName = "singh"){
    console.log("My name is: ", fname," ",lName);
}

sayName(); // here default values of parameter use
sayName("Love"); // here fname get updated while lName stil default

// dependent parameter:
function sayName(fname = "Uday", lName = fname.toUpperCase()){
    console.log("I am : ", fname," ",lName);
}

sayName("Sumit"); 


// default parameter=object{}/Array[]:
function solve(value = {age:19, wt:67, ht:190}){
    console.log("Hello Jee", value);
}
solve()

//Null & undefined parameters:
function yes(fname = "Uday", lName = "singh"){
    console.log("My name is: ", fname," ",lName);
}
yes("Null");
// yes(Undefined);


// Function as default Parameter:
function getAge(){
    return 190;
}
function utility(name = "Sumit", age = getAge()){
    console.log(name, age);
}
utility(); 

