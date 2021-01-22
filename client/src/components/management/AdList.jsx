import React, { useState, useEffect } from "react";
import {Card } from 'react-bootstrap';
import api from "../../api";

const AdList = () => {
    const [ads, setAnnouncements] = useState([]);
    useEffect(() => {
        const requestAnnouncementsList = async () => {
            const adsList = await api.getAllAnnouncements();
            const { data } = adsList;
            setAnnouncements(data.data);
        };
        requestAnnouncementsList();
    }, []);

    const AnnouncementsTable = ads.map((ad, index) => {
        const { _id, title, content } = ad;
        const timestamp = _id.toString().substring(0,8);
        const date = new Date(parseInt(timestamp ,16)*1000).toLocaleDateString();
        return (
            <div><Card key={_id}>
            <Card.Header>{title}</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>{' '+ content +' '} </p>
                  <footer className="blockquote-footer">
                   {date}
                  </footer>
                </blockquote>
              </Card.Body>
      </Card><br></br></div>
            
        );
    });

    return AnnouncementsTable
};

export default AdList;
