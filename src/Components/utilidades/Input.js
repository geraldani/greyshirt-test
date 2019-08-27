import React, {Fragment} from 'react'

const Input = (props) => (
    <Fragment>
        <label htmlFor={props.name + 'Id'}>{props.nombre}
            {
                props.req &&
                <span className="text-danger">*</span>
            }
        </label>
        <input
            type={props.type}
            className="form-control"
            id={props.name + 'Id'}
            value={props.type === 'number' ? props.value === 0 ? null : props.value : props.value}
            name={props.name}
            onChange={props.onChange}
            required={props.req}
            maxLength={props.length}/>
    </Fragment>
)


export default Input;