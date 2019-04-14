import React, { Component } from 'react';
import './moviedetail.css';
import { Redirect } from 'react-router-dom'
import UserActions from '../../useractions/useractions'
class Moviedetail extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }

    reportDeletedMovie = (movie) => {
        this.props.removeFromCart(movie)
		}
		
		reportAddtoCart = (movie) => {
			this.props.addToCart(movie)
		}

    render() {
        if (this.props.selectedMovie.length === 0){
            return(<Redirect to='/'/>)
				}
        
        return (
            <div className='container'>
                <div className='p-4'>
                    <div className='row'>
                        <div className='col-4'>
                            <img className='img-fluid' src={`https://image.tmdb.org/t/p/w500${this.props.selectedMovie.poster_path}`} alt=""/>
                        </div>
                        <div className='col-8'>
                            <h1>{this.props.selectedMovie.original_title}</h1>
                            <p>{this.props.selectedMovie.overview}</p>
                            <p>Released: {this.props.selectedMovie.release_date}</p>
                            <p>Popularity: {this.props.selectedMovie.popularity}</p>
                            <p>Rotten tomatoes: {this.props.selectedMovie.vote_average}</p>
                            <p>Total votes: {this.props.selectedMovie.vote_count}</p>
                            <UserActions selectedMovie={this.props.selectedMovie} selectedMovies={this.props.selectedMovies} removeFromCart={this.props.removeFromCart} addToCart={this.props.addToCart}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Moviedetail;