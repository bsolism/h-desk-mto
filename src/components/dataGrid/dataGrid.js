import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import columnsMe from "../table/columnsMe/columnsMe";

export default function DataGrids({ dataRow }) {
  const [selectedRow, setSelectedRow] = useState();
  const [rows, setRows] = useState([]);
  return (
    <DataGrid
      rows={rows}
      columns={columnsMe}
      rowHeight={30}
      headerHeight={30}
      sx={{
        fontSize: 12,
      }}
      pageSize={100}
      //   onSelectionModelChange={(ids) => {
      //     const selectedIds = new Set(ids);
      //     const selectedRows = dataRow.filter((row) => selectedIds.has(row.id));

      //     setSelectedRow(selectedRows);
      //   }}
      //onCellDoubleClick={handleOpen}
    />
  );
}
