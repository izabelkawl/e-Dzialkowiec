import React, { useState, useEffect, Component} from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import api from "../../api";
import styled from 'styled-components';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { List, RedButtonStyle } from '../constants'
import Title from '../../components/Title'

const Container = styled.div`
    border-bottom: 1px solid #dee2e6;
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

class DeleteNoticeboard extends Component {
  deleteNoticeboard = event => {
      event.preventDefault()
      if (
          window.confirm(
              `Czy na pewno chcesz usunąć ten wątek?`,
          )
      ) {
          api.deleteNoticeboardById(this.props.id)
          window.location.reload()
      }
  }
  render() {
      return <Button style={RedButtonStyle} onClick={this.deleteNoticeboard}>Usuń</Button>
  }
}

class NoticeBoard extends Component {
  constructor(){
    super()
    this.state = {
        inputValue: '',
    }
}

updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }
  render() {

const NoticeBoard = () => {
    const [tables, setNoticeboards] = useState([]);

    useEffect(() => {
        const requestNoticeboardsList = async () => {
            const tablesList = await api.getAllNoticeboards();
            const { data } = tablesList;
            setNoticeboards(data.data);
        };

        requestNoticeboardsList();
    }, []);

    const NoticeboardList = tables.map((table) => {
        const { _id, title, user_id, advertisement} = table;
        // Find by number, status or User
        const n = JSON.stringify({ title, user_id, advertisement })
        const search = n.includes(this.state.inputValue)
        // Date
        const timestamp = _id.toString().substring(0,8);
        const date = new Date(parseInt(timestamp ,16)*1000).toLocaleDateString();
        
        if(search === true){
        return (
            <Container key={_id}>
                {/* <Image src={image}/> */}
                <Content>
                  <HeaderDiv>{title}</HeaderDiv>
                  <Form.Text>{advertisement}</Form.Text>
                  <Form.Text muted>{date}</Form.Text>
                </Content>
                <UserSection><Form.Text muted>{user_id}</Form.Text><hr></hr></UserSection>
                <FooterButton>
                  <DeleteNoticeboard id={_id}/>
                </FooterButton>
            </Container> 
      )
    }
    });

    return <> {NoticeboardList} </>
  }
  return <List>
          <Row>
              <Col>
                <Title>Tablica ogłoszeń</ Title>
              </Col>
              <Col>
                <Form.Control
                    value={this.state.inputValue}
                    onChange={this.updateInputValue}
                    id="inputValue"
                    placeholder="Filtruj.."
                />
              </Col>   
            </Row>
            <NoticeBoard/>
          </List>
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(withRouter(NoticeBoard));