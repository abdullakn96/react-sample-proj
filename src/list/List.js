import React from 'react'
import Tools from '../components/Tools'
import ListItem from './ListItem'


const itemObj = [
    {
        'title': "Title of List Item 1",
        'descr': "Description of List Item 2",
        'isActive': true
    },
    {
        'title': "Title of List Item 2",
        'descr': "Description of List Item 2",
        'isActive': false
    },
    {
        'title': "Title of List Item 3",
        'descr': "Description of List Item 3",
        'isActive': false
    }
]

function List() {
    return (
        <Tools>
            <div className="app-list">
                {
                    itemObj.map((obj, index) => {
                        return <ListItem key={index} title={obj.title} descr={obj.descr} isActive={obj.isActive} />
                    })
                }

            </div>
        </Tools>
    )
}

export default List