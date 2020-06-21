import styled from 'styled-components'

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #2ecc71;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  width: ${props => props.fullWidth ? '100%' : ''};
  height: ${props => props.height || 'unset'};
`

export default Button
