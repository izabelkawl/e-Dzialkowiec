import React, { useState, useEffect} from "react";
import api from "../../api";
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
    grid-template-columns: 0.2fr 2fr 0.2fr;
    grid-template-rows: 1fr;
    gap: 25px 25px;
    grid-template-areas:"Image Content About";`

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
const Image = styled.img.attrs({

})`
  grid-area: Image;
`

const Title = styled.h1.attrs({
  className: 'h1',
})`
  font-size: 32px;
  padding: 30px;
`

const NoticeBoard = () => {
    const [tables, setTables] = useState([]);

    useEffect(() => {
        const requestTablesList = async () => {
            const tablesList = await api.getAllTables();
            const { data } = tablesList;
            setTables(data.data);
        };

        requestTablesList();
    }, []);

    const TableList = tables.map((table, index) => {
        const { _id, title, user, content, image,  price } = table;
        return (
            <Container key={_id}>
                <Image src={image}/>
                <Content>
            <div>
              <h3>{title}</h3><p>{user}</p>
              <hr></hr>

            </div>
            <p>{content}</p>

            <Form.Text muted>21.11.2020</Form.Text>
          </Content>
          <About>
            <p>{price}</p>
            <p></p>
            <Button variant="success" >Wiadomość</Button>
          </About>
                </Container> 
        );
    });
    return (
      <Wrapper>
        <Title>Tablica ogłoszeń</ Title>
       {TableList}
      </Wrapper>
    )
};

export default NoticeBoard