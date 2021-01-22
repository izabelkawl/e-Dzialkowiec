import React, { useState, useEffect, Component} from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { insertTable } from "../../api";
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import { List, RedButtonStyle } from '../constants'
import Title from '../../components/Title'

const Container = styled.div`
    background-color: #f2f4f5;
    -webkit-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    padding: 20px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows:  3(1fr);
    gap: 25px 25px;
    grid-template-areas:
    "Content User"
    "Content ."
    "Content  Footer";`

const Content = styled.div`
  display: grid;
  grid-area: Content;
`
const FooterButton = styled.div`
  display: grid;
  grid-area: Footer;
`
const UserSection = styled.div`
  display: grid;
  grid-area: User;
  text-align: right;
`
const HeaderDiv = styled.div`
  font-size: 26px;
`

class DeleteTable extends Component {
  deleteTable = event => {
      event.preventDefault()
      if (
          window.confirm(
              `Czy na pewno chcesz usunąć ten wątek?`,
          )
      ) {
          api.deleteTableById(this.props.id)
          window.location.reload()
      }
  }
  render() {
      return <Button style={RedButtonStyle} onClick={this.deleteTable}>Usuń</Button>
  }
}

class NoticeBoard extends Component {

  render() {
const NoticeBoard = () => {
    const [tables, setTables] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [swt, setSwt] = React.useState(true);

    useEffect(() => {
        const requestTablesList = async () => {
            const tablesList = await api.getAllTables();
            const { data } = tablesList;
            setTables(data.data);
        };

        requestTablesList();
    }, []);

    const TableList = tables.map((table) => {
        const { _id, title, user_id, content} = table;
        // Date
        const timestamp = _id.toString().substring(0,8);
        const date = new Date(parseInt(timestamp ,16)*1000).toLocaleDateString();
        return (
            <Container key={_id}>
                {/* <Image src={image}/> */}
                <Content>
                  <HeaderDiv>{title}</HeaderDiv>
                  <Form.Text>{content}</Form.Text>
                  <Form.Text muted>{date}</Form.Text>
                </Content>
                <UserSection><Form.Text muted>{user_id}</Form.Text><hr></hr></UserSection>
                <FooterButton>
                  <DeleteTable id={_id}/>
                </FooterButton>
            </Container> 
      )
    });
    return (
      <List>
        <Title>Tablica ogłoszeń</ Title>
        <br></br>
        <br></br>
       {TableList}
      </List>
    )
  }
  return <NoticeBoard/>
  }
}

NoticeBoard.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  insertTable: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {insertTable}
)(withRouter(NoticeBoard));