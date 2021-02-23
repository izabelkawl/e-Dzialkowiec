import React, { Component , useState, useEffect } from "react";
import api from "../../api";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { insertFinance } from "../../api/index";
import { Form }from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { BlueButtonStyle, Title, Information } from '../constants';
import styled from 'styled-components';

export const List = styled.div`
    padding: 30px;
    margin: 0 auto;
    background-color: white; 
    @media(min-width: 768px){
        width: 50vw;
        padding: 50px;
        margin-top: 50px;
    }
`;

class SelectAllotment extends Component {
    createFinance = event => {
        event.preventDefault()

        window.location.href = `/#/admin/finances/create/${this.props.id}`
    }
    render() {
        return <Button size="sm"style={BlueButtonStyle} onClick={this.createFinance}>Dalej</Button>
    };
};

class AllotmentSelection extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: "Wybierz",
        };
    
    this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.setState({ id: e.target.value})
    };

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
    
    const { id } = this.state

        return (
            <List>
                <Title>Wybierz działkę</Title>
                <Information style={{ paddingBottom: '15px'}}>*Dla której chcesz stworzyć zobowiazanie</Information>
                <Form.Control
                    id="allotment_number"
                    as="select"
                    value={id}
                    onChange={this.handleChange}
                    >
                    <option hidden>Wybierz..</option>
                    { allotments.map((option) => {
                        const {_id, number, status } = option
                        if( status=== "Zajęta" || status=== "Na sprzedaż" ){
                            return (
                            <option key={_id} value={_id}>{number}</option>
                            )
                        }else {
                            return ""
                        }
                    })}
                </Form.Control>
                <br></br>
                {id === 'Wybierz' ? '' : 
                <SelectAllotment id={this.state.id} style={BlueButtonStyle} type="submit"/>}
            </List>
            );
        };
    return <Sel/>
    };
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { insertFinance }
)(withRouter(AllotmentSelection));