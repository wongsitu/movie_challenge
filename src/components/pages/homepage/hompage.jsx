import React, { Component } from 'react';
import './hompage.css';
import Cards from '../../cards/cards'
import axios from 'axios';
import Chip from "@material-ui/core/Chip";

class Homepage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      homeMovies:[]
    }
  }

  removeFilter = (genre) =>{
    this.props.toggleGenre(genre)
  }

  componentDidMount = () => {
    document.title = 'Movie Challenge'
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=eea80f47c877f72cbd8716b40d5c3935&language=en-US&sort_by=popularity.desc&page=1')
    .then(response => {
      this.setState({ homeMovies: response.data.results });
    });
  }

  render() {
    let selectedGenres = this.props.selectedGenres.map((elem,index) => {
      return (
        this.props.genres.find( genreAvailable => genreAvailable.id === elem )
      )
    })
    let selectedGenresChips = selectedGenres.map((elem,index) => {
      return(
        <Chip
          key={index}
          className='m-1'
          label={elem.name}
          color="secondary"
          onDelete={()=>{this.removeFilter(elem.id)}}
          clickable
        />
      )
    })
    if(this.props.movies.length > 0){
      return (
        <div className="container">
          <div className='d-flex align-items-center'>
            <h1>Filters:</h1>
            <div>
              {selectedGenresChips}
            </div>
          </div>
          <Cards movies={this.props.movies}/>
        </div>
      );
    } 
    return (
      <div className="container">
        <h1>New Releases</h1>
        <Cards movies={this.state.homeMovies}/>
      </div>
    );
  }
}

export default Homepage;