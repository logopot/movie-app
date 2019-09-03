import React from 'react';
import noImage from '../../img/no-img.jpg';
import './Movie.css';

const Movie = (props) => {




    return (
        <div className = "col s12 m6 l3">
            <div className = "card blue-grey darken-3">
                <div className = "card-image">
                    {
                        props.image == null ? <img src = {noImage} alt = "empty" style = {{height: 360}} /> : <img src = {`https://image.tmdb.org/t/p/w185${props.image}`} alt = "poster" style = {{height: 360}} />
                    }

                    <a className = "btn-floating btn-large waves-effect waves-light red" href = "#" onClick = {() => props.viewMovieInfo(props.movieId)}><i class="material-icons">remove_red_eye</i></a>
                    {/* <div className = "card-content">
                        <p className = "card-content-link"><a className = "white-text" href = "#" onClick = {() => props.viewMovieInfo(props.movieId)}>View details</a></p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}



export default Movie;