import React, { useState, useRef } from "react";
import { Paper, List } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import TextField from "@mui/material/TextField";

import ImageInput from "./imageInput";

export default function ImageInputList() {
  const [file, setFile] = useState([]);
  const scrollView = useRef();
  console.log(file);

  return (
    <>
      <ImageInput file={file} setFile={setFile} />
      <ImageList sx={{ width: "100%", height: "100%" }} cols={1}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <TextField
              id="standard-basic"
              label="Add Text"
              variant="standard"
            />
            {/* <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
            /> */}
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
];
