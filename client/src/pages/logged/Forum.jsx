import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';

const Wrapper = styled.div`
  width: 80vw;
  padding: 100px;
`;

const Container = styled.div`
    background-color: white;
    -webkit-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.44);
    -moz-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.44);
    box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.44);

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

const Title = styled.h1.attrs({
  className: 'h1',
})`
  font-size: 32px;
  padding: 30px;
`


class Forum extends Component {
  render() {

    return (
      <Wrapper>

        <Title>Forum</ Title>
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
            <p>20zł</p>
            <p></p>
            <Button variant="success" >Wiadomość</Button>
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
            <p>350z/ szt</p>
            <p></p>
            <Button variant="success" >Wiadomość</Button>
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
            <p>350z/ szt</p>
            <p></p>
            <Button variant="success" >Wiadomość</Button>
          </About>

        </Container>
      </Wrapper>
    )
  }
}

export default Forum