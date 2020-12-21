import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { Table} from 'react-bootstrap';
import styled from "styled-components";

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 50px;
    margin-top: 50px;
    background-color: white; 
`;
const Button = styled.button`
    padding: 0 20px;
    color: white;
    background: #0071BC;
    border: 10px solid #0071BC;
`;


class UpdateAllotment extends Component {
    updateAllotment = event => {
        event.preventDefault()

        window.location.href = `/admin/allotments/update/${this.props.id}`
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
        const { _id, image, number, width, height, price, status, user_id } = allotment;

        return (
            <tr key={_id}>
                <td>{index + 1}</td>
                <td>{image}</td>
                <td>{number}</td>
                <td>{width}</td>
                <td>{height}</td>
                <td>{price}</td>
                <td>{status}</td>
                <td>{user_id}</td>

                <td><DeleteAllotment id={_id} /></td>
                <td><UpdateAllotment id={_id} /></td>
            </tr>
        );
    });

    return <Wrapper>
         <Button variant="success" href="/admin/allotments/create" >Dodaj działke</Button>
        <Table striped bordered hover size="sm" responsive>
            <thead>
                <tr>
                    <th>Lp</th>
                    <th>Image</th>
                    <th>number</th>
                    <th>width</th>
                    <th>height</th>
                    <th>price</th>
                    <th>status</th>
                    <th>user_id</th>

                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {AllotmentsTable}
            </tbody>
        </Table>
    </Wrapper>
};

export default AllotmentsList;
