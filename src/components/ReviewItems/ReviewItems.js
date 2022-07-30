import React from "react";

const ReviewItems= (props) => {
    const {name, price, shipping, quantity} = props.product;
    return(
        <div>
            <h1>This is a ReviewItems: {name}</h1>
        </div>
    );
};


export default ReviewItems;