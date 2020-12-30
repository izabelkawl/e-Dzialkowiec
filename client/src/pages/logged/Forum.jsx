import React, { useState, useEffect, Component} from 'react';
import api from '../../api';
import styled from 'styled-components';
import { Form, Button, Modal } from 'react-bootstrap';
import Wrapper from '../../components/Wrapper/Wrapper'
import  {RedButtonStyle, BlueButtonStyle } from '../constants'
import Title from '../../components/Title'

const Container = styled.div`
    background-color: white;
    -webkit-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    padding: 20px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 2fr 0.2fr;
    grid-template-rows: 1fr;
    gap: 25px 25px;
    grid-template-areas:"Content About";`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 0.5fr 0.3fr;
  grid-template-areas:
    "."
    "."
    ".";
  grid-area: Content;
`
const About = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 0.8fr 0.1fr;
  grid-template-areas:
    "."
    "."
    ".";
  grid-area: About;
`
const HeaderDiv = styled.div`
  font-size: 26px;
`
class AddThread extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      user: '',
      content: '',
      comment: ''
  }
    this.handleChangeInputTitle = this.handleChangeInputTitle.bind(this);
    this.handleChangeInputUser = this.handleChangeInputUser.bind(this);
    this.handleChangeInputContent = this.handleChangeInputContent.bind(this);
    this.handleChangeInputComment = this.handleChangeInputComment.bind(this);

  }
  handleChangeInputTitle = async event => {
    const title = event.target.value
    this.setState({ title: title })
  }
  handleChangeInputUser = async event => {
      const user = event.target.value
      this.setState({ user:user })
  }
  handleChangeInputContent = async event => {
    const content = event.target.value
    this.setState({ content:content })
  }
  handleChangeInputComment = async event => {
    const comment = event.target.value
    this.setState({ comment:comment })
  }

  handleIncludeForum = async () => {
    const { title, user, content, comment } = this.state
    const payload = { title, user, content, comment  }
  console.log(payload)
    await api.insertForum(payload).then(res => {
        window.alert(`Forum inserted successfully`)
        this.setState({
          title: '',
          user: '',
          content: '',
          comment: ''
        })
    })
  }
  render(){ 
    const { title, user, content, comment } = this.state
 return (
    <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dodaj wątek
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Tytuł</Form.Label>
    <Form.Control type="text" value={title} onChange={this.handleChangeInputTitle}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Użytkownik</Form.Label>
    <Form.Control type="text"value={user}  onChange={this.handleChangeInputUser} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Treść</Form.Label>
    <Form.Control as="textarea" value={content} onChange={this.handleChangeInputContent} rows={3} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Treść</Form.Label>
    <Form.Control as="textarea"value={comment}  onChange={this.handleChangeInputComment} rows={3} />
  </Form.Group>
 
</Form>
      </Modal.Body>
      <Modal.Footer>
        
        <Button style={RedButtonStyle} onClick={this.props.onHide}>Zamknij</Button>
        <Button style={BlueButtonStyle} onClick={this.handleIncludeForum}>Dodaj</Button>
      </Modal.Footer>
    </Modal>
  )
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

  const ForumList = forums.map((forum, index) => {
      const { _id, title, user, content, comment } = forum;
      //date from timestap
      const timestamp = _id.toString().substring(0,8);
      const date = new Date(parseInt(timestamp ,16)*1000).toLocaleDateString();

      return (
        <Container key={_id}>
            <Content>
              <HeaderDiv>{title}</HeaderDiv>
              <Form.Text muted>{user}</Form.Text>
              <Form.Text >{content}</Form.Text>
              <Form.Text >{comment}</Form.Text>
              <Form.Text >{date}</Form.Text>
            </Content>
            <About>
              
              <Button style={BlueButtonStyle} >Otwórz</Button>
              {/* dla swoich postów tylko usuwanie*/}
              <Button style={RedButtonStyle} >Usuń</Button>
            </About>
        </Container> 
    );
});

    return (
      <Wrapper>
        <Title>Forum</ Title>
        <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Dodaj wątek</Button>
        <AddThread show={modalShow} onHide={() => setModalShow(false)}
      />
        {ForumList}
      </Wrapper>
    )
  }

export default Forum