import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import InlineSVG from 'svg-inline-react';
import svgSource from './SvgSourse';

const Wrapper = styled.div`
 min-height: 100vh;
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
          <InlineSVG src={svgSource} />
        </Container>
      </Wrapper>
    )
  }
}

export default Garden