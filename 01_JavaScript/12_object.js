// object is used to create key value pair . It is non-primitive datatype.
let attendace = {
    Snehal : 100,
    Riya : 89,
    Shibu : 70
}

console.log(attendace["Snehal"]);
console.log(attendace["Riya"]);
console.log(attendace["Shibu"]);

// print using for-in loop
for(let a in attendace){
console.log(`Attendace of ${a} is ${attendace[a]}`);
}


