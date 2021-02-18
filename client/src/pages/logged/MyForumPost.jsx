import React, { useState, useEffect, Component} from 'react';
// import { connect } from "react-redux";
import api from '../../api';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import Wrapper from '../../components/Wrapper/Wrapper'
import  {RedButtonStyle, BlueButtonStyle, Title } from '../constants'
import AddThread from './AddThread'

const Container = styled.div`
    background-color: white;
    -webkit-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    padding: 20px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 0.8fr 0.2fr;
    grid-template-rows:  3(1fr);
    gap: 25px 25px;
    grid-template-areas:
    "Content User"
    "Content ."
    "Content  Footer";`

const Content = styled.div`
  display: grid;
  grid-area: Content;
`
const FooterButton = styled.div`
  display: grid;
  grid-area: Footer;
`
const UserSection = styled.div`
  display: grid;
  grid-area: User;
  text-align: right;
`
const HeaderDiv = styled.div`
  font-size: 26px;
`

class MyForumsList extends Form {
  //constructor and states
  constructor(props) {
    super(props);
    const {user} = this.props.auth
    this.state = {
      
      user_id: user.id,
      title: '',
      content: '',
      comment: ''
  }
}
render(){ 
    
  const { title,  content, comment } = this.state
  return (
    <Wrapper></Wrapper>
  )
  }
}

//tylko dla swoich zrobić
class DeleteForum extends Component {
  deleteForum = event => {
      event.preventDefault()
      if (
          window.confirm(
              `Do you want to delete the Forum ${this.props.id} permanently?`,
          )
      ) {
          api.deleteForumById(this.props.id)
          window.location.reload()
      }
  }
  render() {
      return <Button style={RedButtonStyle} onClick={this.deleteForum}>Usuń</Button>
  }
}

const Forum = () => {
    const [forums, setForums] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
      const requestForumsList = async () => {
          const forumsList = await api.getAllForums();
          const { data } = forumsList;
          setForums(data.data);
      };

      requestForumsList();
  }, []);

  const MyForumsList = forums.map((forum, index) => {
  const { _id, title, user_id, content } = forum;

  const timestamp = _id.toString().substring(0,8);
  const date = new Date(parseInt(timestamp ,16)*1000).toLocaleDateString();
  
  return (
    <Container key={_id}>
        <Content>
          <HeaderDiv>{title}</HeaderDiv>
          <Form.Text>{content}</Form.Text>
          <Form.Text muted>{date}</Form.Text>
        </Content>
        <UserSection><Form.Text muted>{user_id}</Form.Text><hr></hr></UserSection>
        <FooterButton>
          {/* dla swoich postów tylko usuwanie*/}
          <DeleteForum id={_id}/>
        </FooterButton>
    </Container> 
  )
});
const [swt, setSwt] = React.useState(true);
    return (
      <Wrapper>
        <Title>Forum</ Title>
        <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Dodaj wątek</Button>
        <Form.Check type="switch"  id="custom-switch" label="Moje ogłoszenia" onClick={() => setSwt(!swt)}/>
        {swt===true ? ForumsList : MyForumsList}
        <AddThread show={modalShow} onHide={() => setModalShow(false)}
      />
      </Wrapper>
    )
  }
  
export default Forum