import { useState } from "react"
import "./App.css"
export default function App () {
   
    const [isGoingOut, setIsGoingOut] = useState(true)
    
    function changeMind(){
        setIsGoingOut(prev => !prev)
    }
    return(
        <>
               <h1>Do you feel like going outside today ? </h1>
               {/* <button onClick={()=>{setIsGoingOut(!isGoingOut)}} >{isGoingOut ? "Yes" : "No"}</button> */}
               <button onClick={changeMind}
                       className="value"
                       aria-label={`current answer is ${isGoingOut ? "Yes" : "NO"}. Click to change it`}
               > {isGoingOut ? "Yes" : "No"}
               </button>
        </>
    )
}