import React, {Fragment} from 'react'
import Input from "./Input";
import Title from "./Title";

const FieldComponent = (props) => (
    <Fragment>
        <div className="form-group col-md-6 mb-0">
            {props.children}
            {
                props.show &&
                <Fragment>
                    <Input
                        type='text' name={`name${props.name}`}
                        req={true} value={props.values[`name${props.name}`]}
                        onChange={props.onChange}
                        length={200} nombre="Nombre"
                        style={props.style}
                    />
                    <Input
                        type='text' name={`surname${props.name}`}
                        req={true} value={props.values[`surname${props.name}`]}
                        onChange={props.onChange}
                        length={200} nombre="Apellido"
                    />
                    <Input
                        type='number' name={`number${props.name}`}
                        req={true} value={props.values[`number${props.name}`]}
                        onChange={props.onChange}
                        length={100} nombre="Teléfono"
                    />
                    <Input
                        type='email' name={`email${props.name}`}
                        req={true} value={props.values[`email${props.name}`]}
                        onChange={props.onChange}
                        length={100} nombre="E-mail"
                    />
                </Fragment>
            }
        </div>

    </Fragment>
)

export default FieldComponent;