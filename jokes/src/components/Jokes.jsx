import React from "react"

export default function Jokes(props){

    const [isShown, setIsShown] = React.useState(false)

    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    return(
        <div>
            {props.setup && <h3>{props.setup}</h3>}   
            {isShown  && <p>{props.punchline}</p>}    //conditional rendering
            <button onClick={toggleShown}>Show Punchline</button>
        </div>
    )
}