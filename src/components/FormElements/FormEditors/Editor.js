import React, { useState } from "react";
import ReactQuill from "react-quill";
// react quill css
import "react-quill/dist/quill.snow.css";

const toolbarOptions = ["bold"];

const Editor = () => {
  const [text, setText] = useState(
    "<div contenteditable='false'>Hello World!</div>"
  );

  const [para, setPara] = useState(
    "<div contenteditable='false'>This is Quill <strong>default</strong> editor</div>"
  );

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const handleProcedureContentChange = (content, delta, source, editor) => {};

  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={`${text} ${para}`}
        onChange={handleProcedureContentChange}
      >
        <div className="my-editing-area" />
      </ReactQuill>
    </>
  );
};

export default Editor;
