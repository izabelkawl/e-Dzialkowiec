import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { buyAllotmentById, insertFinance } from '../../api';
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
            user_id: '',

            allotment_number: '',
            owner: '',
            title: '',
            area: '',
            charge: '',
            term: '',
            account: '',
            status: '',
        }
    }
    componentDidMount = async () => {
        const { id } = this.state
        const allotment = await api.getAllotmentById(id)
        const paymentdetails = await api.getPaymentdetailById('5ffa2f4e205ae300946933d7')

        this.setState({
            number: allotment.data.data.number,
            allotment_width: allotment.data.data.allotment_width,
            allotment_length: allotment.data.data.allotment_length,
            price: allotment.data.data.price,
            status: "Rezerwacja",
            user_id: this.props.auth.user.firstname + ' ' + this.props.auth.user.lastname,
       
            stable_price: paymentdetails.data.data.stable_price,
            membership_fee: paymentdetails.data.data.membership_fee,
            water_advance: paymentdetails.data.data.water_advance,
            water_charge: paymentdetails.data.data.water_charge,
            energy_charge: paymentdetails.data.data.energy_charge,
            garbage: paymentdetails.data.data.garbage,
            transfer_title: paymentdetails.data.data.transfer_title,
            payment_date: paymentdetails.data.data.payment_date,
            account_number: paymentdetails.data.data.account_number
        })
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleUpdateAllotment = () => {
        const { id, number, allotment_width, allotment_length, price, status, user_id } = this.state
        const payload = { number, allotment_width, allotment_length, price, status, user_id }
        this.props.buyAllotmentById(id, payload)
        
        const timestamp = id.toString().substring(0,8);
        const date = new Date(parseInt(timestamp ,16)*1000).toLocaleDateString();
       
        const newFinance = {

            allotment_number: this.state.number,
            owner: this.props.auth.user.firstname + ' ' + this.props.auth.user.lastname,
            title: "Kupno działki",
            area: this.state.allotment_width * this.state.allotment_length,
            charge: this.state.price,
            term: date,
            account: this.state.account_number,
            status: "Nieopłacona"
        };
        this.props.insertFinance(newFinance, this.props.history)

    }
    render() {
        const ConfirmModal = (props) => {
            const [modalShow, setModalShow] = React.useState(false);
            return (
                <div>
                    <br></br>
                <Button style={BlueButtonStyle} href={'/dashboard/allotments'}>Powrót</Button>{' '}
                <Button style={RedButtonStyle} onClick={() => setModalShow(true)}>
                Kupuję
                </Button>
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
                    <Button style={BlueButtonStyle} onClick={() => setModalShow(false)}>Rezygnuje
          </Button>&nbsp;
                    <Button style={RedButtonStyle} onClick={() => {
                        this.handleUpdateAllotment();
                        setModalShow(false);
                    }}>Kupuję</Button>
            
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
    insertFinance: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { buyAllotmentById, insertFinance }
)(withRouter( BuyingAllotment));