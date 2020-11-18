import React, { Component } from 'react'
import api from '../../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
  margin-left: auto;
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

const CancelButton = styled.button.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class AllotmentsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
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

    handleIncludeAllotment = async () => {
        const { image, number, size, width, height, price, status } = this.state
        const payload = { image, number, size, width, height, price, status }

        await api.insertAllotment(payload).then(res => {
            window.alert(`Allotment inserted successfully`)
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

    render() {
        const { image, number, size, width, height, price, status } = this.state
        return (
            <Wrapper>
                <Title>Create Allotment</Title>

                <Label>Image: </Label>
                <input type="file" className="form-control-file" id="exampleFormControlFile1" value={image}
                    onChange={this.handleChangeInputImage} ></input>


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

                <Button onClick={this.handleIncludeAllotment}>Add Allotment</Button>
                <CancelButton href={'/allotments/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default AllotmentsInsert