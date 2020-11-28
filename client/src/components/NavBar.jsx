import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from 'styled-components'
import logo from './img/nap1.png'
import { Image } from 'react-bootstrap'

const Logo = styled.a.attrs({
    className: 'navbar-header',
})`
    padding: 20px 0 0 50px;
`
Nav.Link = styled.a`
    margin-top: 30px;
    margin-right: 50px;
`

class NavBar extends Component {
    render() {
        return (

            <Navbar expand="lg">

                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" >

                    <Nav className="mr-auto">
                        <Logo href="/" className="navbar-header">
                            <Image src={logo} height="60" alt="e-działkowiec" />
                        </Logo>

                    </Nav>
                    <Nav>

                        <Nav.Link href="/" className="nav-link text-white">
                            Strona główna
                            </Nav.Link>
                        <Nav.Link href="/garden" className="nav-link  text-white">
                            Plan ogrodu
                            </Nav.Link>
                        <Nav.Link href="/about" className="nav-link  text-white">
                            O nas / Zarząd
                            </Nav.Link>
                        <Nav.Link href="/contact" className="nav-link  text-white">
                            Kontakt
                            </Nav.Link>


                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar