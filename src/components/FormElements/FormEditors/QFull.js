import React, { useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToobar";
import "react-quill/dist/quill.snow.css";

export const Editor = () => {
  const [text, setText] = useState(
    "<div contenteditable='false'>Hello World!</div>"
  );

  const [para, setPara] = useState(
    "<div contenteditable='false'>This is Quill <strong>full</strong> editor</div>"
  );

  const [state, setState] = useState({ value: null });

  const handleChange = (content, delta, source, editor) => {};

  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={`${text} ${para}`}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
