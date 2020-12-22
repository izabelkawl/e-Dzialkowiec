import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import InlineSVG from 'svg-inline-react';
import MapSource from './MapSourse';

const Wrapper = styled.div`
`;

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 50px;
`;


class Garden extends Component {
  render() {

    return (
      <Wrapper>
        <NavBar />
        <Container>
          <InlineSVG src={MapSource} />
        </Container>
      </Wrapper>
    )
  }
}

export default Garden