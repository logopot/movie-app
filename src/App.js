import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Nav from './Components/Nav/Nav';
import Search from './Components/Search/Search';
import MovieList from './Components/MovieList/MovieList';
import Pagination from './Components/Pagination/Pagination';
import MovieInfo from './Components/MovieInfo/MovieInfo';

// const element = <FontAwesomeIcon icon={faCoffee} />

class App extends Component  {
  constructor () {
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
    }

    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({movies: [...data.results], totalResults: data.total_results})
    })
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({movies: [...data.results], currentPage: pageNumber})
    })
  }

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id)

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

    this.setState({ currentMovie: newCurrentMovie})
  }

  closeMovieInfo = () => {
    this.setState({currentMovie: null})
  }

  render () {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className="App">
        <Nav />
        { this.state.currentMovie == null ? 
              <div>
                <Search handleSubmit = {this.handleSubmit} handleChange = {this.handleChange}/>
                <MovieList viewMovieInfo = {this.viewMovieInfo} movies = {this.state.movies}/>
              </div> : <MovieInfo currentMovie = {this.state.currentMovie} closeMovieInfo = {this.closeMovieInfo} /> }
        
        { this.state.totalResults > 20 && this.state.currentMovie === null ? <Pagination pages = {numberPages} nextPage = {this.nextPage} currentPage = {this.state.currentPage}/> : '' }
      </div>
    );
  }
}

export default App;
