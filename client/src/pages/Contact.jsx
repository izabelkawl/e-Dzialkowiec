import React  from 'react';
import styled from 'styled-components';
import NavBar from '../components/navigation/NavBar';
import bg from './img/bgo.svg';
import Title from '../components/Title'
import { BlueButtonStyle } from './constants';
import emailjs from 'emailjs-com';
import { Button, Form , Row, Col} from 'react-bootstrap';
import Address from '../components/management/Address';

const Wrapper = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    height: 100vh;
`;

const Container = styled.div`
  width: 50vw;
  margin: 150px 300px;
`;

const FormContainer = styled.div`
  text-align: left;
`;

export default function Contact () {
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_08f6fjl', 'template_26q1t13', e.target, 'user_qWqVSkEj3aL4TRF7FmAcy')
      .then((result) => {
        alert("Wiadomość została wysłana!")
      }, (error) => {
          console.log(error.text);
          alert("Wiadomość nie została wysłana")
      });
  }

    return ( <Wrapper>
        <NavBar />
        <Container>
          <Title >Kontakt</Title>
          <Row>
          
            <Col >
            <FormContainer>
            <Form className="contact-form" onSubmit={sendEmail}>
          <Form.Control type="hidden" name="subject" value="e-działkowiec"/>
            <Form.Group>
              <Form.Label>Adres email:</Form.Label>
              <Form.Control type="email" name="from_name"  required/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Treść wiadomości:</Form.Label>
              <Form.Control as="textarea" rows={6} name="message_html" required/>
            </Form.Group>
            <Button style={BlueButtonStyle} type="submit" className="float-right">Wyślij</Button>
          </Form>
          </FormContainer>
          </Col>
          <Col>
             <Address/>
            </Col>
          </Row>
          
      
        </Container>
      </Wrapper>
    )
  }
