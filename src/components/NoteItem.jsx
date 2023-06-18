import React from 'react';
import { showFormattedDate } from '../utils';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

export default function NoteItem({title, body, createdAt, id}) {
  return (
    <article className='note-item'>
      <Link to={`/notes/${id}`}><h3 className='note-item__title'>{parser(title)}</h3></Link>
      <p className='mote-item__createdAt'>{showFormattedDate(createdAt)}</p>
      <p className='note-item__body'>{parser(body)}</p>
    </article>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
