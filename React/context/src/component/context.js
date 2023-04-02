import React,{useContext} from 'react'
import { MyContext } from '../App'

const Context = () => {
    const data = useContext(MyContext);

  return (
    <>
      <h1>Printing my name with the help of Context API : {data.name}</h1>
    </>
  )
}

export default Context
