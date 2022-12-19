import "./App.css"

import { Typography } from "@mui/material"
import Kanbanboard from "./components/Kanbanboard"
import React from "react"
function App() {
  return (
    <React.Fragment>
     <Typography align="center" variant="h4">Welcome to   kanban board</Typography>
     <Kanbanboard/>
    </React.Fragment>
  )
}

export default App
