import React, { Component } from "react";
import api from '../../api';
import classnames from "classnames";
import { Table, Form, Row, Col, Button} from 'react-bootstrap';
import styled from "styled-components";
import Wrapper from '../../components/Wrapper/Wrapper';
import Title from '../../components/Title'
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './pdf.jsx';
import { BlueButtonStyle } from '../constants';
const Label = styled(Form.Label)`
    margin-top: 8px;
`
class Commitment extends Component {

        constructor(props) {
            super(props)
    
            this.state = {
                id: '5ffa2f4e205ae300946933d7',
                stable_price: '',
                membership_fee: '',
                water_advance: '',
                water_charge: '',
                energy_charge: '',
                garbage: '',
                transfer_title: '',
                payment_date: '',
                account_number: '',
                errors: {}
            }
        }
        componentDidMount = async () => {
            const { id } = this.state
            const paymentdetail = await api.getPaymentdetailById(id)
    
            this.setState({
                stable_price: paymentdetail.data.data.stable_price,
                membership_fee: paymentdetail.data.data.membership_fee,
                water_advance: paymentdetail.data.data.water_advance,
                water_charge: paymentdetail.data.data.water_charge,
                energy_charge: paymentdetail.data.data.energy_charge,
                garbage: paymentdetail.data.data.garbage,
                transfer_title: paymentdetail.data.data.transfer_title,
                payment_date: paymentdetail.data.data.payment_date,
                account_number: paymentdetail.data.data.account_number,
            })
        }
    
        render() {
            const { errors, stable_price, membership_fee, water_advance, water_charge, energy_charge, garbage,transfer_title,  payment_date, account_number  } = this.state;
            
        return (
        <Wrapper>
             <Title>Jak obliczana jest składka roczna</Title>
            <hr></hr>
            <Form >
                    <Form.Group>
                            <Row>
                                <Col sm={{ span: 6 }}>
                                    <Label htmlFor="email">Powierzchnia działki (m2*przelicznik)
                                    </Label>
                                </Col>
                                <Col sm={{ span: 2, offset: 3 }}>
                                     <Form.Control 
                                value={stable_price}
                                disabled
                                ></Form.Control>
                                </Col >
                                <Col sm={{ span: 1 }}>
                                   <Label>zł</Label> 
                                </Col >
                                
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            
                            <Row>
                                <Col sm={{ span: 6 }}>
                                    <Label htmlFor="email">Składka członkowska
                        </Label>
                                </Col>
                                <Col sm={{ span: 2, offset: 3 }}>
                                <Form.Control
                                value={membership_fee}
                                disabled
                                ></Form.Control>
                                </Col><Col sm={{ span: 1 }}>
                                <Label>zł</Label> 
                                </Col >
                            </Row>
                        </Form.Group>
                        
                        <Form.Group>
                            <Row>
                                <Col sm={6}>
                                    <Label htmlFor="email">Zaliczka wodna
                        </Label>
                                </Col>
                                <Col sm={{ span: 2, offset: 3 }}>
                                <Form.Control
                            value={water_advance}
                            disabled
                            ></Form.Control>
                                </Col><Col sm={{ span: 1 }}>
                                <Label>zł</Label> 
                                </Col >
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col sm={6}>
                                    <Label htmlFor="email">Opłata wodna
                        </Label>
                                </Col>
                                <Col sm={{ span: 2, offset: 3 }}>
                                <Form.Control
                                value={water_charge}
                                disabled
                            ></Form.Control>
                                </Col><Col sm={{ span: 1 }}>
                                <Label>zł</Label> 
                                </Col >
                            </Row>
                        </Form.Group> <Form.Group>
                            <Row>
                                <Col sm={6}>
                                    <Label htmlFor="email">Opłata energetyczna
                        </Label>
                                </Col>
                                <Col sm={{ span: 2, offset: 3 }}>
                                <Form.Control
                                value={energy_charge}
                                disabled
                                >
                            </Form.Control>
                                </Col><Col sm={{ span: 1 }}>
                                <Label>zł</Label> 
                                </Col >
                            </Row>
                        </Form.Group> 
                        <Form.Group>
                            <Row>
                                <Col sm={6}>
                                    <Label htmlFor="email">Śmieci
                        </Label>
                                </Col>
                                <Col sm={{ span: 2, offset: 3 }}>
                                <Form.Control
                               value={garbage}
                               disabled
                               >
                            </Form.Control>
                                </Col><Col sm={{ span: 1 }}>
                                <Label>zł</Label> 
                                </Col >
                            </Row>
                            
                        </Form.Group>
                        <hr></hr>
</Form>

            <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Lp</th>
                    <th>Tytuł</th>
                    <th>Numer działki</th>
                    <th>Powierzchnia(m2)</th>
                    <th>Kwota</th>
                    <th>Termin zapłaty</th>
                    <th>Status</th>
                    <th>Faktura</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td>1</td>
                    <td>2020</td>
                    <td>23</td>
                    <td>120</td>
                    <td>358.55</td>
                    <td>31.12.2020</td>
                    <td>Nieopłacona</td>
                    <td>
                    <PDFDownloadLink document={<MyDocument />} fileName="faktura.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Ładowanie...' : <Button style={BlueButtonStyle}>Pobierz</Button>)}
    </PDFDownloadLink>
                        </td>
                    
                </tr>
                <tr>
                    <td>1</td>
                    <td>2019</td>
                    <td>12</td>
                    <td>240</td>
                    <td>370,55</td>
                    <td>31.12.2019</td>
                    <td>Opłacona</td>
                    <td> <PDFDownloadLink document={<MyDocument />} fileName="faktura.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Ładowanie...' :  <Button style={BlueButtonStyle}>Pobierz</Button>)}
    </PDFDownloadLink></td>
                </tr>
            </tbody>
        </Table>
        </Wrapper>
        )
    }
};
export default Commitment;
