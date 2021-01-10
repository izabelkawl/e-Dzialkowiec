import React, { useState, useEffect } from "react";
import api from "../../api";

const AllotmentsID = () => {
    
    const [allotments, setAllotments] = useState([]);

    useEffect(() => {
        const requestAllotmentsList = async () => {
            const allotmentsList = await api.getAllAllotments();
            const { data } = allotmentsList;
            setAllotments(data.data);
        };

        requestAllotmentsList();
    }, []);

    const AllotmentsTable = allotments.map((allotment) => {
        const { _id, number, status } = allotment;
        if( status === "Zajęta"){
        return  number + '.' + _id
        }
    });
    return AllotmentsTable        
};

export default AllotmentsID ;
