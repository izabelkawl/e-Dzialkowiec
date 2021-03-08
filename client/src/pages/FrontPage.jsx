import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../components/navigation/NavBar';
import bg from './img/bg.svg';
import edzialkowiec from './img/logo.svg';
import { blueColor } from './constants.jsx';
import logo from '../components/img/logoBlack.png';
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    min-height: 100vh;
    position: relative;
    background-color: white;
    background-image: url(${bg});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: bottom;
    background-attachment: fixed;
`;

const Section = styled.section` 
    text-align: center;
    padding: 5vw;
    padding-bottom: 100px;
    @media(min-width: 768px){
        padding: 50px 100px;
        text-align: left;
        width: 70vw;
    }
    @media(min-width: 1366px){
        width: 55vw;
        padding: 0px 0px 0px 100px;
    }
    @media(min-width: 1920px){
        width: 50vw;
        margin-top: 30px;
        padding: 100px;
    }
`;

const LogoImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 60px;
    @media(min-width: 992px){
        display: none;
    };
`;

const Image = styled.img`
    width: 88vw;
    margin-bottom: 5vw;
    @media(min-width: 768px){
        width: 40vw;
        margin-bottom: 50px;
    }
`;
const TextTitle = styled.p`
    font-weight: bold;
    @media(min-width: 768px){
        font-size: 18px;
    }
    @media(min-width: 1920px){
        font-size: 35px;
    }
`;
const TextSpan= styled.h4`

    font-size: 15px;
    line-height: 2;

@media(min-width: 1366px){
    font-weight: 500;
    line-height: 1.7;
}
`;

const Button = styled.button`
    padding: 0 10px;
    color: white;
    background: ${blueColor};
    border: 10px solid ${blueColor};
    border-radius: 20px;

    @media(min-width: 1365px){
        padding: 0 15px;
        color: white;
        background: ${blueColor};
        border: 20px solid ${blueColor};
        border-radius: 30px;
    }
`;

const Footer = styled.footer`
    position: absolute;
    bottom: 0px;
    padding-left: 20px;
    padding-bottom: 20px;
    text-align: left;
    @media(min-width: 768px){
        padding-left: 100px;
        padding-bottom: 20px;
        text-align: left;
    }
`;

class FrontPage extends Component {
    render() {

        return (
            <Wrapper>
                <NavBar />
                <Section>
                    <LogoImage src={logo} alt="logo"/>
                    <Image src={edzialkowiec} alt="e-działkowiec" />
                    <TextTitle>Kupno • Sprzedaż • Opłaty • Aktualności • Tablica ogłoszeń</TextTitle>
                    <br />
                    <TextSpan>Aplikacja pozwoli Ci zarządzać swoim ogrodem działkowym na odległość. 
                        Możesz kupić lub sprzedać działkę, zintegrować się z działkowacami, zobaczyć aktualne opłaty.
                        To wszystko bez wychodzenia z domu!
                    </TextSpan>
                    <br />
                    <Link to="/users/login">
                        <Button>Dołącz do nas </Button>
                    </Link>
                </Section>
                <Footer>Copyright © IW <a href="http://www.freepik.com">BG Designed by Freepik</a></Footer>
            </Wrapper>
        );
    };
};

export default FrontPage