import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
     margin: 50px;
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

class UsersUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            address: '',
            phone: '',
        }
    }

    handleChangeInputEmail = async event => {
        const email = event.target.value
        this.setState({ email })
    }
    handleChangeInputPassword = async event => {
        const password = event.target.value
        this.setState({ password })
    }

    handleChangeInputFirstName = async event => {
        const firstname = event.target.value
        this.setState({ firstname })
    }
    handleChangeInputLastName = async event => {
        const lastname = event.target.value
        this.setState({ lastname })
    }
    handleChangeInputAddress = async event => {
        const address = event.target.value
        this.setState({ address })
    }
    handleChangeInputPhone = async event => {
        const phone = event.target.validity.valid
            ? event.target.value
            : this.state.phone

        this.setState({ phone })
    }

    handleUpdateUser = async () => {
        const { id, email, password, firstname, lastname, address, phone } = this.state
        const payload = { email, password, firstname, lastname, address, phone }

        await api.updateUserById(id, payload).then(res => {
            window.alert(`User updated successfully`)
            this.setState({
                email: '',
                password: '',
                firstname: '',
                lastname: '',
                address: '',
                phone: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const user = await api.getUserById(id)

        this.setState({
            email: user.data.data.email,
            password: user.data.data.password,
            firstname: user.data.data.firstname,
            lastname: user.data.data.lastname,
            adress: user.data.data.address,
            phone: user.data.data.phone,
        })
    }

    render() {
        const { email, password, firstname, lastname, address, phone } = this.state
        return (
            <Wrapper>
                <Title>Update User</Title>

                <Label>Email: </Label>
                <InputText
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />

                <Label>Password: </Label>
                <InputText
                    type="text"
                    value={password}
                    onChange={this.handleChangeInputPassword}
                />

                <Label>First Name: </Label>
                <InputText
                    type="text"
                    value={firstname}
                    onChange={this.handleChangeInputFirstName}
                />

                <Label>Last Name: </Label>
                <InputText
                    type="text"
                    value={lastname}
                    onChange={this.handleChangeInputLastName}
                />
                <Label>Address: </Label>
                <InputText
                    type="text"
                    value={address}
                    onChange={this.handleChangeInputAddress}
                />
                <Label>Phone: </Label>
                <InputText
                    type="text"
                    value={phone}
                    onChange={this.handleChangeInputPhone}
                />

                <Button onClick={this.handleUpdateUser}>Update User</Button>
                <CancelButton href={'/users/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default UsersUpdate