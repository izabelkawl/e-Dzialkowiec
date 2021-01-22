import React, { useState, useEffect } from "react";
import {Card } from 'react-bootstrap';
import api from "../../api";

const ManagementList = () => {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const requestUsersList = async () => {
            const usersList = await api.getAllUsers();
            const { data } = usersList;
            setUsers(data.data);
        };

        requestUsersList();
    }, []);

    const UsersTable = users.map((user) => {
        const { _id, firstname, lastname, position} = user;
        if( position !== "Działkowiec" ){
        return  <Card key={_id}><Card.Body><Card.Title>{position}</Card.Title><Card.Text>{firstname + ' ' + lastname}</Card.Text></Card.Body></Card>
        } 
    });

    return UsersTable
            
             
};

export default ManagementList;
