import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const Wrapper = styled.div`
 height: 100vh;
`;

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: 50px;
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