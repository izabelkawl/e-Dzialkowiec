import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../api/index";
import styled from 'styled-components';
import AdList from '../management/AdList';

const Wrapper = styled.div` 
    width: 70vw;
    padding: 100px;
`
const Container = styled.div`
   
`
const Title = styled.h3`
    padding-bottom:30px; 
    color: #0071BC;
`

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {

        return (
            <Wrapper >
                <Title>Aktualności</ Title>
                <Container>
                   <AdList/>
                </Container >
            </Wrapper >
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);