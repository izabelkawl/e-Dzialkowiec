import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { Table, Button } from 'react-bootstrap';
import { List, RedButtonStyle } from '../constants';

class DeleteUser extends Component {
    deleteUser = event => {
        event.preventDefault()
        if (
            window.confirm(
                `Do tou want to delete the user ${this.props.id} permanently?`,
            )
        ) {
            api.deleteUserById(this.props.id)
            window.location.reload()
        }
    }
    render() {
        return <Button style={RedButtonStyle} onClick={this.deleteUser}>Usuń</Button>
    }
}

const UsersList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const requestUsersList = async () => {
            const usersList = await api.getAllUsers();
            const { data } = usersList;
            setUsers(data.data);
        };
        requestUsersList();
    }, []);

    const UsersTable = users.map((user, index) => {
        const { _id, email, firstname, lastname, address, phone } = user;

        return (
            <tr key={_id}>
                <td>{index + 1}</td>
                <td>{email}</td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{address}</td>
                <td>{phone}</td>
                <td><DeleteUser id={_id} /></td>
            </tr>
        );
    });

    return <List>
        <Table striped bordered hover size="sm"  responsive>
            <thead>
                <tr>
                    <th>Lp</th>
                    <th>Email</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Adres</th>
                    <th>Telefon</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {UsersTable}
            </tbody>
        </Table>
    </List>
};

export default UsersList;
