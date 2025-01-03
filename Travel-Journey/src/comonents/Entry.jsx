import "./Entry.css"
export default function Entry(props){

    console.log(props)
    return (
        
            <>
                <article className="card-container">
                    <div className="main-img-container">
                    <img src={props.img.src} alt={props.img.alt} className="main-img" />
                    </div>
                    <div className="card-description">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.jsBQL04RxeNPuuCRzQlpkAHaHa&pid=Api&P=0&h=220" alt="map-icon" className="map-icon" />
                        <span><a href={props.googleMapsLink}>View on Google Maps</a></span>
                        
                        <h1>{props.title}</h1>
                        <p><strong>{props.dates}</strong></p>
                        <p>{props.text}</p>
                    </div>
                </article>
            </>
    )
}