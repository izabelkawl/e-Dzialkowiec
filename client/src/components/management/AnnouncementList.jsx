import React, { useState, useEffect, Component } from "react";
import api from "../../api";
import { Table, Button } from 'react-bootstrap';
import { BlueButtonStyle, RedButtonStyle } from '../../pages/constants';

class UpdateAnnouncement extends Component {
    updateAnnouncement = event => {
        event.preventDefault()

        window.location.href = `/admin/ads/update/${this.props.id}`
    }
    render() {
        return <Button style={BlueButtonStyle} onClick={this.updateAnnouncement}>Edytuj</Button>
    }
}

class DeleteAnnouncement extends Component {
    deleteAnnouncement = event => {
        event.preventDefault()
        if (
            window.confirm(
                `Czy na pewno chcesz usunąć  to ogłoszenie?`,
            )
        ) {
            api.deleteAnnouncementById(this.props.id)
            window.location.reload();
        };
    };
    render() {
        return <Button style={RedButtonStyle} onClick={this.deleteAnnouncement}>Usuń</Button>
    };
};

const AnnouncementsList = () => {
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

        return (
            <tr key={_id}>
                <td>{title}</td>
                <td>{content}</td>
                <td><UpdateAnnouncement id={_id} /></td>
                <td><DeleteAnnouncement id={_id} /></td>
            </tr>
        );
    });

    return (<Table striped bordered hover size="sm" responsive>
            <thead>
                <tr>
                    <th>Tytuł</th>
                    <th>Treść</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {AnnouncementsTable}
            </tbody>
        </Table>
        )
};

export default AnnouncementsList;
