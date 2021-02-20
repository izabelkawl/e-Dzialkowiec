import React, { Component} from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import UsersID from '../management/UsersID';
import { insertMessage } from "../../api";
import { Button, Modal, Form, FormControl, } from 'react-bootstrap';
import { RedButtonStyle, BlueButtonStyle, Span } from '../../pages/constants';

class AddMessageAdminPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: "Zarząd",
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

      user_id: "Zarząd",
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
            Wyślij wiadomość
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
                  })} >
                <option>Wybierz działkowca..</option>
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
                rows={4}
                />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={RedButtonStyle}
            onClick={() => {
              this.props.onHide()
              window.location.reload()
          }}>
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

AddMessageAdminPanel.propTypes = {
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
)(withRouter(AddMessageAdminPanel))
