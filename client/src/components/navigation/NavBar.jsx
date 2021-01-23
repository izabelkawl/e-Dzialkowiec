import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../img/logo.png';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Link = styled.a`
    margin-left: 70px;
    margin-top: 20px;
    
`
const NavigationItem = styled.p`
    border-top: 20px solid rgba(0, 0, 0, 0);
    color: black;
    :hover{
        color: gray;
    }
`
const Contact = styled.p`
    padding:0 20px;
    color: white;
    background: #0071BC;
    background-clip: border-box;
    border: 20px solid #0071BC;
    border-radius: 30px;
`

class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="nav-link"/>
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            <Link href="/" className="nav-link" >
                                <NavigationItem>Strona główna</NavigationItem>
                                    </Link>

                            <Link href="/about" className="nav-link">
                                <NavigationItem>Zarząd</NavigationItem>
                                    </Link>

                            <Link href="/garden" className="nav-link">
                                <NavigationItem>Plan ogrodu</NavigationItem>
                                    </Link>

                            <Link href="/contact" className="nav-link">
                               <Contact> Kontakt</Contact>
                                </Link>
                        </Nav>
                        <Nav style={{paddingRight: '70px'}}>
                                <NavigationItem>
                                 <img src={logo} height="60" alt="e-działkowiec" />
                                    </NavigationItem>
                                    
                        </Nav> 
                        
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar