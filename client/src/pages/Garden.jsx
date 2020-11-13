import React, { Component } from 'react';
import styled from 'styled-components';
import { NavBar } from '../components';

const Wrapper = styled.div`
 
`;

const Container = styled.div`
 margin: 100px;
 padding:50px;
background-color: white;
`;

class Garden extends Component {
  render() {

    return (
      <Wrapper>
        <NavBar />
        <Container>
          Plan ogrodu
        </Container>
      </Wrapper>
    )
  }
}

export default Garden