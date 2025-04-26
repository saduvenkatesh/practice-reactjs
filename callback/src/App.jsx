import React from 'react'

export default function App(){

 const [count , setCount] = React.useState(0)

  function Add(){
    setCount(function(oldnum){
      return oldnum+1
    })
  }

  function Sub(){
    setCount((oldnum)=>{
      return oldnum-1
    })
  }
    
  return(
    <>  
        <button onClick={Add}>+</button>
        <button>{count}</button>
        <button onClick={Sub}>-</button>
    </>
  )
}