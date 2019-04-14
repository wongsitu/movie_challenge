import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class UserActions extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {};

  reportToAddCart = movie => {
    this.props.addToCart(movie);
  };

  reportRemoveFromCart = movie => {
    this.props.removeFromCart(movie);
  };

  render() {
    let UserActions = (
      <Button
        className="mr-2"
        variant="contained"
        onClick={() => this.reportToAddCart(this.props.selectedMovie)}
        color="primary"
      >
        Add to Cart
      </Button>
    );
    this.props.selectedMovies.forEach(elem => {
      if (elem.id === this.props.selectedMovie.id) {
        return (UserActions = (
          <Button
            className="mr-2"
            variant="contained"
            onClick={() => this.removeFromCart(this.props.selectedMovie)}
            color="secondary"
          >
            Remove
          </Button>
        ));
      }
    });
    return <div>{UserActions}</div>;
  }
}

export default UserActions;
