import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { updatePaymentdetailById } from '../../api';
import classnames from "classnames";
import { Form, Button, Row, Col } from 'react-bootstrap';
import {Title, BlueButtonStyle, Span } from '../constants';

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleUpdatePaymentdetail = e => {

        e.preventDefault();
        const { id, stable_price, membership_fee, water_advance, water_charge, energy_charge, garbage,transfer_title,  payment_date, account_number } = this.state
        const payload = { stable_price, membership_fee, water_advance, water_charge, energy_charge, garbage,transfer_title,  payment_date, account_number }
        this.props.updatePaymentdetailById(id, payload)
    }

    render() {
        const { errors, stable_price, membership_fee, water_advance, water_charge, energy_charge, garbage,transfer_title,  payment_date, account_number  } = this.state;
        
        return (
            <div>
                <Title>Opłaty</Title>
                <Form.Group>
                    <Row>
                        <Col sm={{ span: 6 }}>
                            <Form.Label  htmlFor="stable_price">Numer:</Form.Label >
                        </Col>
                        <Col sm={{ span: 2, offset: 3 }}>
                            <Form.Control 
                                onChange={this.onChange}
                                error={errors.stable_price}
                                id="stable_price"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.stable_price
                                })}
                                value={stable_price}
                                ></Form.Control>
                        </Col >zł 
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col sm={{ span: 6 }}>
                            <Form.Label  htmlFor="membership_fee">Szerokość: </Form.Label >
                            <Span>{errors.membership_fee}</Span>
                        </Col>
                        <Col sm={{ span: 2, offset: 3 }}>
                            <Form.Control
                                onChange={this.onChange}
                                error={errors.membership_fee}
                                id="membership_fee"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.membership_fee
                                })}
                                value={membership_fee}
                                ></Form.Control>
                        </Col >zł 
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col sm={{ span: 6 }}>
                            <Form.Label  htmlFor="water_advance">Długość: </Form.Label >
                            <Span>{errors.water_advance}</Span>
                    </Col>
                    <Col sm={{ span: 2, offset: 3 }}>
                        <Form.Control
                            onChange={this.onChange}
                            error={errors.water_advance}
                            id="water_advance"
                            type="text"
                            className={classnames("", {
                                invalid: errors.water_advance
                            })}
                            value={water_advance}
                            ></Form.Control>
                    </Col >zł   
                </Row>
            </Form.Group>
            <Form.Group>
                    <Row>
                        <Col sm={{ span: 6 }}>
                            <Form.Label  htmlFor="water_charge">Cena: </Form.Label >
                            <Span>{errors.water_charge}</Span>
                        </Col>
                        <Col sm={{ span: 2, offset: 3 }}>
                            <Form.Control
                                onChange={this.onChange}
                                error={errors.water_charge}
                                id="water_charge"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.water_charge
                                })}
                                value={water_charge}
                            ></Form.Control>
                        </Col >zł 
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col sm={{ span: 6 }}>
                            <Form.Label  htmlFor="energy_charge">Opłata energetyczna: </Form.Label >
                            <Span>{errors.energy_charge}</Span>
                        </Col>
                        <Col sm={{ span: 2, offset: 3 }}>
                            <Form.Control
                                onChange={this.onChange}
                                error={errors.energy_charge} 
                                type="text"
                                id="energy_charge"
                                className={classnames("", {
                                    invalid: errors.energy_charge
                                })}
                                value={energy_charge}>
                            </Form.Control>
                        </Col >zł 
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col sm={{ span: 6 }}>
                            <Form.Label htmlFor="garbage">Śmieci: </Form.Label >
                            <Span>{errors.garbage}</Span>
                        </Col>
                        <Col sm={{ span: 2, offset: 3 }}>
                            <Form.Control
                                onChange={this.onChange}
                                error={errors.garbage}
                                type="text"
                                id="garbage"
                                className={classnames("", {
                                invalid: errors.garbage
                                })}value={garbage}>
                            </Form.Control>
                        </Col >zł 
                    </Row>
                </Form.Group>
    </div>
        )
    }
}

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