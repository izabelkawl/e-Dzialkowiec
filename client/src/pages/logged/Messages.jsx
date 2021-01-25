import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { InputGroup, FormControl, Col, Row, Button } from 'react-bootstrap';
import { List, Title } from '../constants';
import Wrapper from '../../components/Wrapper/Wrapper';
import styled from "styled-components";
import { BlueButtonStyle}  from '../constants';
import AddMessage from '../../components/modal/AddMessage';

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

      window.location.href = `/dashboard/messages/${this.props.id}`
  }
  render() {
      return <Person onClick={this.getUserById}>{this.props.id}</Person>
  }
}

    const MessagesList = (val) => {
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
      if(user_id === val.id ){
      return recipient
      }
      else if(recipient === val.id ){
          return user_id
      }
  })
  const isDupuplicate = Object.keys(MessagesTable.reduce((p,c) => (p[c] = true,p),{}));
  const Messages = isDupuplicate.map((sth, index) => {
    if( isDupuplicate[index] !== 'undefined'){
      return <ShowMessages id={isDupuplicate[index]} key={index}>{isDupuplicate[index]}</ShowMessages>
  }
  })


    return <Wrapper>
         <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Nowa wiadomość</Button>
          <AddMessage show={modalShow} onHide={() => setModalShow(false)}/>
          <Container>
            <Title>Lista wiadomości</Title>
            <MessageList>
              {Messages}
            </MessageList>
            </Container>
            </Wrapper>;
        };
class Messages extends Component {
  
    render() {
        
    return  <MessagesList id={this.props.auth.user.firstname+ ' '+this.props.auth.user.lastname}/>
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
