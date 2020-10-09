import React, { useState, useEffect, Component } from "react";
import api from "../api";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 0;
`;

const ListItem = styled.div`
  display: flex;
  width: 50%;
  padding: 1vh 1vw;
  border-bottom: 1px dashed #ccc;
  background-color: white;
`;
const Lp = styled.div`
  width: 50px;
`;
const Item = styled.div`
  width: 100px;
`;
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`;

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`;;


class UpdateMessage extends Component {
    updateMessage = event => {
        event.preventDefault()

        window.location.href = `/messages/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateMessage}>Update</Update>
    }
}

class DeleteMessage extends Component {
    deleteMessage = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the message ${this.props.id} permanently?`,
            )
        ) {
            api.deleteMessageById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteMessage}>Delete</Delete>
    }
}

const MessagesList = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const requestMessagesList = async () => {
            const messagesList = await api.getAllMessages();
            const { data } = messagesList;
            setMessages(data.data);
        };

        requestMessagesList();
    }, []);

    const MessagesTable = messages.map((message, index) => {
        const { _id, user, recipient, content } = message;

        return (
            <ListItem key={_id}>
                <Lp>{index + 1}</Lp>
                <Item>{user}</Item>
                <Item>{recipient}</Item>
                <Item>{content}</Item>
                <Item><DeleteMessage id={_id} /></Item>
                <Item><UpdateMessage id={_id} /></Item>
            </ListItem>
        );
    });

    return <Wrapper>
        <ListItem>
            <Lp>Lp</Lp>
            <Item>user</Item>
            <Item>recipient</Item>
            <Item>content</Item>
        </ListItem >
        {MessagesTable}</Wrapper>;
};

export default MessagesList;
