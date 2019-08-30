import React from 'react'
import Title from "./utilidades/Title";
import Buttom from "./utilidades/Buttom";

const List = (props) => {
    return (
        <div className='container'>
            <div className='row m-0'>
                <div className='col-12'>
                    <Title name={props.col.name}>
                        {props.col.titleChildren}
                    </Title>
                    <table className="table table-bordered table-striped table-sm">
                        <thead>
                        <tr>
                            {
                                props.col.thContent.map((elem,i) => (
                                    <th scope="col" key={i}>{elem.title}</th>
                                ))
                            }
                            {
                                props.col.showButtons &&
                                <th scope="col"/>
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            props.data.map((elem) => (
                                <tr key={elem.id}>
                                    {
                                        props.col.thContent.map((data, index) => (
                                            <td key={index}>{data.content(elem)}</td>
                                        ))}
                                    {
                                        props.col.showButtons &&
                                        <td className='d-flex justify-content-center align-items-center'>
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
                                    }
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
