import React, { Component } from 'react';
import './cards.css';
import MediaCard from './card/card'

class Cards extends Component {
    constructor (props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        let CardsContainer = this.props.movies.map((elem,index) => {
            return(
                <div className="m-2" key={index}>
                    <MediaCard movie={elem} key={index} addOrRemoveToCart={this.props.addOrRemoveToCart}/>
                </div>
            )
        })
        return (
            <div className="d-flex flex-wrap">
                {CardsContainer}
            </div>
        );
    }
}

export default Cards;