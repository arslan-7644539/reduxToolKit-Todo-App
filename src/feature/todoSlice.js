import { createSlice } from "@reduxjs/toolkit";
// ===========================================
const addTodoValue = (state, action) => {
  state.user.push({
    id: Date.now(),
    text: action.payload,
    completed: false,
  });
};
// ---------------------------------------------------------
const toggleTodoValue = (state, action) => {
  const todo = state.user.find((todo) => todo.id === action.payload);
  if (todo) {
    todo.completed = !todo.completed;
  }
};
// --------------------------------------------------------------

const deleteTodoValue = (state, action) => {
  state.user = state.user.filter((todo) => todo.id !== action.payload);
};
// ------------------------------------------------------------------

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    // todos: [],
    user: [],
  },
  reducers: {
    addTodo: addTodoValue,
    toggleTodo: toggleTodoValue,
    deleteTodo: deleteTodoValue,
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
