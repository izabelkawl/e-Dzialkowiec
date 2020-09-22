import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>

                <Collapse>
                    <List>
                        <Item>
                            <Link to="/products/list" className="nav-link">
                                Produkty
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/providers/list" className="nav-link">
                                Dostawcy
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/users/list" className="nav-link">
                                Użytkownicy
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/products/create" className="nav-link">
                                Dodawanie produktów
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/providers/create" className="nav-link">
                                Dodawanie dostawców
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/users/login" className="nav-link">
                                Zaloguj
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/users/register" className="nav-link">
                                Utwórz konto
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>

        )
    }
}

export default Links