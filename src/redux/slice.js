import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const todoReducers = todoSlice.reducer;
