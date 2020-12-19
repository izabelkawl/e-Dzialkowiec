import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { Table, Button } from 'react-bootstrap';
import styled from "styled-components";

const Wrapper = styled.div`
    width: 70%;
    background-color: white; 
    padding: 50px;
    margin: 0 auto;
    margin-top: 50px;
`;

class UpdateUser extends Component {
    updateUser = event => {
        event.preventDefault()
        window.location.href = `/admin/users/update/${this.props.id}`
    }
    render() {
        return <Button variant="success" onClick={this.updateUser}>Update</Button>
    }
}

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
        return <Button variant="danger" onClick={this.deleteUser}>Delete</Button>
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
                <td><UpdateUser id={_id} /></td>
            </tr>
        );
    });

    return <Wrapper>
        <Table striped bordered hover size="sm"  responsive>
            <thead>
                <tr>
                    <th>Lp</th>
                    <th>email</th>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>address</th>
                    <th>phone</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {UsersTable}
            </tbody>
        </Table>
    </Wrapper>
};

export default UsersList;
