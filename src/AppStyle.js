import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "lightGrey",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(10),
  },
  enter: {
    margin: theme.spacing(4),
  },
}));

export default useStyle;
