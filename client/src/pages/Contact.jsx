import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../components/navigation/NavBar';
import { Form, Button } from 'react-bootstrap';
import bg from './img/bgo.svg';
import Title from '../components/Title'
import { BlueButtonStyle } from './constants';

const Wrapper = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    height: 100vh;
`;

const Container = styled.div`
width: 30vw;
margin: 150px 400px;
`;

class Contact extends Component {
  render() {

    return (
      <Wrapper>
        <NavBar />
        <Container>
          <Title >Kontakt</Title>

          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Adres email:</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Treść wiadomości:</Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <br></br>
            <Button style={BlueButtonStyle} className="float-right">Wyślij</Button>
          </Form>

        </Container>
      </Wrapper>
    )
  }
}

export default Contact