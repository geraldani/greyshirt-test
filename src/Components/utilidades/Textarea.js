import React, {Fragment} from 'react'
import Label from "./Label";

const Textarea = (props) => (
    <Fragment>
        <Label
            name={props.name}
            style={props.style}
            nombre={props.nombre}
            req={props.req} />
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