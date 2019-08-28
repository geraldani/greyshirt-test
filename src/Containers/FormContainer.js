import React, {Component} from 'react'
import Form from "../Components/Form";

class FormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                name: '',
                description: '',
                number: 0,
                speciality: '',
                direction: '',
                fromHour: 0,
                toHour: 0,
                nameAdm: '',
                surnameAdm: '',
                numberAdm: 0,
                emailAdm: '',
                nameCom: '',
                surnameCom: '',
                numberCom: 0,
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
                // characters:e.target.name==='description' ? e.target.textLength : this.state.form.characters
            },
            length: {
                charactersDesc: e.target.name === 'description' ? e.target.textLength : this.state.length.charactersDesc,
                charactersEsp: e.target.name === 'speciality' ? e.target.textLength : this.state.length.charactersEsp
            }
        })
    }

    handleCheck = e => {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        return (
            <Form
                onChangeForm={this.handleChange}
                data={this.state.formData}
                charaters={this.state.length}
                checked={this.state.checked}
                onCheck={this.handleCheck}
            />
        )
    }
}

export default FormContainer;