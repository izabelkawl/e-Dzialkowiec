import React, { Component } from 'react'
import api from '../../api'
import styled from 'styled-components'
import {Form }from 'react-bootstrap';
import UsersID from '../admin/UsersID';
import ImageUpload from '../ImageUpload';

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

class TablesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            user_id: '',
            content: '',
            image: ''
        }
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value
        this.setState({ title })
    }
    handleChangeInputUserId = async event => {
      const user_id = event.target.value
      this.setState({ user_id })
    }
    handleChangeInputContent = async event => {
        const content = event.target.value
        this.setState({ content })
    }
    handleChangeInputImage = async event => {
    const image = event.target.value
    this.setState({  image })
    }

    handleIncludeTable = async () => {
        const { title, user_id, content, image } = this.state
        const payload = { title, user_id, content, image }

        await api.insertTable(payload).then(res => {
            window.alert(`Table inserted successfully`)
            this.setState({
              title: '',
              user_id: '',
              content: '',
              image: ''
            })
        })
    }

    render() {
        const { title,  content} = this.state
        return (
            <Wrapper>
                <Title>Create Table</Title>
<ImageUpload/>
                

                <Label>Title: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputTitle}
                />

                <Label>Tutaj twoje imię funkcja: </Label>
                <Form.Control as="select" onChange={this.handleChangeInputUserId}>
                    <option>do zmiany </option>
                    <UsersID/>
                </Form.Control>

                <Label>Content: </Label>
                <InputText
                    type="text"
                    value={content}
                    onChange={this.handleChangeInputContent}
                />

                <Button onClick={this.handleIncludeTable}>Add Table</Button>
                <CancelButton href={'/admin/tables/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default TablesInsert