import React from 'react';
import "./utilidades.css"

function Buttom(props) {
    let type = 'button';
    if (props.type) type = props.type;
    return (
        <button type={type} className={`btn ${props.class}`} onClick={props.onclick}>
            {props.name}
        </button>
    );
}
export default Buttom;
