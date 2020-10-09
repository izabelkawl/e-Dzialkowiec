import React, { Component } from 'react'
import styled from 'styled-components'

import logo from './img/logo.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="/">
                <img src={logo} height="50" alt="tulipan" />
            </Wrapper>
        )
    }
}

export default Logo