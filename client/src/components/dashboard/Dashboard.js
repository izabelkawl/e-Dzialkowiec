import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../api/index";

import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin-left: auto;
    margin-right: auto; 
    width: 600px;
    margin-top: 150px;
    background-color: white;
    padding: 50px;
`
const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {

        const { user } = this.props.auth;

        return (
            <Wrapper >

                Hey there,<b> {user.firstname.split(" ")[0]} </b>.
                <span> You are logged into a E-Garden app. Congrats </span>

                <Button
                    onClick={this.onLogoutClick}
                >
                    Logout
            </Button>

            </Wrapper>
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