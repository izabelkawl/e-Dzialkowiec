import React, { Component } from 'react';
import api from '../../api';
import { AdressContainer } from '../../pages/constants';

class Address extends Component {
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
    };
  };

  componentDidMount = async () => {
    const { id } = this.state
    const management = await api.getManagementById(id)

    this.setState({
      title: management.data.data.title,
      name: management.data.data.name,
      city: management.data.data.city,
      address: management.data.data.address,
      phone: management.data.data.phone,
    });
  };

  render() {
    const { title, name, city, address, phone } = this.state

    return (<AdressContainer>
            <p>{title}</p>
            <h4><b>{name}</b></h4>
            <p>{city}</p>
            <p>{address}</p>
            <br></br>
            <p ><i>{phone}</i></p>
          </AdressContainer>
    )};
};

export default Address
