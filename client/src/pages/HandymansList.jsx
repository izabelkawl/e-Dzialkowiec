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
                <h5>{index + 1}</h5>
                <h5>{profession}</h5>
                <h5>{email}</h5>
                <h5>{firstname}</h5>
                <h5>{lastname}</h5>
                <h5>{phone}</h5>
                <DeleteHandyman id={_id} />
                <UpdateHandyman id={_id} />
            </ListItem>
        );
    });

    return <Wrapper>{HandymansTable}</Wrapper>;
};

export default HandymansList;
