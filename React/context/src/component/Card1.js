import React, { useState } from 'react'

const Card1 = () => {
    const [name, setName] = useState("");

    const myName = (event) =>{
        setName(event.target.value)
    }
    
  return (
    <>
      <form>
        <input type={Text} placeholder={"Enter Your Text"} value={name} onChange={myName}/>
      </form>
    </>
  )
}

export default Card1
