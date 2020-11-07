import React, { Component } from 'react'
import styled from 'styled-components'
import { Image } from 'react-bootstrap'

import logo from './img/nap.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-header',
})``


class Logo extends Component {
    render() {
        return (
            <Wrapper href="/">
                <Image src={logo} height="30" alt="tulipan" />
            </Wrapper>
        )
    }
}

export default Logo