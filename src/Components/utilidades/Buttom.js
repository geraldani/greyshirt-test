import React from 'react';
import "./utilidades.css"

function Buttom(props) {
    return (
        <button type="button" className={`btn ${props.class}`} onClick={props.onclick}>
            {props.name}
        </button>
    );
}

export default Buttom;
