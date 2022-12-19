import { TextareaAutosize } from "@mui/material";
import React from "react";
function Card() {
  return (
    <React.Fragment>
      <TextareaAutosize
        minRows={4}
        placeholder="Add"
        style={{
          width: 200,
          backgroundColor: "red",
          borderRadius: "10px",
          marginTop: "20px",
          padding: "10px",
          border: "0px",
        }}
      />
      
    </React.Fragment>
  );
}

export default Card;
