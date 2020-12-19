import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import { Form } from 'react-bootstrap';
import bg from './img/bgo.svg';
const Wrapper = styled.div`
    background-color: #f8f9fa;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    height: 100vh;
`;

const Container = styled.div`
    width: 40vw;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 60px 100px;
    
`;
const Title = styled.h3`
  padding-bottom: 30px;
  color: #0071BC;
  `
const Label = styled(Form.Label)`
    padding-bottom: 10px;
`
const Button = styled.button`
    padding: 0 20px;
    color: white;
    background: #0071BC;
    border: 10px solid #0071BC;
`
class Contact extends Component {
  render() {

    return (
      <Wrapper>
        <NavBar />
        <Container>
          <Title >Kontakt</Title>

          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Label>Adres email:</Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Label>Treść wiadomości:</Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <br></br>
            <Button className="float-right">Wyślij</Button>
          </Form>

        </Container>
      </Wrapper>
    )
  }
}

export default Contact