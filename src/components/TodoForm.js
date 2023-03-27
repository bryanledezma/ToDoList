import React from 'react';
import './TodoForm.css';


export const TodoForm = ({addTodo}) => {
    const [description, setDescription] = React.useState("");

    const onSubmit = e =>{
        e.preventDefault();
        const todo = e.target.newTodo.value;
        sendTodo(todo);
        setDescription('');
    };


    const sendTodo = (newtodo) => {
      addTodo(newtodo);
    }

  return (
    <form className='todoForm' onSubmit={onSubmit}>
          <input
            name='newTodo'
            type="text"
            className="newTodoInput"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button
            type='submit'
            className="createTodo"
          >
            Agregar
          </button>
    </form>
  );
}
