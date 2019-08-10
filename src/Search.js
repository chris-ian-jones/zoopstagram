import React, { useState } from 'react'

function Search({ setSearchTerm }) {
  const [searchField, setSearchField] = useState({ search: '' })

  const handleChange = event => {
    setSearchField({ ...searchField, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('form handleSubmit: ', searchField.search)
    setSearchTerm(searchField)
  }

  return (
    <>
      {console.log('Search.js rendered searchField: ', searchField)}
      {/* {console.log('rendered search props: ', props)} */}
      <form onSubmit={event => handleSubmit(event)}>
        <input type='text' name='search' placeholder='Enter area or postcode...' onChange={event => handleChange(event)} />
        <button>Search</button>
      </form>
    </>
  )
}

export default Search