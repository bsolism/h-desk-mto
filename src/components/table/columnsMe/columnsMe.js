import moment from "moment";

const columnsMe = [
  {
    field: "no",
    headerName: "No",
    width: 20,
    //   renderCell: (index) => {
    //     return <span>{index.row.row}</span>;
    //   },
  },
  { field: "id", headerName: "Case ID", width: 150 },
  { field: "title", headerName: "Title", width: 300 },
  {
    field: "date",
    headerName: "Date",
    width: 300,
    renderCell: (params) => {
      return moment(params.value).format("DD-MMM-yyyy");
    },
  },

  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => {
      if (params.value === 0)
        return (
          <div
            style={{
              width: "5em",
              backgroundColor: "#FFFFDB",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            Pending
          </div>
        );
      if (params.value === 1)
        return (
          <div
            style={{
              width: "5em",
              backgroundColor: "#9ccc65",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            Process
          </div>
        );
      if (params.value === 2)
        return (
          <div
            style={{
              width: "5em",
              backgroundColor: "#ffb3b3",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            Finish
          </div>
        );
    },
  },
];

export default columnsMe;
