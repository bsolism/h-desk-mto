import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { useFormikContext } from "formik";

export default function TextEditor() {
  const { setFieldValue, values } = useFormikContext();
  const handleChange = (content) => {
    setFieldValue("detail", content);
  };
  return (
    <>
      <SunEditor
        height="200px"
        setContents={values ? values.detail : null}
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
