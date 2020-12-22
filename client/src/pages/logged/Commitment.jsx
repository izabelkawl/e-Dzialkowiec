import React, { Component } from "react";
import { Table, Form, Row, Col} from 'react-bootstrap';
import styled from "styled-components";

const Wrapper = styled.div` 
    width: 70vw;
    padding: 100px;
`

const Title = styled.h1`
    font-size: 32px
`;
const Button = styled.button`
    padding: 0 20px;
    color: white;
    background: #0071BC;
    border: 10px solid #0071BC;
`
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

{/* <p><b>Dla stałej powierzchni działki 240m2:</b> </p>
            <p>działka o powierzchni 240 m2 = 240 x 1,00 zł x = 240,00 zł</p>
            <p>Dla działki o powierzchni 240 m2 z wodomierzem roczna opłata wynosi 370,55 zł</p>
            <p>Dla działki o powierzchni 240 m2 bez wodomierza roczna opłata wynosi 478,55 zł</p>
            */}
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
                <tr>
                    <td>1</td>
                    <td>2020</td>
                    <td>23</td>
                    <td>120</td>
                    <td>358.55</td>
                    <td>31.12.2020</td>
                    <td>Nieopłacona</td>
                    <td><Button>Pobierz</Button></td>
                    
                </tr>
                <tr>
                    <td>1</td>
                    <td>2019</td>
                    <td>12</td>
                    <td>240</td>
                    <td>370,55</td>
                    <td>31.12.2019</td>
                    <td>Opłacona</td>
                    <td><Button>Pobierz</Button></td>
                </tr>
            </tbody>
        </Table>
        </Wrapper>
        )
    }
};

export default Commitment;
