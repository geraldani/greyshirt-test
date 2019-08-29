import React, {Component, Fragment} from 'react'
import List from "../Components/List";
import Modal from "../Components/utilidades/Modal";
import {connect} from "react-redux";
import {deleteDelivery} from "../Reducers/actions";

class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: -1,
            showModal: false,
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
        this.indice = -1;
    }
    onclick = e => {
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
        // this.props.dispatch(updateDelivery(this.props.allData[this.indice]))
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
                      onclick={this.onclick}/>
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
        allData: state.data
    }
}
export default connect(mapStateToProps)(ListContainer);