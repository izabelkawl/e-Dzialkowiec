import React, { Component } from "react";
import { Table, Form, Row, Col} from 'react-bootstrap';
import styled from "styled-components";

const Wrapper = styled.div` 
    width: 70vw;
    padding: 100px;
`

const Title = styled.h1`
    font-size: 32px
`;
const Button = styled.button`
    padding: 0 20px;
    color: white;
    background: #0071BC;
    border: 10px solid #0071BC;
`
const Label = styled(Form.Label)`
    margin-top: 8px;
`

class Messages extends Component {
    render() {
        return (
        <Wrapper>
             <Title>Wiadomości</Title>
            <br></br>
            
        </Wrapper>
        )
    }
};

export default Messages;
