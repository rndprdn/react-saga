import styled from 'styled-components';

const Text = styled.p`
  font-size: 14px;
  color: ${props => props.isError ? '#f55151' : '#707a89'};
  margin-top: ${props => props.marginTop || '0'};
  margin-right: ${props => props.marginRight || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  margin-left: ${props => props.marginLeft || '0'};
`;

export default Text;
