import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import { Button, Form } from 'react-bootstrap';

const Wrapper = styled.div`
`;

const Container = styled.div`

  width: 40vw;
    
  MARGIN:200px;
`;

const Title = styled.h1.attrs({
  className: 'h1',
})`
  font-size: 50px;
  padding-bottom:50px;
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
              <Form.Label>Adres email:</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Treść wiadomości:</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <br></br>
            <Button className="float-right" variant="dark" size="lg" block>Wyślij</Button>
          </Form>

        </Container>
      </Wrapper>
    )
  }
}

export default Contact