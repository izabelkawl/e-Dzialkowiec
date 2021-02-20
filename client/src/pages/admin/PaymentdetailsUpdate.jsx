import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { updatePaymentdetailById } from '../../api';
import classnames from "classnames";
import { Form, Button, Row, Col } from 'react-bootstrap';
import {Title, BlueButtonStyle, Span } from '../constants';
import Media from 'react-media';

class PaymentdetailsUpdate extends Component {
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

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        };
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleUpdatePaymentdetail = e => {

        e.preventDefault();
        const { id, stable_price, membership_fee, water_advance, water_charge, energy_charge, garbage,transfer_title,  payment_date, account_number } = this.state
        const payload = { stable_price, membership_fee, water_advance, water_charge, energy_charge, garbage,transfer_title,  payment_date, account_number }
        this.props.updatePaymentdetailById(id, payload)
    };

    render() {
        const { errors, stable_price, membership_fee, water_advance, water_charge, energy_charge, garbage,transfer_title,  payment_date, account_number  } = this.state;

        return (
            <>
            <Title>Opłaty</Title>
                <Row>
                    <Col lg={{ span: 7 }}> 
                        <Form.Group>
                            <Row>
                                <Col lg={{ span: 6 }}>
                                    <Form.Label  htmlFor="stable_price">Opłata za m² działki:</Form.Label >
                                </Col>
                                <Col lg={{ span: 2, offset: 3 }}>
                                    <Form.Control
                                        onChange={this.onChange}
                                        error={errors.stable_price}
                                        id="stable_price"
                                        type="text"
                                        size="sm"
                                        className={classnames("", {
                                            invalid: errors.stable_price
                                        })}
                                        value={stable_price}
                                        ></Form.Control>
                                </Col>
                                <Media query="(min-width: 992px)" render={() => ('zł')}/>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col lg={{ span: 6 }}>
                                    <Form.Label  htmlFor="membership_fee">Składka członkowska: </Form.Label >
                                    <Span>{errors.membership_fee}</Span>
                                </Col>
                                <Col lg={{ span: 2, offset: 3 }}>
                                    <Form.Control
                                        onChange={this.onChange}
                                        error={errors.membership_fee}
                                        id="membership_fee"
                                        type="text"
                                        size="sm"
                                        className={classnames("", {
                                            invalid: errors.membership_fee
                                        })}
                                        value={membership_fee}
                                        ></Form.Control>
                                </Col>
                                <Media query="(min-width: 992px)" render={() => ('zł')}/>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col lg={{ span: 6 }}>
                                    <Form.Label  htmlFor="water_advance">Zaliczka wodna: </Form.Label >
                                    <Span>{errors.water_advance}</Span>
                                </Col>
                                <Col lg={{ span: 2, offset: 3 }}>
                                    <Form.Control
                                        onChange={this.onChange}
                                        error={errors.water_advance}
                                        id="water_advance"
                                        type="text"
                                        size="sm"
                                        className={classnames("", {
                                            invalid: errors.water_advance
                                        })}
                                        value={water_advance}
                                        ></Form.Control>
                                </Col>
                                <Media query="(min-width: 992px)" render={() => ('zł')}/>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col lg={{ span: 6 }}>
                                    <Form.Label  htmlFor="water_charge">Opłata wodna: </Form.Label >
                                    <Span>{errors.water_charge}</Span>
                                </Col>
                                <Col lg={{ span: 2, offset: 3 }}>
                                    <Form.Control
                                        onChange={this.onChange}
                                        error={errors.water_charge}
                                        id="water_charge"
                                        type="text"
                                        size="sm"
                                        className={classnames("", {
                                            invalid: errors.water_charge
                                        })}
                                        value={water_charge}
                                    ></Form.Control>
                                </Col>
                                <Media query="(min-width: 992px)" render={() => ('zł')}/>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col lg={{ span: 6 }}>
                                    <Form.Label  htmlFor="energy_charge">Opłata energetyczna: </Form.Label >
                                    <Span>{errors.energy_charge}</Span>
                                </Col>
                                <Col lg={{ span: 2, offset: 3 }}>
                                    <Form.Control
                                        onChange={this.onChange}
                                        error={errors.energy_charge} 
                                        type="text"
                                        size="sm"
                                        id="energy_charge"
                                        className={classnames("", {
                                            invalid: errors.energy_charge
                                        })}
                                        value={energy_charge}>
                                    </Form.Control>
                                </Col>
                                <Media query="(min-width: 992px)" render={() => ('zł')}/>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col lg={{ span: 6 }}>
                                    <Form.Label htmlFor="garbage">Śmieci: </Form.Label >
                                    <Span>{errors.garbage}</Span>
                                </Col>
                                <Col lg={{ span: 2, offset: 3 }}>
                                    <Form.Control
                                        onChange={this.onChange}
                                        error={errors.garbage}
                                        type="text"
                                        id="garbage"
                                        size="sm"
                                        className={classnames("", {
                                        invalid: errors.garbage
                                        })}value={garbage}>
                                    </Form.Control>
                                </Col>
                                <Media query="(min-width: 992px)" render={() => ('zł')}/>
                            </Row>
                        </Form.Group>
                     </Col>
                     <Media query="(max-width: 992px)" render={() =>
                            (
                             <Col lg={{ span: 6 }}><hr></hr></Col>
                            )}
                        /> 
                    <Col lg={{ span: 5 }}>
                        <b>Dla stałej powierzchni działki 240m2:</b> 
                        <p>działka o powierzchni 240 m2 = 240 x 1,00 zł x = 240,00 zł</p>
                        <hr></hr>
                        <Form>
                            <Form.Group>
                                <Row>
                                    <Col lg={5}>
                                        <Form.Label  htmlFor="transfer_title">Tytuł opłaty: </Form.Label >
                                    </Col>
                                    <Col lg={{ span: 6 }}>
                                        <Form.Control
                                            onChange={this.onChange}
                                            error={errors.transfer_title}
                                            type="text"
                                            size="sm"
                                            id="transfer_title"
                                            className={classnames("", {
                                                invalid: errors.transfer_title
                                            })}value={transfer_title}
                                        ></Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col lg={5}>
                                        <Form.Label  htmlFor="payment_date">Termin płatności: </Form.Label>
                                    </Col>
                                    <Col lg={{ span: 6 }}>
                                        <Form.Control
                                            onChange={this.onChange}
                                            error={errors.payment_date}
                                            type="date"
                                            size="sm"
                                            id="payment_date"
                                            className={classnames("", {
                                                invalid: errors.payment_date
                                            })}value={payment_date}
                                        ></Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col lg={5}>
                                        <Form.Label  htmlFor="account_number">Konto: </Form.Label >
                                    </Col>
                                    <Col lg={{ span: 6 }}>
                                        <Form.Control    
                                            onChange={this.onChange}
                                            error={errors.account_number}
                                            type="text"
                                            size="sm"
                                            id="account_number"
                                            className={classnames("", {
                                                invalid: errors.water_charge
                                            })}value={account_number}
                                        ></Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <br></br>
                        </Form>
                    </Col>
                    <Col>
                        <Button size="sm"style={BlueButtonStyle} type="submit" onClick={this.handleUpdatePaymentdetail}>Zapisz</Button>
                    </Col>
                </Row>
            </>
        );
    };
};

PaymentdetailsUpdate.propTypes = {
    updatePaymentdetailById: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { updatePaymentdetailById }
)(withRouter( PaymentdetailsUpdate));