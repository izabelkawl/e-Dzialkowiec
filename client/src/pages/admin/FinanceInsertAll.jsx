import React, { useState, useEffect, Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import api, { insertAllFinance } from "../../api/index";
import { Button } from 'react-bootstrap';
import { List, BlueButtonStyle, RedButtonStyle, Title, Container60, Information, lightGray } from '../constants';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const AllotmentNumber = styled.p`
    width: 25px;
    height: 25px;
    padding: 3px;
    text-align: center;
    display: inline-block;
    margin: 3px;
`;

class FinanceInsertAll extends Component {
    constructor() {
        super()

        this.state = {
            id: '',
            number: '',
            allotment_width: '',
            allotment_length: '',
            user_id: '',

            allotment_number: '',
            owner: '',
            title: '',
            area: '',
            charge: '',
            term: '',
            account: '',
            status: '',

            transfer_title: '',
            stable_price: '',
            membership_fee: '',
            water_charge: '',
            energy_charge: '',
            garbage: '',
            payment_date: '',
            account_number: '',

            name: '',
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        };
    };

    componentDidMount = async () => {
        const paymentdetails = await api.getPaymentdetailById('5ffa2f4e205ae300946933d7')
        
        this.setState({
            stable_price: paymentdetails.data.data.stable_price,
            membership_fee: paymentdetails.data.data.membership_fee,
            water_advance: paymentdetails.data.data.water_advance,
            water_charge: paymentdetails.data.data.water_charge,
            energy_charge: paymentdetails.data.data.energy_charge,
            garbage: paymentdetails.data.data.garbage,
            transfer_title: paymentdetails.data.data.transfer_title,
            payment_date: paymentdetails.data.data.payment_date,
            account_number: paymentdetails.data.data.account_number
        });
    };


    onSubmit = e => {

        const newFinance = {
            
            allotment_number: this.state.allotment_number,
            owner: this.state.owner,
            title: this.state.title,
            area: this.state.area,
            charge: this.state.charge,
            term: this.state.term,
            account: this.state.account,
            status: this.state.status
        };
        this.props.insertAllFinance(newFinance, this.props.history)
    };

    render() {

        const { transfer_title,  payment_date, account_number } = this.state;
        
        const FinancesList = () => {
            const [allotments, setAllotments] = useState([]);

            useEffect(() => {
                const requestAllotmentsList = async () => {
                    const allotmentsList = await api.getAllAllotments();
                    const { data } = allotmentsList;
                    setAllotments(data.data);
                };
                requestAllotmentsList();
            }, []); 
            
            const length = allotments.length;
            const CreateFinances = () => {
                    for (let i = 0; i < length; i++) {
                        if(allotments[i].status === "Zajęta"){
                    // Do something with element
                    this.state.allotment_number = allotments[i].number
                    this.state.owner= allotments[i].user_id
                    this.state.title= transfer_title
                    this.state.area= allotments[i].allotment_width * allotments[i].allotment_length
                    this.state.charge= `${(( +allotments[i].allotment_width * +allotments[i].allotment_length * +this.state.stable_price ) + +this.state.membership_fee  + +this.state.water_advance + +this.state.water_charge + +this.state.energy_charge + +this.state.garbage)}`
                    this.state.term= payment_date
                    this.state.account= account_number
                    this.state.status= "Nieopłacona"
                    this.onSubmit()
                    }
                }
                alert("Dodano pomyślnie!")
            }

            const GardenList = allotments.map((allotment) => {
                const { _id, number, status } = allotment;
                if( status === "Zajęta"){
                    return <><AllotmentNumber key={_id}>{number}</AllotmentNumber>,</>
                }
            })
        return (
            <Container60>
                <List >
                    <Title>Tworzenie zobowiązania</Title>
                    <Information>*Zoobowiązania trafiają do działek o statusie "Zajęta".</Information>
                    <div>
                        <p>Działki:</p>
                        {GardenList}
                    </div>
                    <br></br>
                    <Link to={'/admin/finances/list'}>
                        <Button size="sm" style={RedButtonStyle}>Powrót</Button>
                    </Link>
                    {' '}
                    <Button size="sm" style={BlueButtonStyle} onClick={() => {CreateFinances()}}>Wyślij</Button>
                </List>
            </Container60>
        );
        }
        return <FinancesList/>
          
    };
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { insertAllFinance }
)(withRouter(FinanceInsertAll));