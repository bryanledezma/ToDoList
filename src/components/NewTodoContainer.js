
import './NewTodoContainer.css';


function NewTodoContainer(props){
    return(
        <div className="newTodoContainer">
            <h2 className="titleNewTodo">¡Crea una nueva tarea!</h2>
            {props.children}
        </div>
    );
}

export { NewTodoContainer};