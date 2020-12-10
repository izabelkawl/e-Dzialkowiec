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

const CancelButton = styled.a.attrs({
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
            width: '',
            height: '',
            price: '',
            status: '',
            user_id: '',
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
    handleChangeInputUserId = async event => {
        const user_id = event.target.value
        this.setState({ user_id })
    }

    handleIncludeAllotment = async () => {
        const { image, number, width, height, price, status, user_id } = this.state
        const payload = { image, number,  width, height, price, status, user_id }

        await api.insertAllotment(payload).then(res => {
            window.alert(`Allotment inserted successfully`)
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

    render() {
        const { image, number, width, height, price, status, user_id } = this.state
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
                <Button onClick={this.handleIncludeAllotment}>Add Allotment</Button>
                <CancelButton href={'/admin/allotments/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default AllotmentsInsert