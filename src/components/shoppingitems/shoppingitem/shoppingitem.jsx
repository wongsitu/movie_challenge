import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { movieContext } from '../../../contexts/movieContext'

const styles = theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        width: 200,
        flex: '1 0 auto',
    },
    cover: {
        height: 380,
        width: 300,
    },
});

function MediaControlCard(props) {
    const { classes } = props;

    return (
    <movieContext.Consumer>
        {value =>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
                    title="Live from space album cover"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {props.movie.original_title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            <div>
                                Popularity: {props.movie.popularity}
                            </div>
                            <div>
                                Release date: {props.movie.release_date}
                            </div>
                            <div>
                                Rotten Tomatoes {props.movie.vote_average}
                            </div>
                            <div>
                                Votes: {props.movie.vote_count}
                            </div>
                            <div>
                                Price: <strong className='text-success'>{2 * parseInt(props.movie.vote_average)} USD</strong>
                            </div>
                        </Typography>
                    </CardContent>
                    <div className='m-auto p-3'>
                        <Link to='/moviedetail'>
                            <Button className='mr-2' variant="contained" onClick={()=> value.detailMovie(props.movie)} color="primary">
                                Details
                            </Button>
                        </Link>
                        <Button variant="contained" color="secondary" onClick={()=> value.removeFromCart(props.movie)} className={classes.button}>
                            Remove
                        </Button>
                    </div>
                </div>
            </Card>}
    </movieContext.Consumer>
    );
}

MediaControlCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);