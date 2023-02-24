import React from 'react'
import Label from './Label'
import './ListItem.css';

function ListItem() {
  return (
    <div className="list-item">
     
        <div className="list-title">
            <h4>My Title One</h4>
        </div>
        <div className="list-descr">
            This is Description
        </div>
        <div className="list-label">
            <Label/>
            <Label/>
            <Label/>
            
        </div>
       
    </div>
  )
}

export default ListItem