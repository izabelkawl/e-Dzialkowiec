import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import { Button, Row, Col, Form } from 'react-bootstrap';
import bg from './img/bglr.png';

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
`;

const Container = styled.div`
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto; 
  width: 40vw;
  padding:50px;
`;

const Title = styled.h1.attrs({
  className: 'h1',
})`
  font-size: 50px;
  padding-bottom:50px;
  text-align: center;
  `

class Contact extends Component {
  render() {

    return (
      <Wrapper>
        <NavBar />
        <Container>
          <Title >Kontakt</Title>
          <Row>
            <Col >
              <p style={{ textAlign: 'center' }}><b>Rodzinny Ogród Działkowy „Nadwiślański”<br></br> w Płocku</b>
              </p>
              <p><b>Adres:</b><br></br> 09-400 Płock <br></br>ul. Dobrzykowska 59</p>
              <p><b>Telefon: </b><i>+48 113 563 467 </i></p>
              <p>
                Ilość działek: 835<br></br>
                                Powierzchnia ogrodu:  60,7831 ha
                                    </p>
            </Col>
            <Col>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Adres email:</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Treść wiadomości:</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <br></br>
                <Button className="float-right" variant="dark" size="lg" block>Wyślij</Button>
              </Form>
            </Col>
          </Row >
        </Container>
      </Wrapper>
    )
  }
}

export default Contact