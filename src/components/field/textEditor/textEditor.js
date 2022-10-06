import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

export default function TextEditor() {
  const handleChange = (content) => {
    console.log(content);
  };
  return (
    <>
      <SunEditor
        height="200px"
        setOptions={{
          buttonList: [
            ["font", "fontSize"],
            ["bold", "underline", "italic", "strike"],
            ["align", "list"],
          ],
        }}
        onChange={handleChange}
      />
    </>
  );
}
