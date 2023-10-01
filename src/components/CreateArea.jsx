import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handelChange(event) {
    const { name, value } = event.target;
    return setInput((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.sendObject(input);
          setInput({ title: "", content: "" });
          event.preventDefault();
        }}
      >
        <input
          onChange={handelChange}
          name="title"
          placeholder="Title"
          value={input.title}
        />
        <textarea
          onChange={handelChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={input.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
