import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { Table, Button, Form, Col, Row } from 'react-bootstrap';
import { List, BlueButtonStyle, RedButtonStyle } from '../constants';
import styled from 'styled-components';

const Container = styled.div`
    width: 30%;
    padding-bottom: 30px
`

class UpdateAllotment extends Component {
    updateAllotment = event => {
        event.preventDefault()

        window.location.href = `/admin/allotments/update/${this.props.id}`
    }
    render() {
        return <Button style={BlueButtonStyle} onClick={this.updateAllotment}>Edytuj</Button>
    }
}

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
        }
    }
    render() {
        return <Button style={RedButtonStyle} onClick={this.deleteAllotment}>Usuń</Button>
    }
}

class AllotmentsList extends Component {
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
const Allotments = () => {
    const [allotments, setAllotments] = useState([]);
    useEffect(() => {
        const requestAllotmentsList = async () => {
            const allotmentsList = await api.getAllAllotments();
            const { data } = allotmentsList;
            setAllotments(data.data);
        };
        requestAllotmentsList();
    }, []); 

    const AllotmentsTable = allotments.map((allotment, index) => {
        
        const { _id,number, allotment_width, allotment_length, price, status, user_id } = allotment;

        // Find by number, status or User
        const n = JSON.stringify({ number, status, user_id })
        const search = n.includes(this.state.inputValue)
        
        if(search === true){
        return (
            <tr key={_id}>
                <td>{number}</td>
                <td>{allotment_width}</td>
                <td>{allotment_length}</td>
                <td>{price}</td>
                <td>{status}</td>
                <td>{user_id}</td>
                <td><UpdateAllotment id={_id} /></td>
                <td><DeleteAllotment id={_id} /></td>
            </tr>
        )
        }
    });

    return  <Table striped bordered hover size="sm" responsive>
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
}
return <List>
            <Row>
            <Col>
                <Button style={BlueButtonStyle} href="/admin/allotments/create" >Dodaj działkę</Button>
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
        <Allotments/>
        </List>
}
}

export default AllotmentsList;
