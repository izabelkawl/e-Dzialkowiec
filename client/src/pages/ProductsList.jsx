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


class UpdateProduct extends Component {
    updateProduct = event => {
        event.preventDefault()

        window.location.href = `/products/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateProduct}>Update</Update>
    }
}

class DeleteProduct extends Component {
    deleteProduct = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the product ${this.props.id} permanently?`,
            )
        ) {
            api.deleteProductById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteProduct}>Delete</Delete>
    }
}

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const requestProductsList = async () => {
            const productsList = await api.getAllProducts();
            const { data } = productsList;
            setProducts(data.data);
        };

        requestProductsList();
    }, []);

    const ProductsTable = products.map((product, index) => {
        const { _id, name, price, unit, quanity, providerid } = product;

        return (
            <ListItem key={_id}>
                <h5>{index}</h5>
                <h5>{name}</h5>
                <h5>{price}</h5>
                <h5>{unit}</h5>
                <h5>{quanity}</h5>
                <h5>{providerid}</h5>
                <DeleteProduct id={_id} />
                <UpdateProduct id={_id} />
            </ListItem>
        );
    });

    return <Wrapper>{ProductsTable}</Wrapper>;
};

export default ProductsList;
