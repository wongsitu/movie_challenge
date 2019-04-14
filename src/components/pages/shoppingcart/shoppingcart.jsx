import React, { Component } from 'react';
import './shoppingcart.css';
import EmptyCases from '../../emptycases/emptycases'

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
            movieCart = this.props.movies.map((element,index) => {
                return(
                    <div key={index}>
                        {element.original_title}
                    </div>
                );
            });
        }
        return (
            <div className='container'>
                {movieCart}
            </div>
        );
    }
}

export default Shoppingcart;