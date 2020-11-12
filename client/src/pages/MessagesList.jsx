import React, { useState, useEffect, Component } from "react";
import api from "../api";
import { Table, Button } from 'react-bootstrap';
import styled from "styled-components";

const Wrapper = styled.div`
 width: 70%;
  background-color: white; 
  
    margin: 0 auto;
    margin-top: 50px; 

`;



class UpdateMessage extends Component {
    updateMessage = event => {
        event.preventDefault()

        window.location.href = `/messages/update/${this.props.id}`
    }

    render() {
        return <Button variant="success" onClick={this.updateMessage}>Update</Button>
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
        return <Button variant="danger" onClick={this.deleteMessage}>Delete</Button>
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
            <tr key={_id}>
                <td>{index + 1}</td>
                <td>{user}</td>
                <td>{recipient}</td>
                <td>{content}</td>
                <td><DeleteMessage id={_id} /></td>
                <td><UpdateMessage id={_id} /></td>

            </tr>
        );
    });

    return <Wrapper>
        <Table striped bordered hover>
            <thead>
                <th>Lp</th>
                <th>User</th>
                <th>Recipient</th>
                <th>Content</th>
                {/* Date */}
                <th></th>
                <th></th>
            </thead>
            <tbody>
                {MessagesTable}
            </tbody>
        </Table></Wrapper>;
};

export default MessagesList;
