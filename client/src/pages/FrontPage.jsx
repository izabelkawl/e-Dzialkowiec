import React, { Component } from 'react';
import styled from 'styled-components';
import { Image, Button, Row, Col, Form, Jumbotron } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import bg from './img/bg.png';
import btn from './img/button.png'
const Wrapper = styled.div.attrs({
})`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
`
const Content = styled.div.attrs({

})``

const Section = styled.div.attrs({

})` height: 80vh;
    margin-top: 150px;
    padding: 5vw;    
    font-style: 'Gill Sans MT';
`
const Contact = styled.div.attrs({

})` height: 80vh;
    margin-top: 250px;
`

const Tittle = styled.h1.attrs({

})` color: #008379;
    padding-bottom: 50px;
    font-size: 4em;
`

const Footer = styled.footer.attrs({

})`text-align: center;
color: #008379;
padding: 10px;
`

class FrontPage extends Component {
    render() {

        return (
            <Wrapper>
                <NavBar />
                <Content>

                    <Section style={{ width: '50vw' }}>
                        <Tittle>Witaj w e-Działce!</Tittle>
                        <h4><b>Kupno • Sprzedaż • Opłaty • Aktualności • Tablica ogłoszeń</b></h4>
                        <br></br>
                        <h5>Aplikacja pozwoli Ci zarządzać swoim ogrodem działkowym na odległość. <br></br>Możesz kupić / sprzedać działkę, opłacić rachunki, integrować się z działkowacami.<br></br>To wszystko bez wychodzenia z domu!
                        </h5>
                        <br></br>
                        <br></br>
                        <a href="/users/login">
                            <Image src={btn} height="70px" alt="dołącz do nas" />
                        </a>
                    </Section>
                    <Contact>
                        <Jumbotron>
                            <Tittle style={{ textAlign: 'center' }}>Kontakt</Tittle>
                            <Row>
                                <Col lg={{ offset: 3, span: 3 }} >
                                    <p><b>Rodzinny Ogród Działkowy „Nadwiślański”<br></br> w Płocku</b>
                                    </p>
                                    <p><b>Adres:</b><br></br> 09-400 Płock <br></br>ul. Dobrzykowska 59</p>
                                    <p><b>Telefon: </b><i>+48 113 563 467 </i></p>
                                    <p>
                                        Ilość działek: 835<br></br>
                                Powierzchnia ogrodu:  60,7831 ha
                                    </p>
                                </Col>
                                <Col lg={{ span: 3 }}>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Adres email:</Form.Label>
                                            <Form.Control type="email" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Treść wiadomości:</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                        <Button className="float-right" variant="dark" size="lg" block>Wyślij</Button>
                                    </Form>
                                </Col>
                            </Row >
                        </Jumbotron>
                    </Contact>


                    <Footer>Copyright © IW <a href="http://www.freepik.com">Designed by Freepik</a></Footer>
                </Content >


            </Wrapper >
        )
    }
}

export default FrontPage