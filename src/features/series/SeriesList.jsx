import React from "react";
import { map } from "lodash";

import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

export default ({ seriesList = [], className } = {}) => {
  return (
    <div className="series-list" className={className}>
      <List>
        {map(seriesList, ({id, seriesName}) => {
          return <ListItem key={id}>{seriesName}</ListItem>;
        })}
      </List>
    </div>
  );
};
