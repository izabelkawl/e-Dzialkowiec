import React, { Component } from 'react';
import api from '../../api';
import { Form }from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Wrapper, BlueButtonStyle, RedButtonStyle, Title } from '../constants';

import UsersID from './UsersID';

class FinancesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user_id: '',
            allotment_number: '',
            area: '',
            term: '',
            payment_date: '',
            charge: '',
            status: '',
            account: '',
        }
    }

    handleChangeInputUserId = async event => {
        const user_id = event.target.value
        this.setState({ user_id })
    }
    handleChangeInputAllotmentNumber = async event => {
        const allotment_number = event.target.validity.valid
            ? event.target.value
            : this.state.allotment_number

        this.setState({ allotment_number })
    }
    handleChangeInputArea = async event => {
        const area = event.target.validity.valid
            ? event.target.value
            : this.state.area

        this.setState({ area })
    }
    handleChangeInputTerm = async event => {
        const term = event.target.value
        this.setState({ term })
    }
    handleChangeInputPaymentDate = async event => {
        const payment_date = event.target.value
        this.setState({ payment_date })
    }
    handleChangeInputCharge = async event => {
        const charge = event.target.validity.valid
            ? event.target.value
            : this.state.charge

        this.setState({ charge })
    }  
    handleChangeInputStatus = async event => {
        const status = event.target.value
        this.setState({ status })
    }  
    handleChangeInputAccount = async event => {
        const account = event.target.value
        this.setState({ account })
    }
    handleIncludeFinance = async () => {
        const { user_id, allotment_number, area, term, payment_date, charge, status, account } = this.state
        const payload = { user_id, allotment_number, area, term, payment_date, charge, status, account }

        await api.insertFinance(payload).then(res => {
            window.alert(`Finance inserted successfully`)
            this.setState({
                user_id: '',
                allotment_number: '',
                area: '',
                term: '',
                payment_date: '',
                charge: '',
                status: '',
                account: '',
            })
        })
    }

    render() {
        const { allotment_number, area, term, payment_date, charge} = this.state
        return (
            <Wrapper>
                <Title>Tworzenie zobowiązania</Title>
            <Form.Group><Form.Label>Odbiorca: </Form.Label>
                <Form.Control
                    as="select"
                    onChange={this.handleChangeInputUserId}>
                    <option>Wybierz działkowicza</option>
                    <UsersID/>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Numer działki: </Form.Label>
                    <Form.Control
                        type="text"
                        value={allotment_number}
                        onChange={this.handleChangeInputAllotmentNumber}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Tytuł: </Form.Label>
                    <Form.Control
                        type="text"
                        value={area}
                        onChange={this.handleChangeInputArea}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Termin zapłaty: </Form.Label>
                    <Form.Control
                        type="date"
                        value={term}
                        onChange={this.handleChangeInputTerm}
                    />
            </Form.Group>
            <Form.Group hidden>
                <Form.Label>payment_date: </Form.Label>
                    <Form.Control
                        type="date"
                        value={payment_date}
                        onChange={this.handleChangeInputPaymentDate}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>należność: </Form.Label>
                    <Form.Control
                        type="text"
                        value={charge}
                        onChange={this.handleChangeInputCharge}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Status: </Form.Label>
                    <Form.Control as="select"  onChange={this.handleChangeInputStatus}>
                        <option>Wybierz..</option> 
                        <option>Opłacona</option> 
                        <option>Nieopłacona</option> 
                    </Form.Control>
            </Form.Group>
                <Button style={BlueButtonStyle} onClick={this.handleIncludeFinance}>Wyślij</Button>{' '}
                <Button style={RedButtonStyle} href={'/admin/finance'}>Zamknij</Button>
            </Wrapper>
        )
    }
}

export default FinancesInsert