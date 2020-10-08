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
                            <Link to="/allotments/list" className="nav-link">
                                Działki
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/handymans/list" className="nav-link">
                                Złote rączki
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/users/list" className="nav-link">
                                Użytkownicy
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/allotments/create" className="nav-link">
                                Dodawanie działek
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/handymans/create" className="nav-link">
                                Dodawanie złotychrączek
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