import React, { Component } from 'react';
import './hompage.css';
import Cards from '../../cards/cards'

import axios from 'axios';

class Homepage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      homeMovies:[]
    }
  }

  componentDidMount = () => {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=eea80f47c877f72cbd8716b40d5c3935&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .then(response => {
      this.setState({ homeMovies: response.data.results });
    });
  }

  render() {
    if(this.props.movies.length > 0){
      return (
        <div className="container">
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