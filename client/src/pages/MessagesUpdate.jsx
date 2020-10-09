import React, { Component } from 'react'
import api from '../api'

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

class MessagesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: '',
            recipient: '',
            content: ''
        }
    }
    handleChangeInputUser = async event => {
        const user = event.target.value
        this.setState({ user })
    }
    handleChangeInputRecipient = async event => {
        const recipient = event.target.value
        this.setState({ recipient })
    }
    handleChangeInputContent = async event => {
        const content = event.target.value
        this.setState({ content })
    }

    handleUpdateMessage = async () => {
        const { id, user, recipient, content } = this.state
        const payload = { user, recipient, content }

        await api.updateMessageById(id, payload).then(res => {
            window.alert(`Message updated successfully`)
            this.setState({
                user: '',
                recipient: '',
                content: ''
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const message = await api.getMessageById(id)

        this.setState({
            user: message.data.data.user,
            recipient: message.data.data.recipient,
            content: message.data.data.content,
        })
    }

    render() {
        const { user, recipient, content } = this.state
        return (
            <Wrapper>
                <Title>Update Message</Title>
                <Label>User: </Label>
                <InputText
                    type="text"
                    value={user}
                    onChange={this.handleChangeInputUser}
                />

                <Label>Recipient: </Label>
                <InputText
                    type="text"
                    value={recipient}
                    onChange={this.handleChangeInputRecipient}
                />

                <Label>Content: </Label>
                <InputText
                    type="text"
                    value={content}
                    onChange={this.handleChangeInputContent}
                />

                <Button onClick={this.handleUpdateMessage}>Update Message</Button>
                <CancelButton href={'/messages/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MessagesUpdate