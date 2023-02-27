import React from 'react'

import './Label.css'

function Label(props) {
    const customStyle = props.isActive ? { background: 'green' } : { background: 'orange' }
    const labelValue=props.isActive?'active':'non-active'
    return (

        <span onClick={()=>{props.onLabelClick(labelValue)}} className = "list-label-item" style = { customStyle } >{labelValue}</span >

    )
}

export default Label