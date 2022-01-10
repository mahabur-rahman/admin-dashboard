import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyEditor = () => {
  const [wysiwyg, setWysiwyg] = useState("");

  const handleEditorChange = (event) => {
    setWysiwyg(event.target.getContent());
    console.log(wysiwyg);
  };

  return (
    <>
      <Editor
        initialValue="<p>Hello World</p><p>This is TinyMCE <strong>full</strong> editor</p>"
        init={{
          height: 600,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright | bullist numlist outdent indent | help",
        }}
        onChange={handleEditorChange}
      />

      <div className="wysiwyg">{wysiwyg}</div>
    </>
  );
};

export default TinyEditor;
