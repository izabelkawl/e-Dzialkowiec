import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse ',
})`text-align: center;`

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto ',
})` `

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})`padding-left:40px;
padding-right: 40px`

const Button = styled.button.attrs({
    className: 'btn btn-success dropdown-toggle',
    type: 'button',
    id: 'dropdownMenuButton',
})`
    width: 160px;
`

const DropdownDiv = styled.div.attrs({
    className: 'dropdown-menu'
})`
    width: 160px;
    border: none;
    :focus{
        outline: none;
    }
`
const AItem = styled.a.attrs({
    className: 'dropdown-item'
})`
    :focus, :active, :hover{
        background-color: #002f34;
      outline: none;
      color: white;
    }
`

const center = {
    textAlign: "center"
};

class Links extends Component {
    render() {
        return (
            <React.Fragment>

                <Collapse>
                    <List>
                        <Item>
                            <Link style={center} to="/" className="nav-link ">
                                Strona główna
                            </Link>
                        </Item>
                        <Item>
                            <Link style={center} to="/allotments/list" className="nav-link ">
                                Oferty działek
                            </Link>
                        </Item>
                        <Item>
                            <Link style={center} to="/handymans/list" className="nav-link ">
                                Handy xD
                            </Link>
                        </Item>
                        <Item>
                            <Link style={center} to="/table" className="nav-link ">
                                Tablica ogłoszeń
                            </Link>
                        </Item>
                        <Item>
                            <div className="dropdown">
                                <Button data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dołącz do nas &ensp;
  </Button>
                                <DropdownDiv aria-labelledby="dropdownMenuButton">

                                    <AItem href="/users/login">Zaloguj</AItem>
                                    <div className="dropdown-divider"></div>
                                    <AItem href="/users/register">Utwórz konto</AItem>
                                </DropdownDiv>
                            </div>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment >

        )
    }
}

export default Links