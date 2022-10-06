import React from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function FileList({ file, setFile }) {
  const handleChangeDeleteAction = (ind) => {
    var item = file[ind];
    let nwArr = file.filter((e) => e !== item);
    setFile(nwArr);
  };
  return (
    <div>
      {file.length > 0
        ? file.map((fl, index) => (
            <List key={index}>
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleChangeDeleteAction(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={fl.name} />
              </ListItem>
            </List>
          ))
        : null}
    </div>
  );
}
