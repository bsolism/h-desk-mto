import React from "react";
import AppBarNav from "../../components/navigator/appBar";

export default function MainLayout({ children }) {
  return (
    <>
      <AppBarNav />
      {children}
    </>
  );
}
