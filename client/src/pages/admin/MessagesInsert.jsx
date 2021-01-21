import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertMessage } from "../../api/index";
import { FormControl, Button, Form }from 'react-bootstrap';
import { Span} from '../constants';
import UsersID from './UsersID';
import styled from 'styled-components';
import classnames from "classnames";

const Title = styled.h1.attrs({
    className: 'h1',
})``

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

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MessagesInsert extends Component {
    constructor() {
        super()
        // const {user} = this.props.auth
        this.state = {
            user_id: '',
            recipient: '',
            content: '',
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
        const newMessage = {

            user_id: this.props.auth.user.firstname + ' '+ this.props.auth.user.lastname,
            recipient: this.state.recipient,
            content: this.state.content,
        };
        this.props.insertMessage(newMessage, this.props.history)
    };

    render() {

        const { errors } = this.state
        return (
            <Wrapper>
                <Title>Create Message</Title>
                <Form noValidate onSubmit={this.onSubmit}></Form>
                <Form.Label>Ja: </Form.Label>
                <FormControl
                    onChange={this.onChange}
                    value={this.props.auth.user.firstname + ' '+ this.props.auth.user.lastname}
                    id="user_id"
                    type="text"
                />

                <Form.Label>Odbiorca: </Form.Label>
                <Span>{errors.recipient}</Span>
                <FormControl
                    onChange={this.onChange}
                    error={errors.recipient} 
                    as="select"
                    id="recipient"
                    className={classnames("", {
                        invalid: errors.recipient
                    })}
                >
                    <option>Wybierz działkowicza..</option>
                <UsersID/>
            </FormControl>
                <Form.Label>Treść: </Form.Label>
                <Span>{errors.content }</Span>
                <FormControl
                onChange={this.onChange}
                value={this.state.content}
                error={errors.content}
                type="text"
                id="content"
                className={classnames("", {
                    invalid: errors.content
                })}
                />

                <Button onClick={this.onSubmit}>Add Message</Button>
                <CancelButton href={'/admin/messages/list'}>Cancel</CancelButton>
            <Form/>
            </Wrapper>
        )
    }
}

MessagesInsert.propTypes = {
    insertMessage: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { insertMessage }
)(withRouter(MessagesInsert));