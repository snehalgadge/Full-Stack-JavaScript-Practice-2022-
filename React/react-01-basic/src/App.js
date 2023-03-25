import React from "react";
import Usestate from "./component/Hooks/Usestate";

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
const App = () => {
  return(
    <>
    <Usestate/>
     <h1 className="hello">Hello Everyone {3+3}</h1>
     <p>This is nested component</p>
     <MyName/>   {/* nested component */}
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



