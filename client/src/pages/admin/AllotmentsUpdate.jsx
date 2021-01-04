import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { updateAllotmentById } from '../../api';
import classnames from "classnames";
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import UsersID from './UsersID';

const Title = styled.h1`
    font-size: 32px;
`;

const Wrapper = styled.div.attrs({
    className: 'form-group',
})` margin-left: auto;
    margin-right: auto; 
    background-color: white;
    padding: 50px;
    width: 600px;
    margin-top: 50px;
`;

const Label = styled.label`
    margin: 5px;
`;

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`;

const Span = styled.span.attrs({
    className: `red-text`,
})`
    color: red;
`
class AllotmentsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            number: '',
            allotment_width: '',
            allotment_length: '',
            price: '',
            status: '',
            user_id: '',
            errors: {}
        }
    }
    componentDidMount = async () => {
        const { id } = this.state
        const allotment = await api.getAllotmentById(id)

        this.setState({
            number: allotment.data.data.number,
            allotment_width: allotment.data.data.allotment_width,
            allotment_length: allotment.data.data.allotment_length,
            price: allotment.data.data.price,
            status: allotment.data.data.status,
            user_id: allotment.data.data.user_id,
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

    handleUpdateAllotment = e => {

        e.preventDefault();
        const { id, number, allotment_width, allotment_length, price, status, user_id } = this.state
        const payload = { number, allotment_width, allotment_length, price, status, user_id }

        this.props.updateAllotmentById(id, payload)
    }

    render() {
        const { errors, number, allotment_width, allotment_length, price, status, user_id } = this.state;
        return (
            <Wrapper>
                <Title>Edycja działki</Title>
                    <Label htmlFor="number">Numer:</Label>
                    <Form.Control 
                        onChange={this.onChange}
                        error={errors.number}
                        id="number"
                        type="text"
                        className={classnames("", {
                            invalid: errors.number
                        })}
                        value={number}
                        readOnly
                    />

                    <Label htmlFor="allotment_width">Szerokość: </Label>
                    <Span>{errors.allotment_width}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.allotment_width}
                        id="allotment_width"
                        type="text"
                        className={classnames("", {
                            invalid: errors.allotment_width
                        })}
                        value={allotment_width}
                    />

                    <Label htmlFor="allotment_length">Długość: </Label>
                    <Span>{errors.allotment_length}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.allotment_length}
                        id="allotment_length"
                        type="text"
                        className={classnames("", {
                            invalid: errors.allotment_length
                        })}
                        value={allotment_length}
                    />
                    <Label htmlFor="price">Cena: </Label>
                    <Span>{errors.price}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.price}
                        id="price"
                        type="text"
                        className={classnames("", {
                            invalid: errors.price
                        })}
                        value={price}
                    />
                    <Label htmlFor="status">Status: </Label>
                    <Span>{errors.status}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.status} 
                        id="status"
                        as="select"
                        className={classnames("", {
                            invalid: errors.status
                        })}value={status}
                        defaultChecked={status}>

                        <option>Wolna</option> 
                        <option>Zajęta</option> 
                        <option>Na sprzedaż</option> 
                    </Form.Control>

                    <Label htmlFor="user_id">Użytkownik: </Label>
                    <Span>{errors.user_id}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.user_id}
                        id="user_id"
                        as="select"
                        className={classnames("", {
                        invalid: errors.user_id
                    })}value={user_id}
                    defaultChecked={user_id}>

                        <option>Brak</option>
                        <UsersID/>
                    </Form.Control>


                    <Button type="submit" onClick={this.handleUpdateAllotment}>Aktualizuj</Button>
                    <CancelButton href={'/admin/allotments/list'}>Zamknij</CancelButton>
                    
            </Wrapper>
        )
    }
}

AllotmentsUpdate.propTypes = {
    updateAllotmentById: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { updateAllotmentById }
)(withRouter( AllotmentsUpdate));