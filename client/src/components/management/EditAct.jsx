import React, { useState, useEffect, Component } from "react";
import axios from 'axios';
import api from "../../api";
import { Button, Form, Table } from 'react-bootstrap';
import { BlueButtonStyle, RedButtonStyle, Span } from '../../pages/constants';

class DeleteAct extends Component {
  deleteAct = event => {
      event.preventDefault()
      if (
          window.confirm(
              `Czy na pewno chcesz usunąć tą ustawę?`,
          )
      ) {
          api.deleteActById(this.props.id)
          window.location.reload()
      }
  }
  render() {
      return <Button style={RedButtonStyle} onClick={this.deleteAct}>Usuń</Button>
  };
};

const ActList = () => {
  const [acts, setActs] = useState([]);

  useEffect(() => {
      const requestActsList = async () => {
          const actsList = await api.getAllActs();
          const { data } = actsList;
          setActs(data.data);
      };

      requestActsList();
  }, []);

  const ActsTable = acts.slice(0).reverse().map((act) => {
      const { _id, name, actfile} = act;
      return <tr key={_id}> 
        <td><a href={'http://localhost:3000/'+actfile} target="_blank" rel="noopener noreferrer">{name}</a></td>
        <td><DeleteAct id={_id} /></td>
      </tr>
  
  });
  return ActsTable
};

    const ActUpload = () => {
 
      const [formData, setFormData] = useState('');
      const [info, setInfo] = useState({
        actfile: '',
        name: '',
      });
      const [error, setError] = useState({
        found: false,
        message: '',
  });

  // Upload actfile
  const upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append('categoryAct', files[0]);
    data.append('name', files[0].name);
    setFormData(data);
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({
      actfile: '',
      name: '',
    });

    axios
      .post('http://localhost:3000/api/act', formData)
      .then((res) => {
        window.location.reload()
        setTimeout(() => {
          setInfo(res.data.act);
        }, 1000);
        
        alert('Ustawa została poprawnie dodana!')
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
          <div style={{ width: '50%' }}>
            <Span>{error.message}</Span> 
            <Form.Group className='custom-file mb-3'>
              <Form.Control
                type='file'
                className='custom-file-input'
                id='inputGroupFile04'
                aria-describedby='inputGroupFileAddon04'
                onChange={upload}
              />
              <Form.Label
                className='custom-file-label'
                htmlFor='inputGroupFile04'
              >
                {info.name === '' ? 'Wybierz plik': info.name}
              </Form.Label>

              <br></br>
              <Button onClick={handleSubmit} style={BlueButtonStyle}>
                Dodaj
              </Button>
              </Form.Group>
          </div>
  
        <br></br>
        <hr></hr>
      
        <Table striped bordered hover size="sm" responsive>
           <thead>
             <tr> 
                <th>Ustawy</th>
                <th></th>
             </tr>
           </thead>
           <tbody>
            <ActList/>
           </tbody>
       </Table>
        </>
  );
}

export default ActUpload