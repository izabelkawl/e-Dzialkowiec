import React from 'react';
import styled from 'styled-components';
import { Form, Modal, Button } from 'react-bootstrap';
import {RedButtonStyle, BlueButtonStyle } from '../constants'
import Wrapper from '../../components/Wrapper/Wrapper'
import Title from '../../components/Title'

const Content = styled.div`
  background-color: white;
  padding: 20px;
  margin: 20px 0;
  -webkit-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
  box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 0.5fr 0.3fr;
  grid-template-areas:
    "title"
    "content"
    "date";
`

const Person = styled.p`
    color: #0071BC;
`

function AddComment(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
       Dodaj komentarz 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Adresat:</Form.Label>
    <Form.Control type="text" placeholder="Karol Nowak" disabled/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Treść:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button style={RedButtonStyle} onClick={props.onHide}>Zamknij</Button>
        <Button style={BlueButtonStyle} onClick={props.onHide}>Dodaj</Button>
      </Modal.Footer>
    </Modal>
  );
}
const ForumThread = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <Wrapper>
        <Button style={BlueButtonStyle} href="/dashboard/forum">Powrót</Button>
          <Content>
            <div>
              <h3>Sprzedam kwiaty</h3><p>Mariusz Nowak</p>
              <hr></hr>

            </div>
            <p>Lorem luptatem sapiente dolores quia minus hic eius cumque possimus quaerat deserunt quas officia? Quam debitis eligendi nam vero voluptas cupiditate, ad eum accusantium iure placeat quo.</p>

            <Form.Text muted>27.11.2020</Form.Text>
            
          </Content>
          <Button style={BlueButtonStyle} className="float-right" variant="success" onClick={() => setModalShow(true)}>Dodaj Komentarz</Button>
          <Title>Komentarze</Title>
          <Content>
          <Person>Karol Nowak</Person>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam minus obcaecati recusandae consequuntur voluptatibus quae at suscipit expedita error consequatur. </p>
          <p>28.09.2019</p>
          </Content>
          <Content>
          <Person>Maria Nowak</Person>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam  </p>
          <p>12.03.2019</p>
          </Content>
          <Content>
          <Person>Anna Maria Jopek</Person>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam minus obcaecati recusandae consequuntur voluptatibus quae at suscipit expedita error consequatur. </p>
          <p>07.01.2011</p>
          </Content>
        <AddComment show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Wrapper>
    )
}

export default ForumThread