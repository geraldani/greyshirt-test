import React, {Component} from 'react'
import Title from "./utilidades/Title";
import Buttom from "./utilidades/Buttom";
import Pagination from "./utilidades/Pagination";
import {connect} from "react-redux";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfPages: 0,
            currentPage: 1,
            rangeFrom: 1,
            rangeTo: this.props.col.pageSize
        };
    }
    fillPages = () => {
        const maxPerPage = this.props.col.pageSize;
        const maxElements = this.props.data.length;
        const mod = maxElements % maxPerPage;
        let numberOfPage = Math.floor(maxElements / maxPerPage);
        if (mod > 0)
            numberOfPage++;
        this.setState({
            numberOfPages: numberOfPage,
        });
        if (this.state.currentPage > numberOfPage) {
            this.setState({
                currentPage: numberOfPage,
            });
            this.changePage(numberOfPage);
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.data.length !== prevProps.data.length) {
            this.fillPages();
        }
    }
    componentWillMount() {
        this.fillPages()
    }
    changePage = (pageNumber) => {
        let to = pageNumber * this.props.col.pageSize;
        let from = to - this.props.col.pageSize + 1;
        this.setState({
            currentPage: pageNumber,
            rangeFrom: from,
            rangeTo: to
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='row m-0'>
                    <div className='col-12'>
                        <Title name={this.props.col.name}>
                            {this.props.col.titleChildren}
                        </Title>
                        {
                            this.props.data.length > this.props.col.pageSize &&
                            <Pagination maxPages={this.state.numberOfPages} onclick={this.changePage}
                                        currentPage={this.state.currentPage}/>
                        }
                        <table className="table table-bordered table-striped table-sm mb-6">
                            <thead>
                            <tr>
                                {
                                    this.props.col.thContent.map((elem, i) => (
                                        <th scope="col" key={i} >{elem.title}</th>
                                    ))
                                }
                                {
                                    this.props.col.showButtons &&
                                    <th scope="col"/>
                                }
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.data.map((elem, index) => {
                                    if (index <= this.state.rangeTo - 1 && index >= this.state.rangeFrom - 1)
                                        return (
                                            <tr key={elem.id}>{
                                                this.props.col.thContent.map((data, index) => (
                                                    <td key={index}>{elem[data.field]}</td>
                                                ))}
                                                {this.props.col.showButtons &&
                                                <td  className='d-flex justify-content-center align-items-center'>
                                                    <Buttom class='btn-danger mr-2' name='Eliminar'
                                                            onclick={() => {
                                                                this.props.onDelete(elem.id)
                                                                // this.fillPages()
                                                            }}
                                                    />
                                                    <Buttom class='btn-primary' name='Editar'
                                                            onclick={() => {
                                                                this.props.onModify(elem.id)
                                                            }}
                                                    />
                                                </td>}
                                            </tr>)
                                })
                            }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}
export default connect(mapStateToProps)(List);
