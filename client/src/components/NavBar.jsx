import React, { Component } from 'react'
import { Navbar, Nav, DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from 'styled-components'
import logo from './img/nap.png'
import { Image } from 'react-bootstrap'

const Logo = styled.a.attrs({
    className: 'navbar-header',
})`padding-top: 5px;
padding-bottom: 5px;`

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="white" expand="lg" sticky="top">

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >

                    <Nav className="mr-auto">
                        <Logo href="/" className="navbar-header">
                            <Image src={logo} height="30" alt="tulipan" />
                        </Logo>

                    </Nav>
                    <Nav>

                        <Nav.Link href="/" className="nav-link ">
                            Strona główna
                            </Nav.Link>
                        <Nav.Link href="/about" className="nav-link ">
                            O nas
                            </Nav.Link>
                        <Nav.Link href="/garden" className="nav-link ">
                            Plan ogrodu
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