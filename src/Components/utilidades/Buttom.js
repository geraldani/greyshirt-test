import React from 'react';
import "./utilidades.css"

function Buttom(props) {
    return (
        <button type="button" className="btn btn-primary">
            {props.name}
        </button>
    );
}

export default Buttom;
