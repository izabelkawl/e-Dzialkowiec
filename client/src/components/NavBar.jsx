import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'

const Container = styled.div.attrs({
    className: '',
})`background-color: white;
margin-left: auto;
    margin-right: auto; 
    width: 65vw;`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-light bg-white',
})``


class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar