import React, { Component } from "react";
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
    render() {
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
                                    <Form.Control disabled
                                        type="text"
                                        value="120"
                                        
                                    />
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
                                    <Form.Control disabled
                                        type="text"
                                        value="6"
                                        
                                    />
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
                                    <Form.Control disabled
                                        type="text"
                                        value="108"
                                        
                                    />
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
                                    <Form.Control disabled
                                        type="text"
                                        value="30"
                                        
                                    />
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
                                    <Form.Control disabled
                                        type="text"
                                        value="20"
                                        
                                    />
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
                                    <Form.Control disabled
                                        type="text"
                                        value="74,55"
                                        
                                    />
                                </Col><Col sm={{ span: 1 }}>
                                <Label>zł</Label> 
                                </Col >
                            </Row>
                            
                        </Form.Group>
                        <hr></hr>
                        <Form.Group>
                            <Row>
                                <Col sm={6}>
                                    <Label htmlFor="email">Suma
                        </Label>
                                </Col>
                                <Col sm={{ span: 2, offset: 3 }}>
                                    <Form.Control disabled
                                        type="text"
                                        value="358.55"
                                        
                                    />
                                </Col><Col sm={{ span: 1 }}>
                                <Label>zł</Label> 
                                </Col >
                            </Row>
                            
                        </Form.Group>
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
