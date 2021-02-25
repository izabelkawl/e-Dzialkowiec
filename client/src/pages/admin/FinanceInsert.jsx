import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import api, { insertFinance } from "../../api/index";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { List, Span, BlueButtonStyle, RedButtonStyle, Title, Container60 } from '../constants';
import { Link } from "react-router-dom";

class FinancesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allotment_number: '',
            owner: '',
            title: '',
            area: '',
            charge: '',
            term: '',
            account: '',
            status: '',

            id: this.props.match.params.id,
            number: '',
            allotment_width: '',
            allotment_length: '',
            user_id: '',
            
            name: '',
            errors: {}
        };
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        };
    };

    componentDidMount = async () => {
        const { id } = this.state
        const allotment = await api.getAllotmentById(id)
        const paymentdetails = await api.getPaymentdetailById('5ffa2f4e205ae300946933d7')
        
        this.setState({
            number: allotment.data.data.number,
            allotment_width: allotment.data.data.allotment_width,
            allotment_length: allotment.data.data.allotment_length,
            user_id: allotment.data.data.user_id,

            stable_price: paymentdetails.data.data.stable_price,
            membership_fee: paymentdetails.data.data.membership_fee,
            water_advance: paymentdetails.data.data.water_advance,
            water_charge: paymentdetails.data.data.water_charge,
            energy_charge: paymentdetails.data.data.energy_charge,
            garbage: paymentdetails.data.data.garbage,
            transfer_title: paymentdetails.data.data.transfer_title,
            payment_date: paymentdetails.data.data.payment_date,
            account_number: paymentdetails.data.data.account_number
        });
        const user = await api.getUserById(allotment.data.data.user_id)
        this.setState({
            name: user.data.data.firstname + ' ' + user.data.data.lastname,
        });
        
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {

        e.preventDefault();
        const newFinance = {
            
            allotment_number: this.state.number,
            owner: this.state.user_id,
            title: this.state.title,
            area: this.state.allotment_width * this.state.allotment_length,
            charge: this.state.charge,
            term: this.state.term,
            account: this.state.account_number,
            status: this.state.status
        };
        this.props.insertFinance(newFinance, this.props.history)
    };

    render() {

        const {  errors, name, account_number, number, allotment_width, allotment_length, user_id } = this.state;
        
        return (
            <Container60>
            <List >
                <Title>Tworzenie zobowiązania</Title>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4">Numer działki: </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                id="allotment_number"
                                type="text"
                                defaultValue={number}
                                readOnly>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4">Posiadacz: </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                type="text"
                                defaultValue={name}
                                readOnly>
                            </Form.Control>
                        </Col>
                        <Form.Control
                            hidden
                            id="owner"
                            type="text"
                            defaultValue={user_id}
                            readOnly>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="title" >Tytuł: </Form.Label>
                        <Col sm="8">
                        <Span>{errors.title}</Span>
                            <Form.Control
                                onChange={this.onChange}
                                id="title"
                                type="text"
                            ></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4">Powierzchnia: </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                id="area"
                                value={allotment_width * allotment_length}
                                type="text"
                                readOnly
                            ></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4">Należność: </Form.Label>
                        <Col sm="8">
                        <Span>{errors.charge}</Span>
                            <Form.Control
                                id="charge"
                                type="text"
                                onChange={this.onChange}
                            ></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4">Termin zapłaty: </Form.Label>
                        <Col sm="8">
                            <Span>{errors.term}</Span>
                            <Form.Control
                                id="term"
                                type="date"
                                onChange={this.onChange}
                            ></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4">Konto: </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                id="account"
                                type="text"
                                value={account_number}
                                onChange={this.onChange}
                                readOnly
                            ></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4">Status: </Form.Label>
                        <Col sm="8">
                            <Span>{errors.status}</Span>
                            <Form.Control
                                onChange={this.onChange}
                                as="select" 
                                value={this.state.status} 
                                id="status"
                                >
                                <option>Wybierz..</option> 
                                <option>Opłacona</option> 
                                <option>Nieopłacona</option> 
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Link to={'/admin/finances/list'}>
                        <Button size="sm"style={RedButtonStyle}>Powrót</Button>
                    </Link>
                    {' '}
                    <Button size="sm"style={BlueButtonStyle} type="submit">Stwórz</Button>
                </Form>
            </List>
            </Container60>
        );
    };
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { insertFinance }
)(withRouter(FinancesInsert));