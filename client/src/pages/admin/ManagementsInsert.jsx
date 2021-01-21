import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertManagement } from "../../api/index";
import { Form, Button }from 'react-bootstrap';
import {Title, Wrapper, BlueButtonStyle, RedButtonStyle, Label, Span} from '../constants';
import classnames from "classnames";

class ManagementsInsert extends Component {
    constructor() {
        super()

        this.state = {
            description: '',
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
            rodo: this.state.rodo,
        };
        this.props.insertManagement(newManagement, this.props.history)
    };

    render() {
        const { errors } = this.state;
        return (
            <Wrapper>
                <Title>O nas i rodo</Title>
                <Form noValidate onSubmit={this.onSubmit}>

                        <Label htmlFor="number">description:</Label>
                        <Span>{errors.description}</Span>
                        <Form.Control
                            onChange={this.onChange}
                            value={this.state.description}
                            error={errors.description}
                            id="description"
                            type="text"
                            className={classnames("", {
                                invalid: errors.description
                            })}
                        />

                    <Label htmlFor="number">rodo:</Label>
                        <Span>{errors.rodo}</Span>
                        <Form.Control
                            onChange={this.onChange}
                            value={this.state.rodo}
                            error={errors.rodo}
                            id="rodo"
                            type="text"
                            className={classnames("", {
                                invalid: errors.rodo
                            })}
                        />

                    <br></br>
                    <Button style={RedButtonStyle} href={'/admin/managements/list'}>Zamknij</Button>{' '}
                    <Button style={BlueButtonStyle} type="submit">Dodaj opisy i rodo</Button>
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