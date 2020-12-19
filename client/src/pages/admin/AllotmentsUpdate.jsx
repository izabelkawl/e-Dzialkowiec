import React, { Component } from 'react';
import api from '../../api';

import styled from 'styled-components';

const Title = styled.h1`
    font-size: 32px;
`;

const Wrapper = styled.div.attrs({
    className: 'form-group',
})` margin-left: auto;
    margin-right: auto; 
    background-color: white;
    padding: 50px;
    width: 600px;
    margin-top: 50px;
`;

const Label = styled.label`
    margin: 5px;
`;

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`;

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`;

class AllotmentsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            image: '',
            number: '',
            width: '',
            height: '',
            price: '',
            status: '',
            user_id: ''
        }
    }

    handleChangeInputImage = async event => {
        const image = event.target.value
        this.setState({ image })
    }
    handleChangeInputNumber = async event => {
        const number = event.target.validity.valid
            ? event.target.value
            : this.state.number

        this.setState({ number })
    }
    handleChangeInputUserId = async event => {
        const user_id =  event.target.value
        this.setState({ user_id })
    }

    handleChangeInputWidth = async event => {
        const width = event.target.validity.valid
            ? event.target.value
            : this.state.width

        this.setState({ width })
    }
    handleChangeInputHeight = async event => {
        const height = event.target.validity.valid
            ? event.target.value
            : this.state.height

        this.setState({ height })
    }
    handleChangeInputPrice = async event => {
        const price = event.target.validity.valid
            ? event.target.value
            : this.state.price
        this.setState({ price })
    }
    handleChangeInputStatus = async event => {
        const status = event.target.value
        this.setState({ status })
    }

    handleUpdateAllotment = async () => {
        const { id, image, number, width, height, price, status, user_id } = this.state
        const payload = { image, number, width, height, price, status, user_id }

        await api.updateAllotmentById(id, payload).then(res => {
            window.alert(`Allotment updated successfully`)
            this.setState({
                image: '',
                number: '',
                width: '',
                height: '',
                price: '',
                status: '',
                user_id: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const allotment = await api.getAllotmentById(id)

        this.setState({
            image: allotment.data.data.image,
            number: allotment.data.data.number,
            width: allotment.data.data.width,
            height: allotment.data.data.height,
            price: allotment.data.data.price,
            status: allotment.data.data.status,
            user_id: allotment.data.data.user_id
        })
    }

    render() {
        const { image, number, width, height, price, status, user_id } = this.state
        return (
            <Wrapper>
                <Title>Update Allotment</Title>

                <Label>Image: </Label>
                <InputText
                    type="text"
                    value={image}
                    onChange={this.handleChangeInputImage}
                />

                <Label>Number: </Label>
                <InputText
                    type="text"
                    value={number}
                    onChange={this.handleChangeInputNumber}
                />

                <Label>Width: </Label>
                <InputText
                    type="text"
                    value={width}
                    onChange={this.handleChangeInputWidth}
                />

                <Label>Height: </Label>
                <InputText
                    type="text"
                    value={height}
                    onChange={this.handleChangeInputHeight}
                />
                <Label>Price: </Label>
                <InputText
                    type="text"
                    value={price}
                    onChange={this.handleChangeInputPrice}
                />
                <Label>Status: </Label>
                <InputText
                    type="text"
                    value={status}
                    onChange={this.handleChangeInputStatus}
                />
                
                <Label>User Id: </Label>
                <InputText
                    type="text"
                    value={user_id}
                    onChange={this.handleChangeInputUserId}
                />

                <Button onClick={this.handleUpdateAllotment}>Update Allotment</Button>
                <CancelButton href={'/admin/allotments/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default AllotmentsUpdate