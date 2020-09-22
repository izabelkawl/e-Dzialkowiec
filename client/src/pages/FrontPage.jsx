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
    Color: white
`
// const Span = styled.span.attrs({
//     className: 'span',
// })`color: black;
//     background: white;
//     padding: 15px;
// `
// const Label = styled.p.attrs({
//     className: 'p',
// })`margin: 50px;
// font-size: 24px;
// `

class FrontPage extends Component {
    render() {

        return (
            <Wrapper>
                {/* <Label><Span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wszyscy rolnicy w twoim zasięgu&nbsp;&nbsp; </Span></Label>
                <Label>&nbsp;&nbsp;&nbsp;&nbsp;<Span>&nbsp;&nbsp;Wybór dostawcy w oparciu o opinię&nbsp;&nbsp;&nbsp;&nbsp;</Span></Label>
                <Label><Span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zamawianie produktów online&nbsp;&nbsp;</Span></Label>
                <Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Span>Promocje,rabaty każdy rolnik ustala własne zasady&nbsp;&nbsp;&nbsp;&nbsp;</Span></Label>
                <Label>&nbsp;&nbsp;<Span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ranking ocen opinie o przebiegu transakcji&nbsp;&nbsp;</Span></Label>
                <Label><Span>&nbsp;&nbsp;kontakt z dostawcą za pomocą naszej strony&nbsp;&nbsp;</Span></Label> */}
                <Image><img src={img} height="700" alt="kura" /></Image>

            </Wrapper>
        )
    }
}

export default FrontPage