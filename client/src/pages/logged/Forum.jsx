import React, { useState, useEffect, Component} from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api from '../../api';
import styled from 'styled-components';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Wrapper from '../../components/Wrapper/Wrapper'
import  {RedButtonStyle, BlueButtonStyle } from '../constants'
import Title from '../../components/Title'
import AddThread from '../../components/modal/AddThread';

const Container = styled.div`
    background-color: white;
    -webkit-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    padding: 20px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 4fr 1fr;
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

class UpdateForum extends Component {
  updateForum = event => {
      event.preventDefault()
      window.location.href = `/dashboard/forums/${this.props.id}`
  }
  render() {
      return <Button style={BlueButtonStyle} onClick={this.updateForum}>Otwórz</Button>
  }
}
class DeleteForum extends Component {
  deleteForum = event => {
      event.preventDefault()
      if (
          window.confirm(
              `Czy na pewno chcesz usunąć ten wątek??`,
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
class Forum  extends Component {
  constructor(){
    super()
    this.state = {
        inputValue: '',
    }
  }

  updateInputValue = (evt) => {
      this.setState({
        inputValue: evt.target.value
      });
    }

  render() {

    const ButtonNoticeboard = () => { 
    
      const [modalShow, setModalShow] = React.useState(false);
  
      return <>
              <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Dodaj wątek</Button>
              <AddThread show={modalShow} onHide={() => setModalShow(false)}/>
          </>
    }

  const ForumComponent = () => {

    const [swt, setSwt] = React.useState(true);
    const [forums, setForums] = useState([]);
   
    useEffect(() => {
      const requestForumsList = async () => {
          const forumsList = await api.getAllForums();
          const { data } = forumsList;
          setForums(data.data);
      };

      requestForumsList();
  }, []);

  const ForumsList = forums.slice(0).reverse().map((forum) => {
      const { _id, title, user_id, content } = forum;

      // Find by number, status or User
      const n = JSON.stringify({ title, user_id, content })
      const search = n.includes(this.state.inputValue)

      const timestamp = _id.toString().substring(0,8);
      const date = new Date(parseInt(timestamp ,16)*1000).toLocaleDateString();
      
      
      if(search === true){
      if( swt===false && user_id === this.props.auth.user.firstname + ' ' + this.props.auth.user.lastname){
      return (
        <Container key={_id}>
            <Content>
              <HeaderDiv>{title}</HeaderDiv>
              <Form.Text>{content}</Form.Text>
              <Form.Text muted>{date}</Form.Text>
            </Content>
            <UserSection><Form.Text muted>{user_id}</Form.Text><hr></hr></UserSection>
            <FooterButton>
              <UpdateForum id={_id}/>
            <DeleteForum id={_id}/>
            </FooterButton>
        </Container> 
      )
      }else if( swt===true){
          return (
            <Container key={_id}>
                <Content>
                  <HeaderDiv>{title}</HeaderDiv>
                  <Form.Text>{content}</Form.Text>
                  <Form.Text muted>{date}</Form.Text>
                </Content>
                <UserSection><Form.Text muted>{user_id}</Form.Text><hr></hr></UserSection>
                <FooterButton>
              <UpdateForum id={_id}/>
                </FooterButton>
            </Container> 
          )
      }
    }
  });
  
  return <>
  <br></br>
  <Form.Check type="switch"  id="custom-switch" label="Moje ogłoszenia" onClick={() => setSwt(!swt)}/>
  {ForumsList}
</>
}
    return (
      <Wrapper>
        <Title>Forum</ Title>
        <Row>
          <Col>
            <ButtonNoticeboard/>
          </Col>
          <Col>
            <Form.Control
                value={this.state.inputValue}
                onChange={this.updateInputValue}
                id="inputValue"
                placeholder="Szukaj.."
            />
          </Col>   
        </Row>
        <ForumComponent/>
      </Wrapper>
    )
  }
}

Forum.propTypes = {
  auth: PropTypes.object.isRequired
};
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(withRouter(Forum));
  