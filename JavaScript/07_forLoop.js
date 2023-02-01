// for loop
/*
let sum=0;
let n = prompt("Enter the number")
n = Number.parseInt(n);
for(let i=0; i<n; i++){
    sum+=n;
}
console.log(sum);
*/

// for-in loop
let marks= {
    neha: 30,
    Riya: 45,
    tenu : 21,
    Riyu : 31
}

for(let a in marks){
    console.log(`Marks  of ${a} is ${marks[a]} `);
}

// for-of loop
let arr = [1,2,3,4,5];
for(let b of arr){
    console.log(b);
}