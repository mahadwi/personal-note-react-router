import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";
import NoteDetail from "../components/NoteDetail";
import ArchivedButton from "../components/ArchivedButton";
import DeleteButton from "../components/DeleteButton";
import UnArchivedButton from "../components/UnArchivedButton";

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await getNote(id);
        setNote(data);
      } catch (error) {
        console.log("Terjadi kesalahan:", error);
      } finally {
        setIsLoading(false);
      }
    };

    response();
  }, [id]);

  async function onUnArchivedEventHandler(id) {
    const { data } = await unarchiveNote(id);
    setNote(data);
    navigate("/");
  }

  async function onArchivedEventHandler(id) {
    const { data } = await archiveNote(id);
    setNote(data);
    navigate("/");
  }

  async function onDeleteEvenHandler(id) {
    const { data } = await deleteNote(id);
    setNote(data);
    navigate("/");
  }

  if (isLoading) {
    return (<div>Loading ...</div>);
  }

  const archive = note.archived;
  return (
    <section className="detail-page">
      <NoteDetail {...note} />
      <div className="detail-page__action">
        {archive ? (
          <UnArchivedButton id={id} onUnarchived={onUnArchivedEventHandler} />
        ) : (
          <ArchivedButton id={id} onArchived={onArchivedEventHandler} />
        )}
        <DeleteButton id={id} onDelete={onDeleteEvenHandler} />
      </div>
    </section>
  );
}

export default DetailPage;
