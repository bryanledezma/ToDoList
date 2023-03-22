import React from 'react';
import './TodoListContainer.css';

function TodoListContainer(props){
    return(
        <div className='todoListContainer'>
            <h1 className='titleTodoList'>Tus tareas:</h1>
            {props.children}
      </div>
    );
}

export {TodoListContainer};