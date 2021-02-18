import React, { Component } from 'react';
import api from '../../api'
import { WhiteContainer } from '../../pages/constants'

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

    return <WhiteContainer>{description}</WhiteContainer>
  }
}

export default AdDescription
