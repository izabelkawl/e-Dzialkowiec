import React, { Component } from 'react'
import { Navbar, Nav, } from 'react-bootstrap';
import { Image } from 'react-bootstrap'
import logo from './img/nap.png'
import styled from 'styled-components'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Logo = styled.a.attrs({
    className: 'navbar-header',
})`
`

class LoggedNavBar extends Component {
    render() {
        return (
            <Navbar bg="white" expand="lg" sticky="top">

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >

                    <Nav className="mr-auto" >
                        <Logo className="navbar-header" href="/dashboard/">
                            <Image src={logo} height="40" alt="e-działkowiec" /></Logo>

                    </Nav>
                    <Nav>
                        <Nav.Link href="/dashboard/" className="nav-link ">
                            Aktualności
                            </Nav.Link>
                        <Nav.Link href="/dashboard/allotments/list" className="nav-link ">
                            Działka
                            </Nav.Link>
                        <Nav.Link href="/dashboard/table" className="nav-link ">
                            Tablica ogłoszeń
                            </Nav.Link>
                        <Nav.Link href="/dashboard/messages/list" className="nav-link ">
                            Płatności
                            </Nav.Link>
                        <Nav.Link href="/dashboard/messages/list" className="nav-link ">
                            Wiadomości
                            </Nav.Link>
                        <Nav.Link href="/dashboard/handyman/list" className="nav-link ">
                            Fochowcy
                            </Nav.Link>
                        <Nav.Link href="/dashboard/account" className="nav-link ">
                            Konto
                            </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default LoggedNavBar