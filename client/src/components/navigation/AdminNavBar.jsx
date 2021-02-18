import React, { Component } from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../img/img.svg';
import { NavLink } from '../../pages/constants';

class AdminNavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/admin" >
                    <img
                        src={logo}
                        height="30"
                        className="d-inline-block align-top"
                        alt="e-działkowiec"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-link "/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <NavLink href="/admin" className="nav-link ">
                            Panel
                            </NavLink>
                        <NavLink href="/admin/management" className="nav-link ">
                            Zarząd
                            </NavLink>
                        <NavLink href="/admin/users/list" className="nav-link ">
                            Użytkownicy
                            </NavLink>
                        <NavLink href="/admin/allotments/list" className="nav-link ">
                            Działki
                            </NavLink>
                        <NavLink href="/admin/table" className="nav-link ">
                            Tablica ogłoszeń
                            </NavLink>
                        <NavLink href="/admin/messages/list" className="nav-link ">
                            Wiadomości
                            </NavLink>
                        <NavLink href="/admin/finances/list" className="nav-link ">
                            Finanse
                            </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
};

export default AdminNavBar