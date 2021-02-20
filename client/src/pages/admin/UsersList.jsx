import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
import { List, RedButtonStyle, BlueButtonStyle, Title } from '../constants';

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
        };
    };

    render() {
        return <Button size="sm"style={RedButtonStyle} onClick={this.deleteUser}>Usuń</Button>
    };
};

class UpdateUser extends Component {
    updateUser = event => {
        event.preventDefault()
        window.location.href = `/admin/users/update/${this.props.id}`
    }
    render() {
        return <Button size="sm"style={BlueButtonStyle} onClick={this.updateUser}>Edytuj</Button>
    };
};

class UsersList extends Component {
    constructor(){
        super()

        this.state = {
            inputValue: '',
        };
    };
   
    updateInputValue = (evt) => {
        this.setState({
          inputValue: evt.target.value
        });
      };

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
        const search = n.toLowerCase().includes(this.state.inputValue.toLowerCase())
        
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
                    { this.props.auth.user.position === "Prezes Ogrodu" || this.props.auth.user.position === "Wiceprezes Ogrodu"
                        ? 
                        <>
                            <td><UpdateUser id={_id} /></td>
                            <td><DeleteUser id={_id} /></td>
                        </> 
                        : 
                        null }
                   
                </tr>
                )
        }else {
            return ""
        }
    });

    return (
        <Table striped bordered hover size="sm" responsive>
            <thead>
                <tr>
                    <th>Lp</th>
                    <th>Email</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Adres</th>
                    <th>Telefon</th>
                    <th>Stanowisko</th>
                    { this.props.auth.user.position === "Prezes Ogrodu" || this.props.auth.user.position === "Wiceprezes Ogrodu"
                        ?
                        <>
                            <th></th>
                            <th></th>
                        </>
                        :
                        null}
                </tr>
            </thead>
            <tbody>
                {UsersTable}
            </tbody>
        </Table>
    )};

    return (
        <List>
            <Row>
                <Col lg={6}>
                    <Title>Lista użytkowników</ Title>
                </Col>
                <Col lg={6}>
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
    )};
};

UsersList.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
)(UsersList);