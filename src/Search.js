import React from 'react'
import { useState } from 'react'
const Search = ({ search }) => {

  const [valueInput, setValueInput] = useState('')
  
  const handleFormSubmit = ( event ) => {
    event.preventDefault()
    search(valueInput)
  }

  const handleChange = (event) => {
    setValueInput(event.target.value)
  }
  return (
    <div className='topBar'>
        <form onSubmit={handleFormSubmit}>
            <label>What are you looking for?</label>
            <input value={valueInput} onChange={handleChange} />
        </form>
    </div>
  )
}

export default Search