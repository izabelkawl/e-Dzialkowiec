import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../api/index";
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    background-color: white;
    text-align: center;
`

const Container = styled.div.attrs({
    className: 'form-group',
})`
    margin-left: auto;
    margin-right: auto; 
    width: 600px;
    margin-top: 150px;
    background-color: white;
    padding: 50px;
    text-align: center;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class Admin extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {

        const { user } = this.props.auth;
        if (user.email === "izabelawlazlo9@gmail.com") {
            return (
                <Wrapper >
                    <Container>

                        Hey there, this is your email <b> {user.email}   </b>.
                    <span> You are logged into a Admin page  </span>

                        <Button
                            onClick={this.onLogoutClick}
                        >
                            Logout
            </Button>
                    </Container>
                </Wrapper>
            );
        }
    }
}

Admin.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Admin);