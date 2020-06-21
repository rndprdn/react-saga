import React from 'react'
import styled from 'styled-components'

const InputArea = styled.input`
  padding: 10px;
  border: 1px solid #707a89;
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
  margin-right: ${props => props.marginRight || ''}
`

const Input = (props) => {
  return (
    <InputArea {...props} />
  )
}

export default Input
