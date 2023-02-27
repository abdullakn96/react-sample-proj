import React from 'react'
import AddNew from './AddNew'
import './Tools.css'

function Tools(props) {
    const { onAction,labelValue,onAddFunc} = props
    const onlyChild = React.Children.only(props.children)
    const childrencount = React.Children.count(onlyChild.props.children)
    return (

        <div className="list-tools">
            <div className="list-header">
                <select value={labelValue} onChange={onAction} name="status">
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="non-active">Non Active</option>
                </select>
                <AddNew  onAddFunc={onAddFunc} />

            </div>
            {props.children}
            <div className="list-footer">
                Some Info Here {childrencount} Items


            </div>
            <br />
        </div>
    )
}

export default Tools