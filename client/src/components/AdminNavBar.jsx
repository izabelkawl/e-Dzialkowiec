import React, { Component } from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import logo from './img/img.svg';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

const Link = styled.a`
    margin: 0 ;
    margin-left: 30px;
`

class AdminNavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
                    <Navbar.Brand href="/admin" >
                        <img
                            src={logo}
                            height="30"
                            className="d-inline-block align-top"
                            alt="e-działkowiec"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="nav-link "/>

                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Link href="/admin" className="nav-link ">
                                Panel
                                </Link>
                            <Link href="/admin/management" className="nav-link ">
                                Zarząd
                                </Link>
                            <Link href="/admin/users/list" className="nav-link ">
                                Użytkownicy
                                </Link>

                            <Link href="/admin/allotments/list" className="nav-link ">
                                Działki
                                </Link>
                            <Link href="/admin/messages/list" className="nav-link ">
                                Wiadomości
                                </Link>
                            <Link href="/admin/table" className="nav-link ">
                                Tablica ogłoszeń
                                </Link>
                            <Link href="/admin/finances/list" className="nav-link ">
                                Finanse
                                </Link>
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default AdminNavBar