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

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

const MediaCard = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
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
        <CardActions>
            <Button size="small" color="primary" onClick={()=> props.addOrRemoveToCart(props.movie)}>
                <i className="fas fa-shopping-cart"></i> Add cart
            </Button>
            <Button size="small" color="primary">
                <i className="fas fa-info-circle"></i> Details...
            </Button>
        </CardActions>
    </Card>
    );
};

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);