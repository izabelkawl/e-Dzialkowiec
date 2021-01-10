import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { Table, Form, Col, Row, Button } from 'react-bootstrap';
import { List,  BlueButtonStyle, RedButtonStyle } from '../constants';
import PaymentdetailsUpdate from './PaymentdetailsUpdate';

class StatusUpdateBtn extends Component {
    updateFinance = event => {
        event.preventDefault()

        window.location.href = `/admin/finances/update/${this.props.id}`
    }
    render() {
        return <Button style={BlueButtonStyle} onClick={this.updateFinance}>Zmień status</Button>
    }
}
class StatusDeleteBtn extends Component {
    deleteFinance = event => {
        event.preventDefault()
        if (
            window.confirm(
                `Chcesz usunąć tą płatność?`,
            )
        ) {
            api.deleteFinanceById(this.props.id)
            window.location.reload()
        }
    }
    render() {
        return <Button style={RedButtonStyle} onClick={this.deleteFinance}>Usuń</Button>
    }
}

class Management extends Component {

    render() {
        const FinancesList = () => {
            const [finances, setFinances] = useState([]);
            useEffect(() => {
                const requestFinancesList = async () => {
                    const financesList = await api.getAllFinances();
                    const { data } = financesList;
                    setFinances(data.data);
                };
                requestFinancesList();
            }, []);

        const FinancesTable = finances.map((finance, index) => {
            const { _id, allotment_number,owner, title, area, charge, term, status  } = finance;
            return (
                <tr key={_id}>
                    <td>{allotment_number}</td>
                    <td>{owner}</td>
                    <td>{title}</td>
                    <td>{area}</td>
                    <td>{charge}</td>
                    <td>{term}</td>
                    <td>{status}</td>
                    <td><StatusUpdateBtn id={_id}/></td>
                    <td><StatusDeleteBtn id={_id}/></td>
                </tr>
            );
        })
        return (
        <Table striped bordered hover size="sm" responsive>
        <thead>
            <tr>
                <th>Numer</th>
                <th>Posiadacz</th>
                <th>Tytuł</th>
                <th>Powierzchnia</th>
                <th>Należność</th>
                <th>Termin</th>
                <th>Status</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
                {FinancesTable}
        </tbody>
    </Table>)
    }
        return (
        <List>
           <PaymentdetailsUpdate/>
            <hr></hr>
            <Row>
                <Col>
                    <Button style={RedButtonStyle} href="/admin/finances/create">Dodaj płatność</Button>
                </Col>
                <Col> <Form.Control
                        type="text"
                        placeholder="FIltruj.."
                    />
                </Col>   
            </Row>
            <br></br>
            <Row>
                <Col>
            <FinancesList/>
        </Col>
        </Row>
        </List>
        )
    }
};

export default Management
