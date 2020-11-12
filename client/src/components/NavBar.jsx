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

                        <Nav.Link href="/about" className="nav-link ">
                            O nas
                            </Nav.Link>

                        <Nav.Link href="/allotments/list" className="nav-link ">
                            Działki
                            </Nav.Link>

                        <Nav.Link href="/table" className="nav-link ">
                            Tablica ogłoszeń
                            </Nav.Link>

                        <Nav.Link href="/users/list" className="nav-link ">
                            Lista użytkowników
                            </Nav.Link>
                        <Nav.Link href="/" className="nav-link ">
                            Forum
                            </Nav.Link>
                        <Nav.Link href="/messages/list" className="nav-link ">
                            Wiadomości
                            </Nav.Link>
                        <Nav.Link href="/" className="nav-link ">
                            Opłaty
                            </Nav.Link>
                        <Nav.Link href="/handymans/list" className="nav-link ">
                            Złota rączka
                            </Nav.Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <DropdownButton
                            menuAlign="right"
                            title=" Konto&nbsp;"
                            variant="success"
                        >
                            <Dropdown.Item href="/users/login" eventKey="1">Logowanie</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/users/register" eventKey="2">Rejestracja</Dropdown.Item>

                        </DropdownButton>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar