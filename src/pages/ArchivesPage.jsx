import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/network-data";
import { LocaleConsumer } from "../context/LocaleContext";

function Archives() {
  const [archived, setArchived] = useState([]);

  useEffect(() => {
    const response = async () => {
      const { data } = await getArchivedNotes();
      setArchived(data);
    };
    response();
  }, []);

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <>
            <section className="archives-page">
              <h2>{locale === "id" ? "Catatan Arsip" : "Archived Note"}</h2>
              <SearchBar />
              {archived.length ? (
                <NoteList notes={archived} />
              ) : (
                <section className="notes-list-empty">
                  <p className="notes-list__empty">
                    {locale === "id" ? "Tidak ada catatan" : "No notes"}
                  </p>
                </section>
              )}
            </section>
          </>
        );
      }}
    </LocaleConsumer>
  );
}

export default Archives;
