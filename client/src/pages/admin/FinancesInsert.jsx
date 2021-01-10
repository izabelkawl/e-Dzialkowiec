import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertFinance } from "../../api/index";
import { Form }from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import classnames from "classnames";
import { Wrapper, BlueButtonStyle, RedButtonStyle, Title, Span } from '../constants';
import AllotmentsID from './AllotmentsID'

// const FinanceData = () => {
//     const [paymentdetails, setPaymentdetails] = useState([]);
//     const [allotments, setAllotments] = useState([]);
//         useEffect(() => {
//             const requestPaymentdetailsList = async () => {
//                 const paymentdetailsList = await api.getAllPaymentdetails();
//                 const { data } = paymentdetailsList;
//                 setPaymentdetails(data.data);
//             };
//         const requestAllotmentsList = async () => {
//             const allotmentsList = await api.getAllAllotments();
//             const { data } = allotmentsList;
//             setAllotments(data.data);
//         };
//         requestAllotmentsList();
//         requestPaymentdetailsList();
//     }, []);

//     var wol = 0;
//     var zaj = 0;
//     var rez = 0;
    
//     var result = paymentdetails.reduce(function(sum) {
//         return sum = sum+1;
//     },0 );

//     const resultZaj = allotments.map((allotment, index) => {
//             const { status } = allotment;
//                 if (status === "Zajęta"){
//                     zaj++
//                 }
//                 return zaj
//             })  
//     const resultRez = allotments.map((allotment, index) => {
//         const { status } = allotment;
//         if (status === "Rezerwacja"){
//                 rez++
//             }
//             return rez
//         })  
//     }

class FinancesInsert extends Component {
    constructor() {
        super()

        this.state = {
            allotment_number: '',
            title: '',
            area: '',
            charge: '',
            term: '',
            account: '',
            status: '',
            errors: {}
        }
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

    onSubmit = e => {

        e.preventDefault();
        const newFinance = {

            allotment_number: this.state.allotment_number,
            title: this.state.title,
            area: this.state.area,
            charge: this.state.charge,
            term: this.state.term,
            account: this.state.account,
            status: this.state.status
        };
        this.props.insertFinance(newFinance, this.props.history)
    };

    render() {
        const { errors } = this.state;
        return (
            <Wrapper>
                <Title>Tworzenie zobowiązania</Title>
        <Form onSubmit={this.onSubmit}>
            <Form.Group>
                <Form.Label htmlFor="title" >Tytuł: </Form.Label>
                <Span>{errors.title}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        value={this.state.title}
                        id="title"
                        type="text"
                        error={errors.title}
                        className={classnames("", {
                            invalid: errors.title
                        })}
                    ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Numer działki: </Form.Label>
                <Span>{errors.allotment_number}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        id="allotment_number"
                        as="select"
                        error={errors.allotment_number}
                        className={classnames("", {
                            invalid: errors.allotment_number
                        })}defaultChecked="Wybierz działkę"
                        >
                        <option hidden>Wybierz działkę</option>
                    <AllotmentsID/>
                    </Form.Control>
                    </Form.Group>
            
            <Form.Group>
                <Form.Label>Powierzchnia: </Form.Label>
                <Span>{errors.area}</Span>
                    <Form.Control
                    id="area"
                    value={this.state.area}
                        type="text"
                        onChange={this.onChange}
                        error={errors.area}
                        className={classnames("", {
                            invalid: errors.area
                        })}
                        ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Należność: </Form.Label>
                <Span>{errors.charge}</Span>
                    <Form.Control
                        id="charge"
                        type="text"
                        value={this.state.charge}
                        onChange={this.onChange}
                        error={errors.charge}
                        className={classnames("", {
                            invalid: errors.charge
                        })}
                        ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Termin zapłaty: </Form.Label>
                <Span>{errors.term}</Span>
                    <Form.Control
                        id="term"
                        type="date"
                        value={this.state.term}
                        onChange={this.onChange}
                        error={errors.term}
                        className={classnames("", {
                            invalid: errors.term
                        })}
                        ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Konto: </Form.Label>
                <Span>{errors.account}</Span>
                    <Form.Control
                        id="account"
                        type="text"
                        value={this.state.account}
                        onChange={this.onChange}
                        error={errors.account}
                        className={classnames("", {
                            invalid: errors.account
                        })}
                        ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Status: </Form.Label>
                <Span>{errors.status}</Span>
                    <Form.Control
                    onChange={this.onChange}
                    as="select" 
                    value={this.state.status} 
                    id="status" 
                    error={errors.status}
                        className={classnames("", {
                            invalid: errors.status
                        })}>
                        <option>Wybierz..</option> 
                        <option>Opłacona</option> 
                        <option>Nieopłacona</option> 
                    </Form.Control>
            </Form.Group>
                <Button style={BlueButtonStyle} type="submit">Wyślij</Button>{' '}
                <Button style={RedButtonStyle} href={'/admin/finances/list'}>Zamknij</Button>
                </Form>
            </Wrapper>
        )
    }
}

FinancesInsert.propTypes = {
    insertFinance: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { insertFinance }
)(withRouter(FinancesInsert));