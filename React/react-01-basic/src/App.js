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
const lastName = 'gadge';
const App = () => {
  return(
    <>
     <h1 className="hello">Hello Everyone , my name is {name} <br></br> My lucky number is {2+3}</h1>
     <h1>My Full name is {`${name} ${lastName}`}</h1>   {/*template literals*/}
     <MyName/>   {/* nested component */}
     <DateAndTime/>
    </>
  );
};


// Creating a new component which print my name
const image1 = "https://picsum.photos/200/300";
const image2 = "https://picsum.photos/220/300";
const image3 = "https://picsum.photos/230/300";
const image4 = "https://picsum.photos/240/300";
const MyName = () =>{
  return(
  <>
    <h1 contentEditable="true">My name is Snehal</h1>
    <img src = {image1} alt="image1"/>
    <img src = {image2} alt="image2"/>
    <img src = {image3} alt="image3"/>
    <img src = {image4} alt="image4"/>
  </>
  );
};



// Displaying Current date and time
const currdate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();

const DateAndTime = () => {
  return(
    <>
    <p>Today's Date is: {currdate}</p>
    <p>Time right now is : {currtime}</p>
    </>
  );
};


export default App;



