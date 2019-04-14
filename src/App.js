import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'
import  Homepage  from './components/pages/homepage/hompage'
import  Moviedetail  from './components/pages/moviedetail/moviedetail'
import  ShoppingCart  from './components/pages/shoppingcart/shoppingcart'
import Navbar from './components/navbar/navbar'
import axios from 'axios'

const UserContext = React.createContext()
const MovieContext = React.createContext()
class App extends Component {
  constructor () {
    super()

    this.state = {
      movies: [],
      genres:[],
      selectedGenres: [],
      selectedMovies: [],
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

  addOrRemoveToCart = (movie) => {
    if (!this.state.selectedMovies.includes(movie)) {
      let array = this.state.selectedMovies;
      array.push(movie);
      this.setState({selectedMovies: array});
    } else {
      let array = this.state.selectedMovies;
      var index = array.indexOf(movie)
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({selectedMovies: array});
      }
    }
    console.log(this.state.selectedMovies)
  }

  componentDidMount () {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=eea80f47c877f72cbd8716b40d5c3935&language=en-US`)
      .then(response => {
        this.setState({ genres: response.data.genres });
      });
  }

  render() {
    return (
      <div>
        <Navbar handleSearch={this.handleSearch} genres={this.state.genres} toggleGenre={this.toggleGenre} counter={this.state.selectedMovies.length}/>
        <Switch>
          <Route path='/' exact render={() => {return (
            <UserContext.Provider value={this.addOrRemoveToCart}>
              <Homepage movies={this.state.movies} addOrRemoveToCart={this.addOrRemoveToCart}/>
            </UserContext.Provider>
            )}}/>
          <Route path='/moviedetail' exact render={()=>{return(<Moviedetail/>)}} />
          <MovieContext.Provider>
            <Route path='/shoppingcart' exact render={()=>{return(<ShoppingCart movies={this.state.selectedMovies} genres={this.state.genres}/>)}} />
          </MovieContext.Provider>
        </Switch>
      </div>
    );
  }
}

export default App;
