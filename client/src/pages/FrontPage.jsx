import React, { Component } from 'react'
import img from './img/img.png'
import styled from 'styled-components'
import { Button, Jumbotron, Row, Col } from 'react-bootstrap'
// import Background from './img/bg.jpg';
import bg from './img/bg.jpg';


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

})` background-color: white; 
`
const Imagesection = styled.img.attrs({

})` margin: 50px;
`
class FrontPage extends Component {
    render() {

        return (
            <Wrapper>

                <Imagesection src={img} height="400" alt="logo tulipan" />
                <Section>
                    <Jumbotron fluid>

                        <h1>Hello, world!</h1>
                        <p>
                            Tutaj będzie:  Mapa, Pogoda, Rozporządzenia, Ustawy o pobrania , kontakt etc
  </p>
                        <p>
                            <Button variant="primary">Pobierz</Button>
                        </p>

                    </Jumbotron>

                    <h1>Sekcja</h1>
                    <p>
                        Tutaj będzie:  Mapa, Pogoda, Rozporządzenia, Ustawy o pobrania , kontakt etc
  </p>
                    <p>
                        <Button variant="primary">Pobierz</Button>
                    </p>
                    <Section>
                    </Section>
                    <Jumbotron>
                        <Row>
                            <Col sm={{ offset: 3, span: 2 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aut illum, enim nesciunt quae similique omnis non? Dolor, deserunt quibusdam.
                        </Col>
                            <Col sm={{ span: 2 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aut illum, enim nesciunt quae similique omnis non? Dolor, deserunt quibusdam.
                        </Col>
                            <Col sm={{ span: 2 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aut illum, enim nesciunt quae similique omnis non? Dolor, deserunt quibusdam.
                        </Col>
                        </Row>
                    </Jumbotron>
                    <footer>Copyright © IW</footer>
                </Section>


            </Wrapper>
        )
    }
}

export default FrontPage