import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { buyAllotmentById } from '../../api';
// Style
import styled from 'styled-components';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import Wrapper from '../../components/Wrapper/Wrapper';
import Title from '../../components/Title';
// Button Style
import  {RedButtonStyle, BlueButtonStyle } from '../constants';

const Container = styled.div`
    width: 60%;
    margin: 0 auto;
`;
const Span = styled.div`
    padding-bottom: 30px;
    color: gray;
`
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
            user_id: ''
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

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleUpdateAllotment = () => {
        const { id, number, allotment_width, allotment_length, price, status, user_id } = this.state
        const payload = { number, allotment_width, allotment_length, price, status, user_id }
        this.props.buyAllotmentById(id, payload)
    }

    render() {
        const ConfirmModal = (props) => {
            const [modalShow, setModalShow] = React.useState(false);
            return (
                <div>
                    <br></br>
                <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>
                Kupuję
                </Button>{' '}
                <Button style={RedButtonStyle} href={'/dashboard/allotments'}>Powrót</Button>

              <Modal show={modalShow}
              onHide={() => setModalShow(false)}
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Potwierdzenie
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Potwierdzam kupno wybranej działki i zoobowiązuję sie uregulować nalżność do 7 dnia tygodnia.</p><p> W innym wypadku rezerwacja zniknie z systemu.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={BlueButtonStyle} type="submit" onClick={() => {
                        this.handleUpdateAllotment();
                        setModalShow(false)}
                        }>Kupuję</Button>
                    <Button style={RedButtonStyle} onClick={() => setModalShow(false)}>
            Rezygnuje
          </Button>
                </Modal.Footer>
              </Modal>
              </div>
            );
          }

        const { number, allotment_width, allotment_length, price } = this.state;
        return (
            <Wrapper>
                <Container>
                <Title>Kupno działki</Title>
                <Span><i>*Kupiona działka zostaje zarezerwowana, status zostanie zmieniony po uregulowaniu należności.</i></Span>
                <Form >
                <Form.Group as={Row}>
                    <Form.Label column sm="4" htmlFor="number">Numer:</Form.Label>
                    <Col sm="8">
                    <Form.Control
                        onChange={this.onChange}
                       id="number"
                       type="text"
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
                        id="allotment_width"
                        type="text"
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
                         id="price"
                         type="text"
                         value={price}
                         readOnly
                    ></Form.Control>
</Col>
                </Form.Group>
                {/* Modal */}
                <ConfirmModal/>
                    </Form>
                    </Container>
            </Wrapper>
        )
    }
}

BuyingAllotment.propTypes = {
    buyAllotmentById: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { buyAllotmentById }
)(withRouter( BuyingAllotment));