import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todo/todoSlice';

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});