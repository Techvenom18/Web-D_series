 // 1. For Loop:
for(let i=1; i<=10; i++){
    if(i==5){
        break;
    }
    else{
        console.log(i);
    }
}

for(let i=1; i<=10; i++){
    if(i==5){
        continue;
    }
    else{
        console.log(i);
    }
}

// while loop
let a=10;
while(a>=0){
    console.log(a);
    a--;
}

let b=0;
while(b<=10){
    console.log('Inside the loop');
    if(b==3){
         b++;
        break;
    }
    else
        console.log(b);
    b++;
    
}


// do-while loop
let z = 1;
do{
    console.log('hello jee kaise ho');
    z++;
}
while(z<=10);


//string
let str = 'sumit jee kya hal chal h app ke?'
let words = str.split(' ')
console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.substring(2,6))
console.log(words)
let st = 'sumit \'jee \'kya \'hal \'chal \'h \'app \'ke?'
// let newwords = st.split('')
console.log(st)

// let b=11;
// while(b>10){
//     console.log('Inside the loop');
//     if(b==11){
//         b++;
//         break;
//     }
//     else
//         console.log(b);
//     b++;
    
// }
