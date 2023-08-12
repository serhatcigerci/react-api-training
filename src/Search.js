import React from 'react'

const Search = ({ search }) => {

  const handleFormSubmit = ( event ) => {
    event.preventDefault()
    search('serhat')
  }
  return (
    <div className='topBar'>
        <form onSubmit={handleFormSubmit}>
            <label>What are you looking for?</label>
            <input />
        </form>
    </div>
  )
}

export default Search