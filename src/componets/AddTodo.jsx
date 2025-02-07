import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
      console.log("🚀 ~ AddTodo ~ input:", input);
    }
  };
  return (
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
};

export default AddTodo;
