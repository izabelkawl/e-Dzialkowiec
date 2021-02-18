import React, { useState, useEffect } from "react";
import api from "../../api";

const UsersID = () => {
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
        const { _id, firstname, lastname} = user;
        return <option key={_id} value={_id}>{firstname+' '+lastname}</option>
    });
    return UsersTable
};

export default UsersID;