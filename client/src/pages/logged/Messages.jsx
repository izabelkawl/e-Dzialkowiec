import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { InputGroup, FormControl, Col, Row, Button } from 'react-bootstrap';
import { List } from '../constants';
import styled from "styled-components";
import { BlueButtonStyle}  from '../constants';
import AddMessage from '../../components/modal/AddMessage';

const MessageList = styled.div`
  overflow: auto;
  height: 300px;
`
const Person = styled.div`
  border-bottom: 1px solid #d3d3d3;
  color: gray;
  padding: 10px;
  font-size: 12px;
`
const MessagesContent = styled.div`
  color: white;
  border-bottom: 1px solid #d3d3d3;
  padding: 10px;
  width: 100%;
  overflow: auto;
  height: 250px;
  margin-bottom: 10px;
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
    
    const MessagesTable  = messages.slice(0).reverse().map((users, index) => {
        
      const {user_id, recipient} = users
      if(user_id === user.firstname + ' ' + user.lastname ){
      return recipient
      }
      else if(recipient === user.firstname + ' ' + user.lastname ){
          return user_id
      }
  })
  const isDupuplicate = Object.keys(MessagesTable.reduce((p,c) => (p[c] = true,p),{}));
  const Messages = isDupuplicate.map((sth, index) => {
    if( isDupuplicate[index] !== 'undefined'){
      return <Person key={index}>{isDupuplicate[index]}</Person>
  }
  })


    return <List>
          <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Dodaj wiadomość</Button>
          <AddMessage show={modalShow} onHide={() => setModalShow(false)}
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
                  <MessagesContent>
                    <Me>asdg</Me>
                    <Me>sdfsdf</Me>
                    <NotMe>ssssssssss</NotMe>
                    <Me>sdfsdfsdf</Me>
                    <NotMe>sdfffffff</NotMe>
                  </MessagesContent>
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
