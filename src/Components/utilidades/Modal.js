import React, {Fragment, Component} from 'react';
import {createPortal} from 'react-dom';
import Buttom from "./Buttom";

const ModalDesign = props => (
    <Fragment>
        <div className='modal-container'>
            <div className="modal-dialog my-modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Alerta de Confirmación</h5>
                    </div>
                    <div className="modal-body">
                        ¿Esta seguro que desea eliminar "{props.data.name}"?
                    </div>
                    <div className="modal-footer">
                        <Buttom class='btn-secondary' name='Cancelar' onclick={props.onCancel}/>
                        <Buttom class='btn-primary' name='Confirmar' onclick={props.onAccept}/>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
)


class Modal extends Component {
    render() {
        return (
            createPortal(
                <ModalDesign data={this.props.data}
                             onCancel={this.props.onCancel}
                             onAccept={this.props.onAccept}/>,
                document.getElementById('modal-container')
            )
        )
    }
}

export default Modal;