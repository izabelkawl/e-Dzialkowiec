import React, { Component} from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertNoticeboard } from "../../api";
import { Button, Form, Modal } from 'react-bootstrap';
import classnames from "classnames";
import { RedButtonStyle, BlueButtonStyle, Span } from '../../pages/constants';


  class AddAnnouncement extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        title: '',
        user_id: this.props.auth.user.firstname + ' '+ this.props.auth.user.lastname,
        advertisement: '',
        image: '',
        errors: {},
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
      const newNoticeboard = {

         title: this.state.title,
          user_id: this.props.auth.user.firstname + ' '+ this.props.auth.user.lastname,
          advertisement: this.state.advertisement,
          image: this.state.image
      };
      this.props.insertNoticeboard(newNoticeboard, this.props.history)
  };
  render(){ 
      const { errors } = this.state;
      const { title, advertisement, image } = this.state
      const {staticContext, insertNoticeboard, ...rest} = this.props
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
            Dodaj ogłoszenie
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
              <Span>{errors.advertisement}</Span>
                <Form.Control
                  as="textarea" 
                  id="advertisement"
                  value={advertisement} 
                  error={errors.advertisement} 
                  onChange={this.onChange}
                  className={classnames("", {invalid: errors.advertisement })}
                  rows={3} 
            ></Form.Control>
          </Form.Group>
          <Form.Group >
            <Form.Label>Img</Form.Label>
              <Span>{errors.image}</Span>
                <Form.Control 
                  type="text"
                  id="image"
                  value={image}  
                  error={errors.image} 
                  onChange={this.onChange}
                  className={classnames("", {invalid: errors.image })}
                ></Form.Control>
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button 
        style={RedButtonStyle} 
        onClick={() => {
          this.props.onHide()
          window.location.reload()
        }}>Zamknij</Button>
        <Button style={BlueButtonStyle} onClick={this.onSubmit} >Dodaj</Button>
     </Modal.Footer>
      </Modal>
    )
  }
}

AddAnnouncement.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  insertNoticeboard: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {insertNoticeboard}
)(withRouter(AddAnnouncement));