import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { updateAllotmentById } from '../../api';
import { Form, Button, Col, } from 'react-bootstrap';
import styled from 'styled-components';

import classnames from "classnames";
import Wrapper from '../../components/Wrapper/Wrapper'

const Title = styled.h1`
    font-size: 32px;
`;

const Label = styled.label`
    margin: 5px;
`;

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`;

class BuyingAllotment extends Component {
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
            errors: {}
        }
    }
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
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleUpdateAllotment = e => {

        e.preventDefault();
        const { id, number, allotment_width, allotment_length, price, status, user_id } = this.state
        const payload = { number, allotment_width, allotment_length, price, status, user_id }

        this.props.updateAllotmentById(id, payload)
    }

    render() {
        const { user } = this.props.auth;
        const { errors, number, allotment_width, allotment_length, price } = this.state;
        return (
            <Wrapper>
                <Title>Kupno działki</Title>
                <Form >
                    
                <Form.Row>
                    <Col><Label htmlFor="number">Numer:</Label></Col>
                    <Col>
                    <Form.Control 
                    
                    onChange={this.onChange}
                       error={errors.number}
                       id="number"
                       type="text"
                       className={classnames("", {
                           invalid: errors.number
                       })}
                       value={number}
                       readonly
                      >
                    </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col><Label htmlFor="allotment_width">Szerokość: </Label>
                    </Col> 
                    <Col><Form.Control
                    
                    onChange={this.onChange}
                        error={errors.allotment_width}
                        id="allotment_width"
                        type="text"
                        className={classnames("", {
                            invalid: errors.allotment_width
                        })}
                        value={allotment_width}
                        readonly
                       >
                            </Form.Control>
                            </Col>
                </Form.Row> 
                <Form.Row>
                    <Col><Label htmlFor="allotment_length">Długość: </Label></Col>
                    <Col><Form.Control
                    
                    onChange={this.onChange}
                        error={errors.allotment_length}
                        id="allotment_length"
                        type="text"
                        value={allotment_length}
                        className={classnames("", {
                            invalid: errors.allotment_length
                        })}
                        readonly
                    ></Form.Control></Col>
                </Form.Row>
                <Form.Row>
                    <Col><Label htmlFor="price">Cena: </Label></Col>
                    <Col> <Form.Control
                    
                    onChange={this.onChange}
                         error={errors.price}
                         id="price"
                         type="text"
                         className={classnames("", {
                             invalid: errors.price
                         })}
                         value={price}
                         readonly
                    ></Form.Control></Col>
                </Form.Row>
                <Form.Row>
                    <Col><Label htmlFor="status">Status: </Label></Col>
                    <Col><Form.Control
                        value="Rezeracja"
                        onChange={this.onChange}
                        error={errors.status} 
                        id="status"
                        type="text"
                        className={classnames("", {
                            invalid: errors.status
                        })}
                        readonly>
                        </Form.Control>
                       </Col>
                </Form.Row>
                <Form.Row>
                    <Col><Label htmlFor="user_id">Użytkownik: </Label></Col>
                    <Col><Form.Control
                    value={user.firstname+' '+user.lastname}
                        onChange={this.onChange}
                        error={errors.user_id}
                        id="user_id"
                        type="text"
                        className={classnames("", {
                            invalid: errors.user_id
                        })}readonly
                       ></Form.Control></Col>
                </Form.Row>
                    <Button type="submit" onClick={this.handleUpdateAllotment}>Kupuje</Button>
                    <CancelButton href={'/dashboard/allotments'}>Powrót</CancelButton>
                    </Form>
            </Wrapper>
        )
    }
}

BuyingAllotment.propTypes = {
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
)(withRouter( BuyingAllotment));