import React, { useState, useEffect, Component} from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api from '../../api';
import styled from 'styled-components';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { RedButtonStyle, BlueButtonStyle, Title } from '../constants';
import AddThread from '../../components/modal/AddThread';
import Media from 'react-media';
import bg from '../../app/img/bg.svg';

const Wrapper = styled.div` 
  padding: 20px;
  @media(min-width: 992px){
      padding: 100px;
      background-image: url(${bg});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center top;
      background-attachment: fixed;
  }
`;

const WrapperContainer = styled.div`
    @media(min-width: 992px){
        width: 60vw;
}
`;

const Container = styled.div`
margin-top: 20px;
padding: 20px;
background-color: white;
-webkit-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
-moz-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
@media(min-width: 1366px){
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 50px 2.1fr 0.4fr;
  gap: 15px 30px;
  grid-template-areas:
  " TitleSection User"
  " ContentSection ."
  " DateSection  Footer";
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

class UpdateForum extends Component {
  updateForum = event => {
      event.preventDefault()
      window.location.href = `/#/dashboard/forums/${this.props.id}`
  }
  render() {
      return <Button size="sm"style={BlueButtonStyle} onClick={this.updateForum}>Otwórz</Button>
  }
};

class DeleteForum extends Component {
  deleteForum = event => {
    event.preventDefault()
    if (
        window.confirm(
            `Czy na pewno chcesz usunąć ten wątek??`,
        )
    ) {
        api.deleteForumById(this.props.id)
        window.location.reload()
    }
  }
  render() {
      return <Button size="sm"style={RedButtonStyle} onClick={this.deleteForum}>Usuń</Button>
  };
};

class Forum  extends Component {
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

    const ButtonNoticeboard = () => {
      const [modalShow, setModalShow] = React.useState(false);
      return (
          <>
            <Button size="sm"style={BlueButtonStyle} onClick={() => setModalShow(true)}>Dodaj wątek</Button>
            <AddThread show={modalShow} onHide={() => setModalShow(false)}/>
          </>
        )
    };

  const ForumComponent = () => {

    const [swt, setSwt] = React.useState(true);
    const [forums, setForums] = useState([]);
    const [userss, setUsers] = useState([]);

    useEffect(() => {
      const requestForumsList = async () => {
          const forumsList = await api.getAllForums();
          const { data } = forumsList;
          setForums(data.data);
      };
      const userName = async () => {
          const userList = await api.getAllUsers()
          const {data } = userList
              
          setUsers(data.data);
          }
      requestForumsList();
      userName();
  }, []);

  const ForumsList = forums.slice(0).reverse().map((forum) => {
      const { _id, title, user_id, content } = forum;

      const username = userss.map((user, index) => {
        const { _id, firstname, lastname } = user
        if(_id === user_id){
          return firstname+' ' +lastname
        }else {return null}
      })
      const n = JSON.stringify({ title, username, content })
      const search = n.toLowerCase().includes(this.state.inputValue.toLowerCase())

      const timestamp = _id.toString().substring(0,8);
      const date = new Date(parseInt(timestamp ,16)*1000).toLocaleDateString();
      
      if(search === true){
        if( swt===false && user_id === this.props.auth.user.id ){
          return (
            <Container key={_id}>
              <TitleSection>{title}</TitleSection>
                <Content>{content}</Content>
                <DateSection><Form.Text muted>{date}</Form.Text></DateSection>
                <UserSection><Form.Text muted>{username}</Form.Text></UserSection>
                <FooterButton>
                  <DeleteForum id={_id}/>{' '}
                  <UpdateForum id={_id}/>
                </FooterButton>
            </Container> 
          )
        }else if( swt===true ){
            return (
              <Container key={_id}>
                  <TitleSection>{title}</TitleSection>
                  <Content>{content}</Content>
                  <DateSection><Form.Text muted>{date}</Form.Text></DateSection>
                  <UserSection><Form.Text muted>{username}</Form.Text></UserSection>
                  <FooterButton>
                    <UpdateForum id={_id}/>
                  </FooterButton>
              </Container> 
            )
        }else{
            return ""
        }
      }else{
        return ""
      };
  });
  
    return (
        <>
          <br></br>
          <Form.Check type="switch"  id="custom-switch" label="Moje ogłoszenia" onClick={() => setSwt(!swt)}/>
          {ForumsList}
        </>
    )
  };

    return (
      <Wrapper>
        <WrapperContainer>
        <Title>Forum</ Title>
        <Row>
          <Col lg={6}>
            <ButtonNoticeboard/>
          </Col>
          <Media query="(max-width: 992px)" render={() =>
                            (
                             <Col lg={{ span: 6 }}><p></p></Col>
                            )}
                        /> 
          <Col lg={6}>
            <Form.Control
                value={this.state.inputValue}
                onChange={this.updateInputValue}
                id="inputValue"
                placeholder="Szukaj.."
            />
          </Col>   
        </Row>
        <ForumComponent/>
        </WrapperContainer>
      </Wrapper>
    );
  };
};

Forum.propTypes = {
  auth: PropTypes.object.isRequired
};
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(withRouter(Forum));
  