import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../feature/todoSlice";
import { MdDeleteForever } from "react-icons/md";

const ShowTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  return (
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
};

export default ShowTodo;
