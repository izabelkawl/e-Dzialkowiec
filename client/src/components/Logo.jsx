import React, { Component } from 'react'
import styled from 'styled-components'

import logo from './img/lk.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-header',
})``

const Img = styled.img.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="/">
                <Img src={logo} height="50" alt="tulipan" />
            </Wrapper>
        )
    }
}

export default Logo