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
          <div id="a54" >
           <p ><b>Numer działki: </b></p > 
            <p>Szerokość:</p>
            <p>Długość:</p>
            <p>Cena:</p>
            <p>Status:</p>
            <p>Właściciel:</p>
          </div>
        </Container>
      </Wrapper>
    )
  }
}

export default Garden