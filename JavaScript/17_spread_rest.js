function sum (a,b) {
    return  a + b;
}

let arr = [5,5];
console.log(sum(...arr));  //spread


// Rest
function sum2(...args){
    let sum =0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log("Rest ",
sum2(3,3,3,3));
