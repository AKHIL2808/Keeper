import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [elements, setElement] = useState([]);

  function catchObject(object) {
    return setElement((prev) => {
      return [
        ...prev,
        {
          title: object.title,
          content: object.content
        }
      ];
    });
  }

  function deleteNote(id) {
    return setElement((prev) => {
      return prev.filter((element, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea sendObject={catchObject} />
      {elements.map((element, index) => (
        <Note
          key={index}
          id={index}
          title={element.title}
          content={element.content}
          delete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
