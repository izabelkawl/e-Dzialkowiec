import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import api, { updateAllotmentById } from '../../api';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Title, List, BlueButtonStyle, RedButtonStyle, Span, Container60 } from '../constants';
import UsersID from '../../components/management/UsersID';
import { Link } from "react-router-dom";

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
            <Container60>
            <List>
                <Title>Edycja działki</Title>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="number">Numer:</Form.Label>
                        <Col sm="8">
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
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="allotment_width">Szerokość: </Form.Label>
                        <Span>{errors.allotment_width}</Span>
                        <Col sm="8">
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
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="allotment_length">Długość: </Form.Label>
                        <Col sm="8">
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
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="price">Cena: </Form.Label>
                        <Col sm="8">
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
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="status" >Status: </Form.Label>
                        <Col sm="8">
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
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="user_id">Użytkownik: </Form.Label>
                        <Col sm="8">
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
                        </Col>
                    </Form.Group>
                </Form>
                <br></br>
                <Link to={'/admin/allotments/list'}>
                    <Button size="sm"style={RedButtonStyle}>Powrót</Button>
                </Link>
                {' '}
                <Button size="sm"style={BlueButtonStyle} type="submit" onClick={this.handleUpdateAllotment}>Aktualizuj</Button>
            </List>
        </Container60>
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