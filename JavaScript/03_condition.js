// Making decisions on different conditions
// ->if/else

let temp = 20;

if(temp <20){
    console.log("It is cold");
}
else{
    console.log("It is hot outside");
}



// Allow the user to login if 
// ->logged in from google
// ->looged in from facebook
// ->looged in from email


let loggedIn = 'google'

if(loggedIn=='google' || loggedIn=='facebook' || loggedIn=='email'){
    console.log("You are allowed to logIn");
}
else{
    console.log("you hve no id");
}