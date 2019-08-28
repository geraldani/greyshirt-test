import React from 'react'
import Input from "./Input";

const FieldComponent = (props) => {
    const fieldsForm = [
        {showName: 'Nombre', name: 'name', type: 'text', length: 200},
        {showName: 'Apellido', name: 'surname', type: 'text', length: 200},
        {showName: 'Teléfono', name: 'number', type: 'number', length: 100},
        {showName: 'E-mail', name: 'email', type: 'email', length: 100}
    ]

    return (
        <div className="form-group col-md-6 mb-0">
            {props.children}
            {
                // props.show &&
                fieldsForm.map((val, index) => {
                    return (
                        <Input
                            type={val.type}
                            name={`${val.name}${props.name}`}
                            req={true}
                            value={props.values[`${val.name}${props.name}`]}
                            onChange={props.onChange}
                            length={val.length}
                            nombre={val.showName}
                            style={props.style}
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}

export default FieldComponent;