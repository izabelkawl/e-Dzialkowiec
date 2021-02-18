import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { updateAllotmentById } from '../../api';
import { Form, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import  {RedButtonStyle, BlueButtonStyle, Title } from '../constants'
import classnames from "classnames";
import Wrapper from '../../components/Wrapper/Wrapper';

const Container = styled.div`
    width: 70%;
    margin: 0 auto;
`;
const Span = styled.div`
    padding-bottom: 30px;
    color: gray;
`
const Error = styled.span.attrs({
    className: `red-text`,
})`
    color: red;
`
class MyAllotment extends Component {
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
            user_id: this.props.auth.user.id
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
        e.preventDefault()
        const { id, number, allotment_width, allotment_length, price, status, user_id } = this.state
        const payload = { number, allotment_width, allotment_length, price, status, user_id }
        this.props.updateAllotmentById(id, payload)
    }

    render() {
        const { errors, number, allotment_width, allotment_length, price, status } = this.state;
        return (
            <Wrapper>
                <Container>
                    <Title>Zarządzaj działką</Title>
                    <Span><i>*By wystawić działkę na sprzedaż ustaw dogodną cenę, zmień status działki, a pokaże się ona na mapie innym użytkownikom.</i></Span>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="number">Numer:</Form.Label>
                        <Col sm="8">
                            <Form.Control
                                onChange={this.onChange}
                                id="number"
                                type="text"
                                value={number}
                                readOnly>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="allotment_width">Szerokość: </Form.Label>
                        <Col sm="8">
                            <Form.Control                   
                                onChange={this.onChange}
                                id="allotment_width"
                                type="text"
                                value={allotment_width}
                                readOnly>
                            </Form.Control>
                        </Col>
                    </Form.Group> 
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="allotment_length">Długość: </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                onChange={this.onChange}
                                id="allotment_length"
                                type="text"
                                value={allotment_length}
                                readOnly>
                            </Form.Control>
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
                                value={price}>
                            </Form.Control>
                        <Error>{errors.price}</Error>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="status">Status: </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                onChange={this.onChange}
                                id="status"
                                as="select"
                                value={status}>
                                <option>Zajęta</option>
                                <option>Na sprzedaż</option>
                            </Form.Control>
                            <Error>{errors.status}</Error>
                        </Col>     
                    </Form.Group>
                        <Button style={BlueButtonStyle} href={'/dashboard/allotments'}>Powrót</Button>{' '} 
                        <Button style={RedButtonStyle} type="submit" onClick={this.handleUpdateAllotment}>Zapisz zmiany</Button>
                </Form>
            </Container>
        </Wrapper>
        )
    }
}

MyAllotment.propTypes = {
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
)(withRouter(MyAllotment));