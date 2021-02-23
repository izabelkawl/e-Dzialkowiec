import React, { useState, useEffect, Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { updateFinanceById } from '../../api';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { List, BlueButtonStyle, RedButtonStyle, Title, Container60 } from '../constants';
import { Link } from "react-router-dom";

class StatusUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            allotment_number: '',
            owner: '',
            title: '',
            area: '',
            charge: '',
            term: '',
            account: '',
            status: ''
        };
    };

    componentDidMount = async () => {
        const { id } = this.state
        const finance= await api.getFinanceById(id)

        this.setState({
            allotment_number: finance.data.data.allotment_number,
            owner: finance.data.data.owner,
            title: finance.data.data.title,
            area: finance.data.data.area,
            charge: finance.data.data.charge,
            term: finance.data.data.term,
            account: finance.data.data.account,
            status: finance.data.data.status,
        });
    };
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        };
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleUpdateFinance = e => {

        e.preventDefault();
        const { id, allotment_number, title,owner, area, charge, term, account, status  } = this.state
        const payload = { allotment_number, title,owner, area, charge, term, account, status  }

        this.props.updateFinanceById(id, payload)
    };
        
    render() {

        const FinancesComponent = () => {
            const [userss, setUsers] = useState([]);
            useEffect(() => {
              const userName = async () => {
                  const userList = await api.getAllUsers()
                  const {data } = userList
                      
                  setUsers(data.data);
                  }
              userName();
          }, []);

          const username = userss.map((user) => {
            const { _id, firstname, lastname } = user
            if(_id === this.state.owner){
                return (
                    <Container60 key={_id}>
                    <List>
                        <Title>Zmień status</Title>
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column sm="4" >Tytuł: </Form.Label>
                                <Col sm="8">
                                    <Form.Control
                                        onChange={this.onChange}
                                        value={this.state.title}
                                        id="title"
                                        type="text"
                                        readOnly
                                        >
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="4">Właściciel działki: </Form.Label>
                                <Col sm="8">
                                    <Form.Control
                                        onChange={this.onChange}
                                        value={firstname+ ' '+ lastname}
                                        id="owner"
                                        type="text"
                                        readOnly
                                        >
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="4">Numer działki: </Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            onChange={this.onChange}
                                            value={this.state.allotment_number}
                                            id="allotment_number"
                                            type="text"
                                            readOnly
                                            >
                                        </Form.Control>
                                    </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="4">Powierzchnia: </Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            id="area"
                                            value={this.state.area}
                                            type="text"
                                            onChange={this.onChange}
                                            readOnly
                                            >
                                        </Form.Control>
                                    </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="4">Należność: </Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            id="charge"
                                            type="text"
                                            value={this.state.charge}
                                            onChange={this.onChange}
                                            readOnly
                                            >
                                        </Form.Control>
                                    </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="4">Termin zapłaty: </Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            id="term"
                                            type="date"
                                            value={this.state.term}
                                            onChange={this.onChange}
                                            readOnly
                                            >
                                        </Form.Control>
                                    </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="4">Konto: </Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            id="account"
                                            type="text"
                                            value={this.state.account}
                                            onChange={this.onChange}
                                            readOnly
                                            >
                                        </Form.Control>
                                    </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="4" htmlFor="number">Status:</Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            onChange={this.onChange}
                                            value={this.state.status}
                                            as="select"
                                            className="mr-sm-2"
                                            id="status"
                                            >
                                            <option hidden >Wybierz..</option>
                                            <option >Opłacona</option>
                                            <option >Nieopłacona</option>
                                        </Form.Control>
                                    </Col>
                            </Form.Group>
                        <Link to={'/admin/finances/list'}>
                            <Button size="sm"style={RedButtonStyle}>Powrót</Button>
                        </Link>
                        {' '}
                        <Button size="sm"style={BlueButtonStyle} onClick={this.handleUpdateFinance}>Aktualizuj</Button>
                    </Form>
                </List>
                </Container60>
                );
          }else {
              return null
            }
        });

        return username
    };
                
    return <FinancesComponent/>
    };
};

StatusUpdate.propTypes = {
    updateFinanceById: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { updateFinanceById }
)(withRouter( StatusUpdate ));