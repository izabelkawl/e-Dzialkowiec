import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { Table, Button } from 'react-bootstrap';
import styled from "styled-components";

const Wrapper = styled.div`
 width: 70%;
  background-color: white; 
  
    margin: 0 auto;
    margin-top: 50px;
`;


class UpdateHandyman extends Component {
    updateHandyman = event => {
        event.preventDefault()

        window.location.href = `/handymans/update/${this.props.id}`
    }

    render() {
        return <Button variant="success" onClick={this.updateHandyman}>Update</Button>
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
        return <Button variant="danger" onClick={this.deleteHandyman}>Delete</Button>
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

            <tr key={_id}>
                <td>{profession}</td>
                <td>{email}</td>
                <td>{firstname + ' ' + lastname}</td>
                <td>{phone}</td>
                <td><DeleteHandyman id={_id} /></td>
                <td><UpdateHandyman id={_id} /></td>

            </tr>

        );
    });

    return <Wrapper>
        <Table striped bordered hover>
            <thead>

                <th>profession</th>
                <th>email</th>
                <th>Name</th>
                <th>phone</th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
                {HandymansTable}
            </tbody>
        </Table>
    </Wrapper>
};

export default HandymansList;
