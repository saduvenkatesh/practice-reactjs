import "./App.css"
import { useState } from "react";
export default function App(){

  const emojis = [
    "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
    "😋", "😎", "😍", "😘", "🥰", "😙", "😚", "😜", "🤪", "🤨",
    "🧐", "🤓", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️"
  ];

  const [myFavouriteEmojis, setMyFavouriteEmojis] = useState([])

  const emojiList = myFavouriteEmojis.map((emoji)=> <p key={emoji}>{emoji}</p>)

  function addToMyFavouriteEmojis(){
     
      setMyFavouriteEmojis(prevFavouriteEmojis=>[...prevFavouriteEmojis, emojis[prevFavouriteEmojis.length]])
  }

  
  return(
   <main>
    <button onClick={addToMyFavouriteEmojis}>Add to my favourite emojis </button>
    {emojiList}
   </main>
  )
}