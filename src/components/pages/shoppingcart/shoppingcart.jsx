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

    componentDidMount = () => {
        this.props.resetDetailView()
    }

    render() {
        let movieCart;
        if(this.props.movies.length === 0){
            return (
                <div className="container">
                    <EmptyCases/>
                </div>
            )
        } else {
            let priceMovie = 0
            this.props.movies.forEach(element => {
                priceMovie = priceMovie + (2* parseInt(element.vote_average))
            });
            movieCart = 
            <div>
                <h1>Your movies</h1>
                <Shoppingitems movies={this.props.movies}/>
                <h2 className='mt-3'>Total Price: <span className='text-success'>{priceMovie} USD</span></h2>
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