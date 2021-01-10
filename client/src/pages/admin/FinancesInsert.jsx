import React, { Component , useState, useEffect } from "react";
import api from "../../api";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { insertFinance } from "../../api/index";
import { Form }from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Wrapper, BlueButtonStyle, Title} from '../constants';

class SelectAllotment extends Component {
    createFinance = event => {
        event.preventDefault()

        window.location.href = `/admin/finances/create/${this.props.id}`
    }
    render() {
        return <Button style={BlueButtonStyle} onClick={this.createFinance}>Dalej</Button>
    }
}

class FinancesInsert extends Component {
    constructor(props){
        super(props);
        this.state={
            id: "Wybierz",
        }
    
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ id: e.target.value})
    }

    render() {
    const Sel = () => {
        const [allotments, setAllotments] = useState([]);
 
    useEffect(() => {
        const requestAllotmentsList = async () => {
            const allotmentsList = await api.getAllAllotments();
            const { data } = allotmentsList;
            setAllotments(data.data);
        };

        requestAllotmentsList();
    }, []);
        return (
            <Wrapper>
                <Title>Wybierz działkę</Title>
                
                    <Form.Label htmlFor="allotment_number">Dla której tworzysz zobowiazanie</Form.Label>
                            <Form.Control
                                id="allotment_number"
                                as="select"
                                value={this.state.id}
                                onChange={this.handleChange}
                                > <option hidden>Wybierz..</option>
                                {allotments.map((option) => {
                                    const {_id, number, status } = option
                                    if( status=== "Zajęta" || status=== "Na sprzedaż"){
                                        return (
                                        <option key={_id} value={_id}>{number}</option>
                                        )
                                }
                                })}
                            </Form.Control>
                        
                        <SelectAllotment id={this.state.id} style={BlueButtonStyle} type="submit"/>
            </Wrapper>
        )
    }
    return <Sel/>
    }
} 

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { insertFinance }
)(withRouter(FinancesInsert));