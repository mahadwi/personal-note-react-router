import React from 'react';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import { getArchivedNotes } from '../utils/local-data';

class Archives extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      archived: getArchivedNotes(),
    }
  }

  render() {
    return (
      <section className='archives-page'>
        <h2>Catatan Arsip</h2>
        <SearchBar />
        <NoteList notes={this.state.archived} />
      </section>
    );
  }
}

export default Archives;