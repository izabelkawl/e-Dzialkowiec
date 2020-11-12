import React, { Component } from 'react'
import { Navbar, Nav, DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Logo from './Logo';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="white" expand="lg" sticky="top">

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >

                    <Nav className="mr-auto">
                        <Logo />
                    </Nav>
                    <Nav>
                        <Nav.Link href="/admin" className="nav-link ">
                            Strona główna
                            </Nav.Link>
                        <Nav.Link href="/admin/about" className="nav-link ">
                            Użytkownicy
                            </Nav.Link>

                        <Nav.Link href="/admin/allotments/list" className="nav-link ">
                            Działki
                            </Nav.Link>

                        <Nav.Link href="/admin/table" className="nav-link ">
                            Wiadomości
                            </Nav.Link>

                        <Nav.Link href="/admin/users/list" className="nav-link ">
                            Złote rączki
                            </Nav.Link>
                        <Nav.Link href="/admin/table" className="nav-link ">
                            Tablica ogłoszeń
                            </Nav.Link>
                        <Nav.Link href="/admin/messages/list" className="nav-link ">
                            Płatności
                            </Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar