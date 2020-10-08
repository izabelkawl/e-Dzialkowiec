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
  align-items: center;
  justify-content: space-between;
  width: 60%;
  padding: 1vh 1vw;
  border-bottom: 1px dashed #ccc;
  background-color:white;
`;
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`;

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`;;


class UpdateUser extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/users/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
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
        return <Delete onClick={this.deleteUser}>Delete</Delete>
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
            <ListItem key={_id}>
                <h5>{index + 1}</h5>
                <h5>{email}</h5>
                <h5>{firstname}</h5>
                <h5>{lastname}</h5>
                <h5>{address}</h5>
                <h5>{phone}</h5>
                <DeleteUser id={_id} />
                <UpdateUser id={_id} />
            </ListItem>
        );
    });

    return <Wrapper>{UsersTable}</Wrapper>;
};

export default UsersList;
