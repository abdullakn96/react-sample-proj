import React from 'react'
import ListItem from './ListItem'


function SimpleList(props) {
    const { data, onDelete,onLabelClick} = props
    return (
        <div className="app-list">
            {
                data.map((obj, index) => {
                    return <ListItem key={index} onLabelClick={onLabelClick} onDelete={() => { onDelete(obj) }} title={obj.title} descr={obj.descr} isActive={obj.isActive} />
                })
            }

        </div>
    )
}

export default SimpleList