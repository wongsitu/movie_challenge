import React from "react";

const EmptyCases = props => {
    let emptyCase;
    if (props.type === 'availability'){
        emptyCase =
        (<div>
            <h1> No movies found</h1>
        </div>)
    } else {
        emptyCase = 
        (<div>
            <h1> No movies in your cart</h1>
        </div>)
    }
    return (
            <div>
                {emptyCase}
            </div>
        );
    };

export default EmptyCases;