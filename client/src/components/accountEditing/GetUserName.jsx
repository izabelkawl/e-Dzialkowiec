import React, { Component } from "react";
import api from "../../api";

class GetUserName extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            firstname: '',
            lastname: ''
        }
    }

    componentDidMount = async () => {
        const { id } = this.state
        const user = await api.getUserById(id)
        
        this.setState({
            firstname: user.data.data.firstname,
            lastname: user.data.data.lastname
        })
    }

    render() {
        const { firstname, lastname } = this.state
        return <>{firstname + ' ' + lastname}</>
    }             
};

export default GetUserName ;
