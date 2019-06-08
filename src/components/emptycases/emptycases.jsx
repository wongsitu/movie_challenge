import React from "react";

const EmptyCases = props => {
  let emptyCase;
  if (props.type === "availability") {
    emptyCase = (
      <div>
        <h1> No movies found</h1>
      </div>
    );
  } else {
    emptyCase = (
      <div className="d-flex justify-content-center mt-5">
        <div className="d-flex flex-column">
          <h1> No movies in your cart</h1>
          <img className="m-auto" width="200" src="movieicon.png" alt="" />
        </div>
      </div>
    );
  }
  return <div>{emptyCase}</div>;
};

export default EmptyCases;
