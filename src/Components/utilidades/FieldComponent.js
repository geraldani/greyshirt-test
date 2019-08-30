import React from 'react'
import Input from "./Input";
import ErrorBadge from "./ErrorBadge";

const FieldComponent = (props) => {
    const fieldsForm = [
        {showName: 'Nombre', name: 'name', type: 'text', length: 200},
        {showName: 'Apellido', name: 'surname', type: 'text', length: 200},
        {showName: 'Teléfono', name: 'number', type: 'text', length: 100},
        {showName: 'E-mail', name: 'email', type: 'email', length: 100}
    ]
    const isError = elem => props.inputError && props.inputError[props.inputError.indexOf(elem)] === elem;
    return (
        <div className="form-group col-md-6 mb-0">
            {props.children}
            {
                fieldsForm.map((val, index) => {
                    let newName =`${val.name}${props.name}`;
                    let err = isError(newName);
                    return (
                        <div className='position-relative' key={index}>
                            <Input
                                type={val.type}
                                name={newName}
                                req={props.req[newName]}
                                value={props.values[newName]}
                                clas={err ? 'is-invalid' : ''}
                                onChange={props.onChange}
                                length={val.length}
                                nombre={val.showName}
                                style={index === 0 ? props.style : {}}
                                key={index}
                            />
                            {err &&
                            <ErrorBadge message={props.errorMessage} position={props.name=== 'Adm' ? index===0 ? '117' : '68' : '68'}/>}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default FieldComponent;