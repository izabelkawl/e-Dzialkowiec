import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
import { Title, blueColor, BlueButtonStyle } from '../constants';
import styled from "styled-components";
import AddMessage from '../../components/modal/AddMessage';
import GetUserName from '../../components/accountEditing/GetUserName';
import bg from '../../app/img/bg.svg';

const Wrapper = styled.div` 
  padding: 20px;
  @media(min-width: 992px){
      padding: 100px;
      background-image: url(${bg});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center top;
      background-attachment: fixed;
  }
`;
const WrapperContainer = styled.div`
    @media(min-width: 992px){
        width: 60vw;
}
`;

const Container = styled.div`
  padding: 10%;
  padding-top: 50px;
  @media(min-width: 1366px){
    padding-top: 50px;
  }
`;

const MessageList = styled.div`
  overflow: auto;
  height: 300px;
`;

const Person = styled.div`
  color: white;
  padding: 12px;
  background-image: linear-gradient(#FFCC00, ${blueColor});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  border-radius: 9px;
  margin: 10px;
  cursor: pointer;
`
const element = `
  background-color: white;
`
class ShowMessages extends Component {
  getUserById = event => {
      event.preventDefault()

      window.location.href = `/#/dashboard/messages/${this.props.id}`
  }
  render() {
      return <Person className={element} onClick={this.getUserById}>{this.props.id==="Zarząd" ? this.props.id : <GetUserName id={this.props.id}/>}</Person>
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
      }else {return console.log()}
  })
  const isDupuplicate = Object.keys(MessagesTable.reduce((p,c) => (p[c] = true,p),{}));
  const Messages = isDupuplicate.map((sth, index) => {
    if( isDupuplicate[index] !== 'undefined'){
      return <ShowMessages id={isDupuplicate[index]} key={index}>{isDupuplicate[index]}</ShowMessages>
  } else return ''
  })


    return <Wrapper>
      <WrapperContainer>
      <Title>Lista wiadomości</Title>
            <Button size="sm"style={BlueButtonStyle} onClick={() => setModalShow(true)}>Nowa wiadomość</Button>
              <AddMessage show={modalShow} onHide={() => setModalShow(false)}/>
              <Container>
                <MessageList>
                  {Messages}
                </MessageList>
              </Container>
              </WrapperContainer>
            </Wrapper>;
        };
class Messages extends Component {
  
    render() {
        
    return  <MessagesList id={this.props.auth.user.id}/>
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
