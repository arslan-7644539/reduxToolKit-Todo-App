// import React from "react";
import AddTodo from "./componets/AddTodo";
import ShowTodo from "./componets/ShowTodo";
import { Container, Typography } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" textAlign="center" sx={{ my: 3 }}>
        Redux Todo List
      </Typography>
      <AddTodo />
      <ShowTodo />
    </Container>
  );
};

export default App;
