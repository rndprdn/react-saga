import React from 'react'
import styled from 'styled-components'
import InputSearch from '../InputSearch'
import Button from '../Button'

const Form = styled.form`
  display: flex;
  margin-bottom: 30px;
`

const SearchForm = ({ handleSubmit, handleChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <InputSearch type='text' onChange={e => handleChange(e.target.value)} marginRight='10px' />
      <Button type='submit'>Search</Button>
    </Form>
  )
}

export default SearchForm
