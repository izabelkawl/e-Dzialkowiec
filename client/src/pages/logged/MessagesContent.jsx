import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper/Wrapper";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { List, BlueButtonStyle, Span } from '../constants';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { connect } from "react-redux";

const Container = styled.div`
    width: 40vw;
    margin: 0 auto;
    
  `
const MessageContainer = styled.div`
    overflow: auto;
    height: 500px;
    scroll-behavior: smooth;
    margin-bottom: 10px;
  `
const Me = styled.p.attrs({
  className: "float-right"
})`
  color: white;
  background-color: rgb(0, 113, 188);
  border-radius: 9px;
  padding: 9px;
  text-align: right;
  width: 100%;
`
const NotMe = styled.p`
  color: white;
  background-color: gray;
  border-radius: 9px;
  padding: 9px;
  float-left;
  ` 
  const MessageDate = styled.i`
    font-size: 10px;
  `
  const MessagesList = (val) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const requestMessagesList = async () => {
            const messagesList = await api.getAllMessages();
            const { data } = messagesList;
            setMessages(data.data);
        };
        requestMessagesList();
    }, []);
      const Listka = messages.map((users, index) => {
          const { _id, user_id, recipient, content } = users
          const timestamp = _id.toString().substring(0,8);
          const date = new Date(parseInt(timestamp ,16)*1000).toLocaleDateString();
          if( user_id === val.name && recipient === val.id){
          return <div key={_id}><MessageDate className="float-right">{date} </MessageDate> <Me>{content}</Me></div> 
          }else if(user_id === val.id && recipient === val.name){
            return <div key={_id}><MessageDate>{date} </MessageDate> <NotMe >{content}</NotMe></div> 
          }
      
      })
    window.setInterval(function() {
      var elem = document.getElementById('data');
      elem.scrollTo(0, document.body.scrollHeight);
    }, 3500);

    return  <MessageContainer id="data">
    {Listka}
  </MessageContainer>
}

  class MessagesContent extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        user_id: this.props.auth.user.firstname+ ' '+this.props.auth.user.lastname,
        recipient:  this.props.match.params.id,
        content: ''
      }
    }
  
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  
  onSubmit = e => {
  
    e.preventDefault();
    const newMessage = {
  
      user_id: this.props.auth.user.firstname+ ' '+this.props.auth.user.lastname,
      recipient: this.props.match.params.id,
      content: this.state.content,
    };
    this.props.insertMessage(newMessage, this.props.history)
  };

    render() {
      return <Wrapper>
        <Button style={BlueButtonStyle} href={'/dashboard/messages'}>Powrót</Button>
        <Container>
        <MessagesList id={this.props.match.params.id} name={this.props.auth.user.firstname+ ' '+this.props.auth.user.lastname}/>
          <InputGroup className="mb-3">
                            <FormControl
                            onChange={this.onChange}
                            value={this.state.content}
                            type="text"
                            id="content"
                            placeholder="Wpisz treść wiadomości.."
                            /><InputGroup.Append><Button variant="secondary" onClick={this.onSubmit} >Wyślij</Button>
                </InputGroup.Append>
                
              </InputGroup>
              </Container>
        </Wrapper> 
    }
  }

  MessagesContent.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps
)(withRouter( MessagesContent));
