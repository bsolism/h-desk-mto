import React from "react";
import MainLayout from "../../layout/mainLayout";
import Body from "../../components/body";
import SearchField from "../../components/field/searchField";
import DataGrids from "../../components/dataGrid";

export default function Home() {
  return (
    <MainLayout>
      <Body>
        <SearchField />
        <DataGrids />
      </Body>
    </MainLayout>
  );
}
