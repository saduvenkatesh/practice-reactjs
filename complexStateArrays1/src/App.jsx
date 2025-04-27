import React from "react"

export default function App(){

  const [favNUmbers, setFavNumbers] = React.useState([])
  
  const favThings = favNUmbers.map(thing => <p>{thing}</p>)

  const allFavNumbers = [1,2,3,4,5,6,7]
  
  function Add(){
    setFavNumbers(prev => [...prev,allFavNumbers[favNUmbers.length]])
  }
  
  // function Remove(){
  //   setFavNumbers(prev=>prev=prev.pop())
  // }

  return(
    <>
       <h1>My favourite numbers are below : </h1>
       <button  onClick={Add}>Add Favourite Number</button>
       <button onClick={Remove}>Remove My Favourite NUmber</button>
       <section>{favThings}</section>
    </>
  )
}