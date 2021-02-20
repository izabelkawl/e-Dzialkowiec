import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import api, { updateAllotmentById } from '../../api';
import { Form, Button } from 'react-bootstrap';
import { Title, List, BlueButtonStyle, RedButtonStyle, Label, Span } from '../constants';
import UsersID from '../../components/management/UsersID';

class AllotmentsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            number: '',
            allotment_width: '',
            allotment_length: '',
            price: '',
            status: '',
            user_id: '',

            name: '',
            errors: {}
        };
    };

    componentDidMount = async () => {
        const { id } = this.state
        const allotment = await api.getAllotmentById(id)

        this.setState({
            number: allotment.data.data.number,
            allotment_width: allotment.data.data.allotment_width,
            allotment_length: allotment.data.data.allotment_length,
            price: allotment.data.data.price,
            status: allotment.data.data.status,
            user_id: allotment.data.data.user_id,
        });
        if(this.state.user_id !== "Brak"){
            const user = await api.getUserById(allotment.data.data.user_id)
            this.setState({
                name: user.data.data.firstname + ' ' + user.data.data.lastname,
            });
        }
        
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

    handleUpdateAllotment = e => {

        e.preventDefault();
        const { id, number, allotment_width, allotment_length, price, status, user_id } = this.state
        const payload = { number, allotment_width, allotment_length, price, status, user_id }
        this.props.updateAllotmentById(id, payload)
    };

    render() {

        const { errors, number, allotment_width, allotment_length, price, status, user_id, name } = this.state;

        return (
            <List>
                <Title>Edycja działki</Title>
                <Form.Group>
                    <Label htmlFor="number">Numer:</Label>
                    <Form.Control 
                        onChange={this.onChange}
                        error={errors.number}
                        id="number"
                        type="text"
                        className={classnames("", {
                            invalid: errors.number
                        })}
                        value={number}
                        readOnly
                    />
                </Form.Group>
                <Form.Group>
                    <Label htmlFor="allotment_width">Szerokość: </Label>
                    <Span>{errors.allotment_width}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.allotment_width}
                        id="allotment_width"
                        type="text"
                        className={classnames("", {
                            invalid: errors.allotment_width
                        })}
                        value={allotment_width}
                    />
                </Form.Group>
                <Form.Group>
                    <Label htmlFor="allotment_length">Długość: </Label>
                    <Span>{errors.allotment_length}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.allotment_length}
                        id="allotment_length"
                        type="text"
                        className={classnames("", {
                            invalid: errors.allotment_length
                        })}
                        value={allotment_length}
                    />
                </Form.Group>
                <Form.Group>
                    <Label htmlFor="price">Cena: </Label>
                    <Span>{errors.price}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.price}
                        id="price"
                        type="text"
                        className={classnames("", {
                            invalid: errors.price
                        })}
                        value={price}
                    />
                </Form.Group>
                <Form.Group>
                    <Label htmlFor="status" >Status: </Label>
                    <Span>{errors.status}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.status} 
                        id="status"
                        as="select"
                        className={classnames("", {
                            invalid: errors.status
                        })} >
                        <option hidden>{status}</option>
                        <option >Wolna</option> 
                        <option >Zajęta</option> 
                        <option >Na sprzedaż</option> 
                        <option >Rezerwacja</option> 
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Label htmlFor="user_id">Użytkownik: </Label>
                    <Span>{errors.user_id}</Span>
                    {status === "Wolna" ? 
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.user_id}
                        id="user_id"
                        as="select"
                        className={classnames("", {
                        invalid: errors.user_id
                        })}
                        defaultChecked="Brak"
                        >
                        {this.state.user_id = "Brak"}
                        <option value="Brak">Brak</option>
                    </Form.Control>
                    :
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.user_id}
                        id="user_id"
                        as="select"
                        className={classnames("", {
                        invalid: errors.user_id
                        })}
                        >
                        {this.state.user_id = user_id}
                        {name !== '' ? <option>{name}</option> : <option>Brak</option> }
                        <UsersID/>
                    </Form.Control>
    }
                </Form.Group>
                <br></br>
                
                <Button size="sm"style={RedButtonStyle} href={'/admin/allotments/list'}>Powrót</Button>
                {' '}
                <Button size="sm"style={BlueButtonStyle} type="submit" onClick={this.handleUpdateAllotment}>Aktualizuj</Button>
            </List>
        );
    };
};

AllotmentsUpdate.propTypes = {
    updateAllotmentById: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { updateAllotmentById }
)(withRouter( AllotmentsUpdate));