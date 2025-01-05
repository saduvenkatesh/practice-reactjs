import { useState } from "react"

export default function App (){

  const [text, setText] = useState("virat kohli")

  const [number, setNumber] = useState(18)

function handleText(e){
   setText(e.target.value)
   
}

function handleNumber(e){
  setNumber(e.target.value)
  
}

  return (
    <>
          <input type="text" name="text" value={text} onChange={handleText}/>
           <p>Name : {text}</p><br />
          <input type="number" name="number" value={number} onChange={handleNumber}/>
          <p>Jersy Number : {number}</p>
    </>
  )
}