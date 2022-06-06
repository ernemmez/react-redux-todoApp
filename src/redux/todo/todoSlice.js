import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: nanoid(), text: "Wake Up", status: true },
      { id: nanoid(), text: "Take a shower", status: false },
      { id: nanoid(), text: "Morning cardio", status: false },
    ],
    activeFilter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        status: false,
      });
    },
    toggle: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.status = !todo.status;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearStatus: (state) => {
      state.todos = state.todos.filter((todo) => !todo.status);
    },
    toggleAll: (state) => {
      const allstatus = state.todos.every((todo) => todo.status);
      state.todos.forEach((todo) => {
        todo.status = !allstatus;
      });
    },
  },
});

export const {
  addTodo,
  toggle,
  deleteTodo,
  changeActiveFilter,
  clearStatus,
  toggleAll,
} = todoSlice.actions;

export default todoSlice.reducer;