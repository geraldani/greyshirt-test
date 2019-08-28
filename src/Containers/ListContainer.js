import React, {Component, Fragment} from 'react'
import List from "../Components/List";
import uuid from 'react-uuid';

class ListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {id: uuid(), name: 'Geraldyn', direction: 'av. vidal 2828, belgrano', phone: '+5491173646494'},
                {id: uuid(), name: 'Bar BQ', direction: 'calle 4511 nro 28, Palermo', phone: '+5465654'},
                {id: uuid(), name: 'El galpon de jose', direction: 'calle 74 nro 874, La Pampa', phone: '+9654751251'},
                {id: uuid(), name: 'Fanaticos de Asado', direction: 'calle 87 nro 74, La Plata', phone: '+8746521216'},
            ],
            columns: {
                pageSize: 500,
                cols: 4,
                colContent: [
                    {title: 'Nombre', order: true},
                    {title: 'Dirección', order: true},
                    {title: 'Teléfono', order: false},
                    // {title: '', order: false,content:'acciones'},
                ]
            }
        }
    }

    onclick = e => {
        this.props.history.push({pathname: '/add'})
    }

    render() {
        return (
            <Fragment>
                <List data={this.state.data}
                      col={this.state.columns}
                      onclick={this.onclick}/>
            </Fragment>
        )
    }
}

export default ListContainer;