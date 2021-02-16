import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { Button, Form, Table } from 'react-bootstrap';
import { BlueButtonStyle, RedButtonStyle, Span } from '../../pages/constants';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
`
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
  }
}

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
        <td><a href={'http://localhost:3000/'+actfile} target="_blank">{name}</a></td>
      </tr>
  
  });
  return (<>
          <Table striped bordered hover  responsive>
             
             <tbody>
             {ActsTable}
             </tbody>
         </Table>
          </>
    );      
};


export default ActList