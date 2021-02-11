import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { insertMessage } from "../../api";
import { List, BlueButtonStyle } from '../constants';
import { Button,  FormControl, InputGroup } from 'react-bootstrap';

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
            if( user_id === "Zarząd" && recipient === val.id){
            return <div key={_id}><MessageDate className="float-right">{date} </MessageDate> <Me>{content}</Me></div> 
            }else if(user_id === val.id && recipient === "Zarząd"){
              return <div key={_id}><MessageDate>{date} </MessageDate> <NotMe >{content}</NotMe></div> 
            }else{
              return ""
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


  class MessagesInsert extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        user_id: "Zarząd",
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
  
      user_id: "Zarząd",
      recipient: this.props.match.params.id,
      content: this.state.content,
    };
    this.props.insertMessage(newMessage, this.props.history)
    
    window.location.reload()
  };

    render() {
      return <List>
        <Button style={BlueButtonStyle} href={'/admin/messages/list'}>Powrót</Button>
        <Container>
                <MessagesList id={this.props.match.params.id}/>
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
              </List>

    }
  }

  MessagesInsert.propTypes = {
    insertMessage: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = state => ({
    errors: state.errors
  });
  
  export default connect(
  mapStateToProps,
  {insertMessage}
  )(withRouter(MessagesInsert))
