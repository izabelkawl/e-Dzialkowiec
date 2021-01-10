import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import api, { insertFinance } from "../../api/index";
import { Form }from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Wrapper,Span,  BlueButtonStyle, RedButtonStyle, Title } from '../constants';

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

    componentDidMount = async () => {
        const { id } = this.state
        const allotment = await api.getAllotmentById(id)

        this.setState({
            number: allotment.data.data.number,
            allotment_width: allotment.data.data.allotment_width,
            allotment_length: allotment.data.data.allotment_length,
            user_id: allotment.data.data.user_id,
        })
    }

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
            account: this.state.account,
            status: this.state.status
        };
        this.props.insertFinance(newFinance, this.props.history)
    };

    render() {
        const {  number, allotment_width, allotment_length, price, status, user_id } = this.state;
        const { errors } = this.state;
      
        return (
            <Wrapper>
                <Title>Tworzenie zobowiązania</Title>
        <Form onSubmit={this.onSubmit}>
            <Form.Group>
                <Form.Label>Numer działki: </Form.Label>
                    <Form.Control
                        id="allotment_number"
                        type="text"
                        defaultValue={number}
                        readOnly>
                    </Form.Control>
                    </Form.Group>
            <Form.Group>
                <Form.Label>Posiadacz: </Form.Label>
                    <Form.Control
                        id="owner"
                        type="text"
                        defaultValue={user_id}
                        readOnly>
                    </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="title" >Tytuł: </Form.Label>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.title}
                        id="title"
                        type="text"
                        readOnly
                    ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Powierzchnia: </Form.Label>
                    <Form.Control
                        id="area"
                        value={allotment_width * allotment_length}
                        type="text"
                        readOnly
                        ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Należność: </Form.Label>
                    <Form.Control
                        id="charge"
                        type="text"
                        value={this.state.charge}
                        readOnly
                        onChange={this.onChange}
                        ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Termin zapłaty: </Form.Label>
                    <Form.Control
                        id="term"
                        type="date"
                        value={this.state.term}
                        onChange={this.onChange}
                        readOnly
                        ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Konto: </Form.Label>
                    <Form.Control
                        id="account"
                        type="text"
                        value={this.state.account}
                        onChange={this.onChange}
                        readOnly
                        ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Status: </Form.Label>
                <Span>{errors.status}</Span>
                    <Form.Control
                    onChange={this.onChange}
                    as="select" 
                    value={this.state.status} 
                    id="status" >
                        <option>Wybierz..</option> 
                        <option>Opłacona</option> 
                        <option>Nieopłacona</option> 
                    </Form.Control>
            </Form.Group>
                <Button style={BlueButtonStyle} type="submit">Wyślij</Button>{' '}
                <Button style={RedButtonStyle} href={'/admin/finances/list'}>Zamknij</Button>
                </Form>
            </Wrapper>
        )
    }
}

FinancesInsert.propTypes = {
    insertFinance: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { insertFinance }
)(withRouter(FinancesInsert));