import React, { useState, useEffect, Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api from "../../api";
import { Table, Button } from 'react-bootstrap';
import {  BlueButtonStyle } from '../constants';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './pdf.jsx';

class Management extends Component {

    render() {
        const FinancesList = () => {
            const [finances, setFinances] = useState([]);
            useEffect(() => {
                const requestFinancesList = async () => {
                    const financesList = await api.getAllFinances();
                    const { data } = financesList;
                    setFinances(data.data);
                };
                requestFinancesList();
            }, []);

        const FinancesTable = finances.map((finance, index) => {
            const { _id, allotment_number,owner,  title, area, charge, term, status } = finance;
            const logged = this.props.auth.user.firstname+ ' '+ this.props.auth.user.lastname
            if(owner === logged){
            return (
                <tr key={_id}>
                    <td>{allotment_number}</td>
                    <td>{title}</td>
                    <td>{area}</td>
                    <td>{charge}</td>
                    <td>{term}</td>
                    <td>{status}</td>
                    <td><PDFDownloadLink document={<MyDocument />} fileName="faktura.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Ładowanie...' :  <Button style={BlueButtonStyle}>Pobierz</Button>)}
    </PDFDownloadLink></td>
                </tr>
            );
        }
        })
        return (
        <Table striped bordered hover size="sm" responsive>
        <thead>
            <tr>
                <th>Numer</th>
                <th>Tytuł</th>
                <th>Powierzchnia</th>
                <th>Nalężność</th>
                <th>Termin</th>
                <th>Status</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
                {FinancesTable}
        </tbody>
    </Table>)
    }
        return (<FinancesList/> )
    }
};

Management.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(withRouter(Management));
