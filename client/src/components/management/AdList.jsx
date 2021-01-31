import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import api from "../../api";
import styled from "styled-components";

const Footer = styled.footer`
    color: #007bff;
`

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
                  <Footer className="blockquote-footer">
                   {date}
                  </Footer>
                </blockquote>
              </Card.Body>
      </Card><br></br>
      </div>
            
        );
    });

    return AnnouncementsTable
};

export default AdList;
