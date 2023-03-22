import React from "react";
import { Container } from "./components/Container";
import { NewTodoContainer } from "./components/NewTodoContainer";

import { TodoListContainer } from "./components/TodoListContainer";
import { TodoSearch } from "./components/TodoSearch";
import { TodoCounter } from "./components/TodoCounter";
import { TodoList} from "./components/TodoList";
import { TodoItem} from "./components/TodoItem";
import { TodoForm} from "./components/TodoForm";

const defaultTodos = [
  { text: 'Ejemplo 1', completed: true },
  { text: 'Ejemplo 2', completed: false },
  { text: 'Ejemplo 3', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos); //State que almacena los ToDos
  const [searchValue, setSearchValue] = React.useState('');//State para buscar en tiempo real

  const completedTodos = todos.filter(todo => !!todo.completed).length; //para contar los ToDos completados
  const totalTodos = todos.length; //Para contar los toDos totales

  let searchedTodos = []; 

  if (!searchValue.length >= 1) {
    searchedTodos = todos;  //si la busqueda da resultado 
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (newTodo) =>{
    const nombre = newTodo;
    console.log(nombre, ' de tipo', typeof(nombre));

    const nuevo = {text:nombre, completed:false};

    
    const newTodos = [...todos];
    newTodos.push(nuevo);
    console.log('====',newTodos,'====');
    setTodos(newTodos);
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  
  

  
  return(
    <Container>
  <TodoListContainer>
    <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    <TodoCounter total={totalTodos} completed={completedTodos} />
    <TodoList>
    

      {searchedTodos.map(todo =>(
      <TodoItem 
      key={todo.text} 
      text={todo.text} 
      completed={todo.completed} 
      onComplete={() => completeTodo(todo.text)}
      onDelete={() => deleteTodo(todo.text)}
      />
      ))}
    </TodoList>
  </TodoListContainer>

  <NewTodoContainer>
    <TodoForm addTodo={addTodo} ></TodoForm>
  </NewTodoContainer>

  
</Container>
);
}

export default App;
