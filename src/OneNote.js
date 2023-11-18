import { useState } from "react";

export default function OneNote(props) {
  const [isEditable, setEditable] = useState(false);
  const [updatename, setUpdatedName] = useState(props.name);
  const [updatetitle, setUpdatedTitle] = useState(props.title);
  function textHandler(event) {
    const updatename = event.target.value;
    setUpdatedName(updatename);
  }

  function textHandler1(event) {
    const updatetitle = event.target.value;
    setUpdatedTitle(updatetitle);
  }
  function clickHandler() {
    alert("sure you want to delte");
    props.noteDelete(props.id);
  }
  function clickHandlerEdit() {
    setEditable((prev) => !prev);
  }
  function submitEdit(event) {
    event.preventDefault();

    if (
      updatename.split(" ").join("").length !== 0 ||
      updatetitle.split(" ").join("").length !== 0
    ) {
      props.updateNote(updatename, updatetitle, props.id);
      setEditable(false);
    } else {
      alert("please provide right value");
      props.updateNote(props.name, props.title, props.id);
      setEditable(false);
    }
  }

  return (
    <div>
      {isEditable ? (
        <div>
          <form>
            <input
              type="text"
              name="updatename"
              value={updatename}
              onChange={textHandler}
            />
            <input
              type="text"
              name="title"
              value={updatetitle}
              onChange={textHandler1}
            />
            <button onClick={submitEdit}> update</button>
          </form>
        </div>
      ) : (
        <div>
          {props.name} {props.title}
          <button onClick={clickHandler}>delete</button>
          <button onClick={clickHandlerEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
