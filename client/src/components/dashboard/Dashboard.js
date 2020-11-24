import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../api/index";
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';


const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 auto;
    width: 70%;
`

const Container = styled.div.attrs({
    className: 'form-group',
})`
    background-color: white;
    padding: 50px;
`

const UserContainer = styled.div`
    text-align: right;
    padding: 20px;
`

const Title = styled.h1.attrs({
    className: 'h1',
})`font-size: 32px;
padding: 20px;
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
                <UserContainer>
                <p>Witaj <b> {user.firstname}</b>!</p>

                    <Button variant="success"
                    onClick={this.onLogoutClick}
                >
                        Wyloguj
           </Button>
                </UserContainer>
                <Title>Aktualności</ Title>
                <Container>
                    <Card border="success">
                        <Card.Header as="h5">Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
    </Card.Text> </Card.Body>
                    </Card>
                    <br></br>
                    <Card border="success">
                        <Card.Header as="h5">Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                Lorem luptatem sapiente dolores quia minus hic eius cumque possimus quaerat deserunt quas officia? Quam debitis eligendi nam vero voluptas cupiditate, ad eum accusantium iure placeat quo.
                                Lorem luptatem sapiente dolores quia minus hic eius cumque possimus quaerat deserunt quas officia? Quam debitis eligendi nam vero voluptas cupiditate, ad eum accusantium iure placeat quo.
                                Lorem luptatem sapiente dolores quia minus hic eius cumque possimus quaerat deserunt quas officia? Quam debitis eligendi nam vero voluptas cupiditate, ad eum accusantium iure placeat quo.
                                            
                            </Card.Text> </Card.Body>
                    </Card>
                    <br></br>
                    <Card border="success">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Secondary Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
      </Card.Text>
                        </Card.Body>
                    </Card>

                </Container>
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