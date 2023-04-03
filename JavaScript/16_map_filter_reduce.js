// 1)Map() -> create a new array by perfroming some operation on each array element
// Syntax
    // const a = [1,2,3];
    // a.map((value,index,array) =>{})
// for example
let arr = [1,2,3,4];

let a = arr.map((value,index)=>{

    console.log(value,index);
    return value+1

})

console.log("New Array");
console.log(a);



// 2)Filter() -> filtering the element with some conditions and return it with new array
// Syntax :- a.fliter(condition);
// for eg:

let arr2 = [23,1,5,29,09,53,933,62];

let a2 = arr2.filter((value) => {
    return value<10;
})

console.log(`Values less then 10 are:- ${a2}`);


// 3)Reduce() :- reduce an array to a single value
let arr3 = [23,1,5,29,09,53,933,62,2,1,3];
let newArr = arr3.reduce((value,val)=>{
    return value + val
})

console.log(newArr);