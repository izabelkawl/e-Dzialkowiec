import React, { Component } from 'react';
import logo from '../../pages/img/logo.svg';
import { connect } from "react-redux";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Navbar, Nav, } from 'react-bootstrap';
import Media from 'react-media';
import { Link } from "react-router-dom";

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
                        {user.position !== "Działkowiec" ? <Link to="/admin/" className="nav-link "> Admin </Link>: null }
                        <Link to="/dashboard/" className="nav-link ">
                            Aktualności
                            </Link>
                        <Link to="/dashboard/allotments" className="nav-link ">
                            Działka
                            </Link>
                        <Link to="/dashboard/noticeboard" className="nav-link">
                            Tablica ogłoszeń
                            </Link>
                        <Link to="/dashboard/messages" className="nav-link ">
                            Wiadomości
                            </Link>
                        <Link to="/dashboard/forums" className="nav-link">
                            Forum
                            </Link>
                        <Link to="/dashboard/commitment" className="nav-link">
                            Zobowiązania
                            </Link>
                        <Link to="/dashboard/account" className="nav-link">
                            Konto
                            </Link>
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