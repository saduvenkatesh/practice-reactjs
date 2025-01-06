import { useState } from "react"
import "./App.css"
export default function App () {
   
    const [isGoingOut, setIsGoingOut] = useState(true)
    
    function handleClick(){
        
        if (isGoingOut) 
         setIsGoingOut(false)
        else
        setIsGoingOut(true)


    }



    return(
        <>
               <h1>Do you feel like going outside today ? </h1>
               <button onClick={handleClick} >{isGoingOut ? "Yes" : "No"}</button>
        </>
    )
}