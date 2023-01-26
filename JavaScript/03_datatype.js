// *typeof gives us the type of datatype

// *Datatypes are of 2 type
//   ->Primitive - var , let , const , null , undefined , NaN
//   ->Non-Primitive - Array , Object

// 1)String :- we can use string with single or double quotes .
var userName = 'Snehal';      
console.log(typeof userName);


// 2)Integer :- Any number.
var userAge = 23;              
console.log(`the type of ${userAge} is ${typeof userAge}`);


// 3)Boolean :- values that can only be true or false.
let isLoggedIn = true;         
console.log(`the type of ${isLoggedIn} is `,typeof isLoggedIn);


// const the value that can't be changed
const id = '123abc';           
console.log(`the type of ${id} is ${typeof id}`);


// undefiend :- value that is not defined yet .
let course;                 
console.log(`the type of ${course} is ${typeof course}`);


//null :- null is intensational absence of any object. 
//        It is supposed to be something that doesn't exist
let phoneNumber = null;
console.log(`the type of ${phoneNumber} is ${typeof phoneNumber}`);