import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom'
import { movieContext } from '../../../contexts/movieContext';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 300
  }
};

const MediaCard = props => {
  const { classes } = props;
  return (
    <movieContext.Consumer>
      {value => 
      <Card className={classes.card}>
          <Link to='/moviedetail' onClick={()=> value.detailMovie(props.movie)}>
              <CardActionArea>
                  <CardMedia
                      className={classes.media}
                      image={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
                      title="Contemplative Reptile"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      {props.movie.original_title}
                  </Typography>
                  <Typography component="p">
                      {props.movie.overview}
                  </Typography>
                  </CardContent>
              </CardActionArea>
          </Link>
          <CardActions>
              <Button size="small" color="primary" onClick={()=> value.addToCart(props.movie)}>
                  <i className="fas fa-shopping-cart"></i> Add cart
              </Button>
              <Link to='/moviedetail'>
              <Button size="small" color="primary" onClick={()=> value.detailMovie(props.movie)}>
                  <i className="fas fa-info-circle"></i> Details...
              </Button>
              </Link>
          </CardActions>
      </Card>
    }
    </movieContext.Consumer>
    );
};

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
