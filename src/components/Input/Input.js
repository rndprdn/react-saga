import React from 'react'
import styled from 'styled-components'

const InputArea = styled.input`
  padding: 10px;
  border: 1px solid ${props => props.isError ? '#f55151' : '#707a89'};
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
`

const Input = ({
  field,
  placeholder,
  type,
  isError,
  autoComplete
}) => {
  return (
    <InputArea
      {...field}
      placeholder={placeholder}
      type={type}
      isError={isError}
      autoComplete={autoComplete}
    />
  )
}

export default Input
