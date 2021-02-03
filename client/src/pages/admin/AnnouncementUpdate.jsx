import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { updateAnnouncementById } from '../../api';
import classnames from "classnames";
import { Form, Button, Row, Col } from 'react-bootstrap';
import {Title, Wrapper, BlueButtonStyle, RedButtonStyle,  Span} from '../constants';

class AnnouncementsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            content: '',
            errors: {}
        }
    }
    componentDidMount = async () => {
        const { id } = this.state
        const ad = await api.getAnnouncementById(id)

        this.setState({
            title: ad.data.data.title,
            content: ad.data.data.content
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleUpdateAnnouncement = e => {

        e.preventDefault();
        const { id, title, content } = this.state
        const payload = { title, content }

        this.props.updateAnnouncementById(id, payload)
    }

    render() {
        const { errors, title, content } = this.state;
        // console.log(content)
        return (
            <Wrapper>
                <Title>Edycja ogłoszenia</Title>
                <Form>
                <Form.Group as={Row}>
                    <Form.Label htmlFor="title" column sm="3" >Tytuł:</Form.Label>
                    <Col sm="9">
                    <Form.Control 
                        onChange={this.onChange}
                        value={title}
                        error={errors.title}
                        id="title"
                        type="text"
                        className={classnames("", {
                            invalid: errors.title
                        })}
                    />
                    <Span>{errors.title}</Span>
</Col>
</Form.Group>
<Form.Group as={Row}> 
                 <Form.Label column sm="3" htmlFor="content">Treść: </Form.Label>
                   
                    <Col sm="9"> <Form.Control
                        onChange={this.onChange}
                        value={content}
                        error={errors.content}
                        id="content"
                        as="textarea"
                        className={classnames("", {
                            invalid: errors.content
                        })}
                        rows={10}
                    />
                    <Span>{errors.content}</Span>
 </Col>
            </Form.Group>
                    <br></br>
                    <Button style={BlueButtonStyle} href={'/admin/management#link3'}>Zamknij</Button>{' '}
                    <Button style={RedButtonStyle} type="submit" onClick={this.handleUpdateAnnouncement}>Aktualizuj</Button>
                  </Form>
            </Wrapper>
        )
    }
}

AnnouncementsUpdate.propTypes = {
    updateAnnouncementById: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { updateAnnouncementById }
)(withRouter( AnnouncementsUpdate));