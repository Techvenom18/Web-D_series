
// Object creation in JS

let obj = {
    "name" : "sumit rathore",
    age: 19,
    height: 5.10,
    weight: 63,
    walk: function(){
        console.log("Hello dear: ")
        for(i=0; i<=10; i++){
            console.log("Inside the function")
            console.log(i);
        }
    },
    Gender: "Male"
}

obj.walk(); // object calling
console.log(obj); // function calling inside the object
console.log(typeof(obj));

let obj2 = obj; // shellow copy (reffrence copying only 'obj' to 'obj2')


// Array creation in JS

let arr = [1, 2, 3, 4, 5, 6]; // simple array creation
let brr = new Array("Sumit", true,1);  // array constructor

console.log(arr);
console.log(brr);
console.log(brr[3]);

brr.push("Harsh");
brr.pop();

brr.shift();
brr.unshift("Hrash Gupta")

brr.splice(1,2,'Anurag');
console.log(brr)

console.log(brr.slice(2,3));


let drr=[10,20,30,40];
let ans = drr.map((number) => {
    return number*number;
})

console.log(ans);

let trr = [10,20,30,31,21,1,40,111];

let evenArray = trr.filter((number) => {
    return number%2==0;

    // if(number%2==0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
})

console.log(evenArray)

let vrr = [10, 20, 30, 40];
let newans = arr.reduce((acc,curr) =>{
    return acc+curr;
}, 0);

console.log(newans);

arr.sort();
console.log(arr);

console.log(vrr.indexOf(30));


// let arr = [10,20,30];

// let length = arr.length;
// console.log("length: " , length);
// //tradiotional loop

// for(let index = 0; index < length; index++) {
//     console.log(arr[index]);
// }

// arr.forEach((value, index) => {
//     console.log("Number: ", value, " Index: ", index);
// })

// let arr = [10,20,30,40];

// for(let value of arr) {
//     console.log(value);
// }

// let fullName = "babbar";

// for(let val of fullName) {
//     console.log(val);
// }

let zrr = [10,20,30,40,50];

let getSum = (zrr) => {
    let sum = 0;
    zrr.forEach((value) => {
        sum = sum + value;
    })
    return sum;
}

let totalSum = getSum(zrr);
console.log(totalSum);
