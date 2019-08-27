import React, {Fragment} from 'react'

const Textarea = (props) => (
    <Fragment>
        <label htmlFor={props.name + 'Id'}>{props.nombre}
            {
                props.req &&
                (<span className="text-danger">*</span>)
            }
        </label>
        <textarea
            id={props.name + 'Id'}
            className="form-control"
            onChange={props.onChange}
            name={props.name}
            aria-describedby={props.name + 'Set'}
            value={props.value}
            maxLength={props.length}
            required={props.req}
        >
    </textarea>
        <small id={props.name + 'Set'} className="form-text text-muted">
            Restan {props.length - props.char} caracteres
        </small>
    </Fragment>
)


export default Textarea;