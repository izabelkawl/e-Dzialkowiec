import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import styled from "styled-components";

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

  const MessagesContent = () => {

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

        if( user_id === "Zarząd" && recipient === this.props.valueFromMessage){
        return <Me key={_id}>{recipient+ ' '+ content}</Me> 
        }else if(user_id === this.props.valueFromMessage && recipient === "Zarząd"){
          return <NotMe key={_id}>{user_id + ' '+ content}</NotMe>
        }
     
    })
  return Listka
      };
      
export default MessagesContent;
