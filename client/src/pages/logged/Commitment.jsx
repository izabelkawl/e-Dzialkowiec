import React, { Component } from "react";
import api from '../../api';
import { Form, Row, Col } from 'react-bootstrap';
import { Title, Label } from '../constants';
import FinancesTable from './FinanceTable';
import Media from 'react-media';
import styled from 'styled-components';
import bg from '../../app/img/bg.svg';

const Wrapper = styled.div` 
    padding: 20px;
    @media(min-width: 992px){
        padding: 100px;
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
        background-attachment: fixed;
    }
`;

const WrapperContainer = styled.div`
    @media(min-width: 992px){
        width: 60vw;
}
`;

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
            account_number: ''
        };
    };
    
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
        });
    };

    render() {
        const { stable_price, membership_fee, water_advance, water_charge, energy_charge, garbage } = this.state;
        
    return (
            <Wrapper>
                <WrapperContainer>
                <Title>Jak obliczana jest składka roczna</Title>
                <hr></hr>
                <Form>
                    <Form.Group>
                        <Row>
                            <Col sm={{ span: 6 }}>
                                <Label htmlFor="email">Opłata za m² działki</Label>
                                    </Col>
                            <Col sm={{ span: 2, offset: 3 }}>
                                <Form.Control 
                                    value={stable_price}
                                    disabled
                                ></Form.Control>
                                    </Col >
                                    <Media query="(min-width: 768px)" render={() => ('zł')}/>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col sm={{ span: 6 }}>
                                <Label htmlFor="email">Składka członkowska</Label>
                                    </Col>
                            <Col sm={{ span: 2, offset: 3 }}>
                                <Form.Control
                                    value={membership_fee}
                                    disabled
                                ></Form.Control>
                                    </Col>
                                    <Media query="(min-width: 768px)" render={() => ('zł')}/>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col sm={6}>
                                <Label htmlFor="email">Zaliczka wodna</Label>
                                    </Col>
                            <Col sm={{ span: 2, offset: 3 }}>
                                <Form.Control
                                    value={water_advance}
                                    disabled
                                ></Form.Control>
                                    </Col>
                                    <Media query="(min-width: 768px)" render={() => ('zł')}/>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col sm={6}>
                                <Label htmlFor="email">Opłata wodna</Label>
                                    </Col>
                            <Col sm={{ span: 2, offset: 3 }}>
                                <Form.Control
                                    value={water_charge}
                                    disabled
                                ></Form.Control>
                                    </Col>
                                    <Media query="(min-width: 768px)" render={() => ('zł')}/>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col sm={6}>
                                <Label htmlFor="email">Opłata energetyczna</Label>
                                    </Col>
                            <Col sm={{ span: 2, offset: 3 }}>
                                <Form.Control
                                    value={energy_charge}
                                    disabled
                                ></Form.Control>
                                    </Col>
                                    <Media query="(min-width: 768px)" render={() => ('zł')}/>
                        </Row>
                    </Form.Group> 
                    <Form.Group>
                        <Row>
                            <Col sm={6}>
                                <Label htmlFor="email">Śmieci</Label>
                                    </Col>
                            <Col sm={{ span: 2, offset: 3 }}>
                                <Form.Control
                                    value={garbage}
                                    disabled
                                ></Form.Control>
                                    </Col>
                                    <Media query="(min-width: 768px)" render={() => ('zł')}/>
                        </Row>
                    </Form.Group>
                    <hr></hr>
                </Form>
                <FinancesTable/>
                <p>*Status zostanie zmieniony po weryfikacji płatności</p>
                </WrapperContainer>
            </Wrapper>
        );
    };
};

export default Commitment;
