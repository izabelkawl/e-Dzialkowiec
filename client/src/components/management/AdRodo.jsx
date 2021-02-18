import React, { Component } from 'react';
import api from '../../api';
import { WhiteContainer } from '../../pages/constants';

class AdRodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
        id: "6009bbfedb3f5e215007b7e0",
        rodo: '',
        errors: {}
    };
  };

  componentDidMount = async () => {
    const { id } = this.state
    const management = await api.getManagementById(id)

    this.setState({
        rodo: management.data.data.rodo,
    });
  };

  render() {
    const { rodo } = this.state;
    return <WhiteContainer>{rodo}</WhiteContainer>
  };
};

export default AdRodo
