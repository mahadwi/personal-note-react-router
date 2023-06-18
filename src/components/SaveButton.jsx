import React from 'react';
import { FiCheck } from 'react-icons/fi';

export default function SaveButton({onSave}) {
  return (
    <div className='add-new-page__action'>
        <button className='action' type='button' title='simpan' onClick={() => onSave()}><FiCheck /></button>
    </div>
  );
}
