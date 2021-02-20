import React, { useState, useEffect, Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import api from "../../api";
import { Table, Form, Row, Col } from 'react-bootstrap';
import { Title } from '../constants';
import PdfButton from './PdfButton.jsx';
import Media from 'react-media';

class Management extends Component {
    constructor(){
        super()
        this.state = {
            inputValue: '',
        }
    }
   
    updateInputValue = (evt) => {
        this.setState({
          inputValue: evt.target.value
        });
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
            const { _id, allotment_number,owner, title, area, charge, term, status } = finance;
            const logged = this.props.auth.user.id
            const n = JSON.stringify({ allotment_number,owner, title, area, charge, term, status })
            const search = n.toLowerCase().includes(this.state.inputValue.toLowerCase())
        
            if(search === true && owner === logged){
                return (
                    <tr key={_id}>
                        <td>{allotment_number}</td>
                        <td>{title}</td>
                        <td>{area} m²</td>
                        <td>{charge} zł</td>
                        <td>{term}</td>
                        <td>{status}</td>
                        <td>
                        <PdfButton id={_id}/></td>
                    </tr>
                );
            }else{
                return null
            };
        });
            return (
                <Table striped bordered hover size="sm" responsive>
                <thead>
                    <tr>
                        <th>Numer</th>
                        <th>Tytuł</th>
                        <th>Powierzchnia</th>
                        <th>Należność</th>
                        <th>Termin</th>
                        <th>Status</th>
                        <th>Faktura</th>
                    </tr>
                </thead>
                <tbody>{FinancesTable}</tbody>
            </Table>
            )
        };

        return (
            <> 
                <Row>
                    <Col>
                        <Title>Zobowiązania</Title>
                    </Col>            
                    <Col lg={6}>
                        <Form.Control
                            value={this.state.inputValue}
                            onChange={this.updateInputValue}
                            id="inputValue"
                            placeholder="Szukaj.." />
                    </Col>
                    <Media query="(max-width: 992px)" render={() => (<Col lg={6}><p></p></Col>)}/>
                </Row>
            <FinancesList/>
        </>
        );
    };
};
  
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps
)(withRouter(Management));
