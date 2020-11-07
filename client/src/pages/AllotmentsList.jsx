import React, { useState, useEffect, Component } from "react";
import api from "../api";
import { Table, Button } from 'react-bootstrap';
import styled from "styled-components";

const Wrapper = styled.div`
    width: 80%;
    
    margin: 0 auto;
    margin-top: 50px;
    background-color: white; 
`;

class UpdateAllotment extends Component {
    updateAllotment = event => {
        event.preventDefault()

        window.location.href = `/allotments/update/${this.props.id}`
    }

    render() {
        return <Button variant="success" onClick={this.updateAllotment}>Update</Button>
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
        return <Button variant="danger" onClick={this.deleteAllotment}>Delete</Button>
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
            <tr key={_id}>

                <td>{index + 1}</td>
                <td>{image}</td>
                <td>{number}</td>
                <td>{size}</td>
                <td>{width}</td>
                <td>{height}</td>
                <td>{price}</td>
                <td>{status}</td>

                <td><DeleteAllotment id={_id} /></td>
                <td><UpdateAllotment id={_id} /></td>

            </tr>
        );
    });

    return <Wrapper>
        <Table striped bordered hover >
            <thead>
                <th>Lp</th>
                <th>Image</th>
                <th>number</th>
                <th>size</th>
                <th>width</th>
                <th>height</th>
                <th>price</th>
                <th>status</th>
                <th></th>
                <th></th>
            </thead>
            <tbody>

                {AllotmentsTable}

            </tbody>
        </Table>


    </Wrapper>
};

export default AllotmentsList;
