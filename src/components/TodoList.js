import React from 'react'
import '../scss/todo-list.scss';
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from "react-redux";
import {changeActiveFilter,toggle,deleteTodo} from '../redux/todo/todoSlice';
import {VscChromeClose} from 'react-icons/vsc'


export default function TodoList() {
    const dispatch = useDispatch();
    const { todos, activeFilter } = useSelector((state) => state.todos);

    const handleDelete = (id) => {
        if (window.confirm(`Seçmiş olduğun Todo Silinecek!`)) {
          dispatch(deleteTodo(id));
        }
      };
    
    let filtered = todos;
    if (activeFilter !== "all") {
        filtered = todos.filter((todo) =>
          activeFilter === "completed" ? todo.status : !todo.status
        );
    }
    
  return (
    <ul className="todo-list">
        <h2>Yapılacaklar Listem</h2>
      {filtered.map((todo) => (
        <li key={todo.id} className={todo.status ? "completed" : ""}>
          <div className="view">
            <Checkbox
             className="toggle"
             checked={todo.status}
             onChange={() => {
                 dispatch(toggle(todo.id));
                 dispatch(changeActiveFilter('all'));
             }}
             />
            <label>{todo.text}</label>
            <button
              className="delete"
              onClick={() => handleDelete(todo.id)}
            >
                <VscChromeClose/>
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
