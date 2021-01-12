import React, { useState, useEffect, Component } from "react";
import api from '../../api';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Wrapper from '../../components/Wrapper/Wrapper';
import { Form, Button } from 'react-bootstrap';
import { BlueButtonStyle } from '../constants';
import AddComment from '../../components/modal/AddComment'
import styled from 'styled-components';

const Content = styled.div`
  background-color: white;
  padding: 20px;
  margin: 20px 0;
  -webkit-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
  box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
`
const Person = styled.p`
    color: #0071BC;
`

class ForumThread extends Component {
  constructor(props) {
    super(props)
    const {user} = this.props.auth
    this.state = {
        id: this.props.match.params.id,
        user_id: '',
        title: '',
        content: '',

        commenter:  user.firstname + ' '+ user.lastname,
        comment_content: '',
        forum_id: this.props.match.params.id,
    }
  }
  
  componentDidMount = async () => {
    const { id } = this.state
    const form = await api.getForumById(id)

    this.setState({
        user_id: form.data.data.user_id,
        title: form.data.data.title,
        content: form.data.data.content,
    })
  }

  
handleChangeInputCommentContent = async event => {
    const comment_content = event.target.value
    this.setState({ comment_content })
}

  render() {
    
  
  
// Comemnt List 
  const CommentsList = () => {
    const [comments, setComments] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
   
    useEffect(() => {
        const requestCommentsList = async () => {
            const commentsList = await api.getAllComments();
            const { data } = commentsList;
            setComments(data.data);
        };
        requestCommentsList();
    }, []);
  
    const CommentsTable = comments.map((comment, index) => {
      const { _id, commenter, comment_content, forum_id } = comment;
      const timestamp = _id.toString().substring(0,8);
        const date = new Date(parseInt(timestamp ,16)*1000).toLocaleDateString();
       if(forum_id ===this.props.match.params.id ){
      return (
        <Content key={_id}>
            <Person>{commenter}</Person>
            <p>{comment_content}</p>
            <Form.Text muted>{date}</Form.Text>
          </Content>
        );
       }
    });
    return (<div>
      <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Dodaj komentarz</Button>
        <AddComment show={modalShow} onHide={() => setModalShow(false)}
      />
      {CommentsTable}</div>)
    }
  
  const { user_id, title, content} = this.state
    return (
      <Wrapper>
        <Button style={BlueButtonStyle} href="/dashboard/forums">Powrót</Button>
          <Content>
            <h3>{title}</h3>
            <p>{user_id}</p>
            <hr></hr>
            <p>{content}</p>
            <Form.Text muted>27.11.2020</Form.Text>
          </Content>
            
          < CommentsList/>
      </Wrapper>
    )
  }
}


ForumThread.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
mapStateToProps
)(ForumThread)