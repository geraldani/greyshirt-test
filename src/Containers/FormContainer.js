import React, {Component} from 'react'
import Form from "../Components/Form";
import uuid from "react-uuid";
import {connect} from 'react-redux';
import {addDelivery, updateDelivery} from "../Reducers/actions";

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.isError = false;
        this.state = {
            formData: !this.props.modify ?
                    {
                        id: '',
                        name: '',
                        description: '',
                        number: '',
                        speciality: '',
                        direction: '',
                        fromHour: '',
                        toHour: '',
                        nameAdm: '',
                        surnameAdm: '',
                        numberAdm: '',
                        emailAdm: '',
                        nameCom: '',
                        surnameCom: '',
                        numberCom: '',
                        emailCom: '',
                    } : this.props.dataForm[this.props.modify.index],
            length: !this.props.modify? {
                charactersEsp: 0,
                charactersDesc: 0,
            } : {
                charactersEsp:this.props.dataForm[this.props.modify.index].speciality.length,
                charactersDesc:this.props.dataForm[this.props.modify.index].description.length
            },
            checked: false,
            validation: {
                inputError: [],
                errorMessage: 'Campo Obligatorio'
            }
        }
        this.required = {
            name: true,
            description: true,
            number: true,
            speciality: false,
            direction: true,
            fromHour: true,
            toHour: true,
            nameAdm: true,
            surnameAdm: true,
            numberAdm: true,
            emailAdm: true,
            nameCom: false,
            surnameCom: false,
            numberCom: false,
            emailCom: false,
        }
    }

    handleChange = e => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value,
            },
            length: {
                charactersDesc: e.target.name === 'description' ? e.target.textLength : this.state.length.charactersDesc,
                charactersEsp: e.target.name === 'speciality' ? e.target.textLength : this.state.length.charactersEsp
            }
        })
    }

    handleCheck = () => {
        this.setState({
            checked: !this.state.checked,
        })
        this.required = {
            ...this.required,
            nameCom: !this.state.checked,
            surnameCom: !this.state.checked,
            numberCom: !this.state.checked,
            emailCom: !this.state.checked
        }
    };
    onCancel = () => {
        this.props.history.push({pathname: '/'})
    };

    onAccept = e => {
        e.preventDefault();
        this.isError = false;
        let array = [];
        for (let elem in this.required) {
            if (this.required[elem] && !this.state.formData[elem]) {//si el valor es obligatorio y si ese np campo esta lleno
                this.isError = true;
                array.push(elem)
            }
        }
        this.setState({
            validation: {
                ...this.state.validation,
                inputError: array
            }
        })
        if (!this.isError) {
            if (this.props.modify)
                this.props.dispatch(updateDelivery(this.state.formData, this.props.modify.index));
            else
                this.props.dispatch(addDelivery(this.state.formData, uuid()))
            this.props.history.push('/')
        }
    };

    render() {
        return (
            <Form
                req={this.required}
                validation={this.state.validation}
                onChangeForm={this.handleChange}
                data={this.state.formData}
                charaters={this.state.length}
                checked={this.state.checked}
                onCheck={this.handleCheck}
                oncancel={this.onCancel}
                onacept={this.onAccept}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataForm: state.data
    }
}
export default connect(mapStateToProps)(FormContainer);