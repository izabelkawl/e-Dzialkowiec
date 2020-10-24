import React, { Component } from 'react'
import img from './img/img.png'
import styled from 'styled-components'



const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
`
const Image = styled.div.attrs({
    className: 'center',
})`
text-align: center;
margin: 80px;
`
const Section = styled.div.attrs({
    className: 'form-group',
})`
    height:800px;
    background-color: #f2f4f5;
`
class FrontPage extends Component {
    render() {

        return (
            <Wrapper>
                <Image><img src={img} height="700" alt="tulipan w doniczce" /></Image>
                <Section>cośik</Section>
            </Wrapper>
        )
    }
}

export default FrontPage