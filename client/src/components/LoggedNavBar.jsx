import React, { Component } from 'react'
import { Navbar, Nav, } from 'react-bootstrap';

import Logo from './Logo';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


class LoggedNavBar extends Component {
    render() {
        return (
            <Navbar bg="white" expand="lg" sticky="top">

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >

                    <Nav className="mr-auto">
                        <Logo />
                    </Nav>
                    <Nav>
                        <Nav.Link href="/" className="nav-link ">
                            Aktualności
                            </Nav.Link>
                        <Nav.Link href="/allotments/list" className="nav-link ">
                            Działka
                            </Nav.Link>
                        <Nav.Link href="/table" className="nav-link ">
                            Tablica ogłoszeń
                            </Nav.Link>
                        <Nav.Link href="/messages/list" className="nav-link ">
                            Forum
                            </Nav.Link>
                        <Nav.Link href="/messages/list" className="nav-link ">
                            Płatności
                            </Nav.Link>
                        <Nav.Link href="/messages/list" className="nav-link ">
                            Wiadomości
                            </Nav.Link>
                        <Nav.Link href="/handyman/list" className="nav-link ">
                            Fochowcy
                            </Nav.Link>
                        <Nav.Link href="/users/list" className="nav-link ">
                            Konto
                            </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default LoggedNavBar