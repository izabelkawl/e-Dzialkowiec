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


class Table extends Component {
  render() {

    return (
      <Wrapper>
        <Container>
          <h1>Tablica ogłoszeń</h1>
          <form><div className="form-group">
            <label for="exampleFormControlSelect1">Kategoria</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Narzędzia</option>
              <option>Sprzęt</option>
              <option>Rośliny</option>
              <option>Rolnictwo</option>
              <option>Sprzedam</option>
              <option>Kupię</option>
            </select>
            <label for="exampleFormControlSelect1">Sortuj wg</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Nazwa</option>
              <option>Data dodania</option>
              <option>Najtańsze</option>
              <option>Najdroższe</option>
            </select>
          </div></form>

        </Container>
      </Wrapper>
    )
  }
}

export default Table