import React, { useState, useEffect } from "react";
import MainLayout from "../../layout/mainLayout";
import Body from "../../components/body";
import SearchField from "../../components/field/searchField";
import DataGrids from "../../components/dataGrid";
import { apiCases } from "../../services";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    await apiCases.getAll().then((res) => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  };

  return (
    <MainLayout>
      <Body>
        <SearchField />
        <DataGrids data={data} />
      </Body>
    </MainLayout>
  );
}
