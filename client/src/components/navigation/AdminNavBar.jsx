import React, { Component } from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../img/img.svg';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const LinkItem = styled.p`
    margin: 0 ;
    margin-left: 30px;
`;

class AdminNavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
               <Link to="/admin" className="nav-link ">
                    <Navbar.Brand>
                        <img
                            src={logo}
                            height="30"
                            className="d-inline-block align-top"
                            alt="e-działkowiec"
                        />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-link "/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Link to="/admin" className="nav-link ">
                            <LinkItem>Panel</LinkItem>
                                </Link>
                        <Link to="/admin/management" className="nav-link ">
                            <LinkItem>Zarząd</LinkItem>
                                </Link>
                        <Link to="/admin/users/list" className="nav-link ">
                            <LinkItem>Użytkownicy</LinkItem>
                                </Link>
                        <Link to="/admin/allotments/list" className="nav-link ">
                            <LinkItem>Działki</LinkItem>
                                </Link>
                        <Link to="/admin/table" className="nav-link ">
                            <LinkItem>Tablica ogłoszeń</LinkItem>
                                </Link>
                        <Link to="/admin/messages/list" className="nav-link ">
                            <LinkItem>Wiadomości</LinkItem>
                                </Link>
                        <Link to="/admin/finances/list" className="nav-link ">
                            <LinkItem>Finanse</LinkItem>
                                </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
};

export default AdminNavBar