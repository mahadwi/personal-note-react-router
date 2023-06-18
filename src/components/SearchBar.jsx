import React from 'react'

export default function SearchBar({keyword, keywordChange}) {
  return (
    <section className="search-bar">
        <input type="text" placeholder='Cari berdasarkan judul ...'  value={keyword} onChange={(event) => keywordChange(event.target.value)} />
    </section>
  )
}
