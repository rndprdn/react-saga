import styled from 'styled-components'

const Card = styled.div`
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin-top: ${props => props.marginTop || '0px'};
  margin-right: ${props => props.marginRight || 'auto'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  margin-left: ${props => props.marginLeft || 'auto'};
  width: ${props => props.width || '350px'}
`

export default Card;