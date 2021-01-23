import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../components/navigation/NavBar';
import bg from './img/bg.svg';
import logo from './img/logo.svg';

const Wrapper = styled.div.attrs({
})`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    height: 100vh;
`
const Section = styled.section.attrs({
})` 
    width: 60vw;
    margin-top: 30px;
    padding: 100px;
`

const Image = styled.img.attrs({
})`
    margin-bottom: 50px;
`
const Button = styled.button`
    padding: 0 20px;
    color: white;
    background: #0071BC;
    border: 20px solid #0071BC;
    border-radius: 30px;
`
const H5 = styled.h5`
    line-height: 1.8;
`
const Footer = styled.footer.attrs({
})` 
    padding-left: 100px;
`
class FrontPage extends Component {
    render() {

        return (
            <Wrapper>
                <NavBar />
                <Section>
                        <Image src={logo} height="160" alt="e-działkowiec" />
                        <h4><b>Kupno • Sprzedaż • Opłaty • Aktualności • Tablica ogłoszeń</b></h4>
                        <br /><br />
                        <H5>Aplikacja pozwoli Ci zarządzać swoim ogrodem działkowym na odległość. <br></br>Możesz kupić / sprzedać działkę, opłacić rachunki, integrować się z działkowacami.<br></br>To wszystko bez wychodzenia z domu!
                        </H5>
                        <br /><br />
                        <a href="/users/login">
                            <Button>Dołącz do nas </Button>
                        </a>
                </Section>
                <Footer>Copyright © IW <a href="http://www.freepik.com">BG Designed by Freepik</a></Footer>
            </Wrapper>
        )
    }
}

export default FrontPage