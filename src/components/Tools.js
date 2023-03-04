import React from 'react'
import AddNew from './AddNew'
import './Tools.css'


function Tools(props) {
    const { onAction, labelValue, onAddFunc ,handleRefresh,count} = props
  


  

  

    return (

        <div className="list-tools">
            <div className="list-header">
                <select value={labelValue} onChange={onAction} name="status">
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="non-active">Non Active</option>
                </select>

                <button className="refresh-button" onClick={handleRefresh}> Refresh</button>
                <AddNew onAddFunc={onAddFunc} />

            </div>
            {props.children}
            <div className="list-footer">
                Some Info Here {count} Items


            </div>
            <br />
        </div>
    )
}

export default Tools