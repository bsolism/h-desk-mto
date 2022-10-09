import React from "react";
import { Formik } from "formik";

export default function Formformik({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  innerRef,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      innerRef={innerRef}
    >
      {() => <>{children}</>}
    </Formik>
  );
}
