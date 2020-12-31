import React, {  Component} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api from '../../api';
import { Form, Button, Modal } from 'react-bootstrap';
import  {RedButtonStyle, BlueButtonStyle } from '../constants'

class AddThread extends Component {
  //constructor and states
  constructor(props) {
    super(props);
    const {user} = this.props.auth
    this.state = {
      title: '',
      user_id: user.email,
      content: '',
      comment: ''
  }
  //binds
    this.handleChangeInputTitle = this.handleChangeInputTitle.bind(this);
    this.handleChangeInputContent = this.handleChangeInputContent.bind(this);
    this.handleChangeInputComment = this.handleChangeInputComment.bind(this);

  }
  //handle Inputs
  handleChangeInputTitle = async event => {
    const title = event.target.value
    this.setState({ title: title })
  }
  handleChangeInputContent = async event => {
    const content = event.target.value
    this.setState({ content:content })
  }
  handleChangeInputComment = async event => {
    const comment = event.target.value
    this.setState({ comment:comment })
  }
//Include post to database
  handleIncludeForum = async () => {
    const { title, user_id, content, comment } = this.state
    const payload = { title, user_id, content, comment  }

    await api.insertForum(payload).then(res => {
        window.alert(`Forum inserted successfully`)
        this.setState({
          title: '',
          user_id: '',
          content: '',
          comment: ''
        })
        window.location.reload()
    })
  }

  render(){ 
    
    const { title,  content, comment } = this.state
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
  <Form.Group controlId="exampleForm.ControlInput">
    <Form.Label>Tytuł</Form.Label>
    <Form.Control type="text" value={title} onChange={this.handleChangeInputTitle}/>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Treść</Form.Label>
    <Form.Control as="textarea" value={content} onChange={this.handleChangeInputContent} rows={3} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea2">
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

AddThread.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
mapStateToProps
)(AddThread)
