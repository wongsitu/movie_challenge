import React, { Component } from 'react';
import './shoppingcart.css';
import EmptyCases from '../../emptycases/emptycases'
import Shoppingitems from '../../shoppingitems/shoppingitems'

class Shoppingcart extends Component {
    constructor(props){
        super(props)

        this.state ={

        }
    }

    render() {
        let movieCart;
        console.log(this.props.movies)
        if(this.props.movies.length === 0){
            return (
                <div className="container">
                    <EmptyCases/>
                </div>
            )
        } else {
            movieCart = 
            <div>
                <h1>Your movies</h1>
                <Shoppingitems movies={this.props.movies} genres={this.props.genres}/>
            </div>
        }
        return (
            <div className='container'>
                {movieCart}
            </div>
        );
    }
}

export default Shoppingcart;