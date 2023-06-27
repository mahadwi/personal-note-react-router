import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";
import { getActiveNotes } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";
import { LocaleConsumer } from "../context/LocaleContext";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const response = async () => {
      const { data } = await getActiveNotes();
      setNotes(data);
    };
    response();
  }, []);

  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const loadNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLocaleLowerCase());
  });

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <>
            <section>
              <h2>{locale === "id" ? "Catatan Aktif" : "Active Note"}</h2>
              <SearchBar
                keyword={keyword}
                keywordChange={onKeywordChangeHandler}
              />
              {loadNotes.length ? (
                <NoteList notes={loadNotes} />
              ) : (
                <section className="notes-list-empty">
                    <p className="notes-list__empty">{locale === 'id' ? 'Tidak ada catatan' : 'No notes'}</p>
                </section>
              )}
              <AddButton />
            </section>
          </>
        );
      }}
    </LocaleConsumer>
  );
}

export default HomePage;
