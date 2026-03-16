export default function MainSection(props){
    return(
        <>
            <section className="entry">
                <div class="imageBox">
                    <img className="mt-fuji" src={props.img.src} alt={props.img.alt} />
                </div>
                <section>
                    <span className="location-info">
                        <img className="map-icon" src="/public/map-icon.png" alt="map-icon" />
                        <div className="location-country">{props.country}</div>
                        <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                    </span>
                    <h1>{props.title}</h1>
                    <div className="dates">{props.dates}</div>
                    <div className="info">{props.text}</div>
                </section>
            </section>
            <div className="divider"></div>
        </>
    )
}