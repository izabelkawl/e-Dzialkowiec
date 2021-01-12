import React, { useState, useEffect, Component} from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { insertTable } from "../../api";
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import AddAnnouncement from '../../components/modal/AddAnnouncement'
import Wrapper from '../../components/Wrapper/Wrapper'
import {RedButtonStyle, BlueButtonStyle } from '../constants'
import Title from '../../components/Title'

const Container = styled.div`
    background-color: white;
    -webkit-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);

    padding: 20px;
    margin-top: 20px;
    display: grid;

    grid-template-columns: 0.8fr 0.2fr;
    grid-template-rows:  4(1fr);
    gap: 25px 25px;
    grid-template-areas:
    "Content ."
    "Content ."
    "Content ."
    "Content Footer";`

const Content = styled.div`
  display: grid;
  grid-area: Content;
`
const FooterButton = styled.div`
  display: grid;
  grid-area: Footer;
`
const HeaderDiv = styled.div`
  font-size: 26px;
`
// const Image = styled.img.attrs({

// })`
//   grid-area: Image;
// `
//tylko dla swoich zrobić
class DeleteTable extends Component {
  deleteTable = event => {
      event.preventDefault()
      if (
          window.confirm(
              `Do you want to delete the table ${this.props.id} permanently?`,
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

const NoticeBoard = () => {
    const [tables, setTables] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        const requestTablesList = async () => {
            const tablesList = await api.getAllTables();
            const { data } = tablesList;
            setTables(data.data);
        };

        requestTablesList();
    }, []);

    const TableList = tables.map((table, index) => {
        const { _id, title, user, content} = table;
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
                <FooterButton>
                  <Form.Text muted>{user}</Form.Text>
                  <Button style={BlueButtonStyle} >Wiadomość</Button>
                  {/* dla swoich postów tylko usuwanie*/}
                  <DeleteTable id={_id}/>
                </FooterButton>
            </Container> 
        );
    });
    return (
      <Wrapper>
        <Title>Tablica ogłoszeń</ Title>
        
        <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Dodaj ogłoszenie</Button>
        <AddAnnouncement
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Form.Check type="checkbox" label="Pokaż moje ogłoszenia" />
       {TableList}
      </Wrapper>
    )
};

NoticeBoard.propTypes = {
  errors: PropTypes.object.isRequired,
  insertTable: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {insertTable}
)(withRouter(NoticeBoard));