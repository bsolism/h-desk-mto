import createStyles from "@mui/styles/createStyles";

const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;

const theme = createStyles({
  container: {
    display: "flex",
    width: "100%",
    marginTop: "1em",
    border: "1px solid #d4d4d4",
    //borderColor: "#6f6e6e",
    // boxShadow: "2px 2px 3px",
  },
  typography: {
    width: "100%",
    border: "1px solid",
    pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    text: {
      fontSize: 14,
    },
  },
});

export default theme;
