import React from 'react'
import Textarea from "./utilidades/Textarea";
import Input from "./utilidades/Input";
import Title from "./utilidades/Title";
import FieldComponent from "./utilidades/FieldComponent";
import Label from "./utilidades/Label";
import Buttom from "./utilidades/Buttom";

const Form = (props) => {
    const {direction} = props.data;
    const formField = {
        input1:
            [
                {showName: 'Nombre', name: 'name', type: 'text', length: 50, required: true},
                {showName: 'Teléfono', name: 'number', type: 'text', length: 50, required: true},
            ],
        input2:
            [
                {showName: 'Especialidad', name: 'speciality', length: 500, required: false, char: 'charactersEsp'},
                {showName: 'Descripción', name: 'description', length: 1000, required: true, char: 'charactersDesc'},
            ],
        input3:
            [
                {name: 'fromHour', type: 'time', required: true, clas: 'pl-0'},
                {name: 'toHour', type: 'time', required: true, clas: 'pr-0'},
            ]
    }

    return (
        <div className='container'>
            <div className='row m-0'>
                <div className='col-12'>
                    <form>
                        <div className="form-row">
                            <div className="col-12">
                                <Title name="Datos administrativos"/>
                            </div>
                        </div>
                        <div className="form-row">
                            {
                                formField.input1.map((val, index) => (
                                    <div className="form-group col-md-6 mb-0" key={index}>
                                        <Input
                                            type={val.type} name={val.name}
                                            req={val.required} value={props.data[val.name]}
                                            onChange={props.onChangeForm}
                                            length={val.length} nombre={val.showName}
                                        />
                                    </div>
                                ))
                            }
                        </div>

                        <div className="form-row">
                            {
                                formField.input2.map((val, index) => (
                                    <div className="form-group col-md-6" key={index}>
                                        <Textarea
                                            name={val.name}
                                            onChange={props.onChangeForm}
                                            value={props.data[val.name]} req={val.required}
                                            length={val.length} nombre={val.showName}
                                            char={props.charaters[val.char]}/>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6 mb-0">
                                <Input
                                    type='text' name='direction'
                                    req={true} value={direction}
                                    onChange={props.onChangeForm}
                                    length={200} nombre="Dirección"
                                />
                            </div>

                            <div className="form-group col-md-6 mb-0">
                                <Label name='fromHour' style={{display: 'block'}} nombre='Horario de atencion'
                                       req={true}/>
                                <span style={{position: 'absolute', bottom: '30px', left: '49%'}}>a</span>
                                {
                                    formField.input3.map((val, index) => (
                                        <div className={`col-md-6 ${val.clas}`} style={{display: 'inline-block'}}
                                             key={index}>
                                            <Input
                                                type={val.type} name={val.name}
                                                req={val.required}
                                                onChange={props.onChangeForm}
                                                value={props.data[val.name]}
                                                showLabel={false}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="form-row">
                            {/* CONTACTO ADMINISTRATIVO*/}
                            <FieldComponent name='Adm'
                                            onChange={props.onChangeForm}
                                            values={props.data}
                                            req={true}
                                            style={{marginTop: 'calc(25px + 1.5rem)'}}>
                                <Title name="Contacto Administrativo"/>
                            </FieldComponent>

                            {/* CONTACTO COMERCIAL*/}
                            <FieldComponent name='Com'
                                            onChange={props.onChangeForm}
                                            values={props.data}
                                            req={props.checked}>
                                <Title name="Contacto Comercial"/>
                                <div className="custom-control custom-checkbox mb-4">
                                    <input type="checkbox"
                                           className="custom-control-input"
                                           id="checkId"
                                           checked={props.checked}
                                           onChange={props.onCheck}/>

                                    <label className="custom-control-label" htmlFor="checkId">Idem contacto
                                        administrativo</label>
                                </div>
                            </FieldComponent>
                        </div>

                        <small className="form-text text-muted"> (<span className="text-danger">*</span>)
                            Dato oblidatorio
                        </small>

                        <div className='d-flex justify-content-end'>
                            <Buttom onclick={props.oncancel} class='btn-secondary mr-2' name='Cancelar'/>
                            <Buttom type='submit' onclick={props.onacept} class='btn-primary' name='Guardar'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Form;