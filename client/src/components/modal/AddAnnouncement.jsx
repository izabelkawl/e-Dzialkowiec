import React, { Component, useState} from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { insertNoticeboard } from "../../api";
import { Button, Form, Modal } from 'react-bootstrap';
import classnames from "classnames";
import { RedButtonStyle, BlueButtonStyle, Span } from '../../pages/constants';
import axios from 'axios';

  class AddAnnouncement extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        title: '',
        user_id: this.props.auth.user.firstname + ' '+ this.props.auth.user.lastname,
        advertisement: '',
        image: '',
        inputValue: '',
        errors: {},
    }
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
        this.setState({
            errors: nextProps.errors
        });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {

    e.preventDefault();
    const newNoticeboard = {

        title: this.state.title,
        user_id: this.props.auth.user.firstname + ' '+ this.props.auth.user.lastname,
        advertisement: this.state.advertisement,
        image: this.state.inputValue
    };
    this.props.insertNoticeboard(newNoticeboard, this.props.history)
};

  render(){ 
    const { errors } = this.state;
    const { title, advertisement } = this.state
    const {staticContext, insertNoticeboard, ...rest} = this.props

    const ImageUpload = () => {
 
      const [formData, setFormData] = useState('');
      const [info, setInfo] = useState({
        image: '',
        name: '',
      });
      const [error, setError] = useState({
        found: false,
        message: '',
  });

  // Upload image
  const upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append('categoryImage', files[0]);
    data.append('name', files[0].name);
    setFormData(data);
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({
      image: '',
      name: '',
    });


    axios
      .post('http://localhost:3000/api/category', formData)
      .then((res) => {
        this.state.inputValue = res.data.category.image
        console.log(res.data);
        setTimeout(() => {
          setInfo(res.data.category);
        }, 1000);
      })
      .catch((err) => {
        console.log(err.response);
        setError({
          found: true,
          message: err.response.data.errors,
        });
        setTimeout(() => {
          setError({
            found: false,
            message: '',
          });
        }, 3000);
      });
      
  };
  return (<>
    <Form.Label>Zdjęcie</Form.Label>
  <Span>{error.message}</Span> <Span>{errors.image}</Span>
   <Form.Group className='custom-file mb-3'>
          <Form.Control
            type='file'
            className='custom-file-input'
            id='inputGroupFile04'
            aria-describedby='inputGroupFileAddon04'
            onChange={upload}
          />
          
          <Form.Label className='custom-file-label' htmlFor='inputGroupFile04'>
            {info.image === ''? 'Wybierz plik': info.name}
          </Form.Label>
          <br></br>
          <Button onClick={handleSubmit} style={BlueButtonStyle}>
          Załaduj
        </Button>
        </Form.Group>
        </>
  );
}
      return <Modal
      {...rest}
        animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Dodaj ogłoszenie
          </Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group >
            <Form.Label>Tytuł</Form.Label>
              <Span>{errors.title}</Span>
                <Form.Control 
                  value={title} 
                  error={errors.title} 
                  id="title"
                  type="text" 
                  className={classnames("", {invalid: errors.title })}
                  onChange={this.onChange}
                ></Form.Control>
          </Form.Group>
          <Form.Group >
            <Form.Label>Treść</Form.Label>
              <Span>{errors.advertisement}</Span>
                <Form.Control
                value={advertisement}
                onChange={this.onChange}
                id="advertisement"
                 placeholder="Treść.."
                 className={classnames("", {invalid: errors.advertisement })}
                 
            />
          </Form.Group>
       
        </Form>
        <ImageUpload/>

        </Modal.Body>
        <Modal.Footer>
        <Button 
        style={RedButtonStyle} 
        onClick={() => {
          this.props.onHide()
          window.location.reload()
        }}>Zamknij</Button>

        <Button style={BlueButtonStyle} onClick={this.onSubmit} >Dodaj</Button>
     </Modal.Footer>
      </Modal>
    }

  }


  AddAnnouncement.propTypes = {
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    insertAnnouncement: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(
  mapStateToProps,
  {insertNoticeboard}
)(withRouter(AddAnnouncement));