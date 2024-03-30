import { useState } from 'react';
import './Todo.css';

let nextId = 0;

function TodoListItem({ todoList, onEdit, onDelete, onToggle }) {
  return (
    <li key={todoList.id} style={{ textDecoration: todoList.checked ? 'line-through' : 'none' }}>
      <div>
        <input type="checkbox" checked={todoList.checked} onChange={() => onToggle(todoList.id)} />
        {todoList.name}
      </div>
      <div>
        <button className='edit-btn' onClick={() => onEdit(todoList.id, todoList.name)}>Edit</button>
        <button className='delete-btn' onClick={() => onDelete(todoList.id)}>Delete</button>
      </div>
    </li>
  );
}

export default function Todo() {
  const [name, setName] = useState('');
  const [todoLists, setTodoLists] = useState([]);

  function editTodoList(todoListId, todoListName) {
    let editedName = prompt("", todoListName);

    if (editedName == null || editedName === "") {
      return todoLists;
    } else {
      setTodoLists(todoLists.map(todoList => {
        if (todoList.id === todoListId) {
          return { ...todoList, name: editedName };
        } else {
          return todoList;
        }
      }));
    }
  }

  function deleteTodoList(todoListId) {
    if (window.confirm("Are you sure you want to delete this todo list?")) {
      setTodoLists(todoLists.filter(todoList => todoList.id !== todoListId));
    }
  }

  function handleAddTodoList() {
    if (name === "") {
      alert("Please enter a valid todo list.");
      return;
    }

    setTodoLists([
      ...todoLists,
      { id: nextId++, name: name, checked: false }
    ]);
    setName('');
  }

  function toggleTodoList(todoListId) {
    setTodoLists(todoLists.map(todoList => {
      if (todoList.id === todoListId) {
        return { ...todoList, checked: !todoList.checked };
      } else {
        return todoList;
      }
    }));
  }

  return (
    <div className='wrapper'>
      <header>
        <h1>Todo App</h1>
      </header>
      <div className='form'>
        <input value={name} placeholder="Add new todo list..." onChange={e => setName(e.target.value)} />
        <button onClick={handleAddTodoList}>Add</button>
      </div>
      <ul>
        {todoLists.map(todoList => (
          <TodoListItem
            key={todoList.id}
            todoList={todoList}
            onEdit={editTodoList}
            onDelete={deleteTodoList}
            onToggle={toggleTodoList}
          />
        ))}
      </ul>
    </div>
  );
}