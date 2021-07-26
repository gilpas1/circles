import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyle from "./circleStyle";

const GridCircles = ({ numOfCircles }) => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const rgbAmountOfValues = calcAmountOfValues(numOfCircles);
    const rgbValues = calcColorValues(rgbAmountOfValues);
    const newCircles = genCircles(numOfCircles, rgbValues);
    setCircles(newCircles);
  }, [numOfCircles]);

  // compute the amount of rgb values needed
  const calcAmountOfValues = (num) => {
    let rgbAmountOfValues = [2, 2, 2];
    let maxAmount = 8;
    let i = 0;
    while (maxAmount < num) {
      rgbAmountOfValues[i]++;
      maxAmount = rgbAmountOfValues.reduce((a, b) => a * b);
      i = (i + 1) % 3;
    }
    return rgbAmountOfValues;
  };

  // compute the possible rgb values and return a list with 3 lists of values
  const calcColorValues = (rgbAmountOfValues) => {
    const maxValue = 255;

    let rgbValues = [[], [], []];
    for (let i = 0; i <= 2; i++) {
      //go through red, green and then blue
      const divider = rgbAmountOfValues[i] - 1;
      const delta = Math.floor(maxValue / divider);

      for (let curValue = 0; curValue <= maxValue; curValue += delta) {
        rgbValues[i].push(curValue);
      }
    }
    return rgbValues;
  };

  const genCircles = (numOfCircles, rgbValues) => {
    let circles = [];
    for (let r = 0; r < rgbValues[0].length; r++) {
      for (let g = 0; g < rgbValues[1].length; g++) {
        for (let b = 0; b < rgbValues[2].length; b++) {
          circles.push([rgbValues[0][r], rgbValues[1][g], rgbValues[2][b]]);

          if (circles.length === numOfCircles) {
            return circles;
          }
        }
      }
    }
  };

  const classes = useStyle();
  return (
    <Grid container spacing={2} justifyContent="flex-start" alignItems="center">
      {circles.map((circle, index) => {
        return (
          <Grid
            item
            key={index}
            className={classes.circle}
            style={{
              backgroundColor: `rgb(${circle[0]},${circle[1]},${circle[2]})`,
            }}
          />
        );
      })}
    </Grid>
  );
};

export default GridCircles;
