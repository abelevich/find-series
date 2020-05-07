import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%"
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "150px",
    flexShrink: 0
  },
  overview: {
    paddingTop: "1rem"
  }
}));

export default function SeriesCard({
  seriesName,
  image,
  firstAired,
  status,
  overview,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={image}
        title={`${seriesName} cover`}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {seriesName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {firstAired}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {status}
          </Typography>
          <Typography className={classes.overview} variant="body2" color="textSecondary" >
            {overview}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
