import "./Entry.css"
export default function Entry(props){

    
    return (
        
            <>
                <article className="card-container">
                    <div className="main-img-container">
                    <img src={props.img} alt="main-img" className="main-img" />
                    </div>
                    <div className="card-description">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.jsBQL04RxeNPuuCRzQlpkAHaHa&pid=Api&P=0&h=220" alt="map-icon" className="map-icon" />
                        <span><a href={props.address}>View on Google Maps</a></span>
                        
                        <h1>{props.title}</h1>
                        <p><strong>12 Jan 2024-24 to Jan 2024</strong></p>
                        <p>{props.details}</p>
                    </div>
                </article>
            </>
    )
}