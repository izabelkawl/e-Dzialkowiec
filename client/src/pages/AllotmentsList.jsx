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
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding: 1vh 1vw;
  border-bottom: 1px dashed #ccc;
  background-color: white;
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
                <h5>{index + 1}</h5>
                <h5>{image}</h5>
                <h5>{number}</h5>
                <h5>{size}</h5>
                <h5>{width}</h5>
                <h5>{height}</h5>
                <h5>{price}</h5>
                <h5>{status}</h5>

                <DeleteAllotment id={_id} />
                <UpdateAllotment id={_id} />
            </ListItem>
        );
    });

    return <Wrapper>{AllotmentsTable}</Wrapper>;
};

export default AllotmentsList;
