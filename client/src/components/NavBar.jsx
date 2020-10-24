import React, { Component } from 'react'
import styled from 'styled-components'

// import Logo from './Logo'
import Links from './Links'

const Container = styled.div.attrs({
    className: '',
})`
    margin-left: auto;
    margin-right: auto; 
    background-color: white;
    text-align: center;
    
    `

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-xl navbar-light bg-white',
})`display:inline-flex;`


class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    {/* <Logo/> */}
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar