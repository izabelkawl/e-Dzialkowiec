import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 50px;
    background-color: white;
    padding: 50px;
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

class ProductsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: '',
            unit: '',
            quanity: '',
            providerid: '',
        }
    }
    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }
    handleChangeInputPrice = async event => {
        const price = event.target.validity.valid
            ? event.target.value
            : this.state.price

        this.setState({ price })
    }
    handleChangeInputUnit = async event => {
        const unit = event.target.value
        this.setState({ unit })
    }
    handleChangeInputQuanity = async event => {
        const quanity = event.target.validity.valid
            ? event.target.value
            : this.state.quanity

        this.setState({ quanity })
    }
    handleChangeInputProviderid = async event => {
        const providerid = event.target.value
        this.setState({ providerid })
    }

    handleIncludeProduct = async () => {
        const { name, price, unit, quanity, providerid } = this.state
        const payload = { name, price, unit, quanity, providerid }

        await api.insertProduct(payload).then(res => {
            window.alert(`Product inserted successfully`)
            this.setState({
                name: '',
                price: '',
                unit: '',
                quanity: '',
                providerid: '',
            })
        })
    }

    render() {
        const { name, price, unit, quanity, providerid } = this.state
        return (
            <Wrapper>
                <Title>Create Product</Title>
                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Price: </Label>
                <InputText
                    type="text"
                    value={price}
                    onChange={this.handleChangeInputPrice}
                />

                <Label>Unit: </Label>
                <InputText
                    type="text"
                    value={unit}
                    onChange={this.handleChangeInputUnit}
                />

                <Label>Quanity: </Label>
                <InputText
                    type="text"
                    value={quanity}
                    onChange={this.handleChangeInputQuanity}
                />
                <Label>Provider Id: </Label>
                <InputText
                    type="text"
                    value={providerid}
                    onChange={this.handleChangeInputProviderid}
                />



                <Button onClick={this.handleIncludeProduct}>Add Product</Button>
                <CancelButton href={'/products/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ProductsInsert