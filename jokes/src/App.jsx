import "./App.css"
import React from "react"
import Jokes from "./components/Jokes.jsx"
import Data from "./data.js"

export default function App(){

  const [message, setMessage] = React.useState(["hi", "baby"])

  const JokeElement = Data.map(joke=>{
    return(
      <Jokes key = {joke.id}
            setup = {joke.setup}
            punchline = {joke.punchline}
      />
    )
  })
  return(
    <div>
      {JokeElement}
      {message.length <1 ? <p>Hey your message box is empty</p>:<p>you have {message.length} unread {message.length>1 ? "messages" : "message"}</p>}  {/* Nested ternary conditioning */}
      
    </div>
  )
}