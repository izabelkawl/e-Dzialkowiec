import React, { Component } from 'react';
import api from '../../api';
import {Form }from 'react-bootstrap';
import styled from 'styled-components';

import UsersID from './UsersID';

const Title = styled.h1`
    font-size: 32px;
`;

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin-left: auto;
    margin-right: auto; 
    background-color: white;
    padding: 50px;
    width: 600px;
    margin-top: 50px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

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
        const { allotment_number, area, term, payment_date, charge, account} = this.state
        return (
            <Wrapper>
                <Title>Create Finance</Title>

                <Label>User: </Label>
                <Form.Control as="select" onChange={this.handleChangeInputUserId}>
                    <option>Wybierz działkowicza</option>
                    <UsersID/>
                </Form.Control>

                <Label>Allotment Number: </Label>
                <InputText
                    type="text"
                    value={allotment_number}
                    onChange={this.handleChangeInputAllotmentNumber}
                />
                <Label>Area: </Label>
                <InputText
                    type="text"
                    value={area}
                    onChange={this.handleChangeInputArea}
                />

                <Label>Term: </Label>
                <InputText
                    type="date"
                    value={term}
                    onChange={this.handleChangeInputTerm}
                />
                <Label>payment_date: </Label>
                    <InputText
                        type="date"
                        value={payment_date}
                        onChange={this.handleChangeInputPaymentDate}
                    />

                <Label>Charge: </Label>
                <InputText
                    type="text"
                    value={charge}
                    onChange={this.handleChangeInputCharge}
                />

                <Label>Status: </Label>

                <Form.Control as="select"  onChange={this.handleChangeInputStatus}>
                    <option>Wybierz..</option> 
                    <option>Opłacona</option> 
                    <option>Nieopłacona</option> 
                </Form.Control>

                <Label>Account: </Label>
                <InputText
                    type="text"
                    value={account}
                    onChange={this.handleChangeInputAccount}
                />

                <Button onClick={this.handleIncludeFinance}>Add Finance</Button>
                <CancelButton href={'/admin/finance'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default FinancesInsert