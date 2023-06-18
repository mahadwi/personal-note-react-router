import React from 'react';
import { FiUpload } from 'react-icons/fi';

export default function UnArchivedButton({id, onUnarchived}) {
  return (
    <button className='action' type='button' title='Aktifkan' onClick={() => onUnarchived(id)}><FiUpload /></button>
  );
}
