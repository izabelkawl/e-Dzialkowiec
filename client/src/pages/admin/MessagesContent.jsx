import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertMessage } from "../../api";
import { List, BlueButtonStyle, Container60 } from '../constants';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const MessagesWrapper = styled.div`
  padding-top: 50px;
  margin: 0 auto;
`;

const MessageContainer = styled.div`
  overflow: auto;
  height: 350px;
  scroll-behavior: smooth;
  margin-bottom: 10px;
    @media(min-width: 768px){
      height: 500px;
    }
   
`;

const MyMessages = styled.p.attrs({
    className: "float-right"
})`
    color: white;
    background-color: rgb(0, 113, 188);
    border-radius: 9px;
    padding: 9px;
    text-align: right;
    width: 100%;
`;

const NotMyMessages = styled.p`
    color: white;
    background-color: gray;
    border-radius: 9px;
    padding: 9px;
    float-left;
`;

const MessageDate = styled.i`
    font-size: 10px;
`;

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
        return <div key={_id}><MessageDate className="float-right">{date} </MessageDate><MyMessages>{content}</MyMessages></div> 
      }else if(user_id === val.id && recipient === "Zarząd"){
        return <div key={_id}><MessageDate>{date} </MessageDate> <NotMyMessages>{content}</NotMyMessages></div> 
      }else{
        return ""
      }
  });

  window.setInterval(function() {
    if(document.getElementById('data')){
      var elem = document.getElementById('data');
      elem.scrollTo(0, document.body.scrollHeight);
    }
  }, 3500);

  return (
      <MessageContainer id="data">
        {Listka}
      </MessageContainer>
  );
};

class MessagesInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: "Zarząd",
      recipient:  this.props.match.params.id,
      content: ''
    };
  };
  
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
    return (
      <Container60>
        <List>
          <Link to={'/admin/messages/list'}>
            <Button size="sm" style={BlueButtonStyle}>Powrót</Button>
          </Link>
          <MessagesWrapper>
            <MessagesList id={this.props.match.params.id}/>
            <InputGroup className="mb-3">
              <FormControl
                onChange={this.onChange}
                value={this.state.content}
                type="text"
                id="content"
                placeholder="Wpisz treść wiadomości.."
                />
              <InputGroup.Append>
                <Button size="sm"variant="secondary" onClick={this.onSubmit}>Wyślij</Button>
              </InputGroup.Append>
            </InputGroup>
          </MessagesWrapper>
        </List>
        </Container60>
      );
    };
  };

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
