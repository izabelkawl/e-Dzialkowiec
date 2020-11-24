import React, { Component } from 'react'
import api from '../../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
     margin-left: auto;
    margin-right: auto; 
    background-color: white;
    padding: 50px;
    width: 600px;
    margin-top: 50px;
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

class HandymansUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            profession: '',
            email: '',
            firstname: '',
            lastname: '',
            phone: '',
        }
    }
    handleChangeInputProfession = async event => {
        const profession = event.target.value
        this.setState({ profession })
    }
    handleChangeInputEmail = async event => {
        const email = event.target.value
        this.setState({ email })
    }
    handleChangeInputFirstname = async event => {
        const firstname = event.target.value
        this.setState({ firstname })
    }
    handleChangeInputLastname = async event => {
        const lastname = event.target.value
        this.setState({ lastname })
    }
    handleChangeInputPhone = async event => {
        const phone = event.target.validity.valid
            ? event.target.value
            : this.state.phone

        this.setState({ phone })
    }


    handleUpdateHandyman = async () => {
        const { id, profession, email, firstname, lastname, phone } = this.state
        const payload = { profession, email, firstname, lastname, phone }

        await api.updateHandymanById(id, payload).then(res => {
            window.alert(`Handyman updated successfully`)
            this.setState({
                profession: '',
                email: '',
                firstname: '',
                lastname: '',
                phone: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const handyman = await api.getHandymanById(id)

        this.setState({
            profession: handyman.data.data.profession,
            email: handyman.data.data.email,
            firstname: handyman.data.data.firstname,
            lastname: handyman.data.data.lastname,
            phone: handyman.data.data.phone,
        })
    }

    render() {
        const { profession, email, firstname, lastname, phone } = this.state
        return (
            <Wrapper>
                <Title>Update Handyman</Title>
                <Label>Profession: </Label>
                <InputText
                    type="text"
                    value={profession}
                    onChange={this.handleChangeInputProfession}
                />

                <Label>Email: </Label>
                <InputText
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />

                <Label>Firstname: </Label>
                <InputText
                    type="text"
                    value={firstname}
                    onChange={this.handleChangeInputFirstname}
                />

                <Label>Lastname: </Label>
                <InputText
                    type="text"
                    value={lastname}
                    onChange={this.handleChangeInputLastname}
                />
                <Label>Provider Id: </Label>
                <InputText
                    type="text"
                    value={phone}
                    onChange={this.handleChangeInputPhone}
                />


                <Button onClick={this.handleUpdateHandyman}>Update Handyman</Button>
                <CancelButton href={'/admin/handymans/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default HandymansUpdate