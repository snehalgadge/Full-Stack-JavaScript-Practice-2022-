import React, {useState} from 'react'

const UseState1 = () => {
    const [count,setCount] = useState(0);

    const Increase = () =>{
        setCount(count+1);
    }

    const Decrease = () =>{
        setCount(count--);
    }

  return (
    <>
      <div>
        <h1>Counter APP</h1>
        <div>
            <button onClick={Increase}>+</button>
            <button onClick={Decrease}>-</button>
        </div>
      </div>
    </>
  )
}

export default UseState1
