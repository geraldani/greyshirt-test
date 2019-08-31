import React from 'react';

const Pagination = (props) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className={`page-item ${(props.currentPage) === 1 ? 'disabled' : ''} `}>
                    <a className="page-link" onClick={() => {
                        props.onclick(props.currentPage -1 )
                    }}>Previous</a>
                </li>
                {
                    [...Array(props.maxPages)].map((e, index) =>
                        <li className={`page-item ${index + 1 === props.currentPage ? 'active' : ''} `}><a
                            className="page-link" onClick={() => {
                            props.onclick(index+1)
                        }}>{index + 1}</a></li>)
                }

                <li className={`page-item ${(props.currentPage) === props.maxPages ? 'disabled' : ''} `}>
                    <a className="page-link" onClick={() => {
                        props.onclick(props.currentPage + 1 )
                    }}>Next</a>
                </li>
            </ul>
        </nav>)
}
export default Pagination;