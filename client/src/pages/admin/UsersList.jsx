import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
import { List, RedButtonStyle, BlueButtonStyle } from '../constants';
import Title from '../../components/Title';

class DeleteUser extends Component {
    deleteUser = event => {
        event.preventDefault()
        if (
            window.confirm(
                `Czy na pewno chcesz usunąć tego użytkownika?`,
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
class UpdateUser extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/admin/users/update/${this.props.id}`
    }
    render() {
        return <Button style={BlueButtonStyle} onClick={this.updateUser}>Edytuj</Button>
    }
}
class UsersList extends Component {
    constructor(){
        super()
        this.state = {
            inputValue: '',
        }
    }
   
    updateInputValue = (evt) => {
        this.setState({
          inputValue: evt.target.value
        });
      }

    render() {

        const UsersPanel= () => {
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
        const { _id, email, firstname, lastname, address, phone, position } = user;

        const n = JSON.stringify({ email, firstname, lastname, address, phone, position })
        const search = n.includes(this.state.inputValue)
        
        if(search === true){
        return (
            <tr key={_id}>
                <td>{index + 1}</td>
                <td>{email}</td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{address}</td>
                <td>{phone}</td>
                <td>{position}</td>
                <td><DeleteUser id={_id} /></td>
                <td><UpdateUser id={_id} /></td>
            </tr>
            )
        }
    });

    return   <Table striped bordered hover size="sm"  responsive>
            <thead>
                <tr>
                    <th>Lp</th>
                    <th>Email</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Adres</th>
                    <th>Telefon</th>
                    <th>Stanowisko</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {UsersTable}
            </tbody>
        </Table>
   
    }
    return <List><Row>
    <Col>
        <Title>Lista użytkowników</ Title>
    </Col>
    <Col>
            <Form.Control
                value={this.state.inputValue}
                onChange={this.updateInputValue}
                id="inputValue"
                placeholder="Filtruj.."
            />
        </Col>   
    </Row>
                    <br></br>
                <UsersPanel/>
            </List>
    }
}
export default UsersList;
