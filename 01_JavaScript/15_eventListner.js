// <!-- addEventListner is use to assign multiple handlers to an event -->
// Syntax 
// -> element.addEventListner(event,handler);
// -> element.removeEventListner(event,handler); handler must be of same function object

let btn = document.querySelector(".btn");

let x = function(e){
    alert("Hello 1");
}
btn.addEventListener('click',x);

let y = function(e){
    alert("Hello 2");
}
btn.addEventListener('click',y);

let a = prompt("Write a number");

if(a==2){
    btn.removeEventListener('click',x);
}
