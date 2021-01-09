import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertPaymentdetail } from "../../api/index";
import { Form, Button }from 'react-bootstrap';
import {Title, Wrapper, BlueButtonStyle, RedButtonStyle, Label, Span} from '../constants';
import classnames from "classnames";

class PaymentdetailsInsert extends Component {
    constructor() {
        super()

        this.state = {
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

    onSubmit = e => {

        e.preventDefault();
        const newPaymentdetail = {

            stable_price: this.state.stable_price,
            membership_fee: this.state.membership_fee,
            water_advance: this.state.water_advance,
            water_charge: this.state.water_charge,
            energy_charge: this.state.energy_charge,
            garbage: this.state.garbage,
            transfer_title: this.state.transfer_title,
            payment_date: this.state.payment_date,
            account_number: this.state.account_number,
        };
        this.props.insertPaymentdetail(newPaymentdetail, this.props.history)
    };

    render() {
        const { errors } = this.state;
        return (
            <Wrapper>
                <Title>Przelicznik</Title>
                <Form noValidate onSubmit={this.onSubmit}>
                    <Label htmlFor="stable_price">Powierzchnia działki (m2*przelicznik):</Label>
                    <Span>{errors.stable_price}
                    {errors.stable_priceexists}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.stable_price}
                        error={errors.stable_price}
                        id="stable_price"
                        type="text"
                        className={classnames("", {
                            invalid: errors.stable_price
                        })}
                    ></Form.Control>

                    <Label htmlFor="membership_fee">Składka członkowska: </Label>
                    <Span>{errors.membership_fee}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.membership_fee}
                        error={errors.membership_fee}
                        type="text"
                        id="membership_fee"
                        className={classnames("", {
                            invalid: errors.membership_fee
                        })}
                    ></Form.Control>

                    <Label htmlFor="water_advance">Zaliczka wodna (działka bez wodomierza): </Label>
                    <Span>{errors.water_advance}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.water_advance}
                        error={errors.water_advance}
                        type="text"
                        id="water_advance"
                        className={classnames("", {
                            invalid: errors.water_advance
                        })}
                        ></Form.Control>
                    <Label htmlFor="water_charge">Opłata wodna: </Label>
                    <Span>{errors.water_charge}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.water_charge}
                        error={errors.water_charge}
                        type="text"
                        id="water_charge"
                        className={classnames("", {
                            invalid: errors.water_charge
                        })}
                        ></Form.Control>
                    <Label htmlFor="energy_charge">Opłata energetyczna: </Label>
                    <Span>{errors.energy_charge}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.energy_charge} 
                        type="text"
                        id="energy_charge"
                        className={classnames("", {
                            invalid: errors.energy_charge
                        })}>
                    </Form.Control>

                    <Label htmlFor="garbage">Śmieci: </Label>
                    <Span>{errors.garbage}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.garbage}
                        type="text"
                        id="garbage"
                        className={classnames("", {
                        invalid: errors.garbage
                    })}>

                    </Form.Control>
                        <Label htmlFor="transfer_title">Tytuł opłaty: </Label>
                    <Span>{errors.transfer_title}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.transfer_title}
                        error={errors.transfer_title}
                        type="text"
                        id="transfer_title"
                        className={classnames("", {
                            invalid: errors.transfer_title
                        })}
                        ></Form.Control>
                    <Label htmlFor="payment_date">Termin płatności: </Label>
                    <Span>{errors.payment_date}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.payment_date}
                        error={errors.payment_date}
                        type="text"
                        id="payment_date"
                        className={classnames("", {
                            invalid: errors.payment_date
                        })}
                        ></Form.Control>
                    <Label htmlFor="account_number">Konto: </Label>
                    <Span>{errors.account_number}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.account_number}
                        error={errors.account_number}
                        type="text"
                        id="account_number"
                        className={classnames("", {
                            invalid: errors.water_charge
                        })}
                        ></Form.Control>
                    <br></br>
                    <Button style={RedButtonStyle} href={'/admin/finances/list'}>Zamknij</Button>{' '}
                    <Button style={BlueButtonStyle} type="submit">Dodaj</Button>
                    </Form>
            </Wrapper>
        )
    }
}

PaymentdetailsInsert.propTypes = {
    insertPaymentdetail: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { insertPaymentdetail }
)(withRouter(PaymentdetailsInsert));