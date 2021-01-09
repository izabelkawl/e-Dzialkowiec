import React, { Component } from "react";
import { Table, Form, Col, Row, Button } from 'react-bootstrap';
import { List,Title,  BlueButtonStyle, RedButtonStyle } from '../constants';

class Management extends Component {
    render() {
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
                                        value="1"
                                        
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
                                        value="6"
                                        
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
                                        value="108"
                                        
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
                                        value="30"
                                        
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
                                        value="20"
                                        
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
                                        value="74,55"
                                        
                                    />
                                </Col>zł
                            </Row>
                            
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col sm={7}>
                                    <Form.Label htmlFor="email">Termin płatności
                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 4 }}>
                                    <Form.Control
                                        type="date"
                                    />
                                </Col>
                            </Row>
                            
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col sm={7}>
                                    <Form.Label htmlFor="email">Konto
                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 4 }}>
                                    <Form.Control
                                        type="text"
                                        value="1234 1234 1234 1234 1234"
                                    />
                                </Col>
                            </Row>
                            
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col sm={7}>
                                    <Form.Label htmlFor="email">Tytuł przelewu(lub w pliku fakturze z daty i działki)
                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 4 }}>
                                    <Form.Control
                                        type="text"
                                        value="2020 / nr działki"
                                    />
                                </Col>
                            </Row>
                            
                        </Form.Group>
                             
    <Button style={BlueButtonStyle} >Zapisz</Button>               
                    </Form>
                    </Col>
                <Col sm={{ span: 5 }}>
                                        <b>Dla stałej powierzchni działki 240m2:</b> 
                                        <p>działka o powierzchni 240 m2 = 240 x 1,00 zł x = 240,00 zł</p>
                                        <hr></hr>
                    <Form>
                        <Form.Group><Form.Label><b>Wzór upomnienia</b></Form.Label>
                        <Form.Control as="textarea" rows={6} value="Szanowni Państwo
    Zarząd ROD Wisła w Rzeszowie pragnie przypomnieć o opłacie ogrodowej za 2020 r. Wysokość opłat, które należy wnieść, można sprawdzić na naszej stronie logując się na swoje konto.
    Pozdrawiamy zarząd ROW Rzeszów"/>
    </Form.Group>
                        
    <Button style={BlueButtonStyle}>Zapisz</Button>
                    </Form>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col>
                    <Button style={RedButtonStyle} href="/admin/finance/create">Dodaj płatność</Button>
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
            <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Lp</th>
                    <th>User</th>
                    <th>Numer działki</th>
                    <th>Powierzchnia</th>
                    <th>Kwota</th>
                    <th>Data wpłaty</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>sdfdddddddddds</td>
                    <td>sdfs</td>
                    <td>sdfs</td>
                    <td> 234</td>
                    <td> <Form.Control
                                        type="date"
                                    /></td>
                    <td><Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">Wybierz..</option>
        <option value="1">Opłacona</option>
        <option value="2">Nieopłacona</option>
       
      </Form.Control></td>
     <td> <Button style={BlueButtonStyle} >Zapisz</Button></td>
                       
                   
                </tr>
                <tr>
                    <td>2</td>
                    <td>sdfs</td>
                    <td>sdfs</td>
                    <td>sdfs</td>
                    <td> 234</td>
                    <td> <Form.Control
                                        type="date" 
                                    /></td>
                    <td><Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">Wybierz..</option>
        <option value="1">Opłacona</option>
        <option value="2">Nieopłacona</option>
       
      </Form.Control></td>
      <td> <Button style={BlueButtonStyle}  >Zapisz</Button></td>
                </tr>
                
                <tr>
                    <td>3</td>
                    <td>sdfs</td>
                    <td>sdfs</td>
                    <td>sdfs</td>
                    <td> 234</td>
                    <td> <Form.Control
                                        type="date"
                                    /></td>
                  
                    <td><Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">Wybierz..</option>
        <option value="1">Opłacona</option>
        <option value="2">Nieopłacona</option>
       
      </Form.Control></td>
      
      <td> <Button style={BlueButtonStyle} >Zapisz</Button></td>
                    
                </tr>
                <tr>
                    <td>4</td>
                    <td>sdfs</td>
                    <td>sdfs</td>
                    <td>sdfs</td>
                   <td> 234</td>
                   <td> <Form.Control
                                        type="date"
                                    /></td>
                    <td><Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">Wybierz..</option>
        <option value="1">Opłacona</option>
        <option value="2">Nieopłacona</option>
       
      </Form.Control></td>
      <td> <Button style={BlueButtonStyle} >Zapisz</Button></td>
                </tr>
            </tbody>
        </Table>
        </Col>
        </Row>
        <Button style={BlueButtonStyle} >Wyślij upomnienie</Button>
        </List>
        )
    }
};

export default Management;
