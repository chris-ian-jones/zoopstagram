import React, { useState } from 'react'
import { Input, Button } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledForm = styled.form`
  margin: 40px 0 40px 0;
`

function Search({ setSearchTerm }) {
  const [searchField, setSearchField] = useState('')

  const handleChange = event => {
    setSearchField({ ...searchField, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setSearchTerm(searchField.search)
  }

  return (
      <StyledForm onSubmit={event => handleSubmit(event)}>
        <Input 
          size="massive" 
          icon="search"
          type="text" 
          name="search" 
          placeholder="City" 
          onChange={event => handleChange(event)} 
        />
        <Button color="violet" size="massive">Search</Button>
      </StyledForm>
  )
}

export default Search