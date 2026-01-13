

/* console.log(marks); // Temporal dead zone
console.log("babbar");
console.log("Love"); */
const marks = 100;
console.log(marks);


// Block variable
{
    const age = 100;
}

// console.log(age); // through error


console.log(height); 
{
    var height = 180; // only var accesable out side the block
}

console.log(height);

 /* // Function scope
console.log(fullName); // error occur
function sayHello() {
    const fullName = "Earth";
    console.log("Hello Dunia ", name);
}
// console.log(fullName); // error occur
sayHello(); */





 //global scope
const age = 15;

console.log(age);

{
    console.log(age)
}
if(true ){
    console.log(age)
}
for(let i=0; i<2; i++) {
    console.log(age);
}

function sayHello() {
    console.log("hi ", age);
}
sayHello(); 
