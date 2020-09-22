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
  justify-content: space-between;
  width: 60%;
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


class UpdateProvider extends Component {
    updateProvider = event => {
        event.preventDefault()

        window.location.href = `/providers/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateProvider}>Update</Update>
    }
}

class DeleteProvider extends Component {
    deleteProvider = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the provider ${this.props.id} permanently?`,
            )
        ) {
            api.deleteProviderById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteProvider}>Delete</Delete>
    }
}

const ProvidersList = () => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        const requestProvidersList = async () => {
            const providersList = await api.getAllProviders();
            const { data } = providersList;
            setProviders(data.data);
        };

        requestProvidersList();
    }, []);

    const ProvidersTable = providers.map((provider, index) => {
        const { _id, email, password, name, address, hours, raitingid, phone } = provider;

        return (
            <ListItem key={_id}>
                <h5>{index}</h5>
                <h5>{email}</h5>
                <h5>{password}</h5>
                <h5>{name}</h5>
                <h5>{address}</h5>
                <h5>{hours}</h5>
                <h5>{raitingid}</h5>
                <h5>{phone}</h5>
                <DeleteProvider id={_id} />
                <UpdateProvider id={_id} />
            </ListItem>
        );
    });

    return <Wrapper>{ProvidersTable}</Wrapper>;
};

export default ProvidersList;
