import React, { Component } from 'react';
import api from '../../api'
import styled from 'styled-components';

const Description = styled.div`
  background-color: white;
  padding: 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
`

class AdDescription extends Component {
  constructor(props) {
    super(props)

    this.state = {
        id: "6009bbfedb3f5e215007b7e0",
        description: '',
        rodo: '',
        errors: {}
    }
  }
  componentDidMount = async () => {
    const { id } = this.state
    const management = await api.getManagementById(id)

    this.setState({
        description: management.data.data.description,
        rodo: management.data.data.rodo,
    })
  }

  render() {
    const { description } = this.state

    return <Description>{description}</Description>
  }
}

export default AdDescription
