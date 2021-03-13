const Lieblingsfilm = (props) => {
    console.log(props)
    return (
        <figure>
            <img src={props.img} alt="" />
            <figcaption>
                <h2 className="title">{props.filmTitle}</h2>
                <h2 className="year">{props.filmYear}</h2>
                <h2 className="director">{props.filmDirector}</h2>
            </figcaption>
        </figure>
    );
}
export default Lieblingsfilm;