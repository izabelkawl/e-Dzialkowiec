import React, { useState, useEffect } from "react";
import api from "../../api";
import { Card } from 'react-bootstrap';
import { blueColor } from '../../pages/constants';

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

    const AnnouncementsTable = ads.slice(0).reverse().map((ad, index) => {
        const { _id, title, content } = ad;
        const timestamp = _id.toString().substring(0,8);
        const date = new Date(parseInt(timestamp ,16)*1000).toLocaleDateString();
        return (
            <div  key={_id}>
              <Card>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>{' '+ content +' '} </p>
                    <footer className="blockquote-footer" style={{ color: blueColor }}>
                      {date}
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
              <br></br>
            </div>
          );
      });

    return AnnouncementsTable
};

export default AdList;
