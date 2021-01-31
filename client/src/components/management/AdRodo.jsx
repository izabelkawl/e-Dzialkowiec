import React, { Component } from 'react';
import api from '../../api'
import styled from 'styled-components';

const Rodo = styled.div`
  background-color: white;
  padding: 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
`

class AdRodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
        id: "6009bbfedb3f5e215007b7e0",
        rodo: '',
        errors: {}
    }
  }
  componentDidMount = async () => {
    const { id } = this.state
    const management = await api.getManagementById(id)

    this.setState({
        rodo: management.data.data.rodo,
    })
  }

  render() {
    const { rodo } = this.state

    return <Rodo>{rodo}</Rodo>
  }
}

export default AdRodo
