import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
import { List, Title } from '../constants';
import styled from "styled-components";
import { BlueButtonStyle}  from '../constants';
import AddMessageAdminPanel from '../../components/modal/AddMessageAdminPanel';

const Container = styled.div`
    padding: 50px;
    width: 30vw;
  `
const MessageList = styled.div`
  overflow: auto;
  height: 300px;
`
const Person = styled.div`
  color: white;
  background-color: rgb(0, 113, 188);
  padding: 12px;
  // width: fit-content;
  border-radius: 9px;
  margin: 10px;
  cursor: pointer;
`

class ShowMessages extends Component {
  getUserById = event => {
      event.preventDefault()

      window.location.href = `/admin/messages/${this.props.id}`
  }
  render() {
      return <Person onClick={this.getUserById}>{this.props.id}</Person>
  }
}

  const MessagesList = () => {
  
    const [modalShow, setModalShow] = React.useState(false);
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const requestMessagesList = async () => {
            const messagesList = await api.getAllMessages();
            const { data } = messagesList;
            setMessages(data.data);
        };
        requestMessagesList();
    }, []);
    
    const MessagesTable  = messages.slice(0).reverse().map((users, index) => {
        
        const {user_id, recipient} = users
        if(user_id === "Zarząd"){
        return recipient
        }
        else if(recipient === "Zarząd" ){
            return user_id
        }else{
          return console.log()
      }
    })

    const isDupuplicate = Object.keys(MessagesTable.reduce((p,c) => (p[c] = true,p),{}));
    const Messages = isDupuplicate.map((sth, index) => {
        if( isDupuplicate[index] !== 'undefined'){
          return <ShowMessages id={isDupuplicate[index]} key={index}>{isDupuplicate[index]}</ShowMessages>
        }else{
          return console.log()
      }
    })

    return <List>
           <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Nowa wiadomość</Button>
          <AddMessageAdminPanel show={modalShow} onHide={() => setModalShow(false)}/>
          <Container>
            <Title>Lista wiadomości</Title>
            <MessageList>
              {Messages}
            </MessageList>
            </Container>
        </List>
      
          
  }

class Messages extends Component {
  
  render() {

  return  <MessagesList/>
    }
  }

Messages.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(withRouter( Messages));
