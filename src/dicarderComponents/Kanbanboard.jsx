import { TextareaAutosize, Chip } from "@mui/material";
import React from "react";
import KanbanColumn from "../dicarderComponents/KanbanColumn";
function Kanbanboard() {
  return (
    // <div
    //   style={{
    //     width: "90vw",
    //     height: "90vh",
    //     backgroundColor: "#f3f6f9",
    //     margin: "auto"
    //   }}
    // >
      <div
        style={{
          width:"90vw",
          margin: "auto",
          marginTop: "20px",
          gap: "10px",
          display:"flex",
          justifyContent:"center",
          height: "85vh",
          
        }}
      >
    <KanbanColumn />
    
      </div>
    // </div>
  );
}

export default Kanbanboard;
