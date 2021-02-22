import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../img/logo.png';
import { blueColor, hoverBlue } from '../../pages/constants';
import Media from 'react-media';
import { Link } from "react-router-dom";

const NavigationItem = styled.p`
    border-top: 20px solid rgba(0, 0, 0, 0);
    color: black;
    :hover{
        color: gray;
    }
`;

const Contact = styled.p`
    color: black;
    :hover{
        color: gray;
    }
    @media(min-width: 992px){
        padding:0 20px;
        color: white;
        background:${blueColor};
        background-clip: border-box;
        border: 20px solid ${blueColor};
        border-radius: 30px;
        :hover{
            color: white;
            background: ${hoverBlue};
            background-clip: border-box;
            border: 20px solid ${hoverBlue};
            border-radius: 30px;
        }
    }
`;

class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-link"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                        <Link to="/" className="nav-link">
                            Strona główna
                                </Link>
                        <Link to="/about" className="nav-link">
                            Zarząd
                                </Link>
                        <Link to="/garden" className="nav-link">
                            Plan ogrodu
                                </Link>
                        <Link to="/contact" className="nav-link">
                           Kontakt
                            </Link>
                    </Nav>
                    <Nav style={{ paddingRight: '70px' }}>
                        <Media query="(min-width: 992px)" render={() =>
                            (
                            <NavigationItem>
                                <img src={logo} height="60" alt="e-działkowiec"/>
                            </NavigationItem>
                            )}
                        />
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>
        );
    };
};

export default NavBar