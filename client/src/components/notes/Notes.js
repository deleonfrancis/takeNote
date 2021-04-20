import React, { useContext } from "react";
import NoteContext from "../../context/note/noteContext";
import NoteItem from "./NoteItem";

function Notes() {
  const noteContext = useContext(NoteContext);

  const { notes, filtered } = noteContext;
  return (
    <>
      <div className="row">
      {filtered !== null ? filtered.map((note) => (
          <NoteItem key={note.id} note={note} />
        )) : notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        )) }
      </div>
    </>
  );
}

export default Notes;
