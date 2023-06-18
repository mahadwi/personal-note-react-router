import React from 'react';
import { showFormattedDate } from '../utils';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

export default function NoteDetail({title, body, createdAt}) {
  return (
    <>
        <h3 className='detail-page__title'>{parser(title)}</h3>
        <p className='detail-page__createdAt'>{showFormattedDate(createdAt)}</p>
        <div className='detail-page__body'>{parser(body)}</div>
    </>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}
