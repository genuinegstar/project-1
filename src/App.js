import "./styles.css";
import Note from "./Note";
import react, { useState } from "react";

import OneNote from "./OneNote";

export default function App() {
  const [notes, SetNotes] = useState([]);

  function addNote(data) {
    SetNotes((prev) => [...prev, data]);
  }
  function noteDelete(index) {
    SetNotes((prev) => prev.filter((_, i) => i !== index));
  }
  function updateNote(UpdatedName, UpdatedTitle, id) {
    SetNotes((prev) => {
      return prev.map((note, index) => {
        if (index === id) {
          return {
            ...note,
            name: UpdatedName,
            title: UpdatedTitle
          };
        }
        return note;
      });
    });
  }

  return (
    <div className="App">
      <Note onAdd={addNote} />
      {notes.map((note, key) => {
        return (
          <OneNote
            key={key}
            id={key}
            name={note.name}
            title={note.title}
            noteDelete={noteDelete}
            updateNote={updateNote}
          />
        );
      })}

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
