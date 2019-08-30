import React from 'react'

const ErrorBadge = props =>
    <div className="invalid-tooltip pb-0 pt-0" style={{top:`${props.position}px`}}>
        <small>{props.message}</small>
    </div>




export default ErrorBadge;