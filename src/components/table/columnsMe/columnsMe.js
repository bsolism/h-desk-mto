const columnsMe = [
  {
    field: "no",
    headerName: "No",
    width: 20,
    //   renderCell: (index) => {
    //     return <span>{index.row.row}</span>;
    //   },
  },
  { field: "name", headerName: "Case ID", width: 150 },
  { field: "ubicacionFisica", headerName: "Title", width: 300 },
  { field: "type", headerName: "Date", width: 300 },

  {
    field: "online",
    headerName: "Status",
    width: 200,
  },
];

export default columnsMe;
