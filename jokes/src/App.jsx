import "./App.css"
import React from "react"
import Jokes from "./components/Jokes.jsx"
import Data from "./data.js"

export default function App(){

  const [message, setMessage] = React.useState([])

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
      {message.length > 0 && <p>Hey you have {message.length} unread messages</p>}
      {message.length == 0 && <p>Hey your message box is empty</p>}
    </div>
  )
}