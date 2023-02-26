import React from 'react'

import './Label.css'

function Label(props) {
    const customStyle = props.isActive ? { background: 'green' } : { background: 'orange' }
    return (

        <span onClick={()=>{props.onAction()}} className="list-label-item" style={customStyle}>{props.sActive?'Active':'Non Active'}</span>

    )
}

export default Label