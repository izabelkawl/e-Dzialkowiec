import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../components/navigation/NavBar';
import { Form } from 'react-bootstrap';
import bg from './img/bgo.svg';
import Title from '../components/Title'

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