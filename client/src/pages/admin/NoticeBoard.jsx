import React, { useState, useEffect, Component} from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import api from "../../api";
import { Button, Form, Col, Row } from 'react-bootstrap';
import { RedButtonStyle, Title, List } from '../constants';
import styled from 'styled-components';

const AnnouncementField = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: white;
  -webkit-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
  box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
  @media(min-width: 992px){
    margin-top: 20px;
    display: grid;
    grid-template-columns: 0.7fr 1.8fr 0.5fr;
    grid-template-rows:  50px 2.1fr 0.4fr;
    gap: 15px 30px;
    grid-template-areas:
    "Image TitleSection User"
    "Image ContentSection ."
    "Image DateSection  Footer";
  }
`;

const Content = styled.div`
  grid-area: ContentSection;
`;

const TitleSection = styled.div`
  grid-area: TitleSection;
  font-weight: bold;
`;

const DateSection = styled.div`
  grid-area: DateSection;
`;

const FooterButton = styled.div`
  grid-area: Footer;
  text-align: right;
`;

const UserSection = styled.div`
  grid-area: User;
  text-align: right;
`;

const Image = styled.img`
  grid-area: Image;
  width: 300px;
  padding-bottom: 20px;
  object-fit: cover;
  @media(min-width: 992px){
  height: 240px;
  width: 300px;
  object-fit: cover;
  }
`;

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
      };
  };

  render() {
      return <Button size="sm"style={RedButtonStyle} onClick={this.deleteNoticeboard}>Usuń</Button>
  };
};

class NoticeBoard extends Component {
  constructor(){
    super()

    this.state = {
        inputValue: '',
    };
  };

  updateInputValue = (evt) => {
      this.setState({
        inputValue: evt.target.value
      });
  };

  render() {

  const NoticeBoard = () => {
      const [tables, setNoticeboards] = useState([]);
      const [userss, setUsers] = useState([]);
      useEffect(() => {
          const requestNoticeboardsList = async () => {
              const tablesList = await api.getAllNoticeboards();
              const { data } = tablesList;
              setNoticeboards(data.data);
          };
          const userName = async () => {
            const userList = await api.getAllUsers()
            const {data } = userList
                
            setUsers(data.data);
            }
          requestNoticeboardsList();
          userName();
      }, []);

      const NoticeboardList = tables.slice(0).reverse().map((table) => {
          const { _id, title, user_id, advertisement, image} = table;
          const username = userss.map((user, index) => {
            const { _id, firstname, lastname } = user
            if(_id === user_id){
              return firstname+' ' +lastname
            } else {
              return null
            }
          });
          // Find by number, status or User
          const n = JSON.stringify({ title, username, advertisement })
          const search = n.toLowerCase().includes(this.state.inputValue.toLowerCase())
          // Date
          const timestamp = _id.toString().substring(0,8);
          const date = new Date(parseInt(timestamp ,16)*1000).toLocaleDateString();
          
          if(search === true){
            return (
                <AnnouncementField key={_id}>
                    <Image  src={`http://localhost:3000/${image}`}/>
                      <TitleSection>{title}</TitleSection>
                      <Content>{advertisement}</Content>
                      <DateSection>
                        <Form.Text muted>{date}</Form.Text>
                          </DateSection>
                    <UserSection>
                      <Form.Text muted>{username}</Form.Text>
                        </UserSection>
                    <FooterButton>
                      <DeleteNoticeboard id={_id}/>
                        </FooterButton>
                </AnnouncementField> 
              )
          }else {
            return ""
          }
      });

      return NoticeboardList
    };

    return (
          <List>
            <Row>
              <Col lg={6}>
                <Title>Tablica ogłoszeń</ Title>
                  </Col>
              <Col lg={6}>
                <Form.Control
                    value={this.state.inputValue}
                    onChange={this.updateInputValue}
                    id="inputValue"
                    placeholder="Filtruj.."
                    />
                  </Col>   
            </Row>
            <br></br>
            <NoticeBoard/>
          </List>
    )};
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(withRouter(NoticeBoard));