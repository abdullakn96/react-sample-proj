import React, { useEffect, useState } from 'react'
import Tools from '../components/Tools'
import SimpleList from './SimpleList'



function List() {

    const [itemArray, setItemArray] = useState([])
    const [activeDropDown, setActiveDropDown] = useState('all')




    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setItemArray(data))
            .catch(error => console.error(error));
    }, []);



    const handleRefresh = () => {

        let endpoint = "/data2.json"

        fetch(endpoint)
            .then(response => response.json())
            .then(data => setItemArray(data))
            .catch(error => console.error(error));


    }


    const handleChangeDropDown = (event) => {
        console.log("dropdown changed")
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
        const newArray = [...itemArray, newData]
        setItemArray(newArray)

    }


    const onLabelClick = (clickedArg) => {
        setActiveDropDown(clickedArg)


    }



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

        <Tools labelValue={activeDropDown} onAction={handleChangeDropDown} onAddFunc={addItemInList} handleRefresh={handleRefresh} count={newList.length}>
            <SimpleList data={newList} onDelete={listDeleteHandle} onLabelClick={onLabelClick} />

        </Tools>
    )
}

export default List