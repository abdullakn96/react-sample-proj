import React, { useState } from 'react'
import './AddNew.css';

function AddNew(props) {

  const { onAddFunc } = props

  const [inputTitle, setInputTitle] = useState('')
  const [inputDescr, setInputDescr] = useState('')
  const [inputActive, setInputActive] = useState(false)
  const [validationMessage, setValidationMessage] = useState('')

  const handleChange = (event) => {

    const titleValue = event.target.value
    setInputTitle(titleValue)


  }

  const handleDescrChange = (event) => {

    const descValue = event.target.value
    setInputDescr(descValue)

  }

  const handleIsActiveChange = (event) => {

    const value = event.target.checked;
    setInputActive(value)

  }

  const handleClick = () => {


    if (inputTitle !== '' && inputDescr !== '') {
      onAddFunc({
        id: Math.floor(Math.random() * 100) + 10,
        title: inputTitle,
        descr: inputDescr,
        isActive: inputActive
      });
      setInputTitle('')
      setInputDescr('')
      setInputActive(false)
    } else {
      setValidationMessage('Some Mandatory Field is missing')
    }



  }



  return (

    <div className="add-new">
      <input placeholder="Title" value={inputTitle} onChange={handleChange} />
      <input placeholder="Description" value={inputDescr} onChange={handleDescrChange} />
      <span>Is Active</span>
      <input type="checkbox" checked={inputActive} onChange={handleIsActiveChange} />
      <button style={{ backgroundColor: 'blue', padding: '10px', marginLeft: '10px', borderRadius: '5px', border: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleClick}>Add Item</button>
    </div>
  )
}

export default AddNew