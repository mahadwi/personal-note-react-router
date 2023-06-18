import React from 'react'
import { FiTrash } from 'react-icons/fi'

export default function DeleteButton({id, onDelete}) {
  return (
    <button type='button' className='action' title='Hapus' onClick={() => onDelete(id)}><FiTrash /></button>
  )
}
