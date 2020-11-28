import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../api/index";
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
})`
    margin: 0 auto;
    width: 80vw;
`

const Container = styled.div.attrs({
    className: 'form-group',
})`
    background-color: white;
    padding: 50px;
`

const Title = styled.h1.attrs({
    className: 'h1',
})`
      text-align: center;
  font-size: 32px;
  padding: 30px;
  color: white;
`

const Footer = styled.footer.attrs({
    className: 'blockquote-footer',
})`
    color: #28a745;
`
const Blockquote = styled.blockquote.attrs({
    className: "blockquote mb-0"
})`
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
                    <Card>
                        <Card.Header>Nowe opłaty</Card.Header>
                        <Card.Body>
                            <Blockquote>
                                <p>
                                    {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
                                </p>
                                <Footer>
                                    27.11.2020
                                </Footer>
                            </Blockquote>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card>
                        <Card.Header>Pamiętaj o wodzie</Card.Header>
                        <Card.Body>
                            <Blockquote>
                                <p>
                                    {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
                                </p>
                                <Footer >
                                    04.11.2020
                                </Footer>
                            </Blockquote>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card>
                        <Card.Header>Zmiany w ustawie</Card.Header>
                        <Card.Body>
                            <Blockquote>
                                <p>
                                    {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
                                </p>
                                <Footer>
                                    01.08.2020
                                </Footer>
                            </Blockquote>
                        </Card.Body>
                    </Card>

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