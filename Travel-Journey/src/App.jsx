import Header from "./comonents/Header"
import Entry from "./comonents/Entry"
import data from "./data"

export default function App(){

  const entryElements = (data).map((entry)=>{
      
      <Entry
               img={entry.img.src}
               alt={entry.img.alt}
               title={entry.title}
               country={entry.title}
               googleMapsLink={entry.googleMapsLink}
               dates={entry.dates}
               text={entry.text}
      />
  })

  return (

    <>
      <Header/>
      <main className="container">
        {entryElements}
      </main>
      
    </>
  )
}