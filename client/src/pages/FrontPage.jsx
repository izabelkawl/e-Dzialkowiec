import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
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
    margin-top: 170px;
    padding: 5vw;    
    font-style: 'Gill Sans MT';
`
const Title = styled.h1.attrs({

})` color: #008379;
    padding-bottom: 50px;
    font-size: 4em;
`

const Footer = styled.footer.attrs({

})`
    text-align: center;
    color: #008379;
    padding: 15px;
`

class FrontPage extends Component {
    render() {

        return (
            <Wrapper>
                <NavBar />
                <Content>

                    <Section style={{ width: '50vw' }}>
                        <Title>Witaj w e-Działce!</Title>
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



                    <Footer>Copyright © IW <a href="http://www.freepik.com">Designed by Freepik</a></Footer>
                </Content >


            </Wrapper >
        )
    }
}

export default FrontPage