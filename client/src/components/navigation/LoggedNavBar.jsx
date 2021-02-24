import React, { Component } from 'react';
import logo from '../../pages/img/logo.svg';
import { connect } from "react-redux";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Navbar, Nav } from 'react-bootstrap';
import Media from 'react-media';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { blueColor }  from '../../pages/constants';

const LinkItem = styled.p`
    margin: 0 ;
    margin-left: 30px;
`;

class LoggedNavBar extends Component {
    render() {
        
    const { user } = this.props.auth;
        return (
            <Navbar collapseOnSelect expand="lg" sticky="top" style={{ background: '#f8f9fa' }} >
                
                <Media query="(min-width: 1366px)" render={() =>
                            (
                            <Link to="/dashboard" className="nav-link ">
                                <Navbar.Brand>
                                <img
                                    src={logo}
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="e-działkowiec"
                                />
                                </Navbar.Brand>
                            </Link>
                            )}
                        />
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="nav-link"/>

                <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto"></Nav>
                    <Nav>
                        {user.position !== "Działkowiec" ? <Link to="/admin/" className="nav-link " style={{ color: blueColor }}> Admin </Link>: null }
                        <Link to="/dashboard/" className="nav-link ">
                            <LinkItem>Aktualności</LinkItem>
                                </Link>
                        <Link to="/dashboard/allotments" className="nav-link ">
                            <LinkItem>Działka</LinkItem>
                                </Link>
                        <Link to="/dashboard/noticeboard" className="nav-link">
                            <LinkItem>Tablica ogłoszeń</LinkItem>
                                </Link>
                        <Link to="/dashboard/messages" className="nav-link ">
                            <LinkItem>Wiadomości</LinkItem>
                                </Link>
                        <Link to="/dashboard/forums" className="nav-link">
                            <LinkItem>Forum</LinkItem>
                                </Link>
                        <Link to="/dashboard/commitment" className="nav-link">
                            <LinkItem>Zobowiązania</LinkItem>
                                </Link>
                        <Link to="/dashboard/account" className="nav-link">
                            <LinkItem>Konto</LinkItem>
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