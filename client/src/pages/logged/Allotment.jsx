import React, { Component } from 'react';
import styled from 'styled-components';
import InlineSVG from 'svg-inline-react';
import MapSource from '../MapSourse';
import Wrapper from '../../components/Wrapper/Wrapper'

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