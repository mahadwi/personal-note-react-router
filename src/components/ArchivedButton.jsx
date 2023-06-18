import React from 'react';
import { FiDownload } from 'react-icons/fi';

export default function ArchivedButton({id, onArchived}) {
  return (
    <button className='action' type='button' title='Arsipkan' onClick={() => onArchived(id)}><FiDownload /></button>
  );
}
