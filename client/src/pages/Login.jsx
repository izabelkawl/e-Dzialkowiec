import React, { Component } from 'react'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin-left: auto;
    margin-right: auto; 
    width: 600px;
    margin-top: 150px;
    background-color: white;
    padding: 50px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class Login extends Component {

    render() {
        return (
            <Wrapper>
                <Title>Logowanie</Title>
                <Label>Email: </Label>
                <InputText
                    type="text"
                    placeholder="jankowalski@gmail.com"
                />

                <Label>Hasło: </Label>
                <InputText
                    type="text"
                    placeholder="&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;"
                />

                <Button onClick={this.handleIncludeProduct}>Zaloguj</Button>
                <CancelButton href="/users/register">Zarejestruj</CancelButton>

            </Wrapper>
        )
    }
}

export default Login 