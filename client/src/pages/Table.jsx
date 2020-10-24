import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 0;
`;
const Container = styled.div`
background-color: white;
padding: 50px;
`
const ListItem = styled.div`
  display: flex;
  padding: 1vh 1vw;
  border-bottom: 1px dashed #ccc;
 
`;
const Item = styled.div`
  width: 90px;
  padding: 10px;
`;

class Table extends Component {
  render() {

    return (
      <Wrapper>
        <Container>
          Tablica ogłoszeń
                <ListItem>
            <Item >Soruj wg</Item >
            <Item >profession</Item>
            <Item >email</Item >
            <Item>firstname</Item>
            <Item>lastname</Item>
            <Item>phone</Item>
          </ListItem>
        </Container>
      </Wrapper>
    )
  }
}

export default Table