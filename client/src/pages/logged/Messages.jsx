import React, { Component } from "react";
import styled from "styled-components";
import Wrapper from '../../components/Wrapper/Wrapper'

const Title = styled.h1`
    font-size: 32px
`;


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
