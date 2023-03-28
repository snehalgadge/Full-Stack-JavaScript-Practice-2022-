import React from "react";

// New version

// const App = () => {
//   return(
//     <div>
//       Helloo World !
//     </div>
//   )
// }


// Old verison :this version needs the import React from react statement

// const App = () =>{
//   return React.createElement("h1", {}, "Hello World");
// }


// React Fragment
const name = 'snehal';

const App = () => {
  return(
    <>
     <h1 className="hello">Hello Everyone , my name is {name} <br></br> My lucky number is {2+3}</h1>
     <p>This is nested component</p>
     <MyName/>   {/* nested component */}
     <h1>My name is </h1>
    </>
  );
};


// Creating a new component which print my name

const MyName = () =>{
  return(
  <>
    <h1>My name is Snehal</h1>
  </>
  );
};

export default App;



