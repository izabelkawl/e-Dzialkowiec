import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from '../components/navigation/NavBar';
import bg from './img/bg.svg';
import edzialkowiec from './img/logo.svg';
import { blueColor, lightGray } from './constants.jsx';
import logo from '../components/img/logoBlack.png';
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    min-height: 100vh;
    backgroun-color: ${lightGray};

    @media(min-width: 1365px){
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
        background-attachment: fixed;
    }
`;

const Section = styled.section` 
    text-align: center;
    padding: 5vw;
    
    @media(min-width: 1366px){
        width: 50vw;
        padding: 50px 100px;
        text-align: left;
    }
    @media(min-width: 1920px){
        width: 60vw;
        margin-top: 30px;
        padding: 100px;
        text-align: left;
    }
`;

const Image = styled.img`
    width: 90vw;
    margin-bottom: 5vw;
 
    @media(min-width: 1365px){
        width: 40vw;
        margin-bottom: 50px;
    }
`;

const LogoImage = styled.img`
    height: 150px;
    text-align: center;
    margin-bottom: 5vw;

    @media(min-width: 992px){
        display: none;
    };
`;

const Button = styled.button`
    padding: 0 10px;
    color: white;
    background: ${blueColor};
    border: 10px solid ${blueColor};
    border-radius: 20px;

    @media(min-width: 1365px){
        padding: 0 20px;
        color: white;
        background: ${blueColor};
        border: 20px solid ${blueColor};
        border-radius: 30px;
    }
`;

const H5 = styled.h5`
    line-height: 1.8;
`;

const Footer = styled.footer` 
    @media(max-width: 1364px){
        display: none;
    };
    @media(min-width: 1365px){
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
                    <h4><b>Kupno • Sprzedaż • Opłaty • Aktualności • Tablica ogłoszeń</b></h4>
                    <br /><br />
                    <H5>Aplikacja pozwoli Ci zarządzać swoim ogrodem działkowym na odległość. 
                        <br></br>Możesz kupić / sprzedać działkę, opłacić rachunki, integrować się z działkowacami.
                        <br></br>To wszystko bez wychodzenia z domu!
                    </H5>
                    <br /><br />
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