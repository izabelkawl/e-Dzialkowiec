import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { insertMessage } from "../../api";
import { connect } from "react-redux";
import api from '../../api';
import classnames from "classnames";
// Style
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import Wrapper from '../../components/Wrapper/Wrapper';
import Title from '../../components/Title';
// Button Style
import { RedButtonStyle, BlueButtonStyle, Span } from '../constants';

const MessageContentn = styled.div`
    background-color: white;
    padding: 20px;
    -webkit-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    margin-bottom: 20px;
`

class NoticeBoardMessage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          id: this.props.match.params.id,
          title: '',
          recipient: '',
          user_id: '',
          advertisement: '',
          errors: {}
        }
      }

      componentDidMount = async () => {
        const { id } = this.state
        const noticeboard = await api.getNoticeboardById(id)

        this.setState({
            title: noticeboard.data.data.title,
            user_id: noticeboard.data.data.user_id,
            advertisement: noticeboard.data.data.advertisement,
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
    
    onSubmit = e => {
    
      e.preventDefault();
      const newMessage = {
    
        user_id: this.props.auth.user.firstname + ' '+ this.props.auth.user.lastname,
        recipient: this.state.user_id,
        content: this.state.content,
      };
      this.props.insertMessage(newMessage, this.props.history)
    };
    
    render() {
        const { errors } = this.state;
        const { user_id, title, advertisement } = this.state;
            return ( <Wrapper>
                <Title>Napisz wiadomość</Title>
                <Form noValidate onSubmit={this.onSubmit}></Form>
                <MessageContentn>
                <i>{user_id}</i>
                <br></br>
                <b>{title}</b>
                <br></br>
                <br></br>
                <span>{advertisement}</span>

                </MessageContentn>
                
                 <Form.Group>
                <Span>{errors.content }</Span>
                <Form.Control
                onChange={this.onChange}
                error={errors.content}
                as="textarea"
                id="content"
                className={classnames("", {
                    invalid: errors.content
                })}
                rows={3}
                placeholder={"Treść wiadomości.."}
                />
                 </Form.Group>
          <Form/>
          <Button style={RedButtonStyle} href="/dashboard/noticeboard" >Powrót</Button>
            {' '}
            <Button style={BlueButtonStyle} onClick={this.onSubmit} >Wyślij</Button>
            
            </Wrapper>
            )
        }
    }

NoticeBoardMessage.propTypes = {
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    insertMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {insertMessage}
)(withRouter( NoticeBoardMessage));