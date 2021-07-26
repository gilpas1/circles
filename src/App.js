import React, { useState } from "react";
import useStyle from "./AppStyle";
import {
  CssBaseline,
  Container,
  Typography,
  TextField,
} from "@material-ui/core";
import GridCircles from "./GridCircles";

const App = () => {
  const [numCircles, setNumCircles] = useState(8);

  const handleChange = (event) => {
    const newNum = parseInt(event.target.value);
    if (newNum >= 1 && newNum % 1 === 0) {
      setNumCircles(newNum);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const classes = useStyle();
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xl"
        className={classes.root}
        style={{ display: "flex" }}
      >
        <Typography variant="h1" align="center" gutterBottom>
          Circles
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            id="numOfCircles"
            label="numbner of circles"
            variant="outlined"
            value={numCircles}
            onChange={handleChange}
            type="number"
          ></TextField>
        </form>
        <GridCircles numOfCircles={numCircles} />
      </Container>
    </>
  );
};

export default App;
