import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper/Wrapper";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Me = styled.p`
  color: white;
  background-color: #007aff;
  border-radius: 5px;
  padding: 5px;
  text-align: right;
  width: 100%;
`
const NotMe = styled.p`
  color: white;
  background-color: gray;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  ` 

  class MessagesContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
        }
    }
    
    render() {
      console.log(this.props.match.params.id)
  const MessagesList = () => {

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
        const { user } = this.props.auth;
        if( user_id === user.firstname + ' ' + user.lastname && recipient === this.props.match.params.id){
        return <Me key={_id}>{recipient+ ' '+ content}</Me> 
        }else if(user_id === this.props.match.params.id && recipient === user.firstname + ' ' + user.lastname){
          return <NotMe key={_id}>{user_id + ' '+ content}</NotMe>
        }
     
    })
  return Listka
      }
      return <Wrapper><MessagesList/></Wrapper> 
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
