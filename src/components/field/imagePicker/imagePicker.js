import React from "react";
// import { useFormikContext } from "formik";

import ImageInputList from "./imageInputList";

export default function ImagePicker({ name }) {
  //   const { errors, setFieldValue, values } = useFormikContext();

  //   const imageUris = values[name];

  //   const handleAdd = (uri) => {
  //     setFieldValue(name, [...imageUris, uri]);
  //   };
  //   const handleRemove = (uri) => {
  //     setFieldValue(
  //       name,
  //       imageUris.filter((imageUri) => imageUri !== uri)
  //     );
  //   };
  return (
    <>
      <ImageInputList />
    </>
  );
}
