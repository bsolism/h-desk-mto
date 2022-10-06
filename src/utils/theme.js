import { createTheme } from "@mui/material/styles";

export default createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 40,
          minHeight: 40,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          border: 1,
          fontSize: 11,
          padding: "1px",
          marginLeft: "10px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        standard: {
          height: "10px",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#6f6e6e",
    },
    blueLight: {
      main: "#cfe8fc",
    },
  },
});
