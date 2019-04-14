import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'
import  Homepage  from './components/pages/homepage/hompage'
import  Moviedetail  from './components/pages/moviedetail/moviedetail'
import  ShoppingCart  from './components/pages/shoppingcart/shoppingcart'
import Navbar from './components/navbar/navbar'
import axios from 'axios'
import { movieContext } from './contexts/movieContext'

class App extends Component {
  constructor () {
    super()

    this.state = {
      movies: [],
      genres:[],
      selectedGenres: [],
      selectedMovies: [],
      selectedMovie: [],
    }
    this.setState = this.setState.bind(this);
  }

  handleSearch = (query) => {
    clearTimeout();
    setTimeout(() => {
      axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=eea80f47c877f72cbd8716b40d5c3935`)
      .then(response => {
        this.setState({ movies: response.data.results });
      });
    },700);
  }

  searchbyFilter = () => {
    let params = this.state.selectedGenres.join('%2C')
    clearTimeout();
    setTimeout(() => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=eea80f47c877f72cbd8716b40d5c3935&with_genres=${params}`)
      .then(response => {
        this.setState({ movies: response.data.results });
      });
    },700);
  }

  toggleGenre = (genre) => {
    if (!this.state.selectedGenres.includes(genre)) {
      let array = this.state.selectedGenres;
      array.push(genre);
      this.setState({selectedGenres: array});
    } else {
      let array = this.state.selectedGenres;
      var index = array.indexOf(genre)
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({selectedGenres: array});
      }
    }
    console.log(this.state.selectedGenres)
    this.searchbyFilter()
  }

  addToCart = (movie) => {
    let array = this.state.selectedMovies;
    let movieIdsArray = []
    if (array.length === 0){
      array.push(movie);
    } else {
      array.forEach(elem =>{
        movieIdsArray.push(elem.id)
      })
      if(!movieIdsArray.includes(movie.id)){
        array.push(movie)
      }
    }
    this.setState({selectedMovies: array});
  }

  removeFromCart = (movie) => {
    let array = this.state.selectedMovies;
    let idx;
    array.forEach(elem => {
      if(elem.id === movie.id){
        idx = array.indexOf(elem)
        array.splice(idx,1)
      }
    })
    this.setState({selectedMovies: array});
  }

  resetDetailView = () =>{
    this.setState({
      selectedMovie: []
    })
  }

  detailMovie = (movie) => {
    this.setState({selectedMovie: movie})
  }

  componentDidMount () {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=eea80f47c877f72cbd8716b40d5c3935&language=en-US`)
      .then(response => {
        this.setState({ 
          genres: response.data.genres,
        });
      });
      this.resetDetailView()
  }

  render() {
    return (
      <div>
        <div>
          <Navbar handleSearch={this.handleSearch} genres={this.state.genres} toggleGenre={this.toggleGenre} counter={this.state.selectedMovies.length}/>
        </div>
        <Switch>
          <Route path='/' exact render={() => {return (
            <movieContext.Provider 
              value={
                { 
                  addToCart: this.addToCart,
                  detailMovie: this.detailMovie,
                }
              }>
              <Homepage movies={this.state.movies} genres={this.state.genres} selectedGenres={this.state.selectedGenres} toggleGenre={this.toggleGenre}/>
            </movieContext.Provider>
          )}}/>
          <Route path='/moviedetail' exact render={()=>{return(
            <Moviedetail selectedMovie={this.state.selectedMovie} selectedMovies={this.state.selectedMovies} removeFromCart={this.removeFromCart} addToCart={this.addToCart}/>
          )}} />
          <Route path='/shoppingcart' exact render={()=>{return(
            <movieContext.Provider
              value={
                { 
                  detailMovie: this.detailMovie,
                  removeFromCart: this.removeFromCart,
                }
              }>
            <ShoppingCart movies={this.state.selectedMovies} detailMovie={this.detailMovie} removeFromCart={this.removeFromCart} genres={this.state.genres} resetDetailView={this.resetDetailView}/>
            </movieContext.Provider>
          )}} />
        </Switch>
      </div>
    );
  }
}

export default App;
