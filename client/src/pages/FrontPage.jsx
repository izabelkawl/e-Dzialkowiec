import React, { Component } from 'react'
import img from './img/img.png'
import styled from 'styled-components'
import { Button, Row, Col, Form, Jumbotron } from 'react-bootstrap'
// import Background from './img/bg.jpg';
import bg from './img/bg.jpg';
import { NavBar } from '../components';

const Wrapper = styled.div.attrs({
})`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    background-attachment: fixed;
     text-align: center;
`

const Section = styled.div.attrs({

})`  
   
padding: 50px;
`
const Tittle = styled.h1.attrs({

})` text-align: center;
padding-bottom: 20px;`

const Imagesection = styled.img.attrs({

})` margin: 50px;
    
`

const Footer = styled.footer.attrs({

})`
`
const Contact = styled.div.attrs({

})`text-align: left`

const Content = styled.div.attrs({

})`background-color: white`

class FrontPage extends Component {
    render() {

        return (
            <Wrapper>
                <NavBar />
                <Imagesection src={img} height="400" alt="logo tulipan" />
                <Content>
                    <Jumbotron>


                        <Tittle>Hello, world!</Tittle>
                        <p>
                            Tutaj będzie:  Mapa, Pogoda, Rozporządzenia, Ustawy o pobrania , kontakt etc
  </p>
                        <Button variant="primary">Pobierz</Button>

                    </Jumbotron>
                    <Section>
                        <Tittle>Sekcja</Tittle>
                        <p>
                            Tutaj będzie:  Mapa, Pogoda, Rozporządzenia, Ustawy o pobrania , kontakt etc
  </p>
                        <Button variant="primary">Pobierz</Button>
                    </Section>
                    <Contact>
                        <Jumbotron>
                            <Tittle>Kontakt</Tittle>
                            <Row>
                                <Col sm={{ offset: 3, span: 3 }}>
                                    <p>Rodzinny Ogród Działkowy „Nadwiślański” w Płocku
                                 </p>
                                    <p>Adres: 09-400 Płock <br></br>ul. Dobrzykowska 59</p>
                                    <p>
                                        Ilość działek: 835<br></br>
                                Powierzchnia ogrodu:  60,7831 ha
                                    </p>
                                </Col>
                                <Col sm={{ span: 3 }}>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Adres email:</Form.Label>
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Treść wiadomości:</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                        <Button variant="primary">Wyślij</Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </Contact>


                    <Footer>Copyright © IW</Footer>
                </Content>


            </Wrapper>
        )
    }
}

export default FrontPage