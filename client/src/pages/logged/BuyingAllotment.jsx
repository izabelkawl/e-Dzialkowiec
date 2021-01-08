import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { updateAllotmentById } from '../../api';
import { Form, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import  {RedButtonStyle, BlueButtonStyle } from '../constants'
import classnames from "classnames";
import Wrapper from '../../components/Wrapper/Wrapper'
import Title from '../../components/Title'

const Container = styled.div`
    width: 70%;
    margin: 0 auto;
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
            status: "Rezerwacja",
            user_id: this.props.auth.user.firstname + ' ' + this.props.auth.user.lastname
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
        console.log(this.props.auth)
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
                <Container>
                <Title>Kupno działki</Title>
                <Form >
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
                      >
                    </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="4" htmlFor="allotment_width">Szerokość: </Form.Label>
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
                        readOnly
                       >
                            </Form.Control>
                </Col>
                </Form.Group> 
                <Form.Group as={Row}>
                    <Form.Label column sm="4" htmlFor="allotment_length">Długość: </Form.Label>
                     <Col sm="8">
                    <Form.Control
                    
                    onChange={this.onChange}
                        error={errors.allotment_length}
                        id="allotment_length"
                        type="text"
                        value={allotment_length}
                        className={classnames("", {
                            invalid: errors.allotment_length
                        })}
                        readOnly
                    ></Form.Control>
</Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="4" htmlFor="price">Cena: </Form.Label>
                      <Col sm="8">
                    <Form.Control
                    
                    onChange={this.onChange}
                         error={errors.price}
                         id="price"
                         type="text"
                         className={classnames("", {
                             invalid: errors.price
                         })}
                         value={price}
                         readOnly
                    ></Form.Control>
</Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="4" htmlFor="status">Status: </Form.Label>
                     <Col sm="8">
                    <Form.Control
                        value="Rezeracja"
                        onChange={this.onChange}
                        error={errors.status} 
                        id="status"
                        type="text"
                        className={classnames("", {
                            invalid: errors.status
                        })}
                        readOnly>
                        </Form.Control>
</Col>
                       
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="4" htmlFor="user_id">Użytkownik: </Form.Label>
                     <Col sm="8">
                    <Form.Control
                        value={user.firstname+' '+user.lastname}
                        onChange={this.onChange}
                        error={errors.user_id}
                        id="user_id"
                        type="text"
                        className={classnames("", {
                            invalid: errors.user_id
                        })}readOnly
                       ></Form.Control>
                    </Col>
                </Form.Group>
                <Button style={BlueButtonStyle} type="submit" onClick={this.handleUpdateAllotment}>Kupuje</Button>{' '}
                    <Button style={RedButtonStyle} href={'/dashboard/allotments'}>Powrót</Button>
                    </Form>
                    </Container>
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