import React from 'react'
import Textarea from "./utilidades/Textarea";
import Input from "./utilidades/Input";
import Title from "./utilidades/Title";

const Form = (props) => {
    const {
        name, description, number, speciality, direction,
        fromHour, toHour, nameAdm, surnameAdm, numberAdm, emailAdm,
        nameCom, surnameCom, numberCom, emailCom
    } = props.data;
    const {charactersEsp, charactersDesc} = props.charaters;

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
                            <div className="form-group col-md-6">
                                <Input
                                    type='text' name='name'
                                    req={true} value={name}
                                    onChange={props.onChangeForm}
                                    length={50} nombre="Nombre"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <Input
                                    type='number' name='number'
                                    req={true}
                                    value={number}
                                    onChange={props.onChangeForm}
                                    length={50} nombre="Teléfono"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <Textarea
                                    name='speciality'
                                    onChange={props.onChangeForm}
                                    value={speciality} req={false}
                                    length={500} nombre='Especialidad'
                                    char={charactersEsp}/>
                            </div>
                            <div className="form-group col-md-6">
                                <Textarea
                                    name='description'
                                    onChange={props.onChangeForm}
                                    value={description} req={true}
                                    length={1000} nombre='Descripción'
                                    char={charactersDesc}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <Input
                                    type='text' name='direction'
                                    req={true} value={direction}
                                    onChange={props.onChangeForm}
                                    length={200} nombre="Dirección"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="fromHour" style={{display: 'block'}}>Horario de atencion<span
                                    className="text-danger">*</span></label>
                                <div className="col-md-6 pl-0" style={{display: 'inline-block'}}>
                                    <input
                                        type="time"
                                        id="fromHour"
                                        className="form-control"
                                        required
                                        onChange={props.onChangeForm}
                                        name='fromHour'
                                        value={fromHour}/>
                                </div>
                                <span style={{position: 'absolute', bottom: '7px', left: '49%'}}>a</span>
                                <div className="col-md-6 pr-0" style={{display: 'inline-block'}}>
                                    <input
                                        type="time"
                                        id="toHour"
                                        className="form-control"
                                        required
                                        onChange={props.onChangeForm}
                                        name='toHour'
                                        value={toHour}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <Title name="Contacto Administrativo"/>
                                <Input
                                    type='text' name='nameAdm'
                                    req={true} value={nameAdm}
                                    onChange={props.onChangeForm}
                                    length={200} nombre="Nombre"
                                />
                                <Input
                                    type='text' name='surnameAdm'
                                    req={true} value={surnameAdm}
                                    onChange={props.onChangeForm}
                                    length={200} nombre="Apellido"
                                />
                                <Input
                                    type='number' name='numberAdm'
                                    req={true} value={numberAdm}
                                    onChange={props.onChangeForm}
                                    length={100} nombre="Teléfono"
                                />
                                <Input
                                    type='email' name='emailAdm'
                                    req={true} value={emailAdm}
                                    onChange={props.onChangeForm}
                                    length={100} nombre="E-mail"
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <Title name="Contacto Comercial"/>
                                <Input
                                    type='text' name='nameCom'
                                    req={true} value={nameCom}
                                    onChange={props.onChangeForm}
                                    length={200} nombre="Nombre"
                                />
                                <Input
                                    type='text' name='surnameCom'
                                    req={true} value={surnameCom}
                                    onChange={props.onChangeForm}
                                    length={200} nombre="Apellido"
                                />
                                <Input
                                    type='number' name='numberCom'
                                    req={true} value={numberCom}
                                    onChange={props.onChangeForm}
                                    length={100} nombre="Teléfono"
                                />
                                <Input
                                    type='email' name='emailCom'
                                    req={true} value={emailCom}
                                    onChange={props.onChangeForm}
                                    length={100} nombre="E-mail"
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-default">Send invitation</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Form;