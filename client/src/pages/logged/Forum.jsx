import React from 'react';
import styled from 'styled-components';
import { Form, Button, Modal } from 'react-bootstrap';
import Wrapper from '../../components/Wrapper/Wrapper'
import  {RedButtonStyle, BlueButtonStyle } from '../constants'
import Title from '../../components/Title'

const Container = styled.div`
    background-color: white;
    -webkit-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
    box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);

    padding: 20px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 2fr 0.2fr;
    grid-template-rows: 1fr;
    gap: 25px 25px;
    grid-template-areas:"Content About";`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 0.5fr 0.3fr;
  grid-template-areas:
    "."
    "."
    ".";
  grid-area: Content;
`
const About = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 0.8fr 0.1fr;
  grid-template-areas:
    "."
    "."
    ".";
  grid-area: About;
`

function AddThread(props) {
 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dodaj wątek
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
 
</Form>
      </Modal.Body>
      <Modal.Footer>
        
        <Button style={RedButtonStyle} onClick={props.onHide}>Zamknij</Button>
        <Button style={BlueButtonStyle} >Dodaj</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Forum = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <Wrapper>

        <Title>Forum</ Title>
        <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Dodaj wątek</Button>
        <AddThread show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <Container>
          <Content>
            <div>
              <h3>Sprzedam kwiaty</h3><p>Mariusz Nowak</p>
              <hr></hr>

            </div>
            <p>Lorem luptatem sapiente dolores quia minus hic eius cumque possimus quaerat deserunt quas officia? Quam debitis eligendi nam vero voluptas cupiditate, ad eum accusantium iure placeat quo.</p>

            <Form.Text muted>27.11.2020</Form.Text>
          </Content>
          <About>
             <p></p>
            <p></p>
            <Button style={BlueButtonStyle} href="/dashboard/forum/thread">Otwórz</Button>
          </About>

        </Container>
        <Container>
          <Content>
            <div>
              <h3>Sprzedam kwiaty</h3><p>Maria Kwalska</p>
              <hr></hr>

            </div>
            <p>uptatem sapiente dolores quia minus hic eius cumque possimus quaerat deserunt quas officia? Quam debitis eligendi nam vero voluptas cupiditate, ad eum accusantium iure placeat quo.</p>

            <Form.Text muted>20.11.2020</Form.Text>
          </Content>
          <About>
          <p></p>
            <p></p>
            <Button style={BlueButtonStyle} href="/dashboard/forum/thread">Otwórz</Button>
          </About>

        </Container>
        <Container>
          <Content>
            <div>
              <h3>Sprzedam kwiaty</h3><p>Paweł Żak</p>
              <hr></hr>

            </div>
            <p>Lorem placeat quo.</p>

            <Form.Text muted>09.10.2020</Form.Text>
          </Content>
          <About>
          <p></p>
            <p></p>
            <Button style={BlueButtonStyle} href="/dashboard/forum/thread">Otwórz</Button>
          </About>

        </Container>
      </Wrapper>
    )
  }

export default Forum