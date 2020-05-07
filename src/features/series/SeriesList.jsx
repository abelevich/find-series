import React from "react";
import { map } from "lodash";
import { getImageUrl } from "../../api/tvdbAPI";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import SeriesCard from "./SeriesCard";

const useStyles = makeStyles((theme) => ({
  results: {
    textAlign: "left",
    padding: "0rem 1rem",
  },
  imageContainer: {
    padding: "1rem",
  },
  image: {
    height: "150px",
    width: "150px",
  },
}));

export default ({ seriesList = [], className } = {}) => {
  const classes = useStyles();
  const resultCount = seriesList.length;

  return (
    <div className="series-list" className={className}>
      {seriesList.length > 0 && (
        <>
          <Typography
            className={classes.results}
            variant="subtitle2"
            display="block"
            gutterBottom
          >
            {`Found ${resultCount} series`}
          </Typography>
          <Divider />
        </>
      )}
      <List>
        {map(
          seriesList,
          ({ id, image, seriesName, firstAired, overview, status }) => {
            return (
              <ListItem key={id}>
                <SeriesCard
                  image={getImageUrl(image)}
                  seriesName={seriesName}
                  firstAired={firstAired}
                  overview={overview}
                  status={status}
                />
              </ListItem>
            );
          }
        )}
      </List>
    </div>
  );
};
