import React from 'react'
import Label from './Label'
import './ListItem.css';

function ListItem(props) {
  const { title, descr, isActive,onDelete} = props
  return (
    <div className="list-item">

      <div className="list-title">
        <h4>{title}</h4>
        <label onClick={onDelete}>Delete</label>
      </div>
      <div className="list-descr">
        {descr}
      </div>
      <div className="list-label">
        <Label onAction={()=>{console.log("this function passed from parent ListItem")}} isActive={isActive} />

      </div>

    </div>
  )
}

export default ListItem