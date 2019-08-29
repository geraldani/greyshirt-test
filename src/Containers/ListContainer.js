import React, {Component, Fragment} from 'react'
import List from "../Components/List";
import uuid from 'react-uuid';
import Modal from "../Components/utilidades/Modal";

class ListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            index: -1,
            data: [
                {id: uuid(), name: 'Geraldyn', direction: 'av. vidal 2828, belgrano', number: '+5491173646494'},
                {id: uuid(), name: 'Bar BQ', direction: 'calle 4511 nro 28, Palermo', number: '+5465654'},
                {id: uuid(), name: 'El galpon de jose', direction: 'calle 74 nro 874, La Pampa', number: '+9654751251'},
                {id: uuid(), name: 'Fanaticos de Asado', direction: 'calle 87 nro 74, La Plata', number: '+8746521216'},
            ],
            columns: {
                pageSize: 500,
                cols: 4,
                colContent: [
                    {title: 'Nombre', order: true},
                    {title: 'Dirección', order: true},
                    {title: 'Teléfono', order: false},
                    {title: '', order: false, content: 'acciones'},
                ]
            }
        }
    }

    onclick = e => {
        this.props.history.push({pathname: '/add'})
    };

    onDelete = () => {
        this.state.data.splice(this.state.index, 1);
        this.setState({
            data: this.state.data,
            showModal: false,
        });
    };

    findIndex = id => {
        let index = -1;
        this.state.data.forEach((val, i) => {
            if (val.id === id)
                index = i;
        });
        return index;
    };

    onModify = id => {
        let index = this.findIndex(id)
    };

    showModal = id => {
        this.setState({
            showModal: true,
            index: this.findIndex(id)
        })
    };

    onCancel = () => {
        this.setState({
            showModal: false,
        })
    };

    render() {
        return (
            <Fragment>
                <List data={this.state.data}
                      col={this.state.columns}
                      onDelete={this.showModal}
                      onModify={this.onModify}
                      onclick={this.onclick}/>
                {
                    this.state.showModal &&
                    <Modal
                        data={this.state.data[this.state.index]}
                        onAccept={this.onDelete}
                        onCancel={this.onCancel}
                    />
                }
            </Fragment>
        )
    }
}

export default ListContainer;