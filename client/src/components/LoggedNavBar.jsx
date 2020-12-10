import React, { Component } from 'react'
import { Navbar, Nav, } from 'react-bootstrap';
import { Image } from 'react-bootstrap'
import logo from './img/img.svg'
import styled from 'styled-components'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Logo = styled.a.attrs({
    className: 'navbar-header',
})`
    padding: 20px 0 0 50px;
`
Nav.Link = styled.a`
    margin-top: 30px;
    margin-right: 50px;`

class LoggedNavBar extends Component {
    render() {
        return (
            <Navbar bexpand="lg" >

                <Navbar.Toggle  />
                <Navbar.Collapse id="basic-navbar-nav" >

                    <Nav className="mr-auto" >
                        <Logo className="navbar-header" href="/dashboard/">
                            <Image src={logo} height="40" alt="e-działkowiec" /></Logo>

                    </Nav>
                    <Nav>
                        <Nav.Link href="/dashboard/" className="nav-link text-white">
                            Aktualności
                            </Nav.Link>
                        <Nav.Link href="/dashboard/allotment" className="nav-link  text-white">
                            Działka
                            </Nav.Link>
                        <Nav.Link href="/dashboard/table" className="nav-link  text-white">
                            Tablica ogłoszeń
                            </Nav.Link>
                        <Nav.Link href="/dashboard/messages/list" className="nav-link  text-white">
                            Płatności
                            </Nav.Link>
                        <Nav.Link href="/dashboard/messages/list" className="nav-link  text-white">
                            Wiadomości
                            </Nav.Link>
                        <Nav.Link href="/dashboard/forum" className="nav-link  text-white">
                            Forum
                            </Nav.Link>
                        <Nav.Link href="/dashboard/account" className="nav-link  text-white">
                            Konto
                            </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default LoggedNavBar