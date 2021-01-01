import React, {Component} from 'react';
import api from '../../api';
import Wrapper from '../../components/Wrapper/Wrapper';
import { Form, Button } from 'react-bootstrap';
import { BlueButtonStyle } from '../constants';

import styled from 'styled-components';

const Content = styled.div`
  background-color: white;
  padding: 20px;
  margin: 20px 0;
  -webkit-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
  box-shadow: 0px 8px 18px -8px rgba(0,0,0,0.1);
`
const AddComment = styled.div`
    background-color: #ffffff;
    padding: 20px ;
    min-height: content; 
`
const Person = styled.p`
    color: #0071BC;
`

class ForumThread extends Component {
  constructor(props) {
    super(props)

    this.state = {
        id: this.props.match.params.id,
        user_id: '',
        title: '',
        content: '',
        commenter: '',
        comment_content: '',
        forum_id: '',
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

  render() {
    const { user_id, title, content} = this.state
    return (
      <Wrapper>
        <Button style={BlueButtonStyle} href="/dashboard/forums">Powrót</Button>
          <Content>
            <h3>{title}</h3><p>{user_id}</p>
           
              <hr></hr>
            <p>{content}</p>

            <Form.Text muted>27.11.2020</Form.Text>
          </Content>
 <AddComment>
              <Form>
              <Form.Group>
              <Form.Label muted> Karol Cośtam</Form.Label>
                <Form.Control as="textarea" placeholder="Treść komantarza.." rows={3} />
              </Form.Group>
              <Button style={BlueButtonStyle} size="sm" type="submit">Dodaj Komentarz</Button>
            </Form>
            
          </AddComment>
<Content>
          <Person>Karol Nowak</Person>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam minus obcaecati recusandae consequuntur voluptatibus quae at suscipit expedita error consequatur. </p>
          <p>28.09.2019</p>
          </Content>
      </Wrapper>
    )
}
}

export default ForumThread