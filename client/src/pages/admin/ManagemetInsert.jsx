import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertManagement } from "../../api/index";
import { Form, Button }from 'react-bootstrap';
import {Title, Wrapper, BlueButtonStyle, RedButtonStyle, Label, Span} from '../constants';
import classnames from "classnames";
import UsersID from './UsersID';

class ManagementsInsert extends Component {
    constructor() {
        super()

        this.state = {
            description: '',
            members: {
                role: '',
                firstname: '',
                lastname: '',
            },
            classifieds: {
                title: '',
                content: '',
                time: '',
            },
            rodo: '',
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
        const newManagement = {

            description: this.state.description,
            members: {
                role: this.state.role,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
            },
            classifieds: {
                title: this.state.title,
                content: this.state.content,
                time: this.state.time,
            },
            rodo: this.state.rodo,
        };
        this.props.insertManagement(newManagement, this.props.history)
    };

    render() {
        const { errors } = this.state;
        return (
            <Wrapper>
                <Title>Zarząd</Title>
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

                    <Label htmlFor="management_width">Szerokość: </Label>
                    <Span>{errors.management_width}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.management_width}
                        error={errors.management_width}
                        type="text"
                        id="management_width"
                        className={classnames("", {
                            invalid: errors.management_width
                        })}
                    />

                    <Label htmlFor="management_length">Długość: </Label>
                    <Span>{errors.management_length}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.management_length}
                        error={errors.management_length}
                        type="text"
                        id="management_length"
                        className={classnames("", {
                            invalid: errors.management_length
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

                    <Label htmlFor="user_id">Działkowicz: </Label>
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
                    <br></br>
                    <Button style={RedButtonStyle} href={'/admin/managements/list'}>Zamknij</Button>{' '}
                    <Button style={BlueButtonStyle} type="submit">Dodaj działkę</Button>
                    </Form>
            </Wrapper>
        )
    }
}

ManagementsInsert.propTypes = {
    insertManagement: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { insertManagement }
)(withRouter(ManagementsInsert));