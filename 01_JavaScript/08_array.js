// Array is a collection mix datatypes.


let countries = ["India", "USA","Russia", "China"];      //defining array

console.log(countries);                                  //accessing array
console.log(countries[3]);                               //accessing array with particular index val



//another way to create an array

let states = new Array('Delhi','Maharashtra','Assam');
console.log(states);
console.log(states[0]);


//looping on array using *forEach loop*
console.log("=>forEach loop");
countries.forEach((element =>{
    console.log(element);
}));

// for in gives the index of array
console.log("=>for-in");
for(let a in countries){
    console.log(a);
}

// for of
console.log("=>for-Of");
for(let a of countries){
    console.log(a);
}