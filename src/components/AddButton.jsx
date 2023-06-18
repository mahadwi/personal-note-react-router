import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function AddButton() {
  return (
    <div className='homepage__action'>
        <Link to='/add'><button className='action' type='button' title='Tambah'><FiPlus /></button></Link>
    </div>
  );
}