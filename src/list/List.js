import React, { useState } from 'react'
import Tools from '../components/Tools'
import SimpleList from './SimpleList'


const itemObj = [
    {
        'id': 1,
        'title': "Title of List Item 1",
        'descr': "Description of List Item 2",
        'isActive': true
    },
    {
        'id': 2,
        'title': "Title of List Item 2",
        'descr': "Description of List Item 2",
        'isActive': false
    },
    {
        'id': 3,
        'title': "Title of List Item 3",
        'descr': "Description of List Item 3",
        'isActive': false
    }
]




function List() {

    const [itemArray, setItemArray] = useState(itemObj)
    const [activeDropDown, setActiveDropDown] = useState('all')

    const handleChangeDropDown = (event) => {
        console.log("dropdown changed")
        console.log(event.target.value)
        const eventValue = event.target.value

        setActiveDropDown(eventValue)


    }


    const listDeleteHandle = ((selectedItem) => {
        console.log("handle delete")

        const newList = itemArray.filter((item) => {
            return item.id !== selectedItem.id
        })

        setItemArray(newList)
    })


    const addItemInList = (newData) => {
        const newArray=[...itemArray,newData]
        setItemArray(newArray)

    }


    const onLabelClick = (clickedArg) => {
        setActiveDropDown(clickedArg)


    }

    console.log("new item")
    console.log(itemArray)


    const newList = itemArray.filter((item) => {
        if (activeDropDown === 'all') {
            return true
        }
        if (activeDropDown === 'active') {
            return item.isActive === true
        }
        if (activeDropDown === 'non-active') {
            return item.isActive === false
        }
        return false

    })

    return (

        <Tools labelValue={activeDropDown} onAction={handleChangeDropDown} onAddFunc={addItemInList}>
            <SimpleList data={newList} onDelete={listDeleteHandle} onLabelClick={onLabelClick} />

        </Tools>
    )
}

export default List