import React, { Component } from 'react';
import styled from 'styled-components';
import InlineSVG from 'svg-inline-react';
import MapSource from '../MapSourse';


const Wrapper = styled.div`
`;

const Container = styled.div`
  width: 80vw;
  margin-top: 50px;
  padding:50px;
`;

class Allotment extends Component {
  render() {

    return (
      <Wrapper>
        <Container>
          <InlineSVG src={MapSource} />
        </Container>
      </Wrapper>
    )
  }
}

export default Allotment