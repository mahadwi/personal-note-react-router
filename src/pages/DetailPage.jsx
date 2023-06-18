import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/local-data';
import NoteDetail from '../components/NoteDetail';
import ArchivedButton from '../components/ArchivedButton';
import DeleteButton from '../components/DeleteButton';
import UnArchivedButton from '../components/UnArchivedButton';
import PropTypes from 'prop-types';


function DetailPageWrapper() {
    const navigate = useNavigate();
    const {id} = useParams();
    return <DetailPage id={id} navigate={navigate} />
}

class DetailPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            note: getNote(props.id),
        };

        this.onDeleteEvenHandler = this.onDeleteEvenHandler.bind(this);
        this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this);
        this.onUnArchivedEventHandler = this.onUnArchivedEventHandler.bind(this);
    }


    onDeleteEvenHandler(id){
        deleteNote(id);
        this.props.navigate('/');
    }

    onArchivedEventHandler(id){
        archiveNote(id);
        this.props.navigate('/');
    }

    onUnArchivedEventHandler(id){
        unarchiveNote(id);
        this.props.navigate('/');
    }

    render(){
        const archive = this.state.note.archived;
        return (
            <section className='detail-page'>
                <NoteDetail {...this.state.note} />
                <div className='detail-page__action'>
                    {archive ? <UnArchivedButton id={this.props.id} onUnarchived={this.onUnArchivedEventHandler} /> : <ArchivedButton id={this.props.id} onArchived={this.onArchivedEventHandler} />}
                    <DeleteButton id={this.props.id} onDelete={this.onDeleteEvenHandler} />
                </div>
            </section>
        );
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired
}

export default DetailPageWrapper;