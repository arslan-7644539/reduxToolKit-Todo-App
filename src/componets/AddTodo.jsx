import {
  Box,
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../feature/todoSlice";
import { MdDeleteForever } from "react-icons/md";
// =====================================================

const AddTodo = () => {
  // ------------------

  
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.user);
  // --------------------------- handleAddTodo function
  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
      console.log("🚀 ~ AddTodo ~ input:", input);
    }
  };

  const addTodos = (
    <Box display={"flex"} gap={2} sx={{ my: 2 }}>
      <TextField
        label="New Todo"
        variant="outlined"
        // fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddTodo}>
        Add Task
      </Button>
    </Box>
  );

  const ShowTodo = (
    <List>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          secondaryAction={
            <>
              <Checkbox
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                <MdDeleteForever />
              </IconButton>
            </>
          }
        >
          <ListItemText
            primary={todo.text}
            sx={{ textDecoration: todo.completed ? "line-through" : "none" }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      {addTodos}
      {ShowTodo}
    </>
  );
};

export default AddTodo;
