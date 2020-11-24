import React, { Component } from 'react'
import api from '../../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})` margin-left: auto;
    margin-right: auto; 
    background-color: white;
    padding: 50px;
    width: 600px;
    margin-top: 50px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class AllotmentsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            image: '',
            number: '',
            size: '',
            width: '',
            height: '',
            price: '',
            status: ''
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
    handleChangeInputSize = async event => {
        const size = event.target.validity.valid
            ? event.target.value
            : this.state.size

        this.setState({ size })
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
        const { id, image, number, size, width, height, price, status } = this.state
        const payload = { image, number, size, width, height, price, status }

        await api.updateAllotmentById(id, payload).then(res => {
            window.alert(`Allotment updated successfully`)
            this.setState({
                image: '',
                number: '',
                size: '',
                width: '',
                height: '',
                price: '',
                status: ''
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const allotment = await api.getAllotmentById(id)

        this.setState({
            image: allotment.data.data.image,
            number: allotment.data.data.number,
            size: allotment.data.data.size,
            width: allotment.data.data.width,
            height: allotment.data.data.height,
            price: allotment.data.data.price,
            status: allotment.data.data.status,
        })
    }

    render() {
        const { image, number, size, width, height, price, status } = this.state
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

                <Label>Size: </Label>
                <InputText
                    type="text"
                    value={size}
                    onChange={this.handleChangeInputSize}
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

                <Button onClick={this.handleUpdateAllotment}>Update Allotment</Button>
                <CancelButton href={'/admin/allotments/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default AllotmentsUpdate