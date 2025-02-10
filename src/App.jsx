import AddTodo from "./componets/AddTodo";
import { Container, Typography } from "@mui/material";
// ==========================================================

const App = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" textAlign="center" sx={{ my: 3 }}>
        Redux Todo List
      </Typography>
      <AddTodo />
    </Container>
  );
};

export default App;
