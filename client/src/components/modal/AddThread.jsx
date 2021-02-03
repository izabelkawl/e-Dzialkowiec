import React, { Component} from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertForum } from "../../api";
import { Button, Form, Modal } from 'react-bootstrap';
import classnames from "classnames";
import { RedButtonStyle, BlueButtonStyle, Span } from '../../pages/constants';

class AddThread extends Component {
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
    content: this.state.content
  };
  this.props.insertForum(newForum, this.props.history)
};

  render(){ 
    const { errors } = this.state;
    const { title,  content } = this.state
    const {staticContext, insertForum, ...rest} = this.props
 return (
    <Modal
    {...rest}
    
    animation={false}
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
          error={errors.title} 
          onChange={this.onChange}
          className={classnames("", {invalid: errors.title })}
      ></Form.Control>
  </Form.Group>
  <Form.Group >
    <Form.Label>Treść</Form.Label>
    <Span>{errors.content}</Span>
                <Form.Control 
                  as="textarea" 
                  id="content"
                  value={content}
                  error={errors.content} 
                  onChange={this.onChange}
                  className={classnames("", {invalid: errors.content })}
                  row={3}
                ></Form.Control>
  </Form.Group>
</Form>
      </Modal.Body>
      <Modal.Footer>
        
        <Button style={RedButtonStyle} onClick={() => {
          this.props.onHide()
          window.location.reload()
        }}>Zamknij</Button>
        <Button style={BlueButtonStyle} onClick={this.onSubmit} >Dodaj</Button>
      </Modal.Footer>
    </Modal>
  )
}
}

AddThread.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  insertForum: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
mapStateToProps,
{insertForum}
)(withRouter(AddThread))
