import React from 'react';
import './TodoForm.css';


export const TodoForm = ({addTodo}) => {
    const [description, setDescription] = React.useState("");

    const onSubmit = e =>{
      if(e.target.newTodo.value===""){
        e.preventDefault();
        e.target.newTodo.placeholder="Escribe alguna actividad";
        return;
      }
        e.preventDefault();
        const todo = e.target.newTodo.value;
        sendTodo(todo);
        e.target.newTodo.placeholder="Ej. Pasear al perro";
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
            placeholder='Ej. Pasear al perro'
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
