import React, { Component } from 'react';
import './shoppingitems.css';
import MediaControlCard from './shoppingitem/shoppingitem'

class Shoppingitems extends Component {
    constructor (props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        let MediaControlCardContainer = this.props.movies.map((elem,index) => {
            return(
                <div className="m-2" key={index}>
                    <MediaControlCard movie={elem} key={index} addOrRemoveToCart={this.props.addOrRemoveToCart} genres={this.props.genres}/>
                </div>
            )
        })
        return (
            <div className="d-flex flex-wrap">
                {MediaControlCardContainer}
            </div>
        );
    }
}

export default Shoppingitems;