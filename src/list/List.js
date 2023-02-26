import React, { useState } from 'react'
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

    const [itemArray, setItemArray] = useState(itemObj)

    const handleChangeDropDown = (event) => {
        console.log("dropdown changed")
        console.log(event.target.value)
        const eventValue = event.target.value
        const newList = itemObj.filter((item) => {
            if (eventValue === 'all') {
                return true
            }
            if (eventValue === 'active') {
                return item.isActive === true
            }
            if (eventValue === 'non-active') {
                return item.isActive === false
            }
            return false

        })

        setItemArray(newList)
    }
    return (
        <Tools onAction={handleChangeDropDown}>
            <div className="app-list">
                {
                    itemArray.map((obj, index) => {
                        return <ListItem key={index} title={obj.title} descr={obj.descr} isActive={obj.isActive} />
                    })
                }

            </div>
        </Tools>
    )
}

export default List