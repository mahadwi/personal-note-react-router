import React from 'react';
import { FiDownload } from 'react-icons/fi';
import PropTypes from 'prop-types';

export default function ArchivedButton({id, onArchived}) {
  return (
    <button className='action' type='button' title='Arsipkan' onClick={() => onArchived(id)}><FiDownload /></button>
  );
}

ArchivedButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchived: PropTypes.func.isRequired
}
