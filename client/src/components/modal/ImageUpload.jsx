import React, { useState } from 'react';
import styled from "styled-components"
import axios from 'axios';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { BlueButtonStyle, Span } from '../../pages/constants';

function ImageUpload () {
    /** start states */
    const [formData, setFormData] = useState('');
    const [info, setInfo] = useState({
      image: '',
      name: '',
    });
    const [error, setError] = useState({
      found: false,
      message: '',
    });
    /** end states */
  
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
    return (
      <div
      >
        {error.found && (
          <Span >{error.message}</Span>
          
        )}
  
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
            <Button id={info.image} onClick={handleSubmit} style={BlueButtonStyle}>
            Załaduj
          </Button>
          </Form.Group>
{/* 
        <img
          className='mt-3'
          src={`http://localhost:3000/${info.image}`}
          alt={`${info.name}`}
          style={{ width: '359px' }}
        /> */}
      </div>
    );
  }
  

export default ImageUpload;
