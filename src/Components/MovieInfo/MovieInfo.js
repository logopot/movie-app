import React from 'react';
import noImage from '../../img/no-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import './MovieInfo.css';

const MovieInfo = (props) => {
    const element = <FontAwesomeIcon icon={faArrowLeft} />
    return (
        <div className = "container">
            <div className = "row" onClick = {props.closeMovieInfo}>
                <div className = "go-back">
                    <i className = "fas fa-arrow-left"></i>
                    <span>{element} Go back</span>
                </div>
            </div>
            <div className = "row">
                <div className = "col s12 m4">
                    { props.currentMovie.poster_path == null ? <img src = {noImage} alt = "poster" style = {{width: "100%"}} /> : <img src = {`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt = "poster" style = {{width: "100%"}} />}
                </div>
                <div className = "col s12 m8">
                    <div className = "info-container">
                        <h1 className = "card-title">{props.currentMovie.title}</h1>
                        <p className = "movie-popularity pulse">{props.currentMovie.popularity}</p>
                        <p className = "movie-release">Release date: <span>{props.currentMovie.release_date.substr(0, 4)}</span></p>
                        <p>{props.currentMovie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;