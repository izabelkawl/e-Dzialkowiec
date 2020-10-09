import React, { Component } from 'react'
import img from './img/img.png'
import styled from 'styled-components'


const Image = styled.div.attrs({
    className: 'center',
})`
text-align: center;
`
const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 80px;
`

class FrontPage extends Component {
    render() {

        return (
            <Wrapper>
                <Image><img src={img} height="700" alt="tulipan w doniczce" /></Image>

            </Wrapper>
        )
    }
}

export default FrontPage