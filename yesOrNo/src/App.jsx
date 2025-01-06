import { useState } from "react"
import "./App.css"
export default function App () {
   
    const [text, setText] = useState("Yes")
    
    function handleClick(e){
        
        if (e.target.value=="Yes") 
         setText("NO")
        else
         setText("Yes")
    }



    return(
        <>
               <h1>Do you feel like going outside today ? </h1>
               <button onClick={handleClick} value={text}>{text}</button>
        </>
    )
}