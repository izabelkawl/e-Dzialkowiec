import React, { useState, useEffect} from "react";
import api from "../../api";
import styled from 'styled-components';
import { Button, Form, Modal } from 'react-bootstrap';
import Wrapper from '../../components/Wrapper/Wrapper'
import {RedButtonStyle, BlueButtonStyle } from '../constants'
import Title from '../../components/Title'

const Container = styled.div`
    background-color: white;
    padding: 20px;
    margin-top: 20px;
    -webkit-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.44);
    -moz-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.44);
    box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.44);

    display: grid;
    grid-template-columns: 0.2fr 0.6fr 0.2fr;
    grid-template-rows: 1fr;
    gap: 25px 25px;
    grid-template-areas:"Image Content About";`

const Content = styled.div`
  display: grid;
  grid-area: Content;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "."
    "."
    ".";

`
const About = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "."
    ".";
  grid-area: About;
  text-align: right;
`
const Image = styled.img.attrs({

})`
  grid-area: Image;
`
const HeaderDiv = styled.div`
  font-size: 26px;
`

function AddAnnouncement(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dodaj ogłoszenie
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Tytuł</Form.Label>
    <Form.Control type="text"/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Użytkownik</Form.Label>
    <Form.Control type="text" placeholder="karol@example.com" disabled/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Treść</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Dodaj zdjęcie*" />
  </Form.Group>
</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button style={BlueButtonStyle} >Dodaj</Button>
        <Button style={RedButtonStyle} onClick={props.onHide}>Zamknij</Button>
      </Modal.Footer>
    </Modal>
  );
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
        const { _id, title, user, content, image} = table;
        //date from timestap
        const timestamp = _id.toString().substring(0,8);
        const date = new Date(parseInt(timestamp ,16)*1000).toLocaleDateString();

        return (
            <Container key={_id}>
                <Image src={image}/>
                <Content>
                  <HeaderDiv>{title}</HeaderDiv>
                  <Form.Text>{content}</Form.Text>
                  <Form.Text muted>{date}</Form.Text>
                </Content>
                <About>
                  <Form.Text muted>{user}</Form.Text>
                  <Button style={BlueButtonStyle} >Wiadomość</Button>
                  {/* dla swoich postów tylko usuwanie*/}
                  <Button style={RedButtonStyle} >Usuń</Button>
                </About>
            </Container> 
        );
    });
    return (
      <Wrapper>
        <Title>Tablica ogłoszeń</ Title>
        <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Dodaj ogłoszenie</Button>
        <AddAnnouncement show={modalShow}
        onHide={() => setModalShow(false)}
      />
       {TableList}
      </Wrapper>
    )
};

export default NoticeBoard