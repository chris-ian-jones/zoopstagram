import React, { useState } from 'react'
import { Input, Button } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledForm = styled.form`
  margin: 40px 0 40px 0;
`

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
      <StyledForm onSubmit={event => handleSubmit(event)}>
        <Input size='massive' icon='search' type='text' name='search' placeholder='Enter area or postcode...' onChange={event => handleChange(event)} />
        <Button color='violet' size='massive'>Search</Button>
      </StyledForm>
    </>
  )
}

export default Search