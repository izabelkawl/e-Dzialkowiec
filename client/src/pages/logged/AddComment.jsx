import React, { Component } from 'react';
import api from '../../api';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 32px;
`;

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


class AllotmentsInsert extends Component {
    constructor(props) {
        super(props)
        const {user} = this.props.auth
        this.state = {
            commenter:  user.firstname + ' '+ user.lastname,
            comment_content: '',
            forum_id: this.props.match.params.id,
        }
    }

    handleChangeInputCommentContent = async event => {
        const comment_content = event.target.value
        this.setState({ comment_content })
    }

    handleIncludeComment = async () => {
        const { commenter, comment_content, forum_id } = this.state
        const payload = { commenter, comment_content, forum_id }

        await api.insertComment(payload).then(res => {
            window.alert(`Comment inserted successfully`)
            this.setState({
                commenter: '',
                comment_content: '',
                forum_id: '',
            })
        })
    }

    render() {
        const { commenter, comment_content, forum_id } = this.state
        return (
            <Wrapper>
                <Title>Create Allotment</Title>

                <Label>user: </Label>
                <InputText
                    type="text" value={commenter}
                    onChange={this.handleChangeInputCommenter} />

                <Label>treść: </Label>
                <InputText
                    type="text"
                    value={comment_content}
                    onChange={this.handleChangeInputCommentContent}
                />

                <Label>forum: </Label>
                <InputText
                    type="text"
                    value={forum_id}
                    onChange={this.handleChangeInputForumId}
                />


                <Button onClick={this.handleIncludeComment}>Add Allotment</Button>
            </Wrapper>
        )
    }
}

export default AllotmentsInsert