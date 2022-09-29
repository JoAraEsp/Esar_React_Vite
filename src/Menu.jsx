import React from "react";
import './Menu.css';

function Menu(props){
    return(
        <div className="container">
            <div className="subcontainer">
                <div className="logo">
                    {props.title}
                </div>
                
                <div className="actions">
                    <button className="button btn-blue">Ver habitaciones</button>
                </div>
            </div>
        </div>
    )
}

export default Menu;