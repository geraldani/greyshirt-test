import React, {Fragment} from 'react'
import Title from "./utilidades/Title";
import Buttom from "./utilidades/Buttom";

const List = (props) => {
    return (
        <div className='container'>
            <div className='row m-0'>
                <div className='col-12'>
                    <Title name="Listado de deliveries">
                        <Buttom class='btn-primary' onclick={props.onclick} name='Crear nuevo delivery'/>
                    </Title>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            {
                                props.col.colContent.map((elem, index) => (
                                    <th scope="col">{elem.title}</th>
                                ))
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            props.data.map((elem, index) => (
                                <tr key={elem.id}>
                                    <td>{elem.name}</td>
                                    <td>{elem.direction}</td>
                                    <td>{elem.number}</td>
                                    <td>
                                        <Buttom class='btn-danger' name='Eliminar'
                                                onclick={() => {
                                                    props.onDelete(elem.id)
                                                }}
                                        />
                                        <Buttom class='btn-primary' name='Editar'
                                                onclick={() => {
                                                    props.onModify(elem.id)
                                                }}
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default List;
