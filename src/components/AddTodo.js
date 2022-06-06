import React , {useState} from 'react'
import '../scss/add-todo.scss'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import { useDispatch} from 'react-redux';
import { addTodo } from '../redux/todo/todoSlice';



export default function AddTodo() {
    const [value,setValue] = useState('');
    const dispatch = useDispatch();
    

    const handleChange = (e) => setValue(e.target.value);

      const handleSubmit = (e) => {
        if (!value.trim()) {
          return;
        }
        dispatch(addTodo(value.trim()));
        setValue("");
        e.preventDefault();
      };
  return (
    <div className='add-todo'>
      <form onSubmit={handleSubmit}>
      <FormGroup>
        <TextField 
          value={value}
          id="todo"
          name='todo'
          label="Bir Todo Giriniz..."
          variant="standard"
          onChange={handleChange}
        />
      </FormGroup>
      </form>
    </div>
  )
}
