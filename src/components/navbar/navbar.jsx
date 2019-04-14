import React, { Component } from 'react';
import './navbar.css';
import { Link, Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

class Navbar extends Component {
    constructor (props) {
        super()
        this.state ={
            redirect: false
        }
    }

    handleInput = (e) => {
        this.props.handleSearch(e.target.value)
    }

    addGenre = (genre) => {
        this.props.toggleGenre(genre)
    }

    render() {
        let ChipGenres = this.props.genres.map(genre => {
            return (
                <Chip
                    key={genre.id}
                    className='m-1'
                    label={genre.name}
                    clickable
                    color="primary"
                    onClick={() => {this.addGenre(genre.id)}}
                />
            )
        })
        return (
            <div className='container'>
                <div className='col-12 bg-dark pt-3 pb-3'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className='mr-3 ml-3' width='100' src="moviedb.svg" alt=''/>
                        <Link to='/' className='mr-3 ml-3' href="#">
                            <h5 className='text-white'>
                                Home <i className="fas fa-home"></i>
                            </h5>
                        </Link>
                        <Link to='/shoppingcart' className='mr-3 ml-3' href="#">
                            <h5 className='text-white'>
                                Shopping Cart 
                                <Badge badgeContent={this.props.counter} color="primary">
                                    <i className="fas fa-shopping-cart"></i>
                                </Badge>
                            </h5>
                        </Link>
                    </div>
                </div>
                <div className="col-12 bg-dark pt-3 pb-3 separator-top">
                    <div className='container'>
                        <div className='d-flex align-items-center'>
                            <h5 className='text-white d-flex align-items-center mr-2'>Select movie genres:</h5>
                            <div>
                                {ChipGenres}
                            </div>
                        </div>
                    </div>
                </div>
                <TextField
                    id="standard-full-width"
                    placeholder="Search your favourite movies"
                    fullWidth
                    name='query'
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.handleInput}
                />
            </div>
        );
    }
}

export default Navbar;