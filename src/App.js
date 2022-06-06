import './scss/main.scss';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App container">
          <div className='row'>
            <AddTodo className='item'/>
            <TodoList className='item' />
            <Nav className='item'/>
          </div>
    </div>
  );
}

export default App;
