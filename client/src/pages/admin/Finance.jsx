import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { Table, Form, Col, Row, Button } from 'react-bootstrap';
import { List,Title,  BlueButtonStyle, RedButtonStyle } from '../constants';

class StatusUpdateBtn extends Component {
    updateFinance = event => {
        event.preventDefault()

        window.location.href = `/admin/finances/update/${this.props.id}`
    }
    render() {
        return <Button style={BlueButtonStyle} onClick={this.updateFinance}>Zmień status</Button>
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
            const { _id, allotment_number, title, area, charge, term, status  } = finance;
            return (
                <tr key={_id}>
                    <td>{allotment_number}</td>
                    <td>{title}</td>
                    <td>{area}</td>
                    <td>{charge}</td>
                    <td>{term}</td>
                    <td>{status}</td>
                    <td><StatusUpdateBtn id={_id}/></td>
                </tr>
            );
        })
        return (
        <Table striped bordered hover size="sm" responsive>
        <thead>
            <tr>
                <th>Numer</th>
                <th>Tytuł</th>
                <th>Powierzchnia</th>
                <th>Nalężność</th>
                <th>Termin</th>
                <th>Status</th>
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
             <Title>Opłaty</Title>
< br/>
            <Row>
            <Col sm={{ span: 7 }}> 
            <Form noValidate onSubmit={this.onSubmit}>
                    <Form.Group>
                            
                            <Row>
                                <Col sm={{ span: 6 }}>
                                    <Form.Label htmlFor="email">Powierzchnia działki (m2*przelicznik)
                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 2, offset: 3 }}>
                                    <Form.Control
                                        type="text"
                                        
                                    />
                                </Col >zł
                                
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            
                            <Row>
                                <Col sm={{ span: 6 }}>
                                    <Form.Label htmlFor="email">Składka członkowska
                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 2, offset: 3 }}>
                                    <Form.Control
                                        type="text"
                                        
                                    />
                                </Col>zł
                            </Row>
                        </Form.Group>
                        
                        <Form.Group>
                            <Row>
                                <Col sm={6}>
                                    <Form.Label htmlFor="email">Zaliczka wodna (działka bez wodomierza)
                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 2, offset: 3 }}>
                                    <Form.Control
                                        type="text"
                                        
                                    />
                                </Col>zł
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col sm={6}>
                                    <Form.Label htmlFor="email">Opłata wodna
                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 2, offset: 3 }}>
                                    <Form.Control
                                        type="text"
                                    />
                                </Col>zł
                            </Row>
                        </Form.Group> <Form.Group>
                            <Row>
                                <Col sm={6}>
                                    <Form.Label htmlFor="email">Opłata energetyczna
                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 2, offset: 3 }}>
                                    <Form.Control
                                        type="text"
                                    />
                                </Col>zł
                            </Row>
                        </Form.Group> 
                        <Form.Group>
                            <Row>
                                <Col sm={6}>
                                    <Form.Label htmlFor="email">Śmieci
                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 2, offset: 3 }}>
                                    <Form.Control
                                        type="text"
                                        
                                    />
                                </Col>zł
                            </Row>
                        </Form.Group>
                    </Form>
    <Button style={BlueButtonStyle} >Zapisz</Button> 
                    </Col>
                <Col sm={{ span: 5 }}>
                                        <b>Dla stałej powierzchni działki 240m2:</b> 
                                        <p>działka o powierzchni 240 m2 = 240 x 1,00 zł x = 240,00 zł</p>
                                        <hr></hr>
                                        <Form>
                                        <Form.Group>
                            <Row>
                                <Col sm={5}>
                                    <Form.Label htmlFor="email">Termin płatności
                                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 6 }}>
                                    <Form.Control
                                        type="date"
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col sm={5}>
                                    <Form.Label htmlFor="email">Tytuł opłaty
                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 6 }}>
                                    <Form.Control
                                        type="text"
                                        placeholder="2020 / nr działki"
                                    />
                                </Col>
                            </Row>
                            
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col sm={5}>
                                    <Form.Label htmlFor="email">Konto
                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 6 }}>
                                    <Form.Control
                                        type="text"
                                        placeholder="1234 1234 1234 1234 1234"
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                     </Form>
                </Col>
            </Row>
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
        <Button style={BlueButtonStyle} >Wyślij upomnienie</Button>
        </List>
        )
    }
};

export default Management
