// Array Methods

let num = [1,2,3,4,5,65];

// -> toString():- to change any number into string. It retrun string.
console.log(`Changing the number into string 
${num.toString()}`);

// -> join():- join all array elemnts using separator. It retrun string.
console.log(`Joining the array elements using '-' 
${num.join("-")}`);

// -> pop():- remove the last array element. It make changes in the same array
console.log("Removing array element",num.pop());
console.log(num);

// ->push():- push add the array element in the end of array
num.push(65);
console.log(`Element is added in array 
${num}`);

// ->shift():- Remove element from the start of array and return it
num.shift();
console.log(`The shifted value is 
${num}`);

// ->unshift():- add element to the begining of array
num.unshift(89);
console.log(`The unshifted value is 
${num}`); 

// ->delete():- delete any array element
console.log(`Original array 
${num}`);
delete num[3];
console.log(`Array after delete 3rd index 
${num}`); 

//  ->concat();- is use of join one or more array 
let num2 = [23,98,67,09,99];
let num3 = [0.9 , 0.6,0.4];
let newArray = num.concat(num2,num3);
console.log(`Array after adding 2 aarays 
${newArray}`);

// ->sort():- sort the array
let arr = [0,6,2,3,1,5];
console.log(`Sorted array 
${arr.sort()}`);

// ->reverse():- sort in reverse order
console.log(`Reverse Sorted array 
${arr.reverse()}`);


// ->splice:- used to add new array items
// syntax :- slice(start, end,element to be added)
let array = [1,2,3,4,5,6];
array.splice(1,2,13,14,15);
console.log("Splice ",array);


// ->slice:- slice out  a piece from array . It creates  a new array
// Syntax :- slice(start) / slice(start,end)
let newArr = array.slice(1);
console.log("Slice",array);

let newArr1 = array.slice(1,4);
console.log(newArr1);