import React, { useState } from "react";
import SaveButton from "../components/SaveButton";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useInput } from "../utils/network-data";

function AddPage() {
  const navigate = useNavigate();
  const [title, onTitleChangeHandler] = useInput("");
  const [body, setBody] = useState("");

  function onInputHandler(event) {
    setBody(event.target.innerHTML);
  }

  function onSaveEventHandler() {
    addNote({ title: title, body: body });
    navigate("/");
  }

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          type="text"
          placeholder="Catatan rahasia"
          onChange={onTitleChangeHandler}
          value={title}
        />
        <div
          className="add-new-page__input__body"
          data-placeholder="Sebenarnya saya adalah"
          contentEditable
          onInput={onInputHandler}
          value={body}
        ></div>
        <SaveButton onSave={onSaveEventHandler} />
      </div>
    </section>
  );
}

AddPage.proptypes = {
  navigate: PropTypes.func.isRequired,
};

export default AddPage;
