// falsy value:-  value that is considered false when incountered with boolean. 
// 1)false
// 2)0 ,-0
// 3)undefined
// 4)null
// 5)"" , '', ``
// 6)NaN(not a number)


let email = false;
email? console.log("Suceesfully loggedin"): console.log("Add email");

let classAttended = 0;
if(classAttended){
    console.log("You are qulaified for exam");
}else{
    console.log("You have backlog");
}

let name;
if(name){
    console.log(" your name is ",name);
}else{
    console.log("this value is undefined");
}

let course = "";
course ? console.log("Course is filled"): console.log("course is empty");



// corecion =>Type coercion is the automatic or implicit conversion of values from one data type to another

console.log('2'+2);   //coercion
console.log(Number('2')+2);   //conversion