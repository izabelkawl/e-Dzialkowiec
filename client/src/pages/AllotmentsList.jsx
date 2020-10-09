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
const Item = styled.div`
  width: 80px;
`;

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`;

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`;;


class UpdateAllotment extends Component {
    updateAllotment = event => {
        event.preventDefault()

        window.location.href = `/allotments/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateAllotment}>Update</Update>
    }
}

class DeleteAllotment extends Component {
    deleteAllotment = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the allotment ${this.props.id} permanently?`,
            )
        ) {
            api.deleteAllotmentById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteAllotment}>Delete</Delete>
    }
}

const AllotmentsList = () => {
    const [allotments, setAllotments] = useState([]);

    useEffect(() => {
        const requestAllotmentsList = async () => {
            const allotmentsList = await api.getAllAllotments();
            const { data } = allotmentsList;
            setAllotments(data.data);
        };

        requestAllotmentsList();
    }, []);

    const AllotmentsTable = allotments.map((allotment, index) => {
        const { _id, image, number, size, width, height, price, status } = allotment;

        return (
            <ListItem key={_id}>
                <Lp>{index + 1}</Lp>
                <Item>{image}</Item>
                <Item>{number}</Item>
                <Item>{size}</Item>
                <Item>{width}</Item>
                <Item>{height}</Item>
                <Item>{price}</Item>
                <Item>{status}</Item>

                <Item><DeleteAllotment id={_id} /></Item>
                <Item><UpdateAllotment id={_id} /></Item>
            </ListItem>
        );
    });

    return <Wrapper>
        <ListItem >
            <Lp>Lp</Lp>
            <Item>Image</Item>
            <Item>number</Item>
            <Item>size</Item>
            <Item>width</Item>
            <Item>height</Item>
            <Item>price</Item>
            <Item>status</Item>
        </ListItem>

        {AllotmentsTable}</Wrapper>;
};

export default AllotmentsList;
