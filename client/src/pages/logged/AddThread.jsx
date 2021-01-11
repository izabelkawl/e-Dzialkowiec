import React, {  Component} from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertForum } from "../../api/index";
import { Form, Button, Modal } from 'react-bootstrap';
import  {RedButtonStyle, BlueButtonStyle,  Span } from '../constants'

class AddThread extends Component {
  //constructor and states
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      user_id: this.props.auth.user.firstname + ' '+ this.props.auth.user.lastname,
      content: '',
      errors:{},
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
        this.setState({
            errors: nextProps.errors
        });
    }
}


onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
};

onSubmit = e => {

  e.preventDefault();
  const newForum = {

    title: this.state.title,
    user_id: this.state.user_id,
    content: this.state.content,
  };
  this.props.insertForum(newForum, this.props.history)
};

  render(){ 
    const { title,  content} = this.state
    const { errors } = this.state;
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
  <Form.Group >
    <Form.Label>Tytuł</Form.Label>
    <Span>{errors.title}</Span>
    <Form.Control 
    type="text" 
    id="title" 
    value={title} 
    onChange={this.onChange}
    />
  </Form.Group>
  
  <Form.Group >
    <Form.Label>Treść</Form.Label>
    <Form.Control 
    as="textarea" 
    id="content" 
    value={content} 
    onChange={this.onChange}
    rows={3} />
  </Form.Group>

</Form>
      </Modal.Body>
      <Modal.Footer>
        
        <Button style={RedButtonStyle} onClick={this.props.onHide}>Zamknij</Button>
        <Button style={BlueButtonStyle} onClick={this.onChange} >Dodaj</Button>
      </Modal.Footer>
    </Modal>
  )
 }
}

AddThread.propTypes = {
  insertForum: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
mapStateToProps,
{ insertForum }
)(withRouter(AddThread))
