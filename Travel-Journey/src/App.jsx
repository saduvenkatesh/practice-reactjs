import Header from "./comonents/Header"
import Entry from "./comonents/Entry"
export default function App(){

const golconda ={
                
  title:"golconda",
                img:"https://tse3.mm.bing.net/th?id=OIP.fgk3tfnDt4aP3WN3gcfREAHaFj&pid=Api&P=0&h=220",
                 address:"https://maps.app.goo.gl/HBiZRC3Bgm5S2G1X7",
                 details:"Golconda is a fortified citadel and ruined city located on the western outskirts of Hyderabad, Telangana, India. The fort was originally built by Kakatiya ruler Pratāparudra in the 11th century out of mud walls."
}

const charminar = {
  title:"charminar",
  img:"https://tse4.mm.bing.net/th?id=OIP.9640E7VdmZtLwUOZjI9oAQHaEK&pid=Api&P=0&h=220",
  address:"https://www.google.com/maps/place/Charminar/data=!4m7!3m6!1s0x3bcb978a6e1a939b:0xcb5a69e4aaf113fb!8m2!3d17.3615636!4d78.4746645!16zL20vMDNuZmxw!19sChIJm5MaboqXyzsR-xPxquRpWss?authuser=0&hl=en&rclk=1",
  details:"The Charminar is a monument located in Hyderabad, Telangana, India. Constructed in 1591, the landmark is a symbol of Hyderabad and officially incorporated in the emblem of Telangana"
}

const birla_mandir = {
  
  title:"birla mandir",
  img:"https://tse4.mm.bing.net/th?id=OIP.XGlP1XrFmsB1yoscgFna9AHaE2&pid=Api&P=0&h=220",
  address:"https://www.google.com/maps/place/Birla+Mandir/data=!4m7!3m6!1s0x3bcb975dd124c005:0x59439ffad6e0298e!8m2!3d17.4062367!4d78.4690601!16s%2Fm%2F0283l9v!19sChIJBcAk0V2XyzsRjing1vqfQ1k?authuser=0&hl=en&rclk=1",
  details:"Birla Mandir is a Hindu temple built on a 280 feet (85 m) high hillock called Naubath Pahad on a 13 acres (53,000 m 2) plot in Hyderabad, Telangana, India. The construction took ten years ."
}

const budha = {
  title:"budha",
  img:"https://tse3.mm.bing.net/th?id=OIP.0wQGQSLITZS0trqCZoI9NgHaHb&pid=Api&P=0&h=220",
  address:"https://www.google.com/maps/place/Buddha+Statue/data=!4m7!3m6!1s0x3bcb975801aff093:0x4c47ef6c115b0424!8m2!3d17.4155657!4d78.474973!16s%2Fm%2F0m0k5_d!19sChIJk_CvAViXyzsRJARbEWzvR0w?authuser=0&hl=en&rclk=1",
  details:"The Buddha Statue of Hyderabad is a monolith located in India. It is the world's tallest monolith of Gautama Buddha, erected on Gibraltar Rock in the middle of Hussain Sagar."
}

  return (

    <>
      <Header/>
      <Entry img={golconda.img} address={golconda.address} title={golconda.title} details={golconda.details} />
      <Entry img={charminar.img} address={charminar.address} title={charminar.title} details={charminar.details} />
      <Entry img={birla_mandir.img} address={birla_mandir.address} title={birla_mandir.title} details={birla_mandir.details} />
      <Entry img={budha.img} address={budha.address} title={budha.title} details={budha.details} />
    </>
  )
}