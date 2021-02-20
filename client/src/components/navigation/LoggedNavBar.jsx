import React, { Component } from 'react';
import logo from '../../pages/img/logo.svg';
import { connect } from "react-redux";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Navbar, Nav, } from 'react-bootstrap';
import { NavLink } from '../../pages/constants';
import Media from 'react-media';

class LoggedNavBar extends Component {
    render() {
        
    const { user } = this.props.auth;
        return (
            <Navbar collapseOnSelect expand="lg" sticky="top" style={{ background: '#f8f9fa' }} >
                
                <Media query="(min-width: 1366px)" render={() =>
                            (
                                <Navbar.Brand href="/dashboard" >
                                <img
                                    src={logo}
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="e-działkowiec"
                                />
                            </Navbar.Brand>
                            )}
                        />
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="nav-link"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto"></Nav>
                    <Nav>
                        {user.position !== "Działkowiec" ? <NavLink href="/admin/" className="nav-link "> Admin </NavLink>: null }
                        <NavLink href="/dashboard/" className="nav-link ">
                            Aktualności
                            </NavLink>
                        <NavLink href="/dashboard/allotments" className="nav-link ">
                            Działka
                            </NavLink>
                        <NavLink href="/dashboard/noticeboard" className="nav-link">
                            Tablica ogłoszeń
                            </NavLink>
                        <NavLink href="/dashboard/messages" className="nav-link ">
                            Wiadomości
                            </NavLink>
                        <NavLink href="/dashboard/forums" className="nav-link">
                            Forum
                            </NavLink>
                        <NavLink href="/dashboard/commitment" className="nav-link">
                            Zobowiązania
                            </NavLink>
                        <NavLink href="/dashboard/account" className="nav-link">
                            Konto
                            </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
};

const mapStateToProps = state => ({
    auth: state.auth
  });
  
export default connect(
mapStateToProps
)(LoggedNavBar);