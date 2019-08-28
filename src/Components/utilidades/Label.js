import React from 'react'

const Label = (props) => (
    <label htmlFor={`${props.name}Id`}style={props.style}>{props.nombre}
        {
            props.req &&
            <span className="text-danger">*</span>
        }
    </label>
)

export default Label;