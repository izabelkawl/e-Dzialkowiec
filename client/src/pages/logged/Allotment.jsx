import React, { Component } from 'react';
import styled from 'styled-components';
import InlineSVG from 'svg-inline-react';
import MapSource from '../MapSourse';


const Wrapper = styled.div` 
    width: 70vw;
    padding: 100px;
`

const Container = styled.div`
 
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