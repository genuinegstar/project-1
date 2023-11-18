import react, { useState } from "react";

export default function Note(props) {
  const [note, SetNote] = useState({ name: "", title: "" });

  function textHandler(event) {
    const { name, value } = event.target;

    SetNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    if (
      note.name.split(" ").join("").length !== 0 ||
      note.title.split(" ").join("").length !== 0
    ) {
      props.onAdd(note);
      SetNote({
        name: "",
        title: ""
      });
    } else {
      alert("enter some value to continue");
      SetNote((prev) => prev);
    }
  }

  return (
    <form>
      <input
        type="text"
        name="name"
        value={note.name}
        onChange={textHandler}
        placeholder="name"
      />
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={textHandler}
      />
      <button onClick={submitHandler}> add </button>
    </form>
  );
}
