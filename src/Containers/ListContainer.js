import React, {Component, Fragment} from 'react'
import List from "../Components/List";
import Modal from "../Components/utilidades/Modal";
import {connect} from "react-redux";
import {deleteDelivery} from "../Reducers/actions";
import Buttom from "../Components/utilidades/Buttom";

class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: -1,
            showModal: false,
            columns: {
                pageSize: 5,
                name:'Listado de deliveries',
                titleChildren: <Buttom class='btn-primary' onclick={this.onclick} name={'Crear nuevo delivery'}/>,
                showButtons:true,
                thContent: [
                    {title: 'Nombre', order: true, content: elem => elem.name},
                    {title: 'Dirección', order: true, content: elem => elem.direction},
                    {title: 'Teléfono', order: false, content: elem => elem.number},
                    // {title: 'Descripcion', order: false, content: elem => elem.description},
                ]
            }
        };
        this.indice = -1;
    }
    onclick = () => {
        this.props.history.push({pathname: '/add'})
    };
    onDelete = () => {
        this.props.dispatch(deleteDelivery(this.indice))
        this.setState({
            showModal: false
        })
    };
    findIndex = id => {
        let index = -1;
        this.props.allData.forEach((val, i) => {
            if (val.id === id)
                index = i;
        });
        return index;
    };
    onModify = id => {
        this.indice = this.findIndex(id);
        this.props.history.push({pathname: '/add', state: {index: this.indice}})
    };
    showModal = id => {
        this.setState({
            showModal: true,
        })
        this.indice = this.findIndex(id)
    };
    onCancel = () => {
        this.setState({
            showModal: false,
        })
    };
    render() {
        return (
            <Fragment>
                <List data={this.props.allData}
                      col={this.state.columns}
                      onDelete={this.showModal}
                      onModify={this.onModify}
                />
                {
                    this.state.showModal &&
                    <Modal
                        data={this.props.allData[this.indice]}
                        onAccept={this.onDelete}
                        onCancel={this.onCancel}/>
                }
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        allData: state.data,
    }
}
export default connect(mapStateToProps)(ListContainer);