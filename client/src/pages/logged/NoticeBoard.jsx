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

const Title = styled.h1.attrs({
  className: 'h1',
})`
  font-size: 32px;
  padding: 30px;
`
const HeaderDiv = styled.div`
  font-size: 26px;
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