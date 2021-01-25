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
import store from "../../store";

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
        }
    })

    const isDupuplicate = Object.keys(MessagesTable.reduce((p,c) => (p[c] = true,p),{}));
    const Messages = isDupuplicate.map((sth, index) => {
        if( isDupuplicate[index] !== 'undefined'){
          return <ShowMessages id={isDupuplicate[index]} key={index}>{isDupuplicate[index]}</ShowMessages>
        }
    })
    let author = '';
    const storeVar = (val) => {
      author =  val
    const Listka = messages.map((users, index) => {
      const { _id, user_id, recipient, content } = users
      if( user_id === "Zarząd" && recipient === val){
        return <Me key={_id}>{recipient+ ' '+ content}</Me>
        }else if(user_id === val && recipient === "Zarząd"){
          return <NotMe key={_id}>{user_id + ' '+ content}</NotMe>
        }
      })
      return Listka
    }

    return <List>
           <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Nowa wiadomość</Button>
          <AddMessageAdminPanel show={modalShow} onHide={() => setModalShow(false)}
        />
        <Row>
           <Col sm="3">
            <MessageList>
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
