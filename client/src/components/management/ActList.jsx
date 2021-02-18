import React, { useState, useEffect } from "react";
import api from "../../api";
import { Table } from 'react-bootstrap';

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
      return (
            <tr key={_id}> 
                <td>
                    <a href={'http://localhost:3000/'+actfile} target="_blank" rel="noopener noreferrer">
                        {name}
                    </a>
                </td>
            </tr>
      )
  });

  return (
          <Table striped bordered hover responsive>
             <tbody>
                {ActsTable}
             </tbody>
         </Table>
    );      
};

export default ActList