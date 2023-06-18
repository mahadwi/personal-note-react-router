import React from 'react'
import NoteItem from './NoteItem'

export default function NoteList({notes}) {
  return (
    <section className='notes-list'>
        {
            notes.map((note) => (
                <NoteItem key={note.id} id={note.id} {...note}  />
            ))
        }
    </section>
  )
}

