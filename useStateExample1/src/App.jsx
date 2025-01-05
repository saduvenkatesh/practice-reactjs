import { useState } from "react"
import "./App.css"

export default function App(){

  const [count, setCount] = useState(0)

  function increment(){
    setCount(count+1)
    console.log("you clicked "+count+" times")
  }
 
  return(
    <>
        <main>
        <button onClick={increment}>you clicked {count} times</button>
        </main>
    </>
  )
}