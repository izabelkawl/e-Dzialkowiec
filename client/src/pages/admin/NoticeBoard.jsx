import React, { useState, useEffect, Component} from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import api from "../../api";
import { Button, Form, Col, Row } from 'react-bootstrap';
import { AnnouncementField, Content, TitleSection, DateSection, RedButtonStyle, Title, FooterButton, UserSection, Image, List } from '../constants';

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
      return <Button style={RedButtonStyle} onClick={this.deleteNoticeboard}>Usuń</Button>
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

      const NoticeboardList = tables.map((table) => {
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
    )};
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(withRouter(NoticeBoard));