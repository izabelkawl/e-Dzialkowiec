import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { Table, Button, Form, Col, Row } from 'react-bootstrap';
import { List, BlueButtonStyle, RedButtonStyle } from '../constants';
import Media from 'react-media';

class UpdateAllotment extends Component {
    updateAllotment = event => {
        event.preventDefault()

        window.location.href = `/admin/allotments/update/${this.props.id}`
    };
    render() {
        return <Button size="sm"style={BlueButtonStyle} onClick={this.updateAllotment}>Edytuj</Button>
    };
};

class DeleteAllotment extends Component {
    deleteAllotment = event => {
        event.preventDefault()
        if (
            window.confirm(
                `Czy na pewno chcesz usunąć tą działkę?`,
            )
        ) {
            api.deleteAllotmentById(this.props.id)
            window.location.reload()
        }else{
            return ""
        };
    };

    render() {
        return <Button size="sm"style={RedButtonStyle} onClick={this.deleteAllotment}>Usuń</Button>
    };
};

class AllotmentsList extends Component {
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

    const Allotments = () => {
        const [allotments, setAllotments] = useState([]);
        const [userss, setUsers] = useState([]);
        useEffect(() => {
            const requestAllotmentsList = async () => {
                const allotmentsList = await api.getAllAllotments();
                const { data } = allotmentsList;
                setAllotments(data.data);
            }; 

            const userName = async () => {
                const userList = await api.getAllUsers()
                const {data } = userList
                setUsers(data.data);
            };
    
            requestAllotmentsList();
            userName();
        }, []); 

        const AllotmentsTable = allotments.map((allotment, index) => {
            const { _id,number, allotment_width, allotment_length, price, status, user_id } = allotment;
            const username = userss.map((user, index) => {
                const { _id, firstname, lastname } = user
                if( _id === user_id){
                    return firstname+' ' +lastname
                } else {
                    return null
                }
            });
            // Find by number, status or User
            const n = JSON.stringify({ number, status });
            const search = n.toLowerCase().includes(this.state.inputValue.toLowerCase());
            
            if(search === true){
                return (
                    <tr key={_id}>
                        <td>{number}</td>
                        <td>{allotment_width}</td>
                        <td>{allotment_length}</td>
                        <td>{price}</td>
                        <td>{status}</td>
                        <td>{user_id !== "Brak"? username : user_id }</td>
                        <td><UpdateAllotment id={_id} value={username}/></td>
                        <td><DeleteAllotment id={_id} /></td>
                    </tr>
                )
            } else {
                return ""
            }
        });

    return (
        <Table striped bordered hover size="sm" responsive>
            <thead>
                <tr>
                    <th>Numer</th>
                    <th>Szerokość</th>
                    <th>Długość</th>
                    <th>Cena</th>
                    <th>Status</th>
                    <th>Użytkownik</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {AllotmentsTable}
            </tbody>
        </Table>
    )};

    return (
        <List>
            <Row>
                <Col lg={3}>
                    <Button size="sm"block style={BlueButtonStyle} href="/admin/allotments/create">
                        Dodaj działkę
                    </Button>
                </Col>
                <Media query="(max-width: 992px)" render={() =>
                            (
                             <Col lg={{ span: 6 }}><p></p></Col>
                            )}
                        /> 
                <Col lg={{ span: 6, offset: 3}}>
                    <Form.Control
                        value={this.state.inputValue}
                        onChange={this.updateInputValue}
                        id="inputValue"
                        placeholder="Filtruj.."
                    />
                </Col>   
            </Row>
            <br></br>
            <Allotments/>
        </List>
    )};
};

export default AllotmentsList;
