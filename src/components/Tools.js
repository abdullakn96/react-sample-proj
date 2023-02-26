import React from 'react'
import './Tools.css'

function Tools(props) {
    const { onAction } = props
    const onlyChild = React.Children.only(props.children)
    const childrencount = React.Children.count(onlyChild.props.children)
    return (

        <div className="list-tools">
            <div className="list-header">
                <select onChange={onAction} name="status">
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="non-active">Non Active</option>
                </select>

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