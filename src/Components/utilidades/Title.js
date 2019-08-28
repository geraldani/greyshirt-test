import React, {Fragment} from 'react'

const Title = (props) => (
    <div className='d-flex align-items-center justify-content-between border-bottom mb-4'>
        <h3 className='mt-4 ml-3 mr-3'>{props.name}</h3>
        {
            props.children
        }
    </div>
)

export default Title;