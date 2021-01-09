import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertFinance } from "../../api/index";
import { Form }from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Wrapper, BlueButtonStyle, RedButtonStyle, Title } from '../constants';

class FinancesInsert extends Component {
    constructor() {
        super()

        this.state = {
            allotment_number: '',
            title: '',
            area: '',
            charge: '',
            term: '',
            account: '',
            status: ''
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {

        e.preventDefault();
        const newFinance = {

            allotment_number: this.state.allotment_number,
            title: this.state.title,
            area: this.state.area,
            charge: this.state.charge,
            term: this.state.term,
            account: this.state.account,
            status: this.state.status
        };
        this.props.insertFinance(newFinance, this.props.history)
    };

    render() {
        return (
            <Wrapper>
                <Title>Tworzenie zobowiązania</Title>
        <Form onSubmit={this.onSubmit}>
            <Form.Group>
                <Form.Label >Tytuł: </Form.Label>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.title}
                        id="title"
                        type="text"
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Numer działki: </Form.Label>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.allotment_number}
                        id="allotment_number"
                        type="text"
                    />
            </Form.Group>
            
            <Form.Group hidden>
                <Form.Label>Powierzchnia: </Form.Label>
                    <Form.Control
                    id="area"
                    value={this.state.area}
                        type="date"
                        onChange={this.onChange}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Należność: </Form.Label>
                    <Form.Control
                        id="charge"
                        type="text"
                        value={this.state.charge}
                        onChange={this.onChange}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Termin zapłaty: </Form.Label>
                    <Form.Control
                        id="term"
                        type="date"
                        value={this.state.term}
                        onChange={this.onChange}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Status: </Form.Label>
                    <Form.Control as="select" value={this.state.status} id="status" onChange={this.onChange}>
                        <option>Wybierz..</option> 
                        <option>Opłacona</option> 
                        <option>Nieopłacona</option> 
                    </Form.Control>
            </Form.Group>
                <Button style={BlueButtonStyle} type="submit">Wyślij</Button>{' '}
                <Button style={RedButtonStyle} href={'/admin/finance'}>Zamknij</Button>
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