import React from 'react';
import { showFormattedDate } from '../utils';
import parser from 'html-react-parser';

export default function NoteDetail({title, body, createdAt}) {
  return (
    <>
        <h3 className="detail-page__title">{parser(title)}</h3>
        <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
        <div className="detail-page__body">{parser(body)}</div>
    </>
)
}
