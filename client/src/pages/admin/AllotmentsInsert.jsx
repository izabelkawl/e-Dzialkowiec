import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertAllotment } from "../../api/index";
import {Form }from 'react-bootstrap';

import styled from 'styled-components';
import classnames from "classnames";
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
const Span = styled.span`
    color: red;
    font-size: 80%;
`
class AllotmentsInsert extends Component {
    constructor() {
        super()

        this.state = {
            number: '',
            allotment_width: '',
            allotment_length: '',
            price: '',
            status: '',
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

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {

        e.preventDefault();
        const newAllotment = {

            number: this.state.number,
            allotment_width: this.state.allotment_width,
            allotment_length: this.state.allotment_length,
            price: this.state.price,
            status: this.state.status,
            user_id: this.state.user_id,
        };
        this.props.insertAllotment(newAllotment, this.props.history)
    };

    render() {
        const { errors } = this.state;
        return (
            <Wrapper>
                <Title>Stwórz działkę</Title>
                <Form noValidate onSubmit={this.onSubmit}>
                    <Label htmlFor="number">Numer:</Label>
                    <Span>{errors.number}
                    {errors.numberexists}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.number}
                        error={errors.number}
                        id="number"
                        type="text"
                        className={classnames("", {
                            invalid: errors.number
                        })}
                    />

                    <Label htmlFor="allotment_width">Szerokość: </Label>
                    <Span>{errors.allotment_width}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.allotment_width}
                        error={errors.allotment_width}
                        type="text"
                        id="allotment_width"
                        className={classnames("", {
                            invalid: errors.allotment_width
                        })}
                    />

                    <Label htmlFor="allotment_length">Długość: </Label>
                    <Span>{errors.allotment_length}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.allotment_length}
                        error={errors.allotment_length}
                        type="text"
                        id="allotment_length"
                        className={classnames("", {
                            invalid: errors.allotment_length
                        })}
                    />
                    <Label htmlFor="price">Cena: </Label>
                    <Span>{errors.price}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.price}
                        error={errors.price}
                        type="text"
                        id="price"
                        className={classnames("", {
                            invalid: errors.price
                        })}
                    />
                    <Label htmlFor="status">Status: </Label>
                    <Span>{errors.status}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.status} 
                        as="select"
                        id="status"
                        className={classnames("", {
                            invalid: errors.status
                        })}defaultChecked="Status działki">
                    <option>Status działki</option> 
                        <option>Wolna</option> 
                        <option>Zajęta</option> 
                        <option>Na sprzedaż</option> 
                    </Form.Control>

                    <Label htmlFor="user_id">Użytkownik: </Label>
                    <Span>{errors.user_id}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.user_id}
                        as="select"
                        id="user_id"
                        className={classnames("", {
                        invalid: errors.user_id
                    })}defaultChecked="Wybierz działkowicza">
                        <option>Wybierz działkowicza</option>
                        <option>Brak</option>
                        <UsersID/>
                    </Form.Control>


                    <Button type="submit">Dodaj działkę</Button>
                    <CancelButton href={'/admin/allotments/list'}>Zamknij</CancelButton>
                    </Form>
            </Wrapper>
        )
    }
}


AllotmentsInsert.propTypes = {
    insertAllotment: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { insertAllotment }
)(withRouter(AllotmentsInsert));