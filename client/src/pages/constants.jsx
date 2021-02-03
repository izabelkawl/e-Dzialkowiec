import styled from 'styled-components';

export const BlueButtonStyle = {
    padding: '0 20px',
    color: 'white',
    background: '#0071BC',
    border: '10px solid #0071BC'
}
export const RedButtonStyle = {
  padding: '0 20px',
  color: 'white',
  background: 'red',
  border: '10px solid red',
}
export const Wrapper = styled.div.attrs({
  className: 'form-group',
})`
  margin-left: auto;
  margin-right: auto; 
  background-color: white;
  padding: 50px;
  width: 600px;
  margin-top: 50px;
`
export const List = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 50px;
    margin-top: 50px;
    background-color: white; 
`;

export const Title = styled.h3`
    padding-bottom:30px; 
    color: #0071BC;
`;
export const Label = styled.label`
    margin: 5px;
`;

export const Span = styled.span.attrs({
    className: `red-text`,
})`
    font-size: 12px;
    color: red;
`