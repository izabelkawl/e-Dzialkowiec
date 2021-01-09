import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { Table, Button } from 'react-bootstrap';
import { List,  RedButtonStyle } from '../constants';

class DeleteMessage extends Component {
    deleteMessage = event => {
        event.preventDefault()
        if (
            window.confirm(
                `Czy na pewno chcesz usunąć tą wiadomosć?`,
            )
        ) {
            api.deleteMessageById(this.props.id)
            window.location.reload()
        }
    }
    render() {
        return <Button style={RedButtonStyle} onClick={this.deleteMessage}>Delete</Button>
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
                <td>{user}</td>
                <td>{recipient}</td>
                <td>{content}</td>
                {/* <td>{}</td> */}
                <td><DeleteMessage id={_id} /></td>
            </tr>
        );
    });

    return <List>
            <Table striped bordered hover size="sm"  responsive>
                    <thead>
                        <tr>
                            <th>Użytkownik</th>
                            <th>Odbiorca</th>
                            <th>Treść</th>
                            {/* Date */}
                            
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {MessagesTable}
                    </tbody>
                </Table>
            </List>;
};

export default MessagesList;
