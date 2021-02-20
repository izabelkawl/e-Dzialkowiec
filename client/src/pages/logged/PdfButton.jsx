import React, { useState, useEffect, Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import api from "../../api";
import { Button } from 'react-bootstrap';
import { BlueButtonStyle } from '../constants';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './pdf.jsx';

class PdfButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.id,
        }
    }
   
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
            const { _id, allotment_number,  title, area, charge, term, account } = finance;
            if(_id === this.state.id){
                return ( <PDFDownloadLink
                key={_id}
                    document={MyDocument({ number: allotment_number,
                                           owner: this.props.auth.user.firstname+ ' '+ this.props.auth.user.lastname,
                                           title: title,
                                           area: area,
                                           charge: charge,
                                           term: term,
                                           account: account,
                                        }) }   
                    fileName="faktura.pdf">
  {({ blob, url, loading, error }) => (loading ? 'Ładowanie...' :  <Button size="sm"style={BlueButtonStyle}>Pobierz</Button>)}
</PDFDownloadLink>
        );
        }else return null

        })
        return FinancesTable
    }

    return <FinancesList/>
                
        
    }
};
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(withRouter(PdfButton));
