import React, {Fragment} from 'react'

const Title = (props) => (
    <Fragment>
        <h3 className='mt-4 border-bottom mb-4'>{props.name}</h3>
    </Fragment>
)

export default Title;