function FavouriteMovie (props) {
    return (
       
        <li>
            <img src={props.movie.Poster} alt={props.movie.Title} />
            <div>
                <h4>
                    {props.movie.Title}
                </h4>
                <p>
                    {props.movie.Year}
                </p>
            </div>
        </li>
    )
}
export default FavouriteMovie