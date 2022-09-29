import React from "react";
import './Item.css';

function Item(props){
    return(
    <div className="item">
        <div className="image"><img src={'img/' + props.image} width="100%"></img></div>
        <div className="title">{props.title}</div>
        <div className="rating">
            <p>

            </p>
        </div>
    </div>
    )
}

export default Item;