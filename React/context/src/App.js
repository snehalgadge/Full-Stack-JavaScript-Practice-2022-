import React, {useState, createContext} from 'react'
import Header from './component/Header'
import Navbar from './component/Navbar'
import Context from './component/Context';

export const MyContext = createContext();

const App = () => {

    const [name, setName] = useState("");

    const myName = (event) =>{
        setName(event.target.value)
    }

  
  return (
    <MyContext.Provider value={{name}}>
      <Navbar/>
      <Header/>
      <form>
        <input type={Text} placeholder={"Enter Your Text"} value={name} onChange={myName}/>
      </form>
      <Context/>
    </MyContext.Provider>
  );
};

export default App


