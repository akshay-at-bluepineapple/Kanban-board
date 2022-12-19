import React from "react";
import { Chip } from "@mui/material";
import Card from "./Card";


function KanbanColumn() {
  return (
    <div
      style={{
        height: "90%",
        width: "250px",
        marginTop: "30px",
        borderRadius: "10px",
      }}
    >
      {/* chip */}
      <section
        style={{
          marginLeft: "10px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Chip label="Todo" color="primary"></Chip>
      </section>
      {/* Add card */}
      <section
        style={{ width: "100%", display: "flex", justifyContent: "center"}}
      >
        <p
          style={{
            backgroundColor: "#f3f6f9",
            width: "100%",
            textAlign: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius:"10px",
            fontSize:"1.5rem",
            cursor:"pointer"
          }}
        >
          +
        </p>
      </section>
      <div
        style={{
          backgroundColor: "#f7fafc",
          borderRadius:"10px",
          overflowY: "scroll",
          width:"100%",
          height:"100%",
          display:"flex",
          justifyContent:"center",
          flexDirection:"row"
        }}
      >
        <Card/>
      </div>
    </div>
  );
}

export default KanbanColumn;
