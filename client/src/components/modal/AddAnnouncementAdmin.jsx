import React, { Component} from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertAnnouncement } from "../../api";
import { Button, Form, Modal } from 'react-bootstrap';
import classnames from "classnames";
import { RedButtonStyle, BlueButtonStyle, Span } from '../../pages/constants';

class AddAnnouncementAdmin extends Component {
  constructor() {
    super()

    this.state = {
        title:  '',
        content: '',
        errors: {}
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
  const newAnnouncement = {

    title: this.state.title,
    content: this.state.content
  };
  this.props.insertAnnouncement(newAnnouncement, this.props.history)
};

  render(){ 
    const { errors } = this.state;
    const { title,  content } = this.state
    const {staticContext, insertAnnouncement, ...rest} = this.props
 return (
    <Modal
    {...rest}
    size="lg"
      animation={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dodaj Ogłoszenie
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
  <Form.Group > <Form.Label>Treść</Form.Label>
    <Span>{errors.content}</Span>
                <Form.Control 
                  as="textarea" 
                  id="content"
                  value={content}
                  error={errors.content} 
                  onChange={this.onChange}
                  className={classnames("", {invalid: errors.content })}
                  rows={3}
                ></Form.Control>
  </Form.Group>
</Form>
      </Modal.Body>
      <Modal.Footer>
        
        <Button style={RedButtonStyle} onClick={this.props.onHide}>Zamknij</Button>
        <Button style={BlueButtonStyle} onClick={this.onSubmit} >Dodaj</Button>
      </Modal.Footer>
    </Modal>
  )
}
}

AddAnnouncementAdmin.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  insertAnnouncement: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
mapStateToProps,
{insertAnnouncement}
)(withRouter(AddAnnouncementAdmin))
