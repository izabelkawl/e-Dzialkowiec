import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api from '../../api';
import { Form } from 'react-bootstrap';
import { Title, Information } from '../../pages/constants';

class DataChange extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.auth.user.id,
            email: '',
            firstname: '',
            lastname: '',
            address: '',
            phone: ''
        }
    }

    componentDidMount = async () => {
        const { id } = this.state
        const user = await api.getUserById(id)

        this.setState({
            email: user.data.data.email,
            firstname: user.data.data.firstname,
            lastname: user.data.data.lastname,
            address: user.data.data.address,
            phone: user.data.data.phone
        })
    }

    render() {
        const { email, lastname, firstname, address, phone } = this.state;
        return (
            <>
                <Title>Twoje dane osobowe</Title>
                <Information>*Jeżeli Twoje dane osobowe uległy zmianie, zwróć się do Zarządu w wiadomości prywatnej.</Information>
                <Form>
                    <Form.Group >
                        <Form.Label htmlFor="firstname">Imię:</Form.Label>
                        <Form.Control
                            id="firstname"
                            type="text"
                            value={firstname}
                            readOnly
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="lastname">Nazwisko:</Form.Label>
                        <Form.Control
                            id="lastname"
                            type="text"
                            value={lastname}
                            readOnly
                            />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label htmlFor="address">Adres:</Form.Label>
                        <Form.Control
                            id="address"
                            type="text"
                            value={address}
                            readOnly
                        />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label htmlFor="phone">Telefon:</Form.Label>
                            <Form.Control
                            id="phone"
                            type="text"
                            value={phone}
                            readOnly
                        />
                    </Form.Group>
                </Form>
                </>
            );
        }
    }

DataChange.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps
)(DataChange);