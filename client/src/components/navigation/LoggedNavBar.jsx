import React, { Component } from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import logo from '../../pages/img/logo.svg';
import styled from 'styled-components';
import { connect } from "react-redux";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Link = styled.a`
    margin: 0 ;
    margin-left: 30px;
`
const Navigation = {
    background: '#f8f9fa'
}

class LoggedNavBar extends Component {
    render() {
        
    const { user } = this.props.auth;
        return (
            <Navbar collapseOnSelect expand="lg" sticky="top" style={Navigation} >
                <Navbar.Brand href="/dashboard" >
                    <img
                        src={logo}
                        height="40"
                        className="d-inline-block align-top"
                        alt="e-działkowiec"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="nav-link"/>

                <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto"></Nav>
                        <Nav><Link href="/dashboard/image/" className="nav-link ">
                                Image
                                </Link>
                            {user.position !== "Działkowiec" ? <Link href="/admin/" className="nav-link "> Admin </Link>: null }
                            <Link href="/dashboard/" className="nav-link ">
                                Aktualności
                                </Link>
                            <Link href="/dashboard/allotments" className="nav-link ">
                                Działka
                                </Link>
                            <Link href="/dashboard/noticeboard" className="nav-link">
                                Tablica ogłoszeń
                                </Link>
                            <Link href="/dashboard/messages" className="nav-link ">
                                Wiadomości
                                </Link>
                            <Link href="/dashboard/forums" className="nav-link">
                                Forum
                                </Link>
                                <Link href="/dashboard/commitment" className="nav-link">
                                Zobowiązania
                                </Link>
                            <Link href="/dashboard/account" className="nav-link">
                                Konto
                                </Link>
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(LoggedNavBar);