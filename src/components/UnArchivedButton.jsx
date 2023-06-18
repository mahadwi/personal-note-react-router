import React from 'react';
import { FiUpload } from 'react-icons/fi';
import PropTypes from 'prop-types';

export default function UnArchivedButton({id, onUnarchived}) {
  return (
    <button className='action' type='button' title='Aktifkan' onClick={() => onUnarchived(id)}><FiUpload /></button>
  );
}

UnArchivedButton.propTypes = {
  id: PropTypes.string.isRequired,
  onUnarchived: PropTypes.func.isRequired
}
