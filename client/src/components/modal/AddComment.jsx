import React, { Component} from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertComment } from "../../api";
import { Button, Form, Modal } from 'react-bootstrap';
import classnames from "classnames";
import { RedButtonStyle, BlueButtonStyle, Span } from '../../pages/constants';

class AddComment extends Component {
  constructor(props) {
    super(props)

    const {user} = this.props.auth
    this.state = {
        commenter:  user.firstname + ' '+ user.lastname,
        comment_content: '',
        forum_id: this.props.match.params.id,
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
  const newComment = {

    commenter: this.state.commenter,
    comment_content: this.state.comment_content,
    forum_id: this.state.forum_id
  };
  this.props.insertComment(newComment, this.props.history)
};

  render(){ 
    const { errors } = this.state;
    const { commenter,  comment_content } = this.state
    const {staticContext, insertComment, ...rest} = this.props
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
          Dodaj Komentarz
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
  <Form.Group >
      <Span>{errors.commenter}</Span>
        <Form.Control 
          type="text" 
          id="commenter" 
          value={commenter} 
          error={errors.commenter} 
          onChange={this.onChange}
          className={classnames("", {invalid: errors.commenter })}
          readOnly
      ></Form.Control>
  </Form.Group>
  <Form.Group >
    <Span>{errors.comment_content}</Span>
                <Form.Control 
                  as="textarea" 
                  id="comment_content"
                  value={comment_content}
                  placeholder="Treść.."
                  error={errors.comment_content} 
                  onChange={this.onChange}
                  className={classnames("", {invalid: errors.comment_content })}
                  rows={3}
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

AddComment.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  insertComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
mapStateToProps,
{insertComment}
)(withRouter(AddComment))
