import React, { useState, useEffect, Component} from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api from "../../api";
import styled from 'styled-components';
import { Button, Form, Row, Col } from 'react-bootstrap';
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
// const Image = styled.img.attrs({

// })`
//   grid-area: Image;
// `
//tylko dla swoich zrobić

class MessageNoticeBoard extends Component {
  updateNoticeboard = event => {
      event.preventDefault()

      window.location.href = `/dashboard/noticeboard/${this.props.id}`
  }
  render() {
      return <Button style={BlueButtonStyle} onClick={this.updateNoticeboard}>Wiadomość</Button>
  }
}


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
  const ButtonNoticeboard = () => { 
    
    const [modalShow, setModalShow] = React.useState(false);

    return <> 
    <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Dodaj ogłoszenie</Button>
    
    <AddAnnouncement show={modalShow} onHide={() => setModalShow(false)}/>
        </>
  }
  const NoticeBoard = () => {

    const [swt, setSwt] = React.useState(true);
    const [noticeboards, setNoticeboards] = useState([]);

    useEffect(() => {
        const requestNoticeboardsList = async () => {
            const noticeboardsList = await api.getAllNoticeboards();
            const { data } = noticeboardsList;
            setNoticeboards(data.data);
        };

        requestNoticeboardsList();
    }, []);

    const NoticeboardList = noticeboards.slice(0).reverse().map((noticeboard) => {
        const { _id, title, user_id, advertisement} = noticeboard;

      // Find by number, status or User
      const n = JSON.stringify({ title, user_id, advertisement })
      const search = n.includes(this.state.inputValue)

        const timestamp = _id.toString().substring(0,8);
        const date = new Date(parseInt(timestamp ,16)*1000).toLocaleDateString();
        
        if(search === true){
        if( swt===false && user_id === this.props.auth.user.firstname + ' ' + this.props.auth.user.lastname){
        return (
            <Container key={_id}>
                {/* <Image src={image}/> */}
                <Content>
                  <HeaderDiv>{title}</HeaderDiv>
                  <Form.Text>{advertisement}</Form.Text>
                  <Form.Text muted>{date}</Form.Text>
                </Content>
                <UserSection>
                  <Form.Text muted>{user_id}</Form.Text><hr></hr></UserSection>
                <FooterButton>
                  <DeleteNoticeboard id={_id}/>
                </FooterButton>
            </Container> 
        )
        }else if( swt===true){
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
              <MessageNoticeBoard id={_id}/>
            </FooterButton>
        </Container> 
    )
    }
  }
    });
    
    return <>
            <br></br>
            <Form.Check type="switch"  id="custom-switch" label="Moje ogłoszenia" onClick={() => setSwt(!swt)}/>
            {NoticeboardList}
          </>
  }
    return (
      <Wrapper>
        <Title>Tablica ogłoszeń</ Title>
        <Row>
          <Col>
            <ButtonNoticeboard/>
          </Col>
          <Col>
            <Form.Control
                value={this.state.inputValue}
                onChange={this.updateInputValue}
                id="inputValue"
                placeholder="Szukaj.."
            />
          </Col>   
        </Row>
        <NoticeBoard/>
      </Wrapper>
    )
  }
}
NoticeBoard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(withRouter(NoticeBoard));