import { useState } from "react"

export default function App () {

  const [fname, setFname] = useState("e.g. venky")

  function handleChange(e){

    setFname(e.target.value)
  }



  return(
    <>
         <form>

          <input type="text" name="nickName" value={fname} onChange={handleChange}/>
          <h2>your name is {fname}</h2>
          <button type="reset">reset</button>
         </form>
    </>
  )
}