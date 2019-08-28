import React, {Fragment} from 'react'
import Label from "./Label";

const Input = (props) => {
    let showLabel;
    props.showLabel === undefined ? showLabel = true : showLabel = props.showLabel;
    return (
        <Fragment>
            {
                showLabel &&
                <Label
                    name={props.name}
                    style={props.style}
                    nombre={props.nombre}
                    req={props.req}/>
            }
            <input
                type={props.type}
                className="form-control mb-4"
                id={`${props.name}Id`}
                value={props.type === 'number' ? props.value === 0 ? null : props.value : props.value}
                name={props.name}
                onChange={props.onChange}
                required={props.req}
                maxLength={props.length}/>
        </Fragment>)

}

export default Input;