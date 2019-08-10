import React, { useState } from 'react'

function Search() {
  const [searchField, setSearchField] = useState({ search: '' })

  const handleChange = event => {
    setSearchField({ ...searchField, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('form handleSubmit: ', searchField.search)
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      {console.log('rendered: ', searchField)}
      <input type='text' name='search' placeholder='Enter area or postcode...' onChange={event => handleChange(event)} />
      <button>Search</button>
    </form>
  )
}

export default Search