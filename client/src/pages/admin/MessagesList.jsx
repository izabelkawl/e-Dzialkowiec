import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { InputGroup, FormControl, Col, Row, Button } from 'react-bootstrap';
import { List } from '../constants';
import styled from "styled-components";
import { BlueButtonStyle}  from '../constants';
import AddMessageAdminPanel from '../../components/modal/AddMessageAdminPanel';

const MessageList = styled.div`
  overflow: auto;
  height: 300px;
`
const Person = styled.div`
  border-bottom: 1px solid #d3d3d3;
  color: gray;
  padding: 10px;
  font-size: 12px;
  cursor: pointer;
`
const MessagesContent = styled.div`
  
`
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
  
class Messages extends Component {
  
  render() {
      const { user } = this.props.auth;
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
  const storeVar = (val) => {
      console.log(val)
    const Listka = messages.map((users, index) => {
        const {user_id, recipient, content} = users
        return <Me key={index}>{user_id}</Me>
      //   else if(recipient === user.firstname + ' ' + user.lastname ){
        // return <NotMe key={index}>{user_id}</NotMe>
      //   }
    })
  return Listka
  }
  
  const MessagesTable  = messages.slice(0).reverse().map((users, index) => {
      
      const {user_id, recipient} = users
      if(user_id === "Zarząd"){
      return recipient
      }
      else if(recipient === "Zarząd" ){
          return user_id
      }
  })
  const isDupuplicate = Object.keys(MessagesTable.reduce((p,c) => (p[c] = true,p),{}));
  const Messages = isDupuplicate.map((sth, index) => {
      if( isDupuplicate[index] !== 'undefined'){
          return <Person key={index} onClick={() => storeVar(isDupuplicate[index])}>{isDupuplicate[index]}</Person>
      }
  })
  return <List>
        <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Nowa wiadomość</Button>
        <AddMessageAdminPanel show={modalShow} onHide={() => setModalShow(false)}
    />
     <Row>
           <Col sm="3">
            <MessageList
            >
              {Messages}
            </MessageList>
             </Col>
           <Col sm="9">
              <Row>
                <Me id="hehe">
                   {/* {this.state.valueoooo} */}
                </Me>
              </Row>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Treść wiadomości.."
                  />
                  <InputGroup.Append>
                    <Button variant="primary">Wyślij</Button>
                  </InputGroup.Append>
                </InputGroup>
           </Col>
         </Row>
          </List>;
      };
      return <MessagesList/>
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
