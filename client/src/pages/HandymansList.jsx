import React, { useState, useEffect, Component } from "react";
import api from "../api";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 0;
`;

const ListItem = styled.div`
  display: flex;
  width: 50%;
  padding: 1vh 1vw;
  border-bottom: 1px dashed #ccc;
  background-color: white;
`;
const Lp = styled.div`
  width: 50px;
`;
const Email = styled.div`
  width: 250px;
`;
const Item = styled.div`
  width: 100px;
`;
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`;

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`;;


class UpdateHandyman extends Component {
    updateHandyman = event => {
        event.preventDefault()

        window.location.href = `/handymans/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateHandyman}>Update</Update>
    }
}

class DeleteHandyman extends Component {
    deleteHandyman = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the handyman ${this.props.id} permanently?`,
            )
        ) {
            api.deleteHandymanById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteHandyman}>Delete</Delete>
    }
}

const HandymansList = () => {
    const [handymans, setHandymans] = useState([]);

    useEffect(() => {
        const requestHandymansList = async () => {
            const handymansList = await api.getAllHandymans();
            const { data } = handymansList;
            setHandymans(data.data);
        };

        requestHandymansList();
    }, []);

    const HandymansTable = handymans.map((handyman, index) => {
        const { _id, profession, email, firstname, lastname, phone } = handyman;

        return (
            <ListItem key={_id}>
                <Lp>{index + 1}</Lp>
                <Item>{profession}</Item>
                <Email>{email}</Email>
                <Item>{firstname}</Item>
                <Item>{lastname}</Item>
                <Item>{phone}</Item>
                <Item><DeleteHandyman id={_id} /></Item>
                <Item><UpdateHandyman id={_id} /></Item>
            </ListItem>
        );
    });

    return <Wrapper>
        <ListItem>
            <Lp>Lp</Lp>
            <Item>profession</Item>
            <Email>email</Email>
            <Item>firstname</Item>
            <Item>lastname</Item>
            <Item>phone</Item>
        </ListItem>

        {HandymansTable}</Wrapper>;
};

export default HandymansList;
