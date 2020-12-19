import React, { Component } from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import logo from './img/img.svg';
import styled from 'styled-components';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Link = styled.a`
    margin: 0 ;
    margin-left: 30px;
`

class LoggedNavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" sticky="top" >
                <Navbar.Brand href="/dashboard" >
                    <img
                        src={logo}
                        height="30"
                        className="d-inline-block align-top"
                        alt="e-działkowiec"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="nav-link"/>

                <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Link href="/dashboard/" className="nav-link text-white">
                                Aktualności
                                </Link>
                            <Link href="/dashboard/allotment" className="nav-link  text-white">
                                Działka
                                </Link>
                            <Link href="/dashboard/table" className="nav-link  text-white">
                                Tablica ogłoszeń
                                </Link>
                            <Link href="/dashboard/messages/list" className="nav-link  text-white">
                                Płatności
                                </Link>
                            <Link href="/dashboard/messages/list" className="nav-link  text-white">
                                Wiadomości
                                </Link>
                            <Link href="/dashboard/forum" className="nav-link  text-white">
                                Forum
                                </Link>
                            <Link href="/dashboard/account" className="nav-link  text-white">
                                Konto
                                </Link>
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default LoggedNavBar