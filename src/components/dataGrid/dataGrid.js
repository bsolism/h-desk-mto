import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import columnsMe from "../table/columnsMe/columnsMe";

export default function DataGrids({ data }) {
  const [selectedRow, setSelectedRow] = useState();
  const navigate = useNavigate();

  return (
    <DataGrid
      rows={data}
      columns={columnsMe}
      rowHeight={30}
      headerHeight={30}
      sx={{
        fontSize: 12,
      }}
      pageSize={100}
      loading={data.length > 0 ? false : true}
      onSelectionModelChange={(ids) => {
        const selectedIds = new Set(ids);
        const selectedRows = data.filter((row) => selectedIds.has(row.id));

        setSelectedRow(selectedRows);
      }}
      onCellDoubleClick={() => navigate("/request", { state: selectedRow })}
    />
  );
}
