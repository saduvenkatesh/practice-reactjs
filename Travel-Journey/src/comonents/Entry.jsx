import "./Entry.css"
export default function Entry(props){

    console.log(props)
    return (
        
            <>
                <article className="card-container">
                    <div className="main-img-container">
                    <img src={props.entry.img.src} alt={props.entry.img.alt} className="main-img" />
                    </div>
                    <div className="card-description">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.jsBQL04RxeNPuuCRzQlpkAHaHa&pid=Api&P=0&h=220" alt="map-icon" className="map-icon" />
                        <span><a href={props.entry.googleMapsLink}>View on Google Maps</a></span>
                        
                        <h1>{props.entry.title}</h1>
                        <p><strong>{props.entry.dates}</strong></p>
                        <p>{props.entry.text}</p>
                    </div>
                </article>
            </>
    )
}