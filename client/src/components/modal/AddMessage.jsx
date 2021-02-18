import React, { Component} from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { insertMessage } from "../../api";
import UsersID from '../../pages/admin/UsersID';
import { Button, Modal, Form, FormControl, } from 'react-bootstrap';
import { RedButtonStyle, BlueButtonStyle, Span } from '../../pages/constants';

class AddMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.auth.user.id,
      recipient: '',
      content: '',
      errors: {}
    };
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
        this.setState({
            errors: nextProps.errors
        });
    };
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {

    e.preventDefault();
    const newMessage = {

      user_id: this.state.user_id,
      recipient: this.state.recipient,
      content: this.state.content,
    };

    this.props.insertMessage(newMessage, this.props.history)
  };

  render(){ 
    const { errors } = this.state;
    const {staticContext, insertMessage, ...rest} = this.props

  return (
      <Modal
        {...rest}
        animation={false}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Dodaj wątek
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate>
            <Form.Group>
              <Form.Label>Odbiorca: </Form.Label>
              <Span>{errors.recipient}</Span>
              <FormControl
                  onChange={this.onChange}
                  error={errors.recipient} 
                  as="select"
                  id="recipient"
                  className={classnames("", {
                      invalid: errors.recipient
                  })}>
                <option>Wybierz..</option>
                <option>Zarząd</option>
                <UsersID/>
              </FormControl>
            </Form.Group>
            <Form.Group>
              <Form.Label>Treść: </Form.Label>
              <Span>{errors.content }</Span>
              <FormControl
              onChange={this.onChange}
              value={this.state.content}
              error={errors.content}
              as="textarea"
              id="content"
              className={classnames("", {
                  invalid: errors.content
              })}
              rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={RedButtonStyle}
            onClick={() => {
              this.props.onHide()
              window.location.reload()}
            }>
            Zamknij
          </Button>
          <Button
            style={BlueButtonStyle}
            onClick={this.onSubmit}
            >
            Wyślij
          </Button>
        </Modal.Footer>
      </Modal>
    )
  };
};

AddMessage.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  insertMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
mapStateToProps,
{insertMessage}
)(withRouter(AddMessage))
