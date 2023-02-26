import React, { useState } from 'react'
import Tools from '../components/Tools'
import ListItem from './ListItem'


const itemObj = [
    {
        'id':1,
        'title': "Title of List Item 1",
        'descr': "Description of List Item 2",
        'isActive': true
    },
    {
        'id':2,
        'title': "Title of List Item 2",
        'descr': "Description of List Item 2",
        'isActive': false
    },
    {
        'id':3,
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


    const listHandleDelete=((obj)=>{
        console.log("handle delete")
        console.log(obj)
        const newList=itemArray.filter((item)=>{
             return item.id!==obj.id
        })

        setItemArray(newList)
    })


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



        <Tools onAction={handleChangeDropDown}>
            <div className="app-list">
                {
                    newList.map((obj, index) => {
                        return <ListItem key={index} onDelete={()=>{listHandleDelete(obj)}} title={obj.title} descr={obj.descr} isActive={obj.isActive} />
                    })
                }

            </div>
        </Tools>
    )
}

export default List