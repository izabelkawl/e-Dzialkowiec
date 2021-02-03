import React, { Component } from 'react';
import api, { updateManagementById } from '../../api'
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form,Button} from 'react-bootstrap';
import {  Span, BlueButtonStyle } from '../../pages/constants';
import classnames from "classnames";

class EditAddress extends Component {
  constructor(props) {
    super(props)

    this.state = {
        id: "6009bbfedb3f5e215007b7e0",
        title: '',
        name: '',
        city: '',
        address: '',
        phone: '',
        errors: {}
    }
  }
  componentDidMount = async () => {
    const { id } = this.state
    const management = await api.getManagementById(id)

    this.setState({
      title: management.data.data.title,
      name: management.data.data.name,
      city: management.data.data.city,
      address: management.data.data.address,
      phone: management.data.data.phone,
      description: management.data.data.description,
      rodo: management.data.data.rodo,
    })
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


handleUpdateManagement = e => {

    e.preventDefault();
    const {id,  description, rodo, title, name, city, address, phone} = this.state
    const payload = {  description, rodo, title, name, city, address, phone }

    this.props.updateManagementById(id, payload)
}
  render() {
    const { errors,  title, name, city, address, phone } = this.state

    return <Form>
       <Form.Group>
          <Form.Label>Tytuł</Form.Label>
          <Span>{errors.title}</Span>
          <Form.Control
              onChange={this.onChange}
              error={errors.title}
              id="title"
              type="text"
              className={classnames("", {
                  invalid: errors.title
              })}
              value={title}
          />
      </Form.Group>
      <Form.Group>
          <Form.Label>Nazwa ogrodu:</Form.Label>
          <Span>{errors.name}</Span>
          <Form.Control
              onChange={this.onChange}
              error={errors.name}
              id="name"
              type="text"
              className={classnames("", {
                  invalid: errors.name
              })}
              value={name}
          />
      </Form.Group>
      <Form.Group>
          <Form.Label>Miasto:</Form.Label>
          <Span>{errors.city}</Span>
          <Form.Control
              onChange={this.onChange}
              error={errors.city}
              id="city"
              type="text"
              className={classnames("", {
                  invalid: errors.city
              })}
              value={city}
          />
      </Form.Group>
      <Form.Group>
          <Form.Label>Adres:</Form.Label>
          <Span>{errors.address}</Span>
          <Form.Control
              onChange={this.onChange}
              error={errors.address}
              id="address"
              type="text"
              className={classnames("", {
                  invalid: errors.address
              })}
              value={address}
          />
      </Form.Group>
      <Form.Group>
          <Form.Label>Telefon:</Form.Label>
          <Span>{errors.phone}</Span>
          <Form.Control
              onChange={this.onChange}
              error={errors.phone}
              id="phone"
              type="text"
              className={classnames("", {
                  invalid: errors.phone
              })}
              value={phone}
          />
      </Form.Group>
      <br></br>
        <Button style={BlueButtonStyle} type="submit" onClick={this.handleUpdateManagement}>Zapisz</Button>
    </Form>
  }
}

EditAddress.propTypes = {
    updateManagementById: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { updateManagementById }
)(withRouter( EditAddress));