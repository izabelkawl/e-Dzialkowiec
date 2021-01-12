import React, { Component} from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertTable } from "../../api";
import { Button, Form, Modal } from 'react-bootstrap';
import classnames from "classnames";
import { RedButtonStyle, BlueButtonStyle, Span } from '../../pages/constants';


  class AddAnnouncement extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        title: '',
        user_id: '',
        content: '',
        image: '',
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
      const newTable = {

         title: this.state.title,
          user_id: this.state.user_id,
          content: this.state.content,
          image: this.state.image
      };
      this.props.insertTable(newTable, this.props.history)
  };
  render(){ 
      const { errors } = this.state;
      const { title, user_id, content, image } = this.state
      const {staticContext, insertTable, ...rest} = this.props
   return (
      <Modal
        {...rest}
        size="lg"
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Header closeButton>
          <Modal.Title >
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
            <Form.Label>Użytkownik</Form.Label>
              <Span>{errors.user_id}</Span>
                <Form.Control 
                  type="text"
                  id="user_id"
                  value={user_id}
                  error={errors.user_id} 
                  onChange={this.onChange}
                  className={classnames("", {invalid: errors.user_id })}
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
          <Button style={RedButtonStyle} onClick={this.props.onHide}>Zamknij</Button>
          <Button style={BlueButtonStyle} onClick={this.onSubmit}>Dodaj</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

AddAnnouncement.propTypes = {
  errors: PropTypes.object.isRequired,
  insertTable: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {insertTable}
)(withRouter(AddAnnouncement));