import React, {Component} from 'react'
import Form from "../Components/Form";
import uuid from "react-uuid";
import {connect} from 'react-redux';
import {addDelivery} from "../Reducers/actions";

class FormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
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
            },
            length: {
                charactersEsp: 0,
                charactersDesc: 0,
            },
            checked: false,
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
    };
    handleCheck = e => {
        this.setState({
            checked: !this.state.checked
        })
    };
    onCancel = e => {
        this.props.history.push('/')
    };
    onAccept = e => {
        e.preventDefault();
        this.props.dispatch(addDelivery(this.state.formData, uuid()))
        this.props.history.push('/')

    };
    render() {
        return (
            <Form
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
        dataForm: state.formData
    }
}
export default connect(mapStateToProps)(FormContainer);