import React, { Component } from 'react'
import img from './img/img.png'
import styled from 'styled-components'
import { Image } from 'react-bootstrap'


const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
margin-top: 50px;
text-align: center;
`

const Section = styled.div.attrs({
    className: 'form-group',
})`margin-top: 50px;
    height:800px;
    background-color: #f2f4f5;
`
class FrontPage extends Component {
    render() {

        return (
            <Wrapper>
                <Image src={img} height="400" alt="tulipan w doniczce" />
                <Section>Mapy, Pogoda, Rozporządzenia, kontakt etc</Section>
            </Wrapper>
        )
    }
}

export default FrontPage