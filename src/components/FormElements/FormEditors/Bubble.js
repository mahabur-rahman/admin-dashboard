import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Bubble = () => {
  const [text, setText] = useState(
    "<div contenteditable='false'>Hello World!</div>"
  );

  const [para, setPara] = useState(
    "<div contenteditable='false'>This is Quill <strong>default</strong> editor</div>"
  );

  return (
    <>
      <ReactQuill theme="bubble" value={`${text} ${para}`} />
    </>
  );
};

export default Bubble;
