import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import UsersID from '../../components/management/UsersID';
import { insertAllotment } from "../../api/index";
import { Form, Button, Row, Col }from 'react-bootstrap';
import { Title, List, BlueButtonStyle, RedButtonStyle, Label, Span, Container60 } from '../constants';
import { Link } from "react-router-dom";

class AllotmentsInsert extends Component {
    constructor() {
        super()

        this.state = {
            number: '',
            allotment_width: '',
            allotment_length: '',
            price: '',
            status: '',
            user_id: '',
            errors: {}
        };
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

    onSubmit = e => {

        e.preventDefault();
        const newAllotment = {

            number: this.state.number,
            allotment_width: this.state.allotment_width,
            allotment_length: this.state.allotment_length,
            price: this.state.price,
            status: this.state.status,
            user_id: this.state.user_id,
        };
        this.props.insertAllotment(newAllotment, this.props.history)
    };

    render() {
        const { errors } = this.state;

        return (
            <Container60>
            <List>
                <Title>Tworzenie działki</Title>
                <Form noValidate onSubmit={this.onSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="number">Numer:</Form.Label>
                        <Col sm="8">
                            <Span>
                                {errors.number}
                                {errors.numberexists}
                            </Span>
                            <Form.Control
                                onChange={this.onChange}
                                value={this.state.number}
                                error={errors.number}
                                id="number"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.number
                                })}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="allotment_width">Szerokość: </Form.Label>
                        <Col sm="8">
                            <Span>{errors.allotment_width}</Span>
                            <Form.Control
                                onChange={this.onChange}
                                value={this.state.allotment_width}
                                error={errors.allotment_width}
                                type="text"
                                id="allotment_width"
                                className={classnames("", {
                                    invalid: errors.allotment_width
                                })}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="allotment_length">Długość: </Form.Label>
                        <Col sm="8">
                        <Span>{errors.allotment_length}</Span>
                        <Form.Control
                            onChange={this.onChange}
                            value={this.state.allotment_length}
                            error={errors.allotment_length}
                            type="text"
                            id="allotment_length"
                            className={classnames("", {
                                invalid: errors.allotment_length
                            })}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="price">Cena: </Form.Label>
                        <Col sm="8">
                            <Span>{errors.price}</Span>
                            <Form.Control
                                onChange={this.onChange}
                                value={this.state.price}
                                error={errors.price}
                                type="text"
                                id="price"
                                className={classnames("", {
                                    invalid: errors.price
                                })}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="status">Status: </Form.Label>
                        <Col sm="8">
                            <Span>{errors.status}</Span>
                            <Form.Control
                                onChange={this.onChange}
                                error={errors.status} 
                                as="select"
                                id="status"
                                className={classnames("", {
                                    invalid: errors.status
                                })}
                                defaultChecked="Status działki"
                                >
                                <option>Status działki</option> 
                                <option>Wolna</option> 
                                <option>Zajęta</option> 
                                <option>Na sprzedaż</option> 
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="user_id">Działkowicz: </Form.Label>
                        <Col sm="8">
                            <Span>{errors.user_id}</Span>
                            {this.state.status==="Wolna" ? 
                                <Form.Control
                                    onChange={this.onChange}
                                    error={errors.user_id}
                                    as="select"
                                    id="user_id"
                                    className={classnames("", {
                                    invalid: errors.user_id
                                    })}
                                    >
                                    {this.state.user_id = "Brak"}
                                    <option>Brak</option>
                                </Form.Control>
                            : 
                                <Form.Control
                                    onChange={this.onChange}
                                    error={errors.user_id}
                                    as="select"
                                    id="user_id"
                                    className={classnames("", {
                                    invalid: errors.user_id
                                    })}
                                    defaultChecked="Wybierz działkowca"
                                    >
                                    <option>Wybierz działkowca</option>
                                    <UsersID/>
                                </Form.Control>
                            }
                        </Col>
                    </Form.Group>
                    
                    <br></br>
                    <Link to={'/admin/allotments/list'}>
                        <Button size="sm"style={RedButtonStyle}>Powrót</Button>
                    </Link>
                    {' '}
                   <Button size="sm"style={BlueButtonStyle} type="submit">Stwórz</Button>
                </Form>
            </List>
        </Container60>
        );
    };
};

AllotmentsInsert.propTypes = {
    insertAllotment: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { insertAllotment }
)(withRouter(AllotmentsInsert));