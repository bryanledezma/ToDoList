import react from "react";
import './TodoNewInput.css';

function TodoNewInput(){
    return(
        <react.Fragment>
        <label className="labelNewTodo">Nombre de la tarea:</label>
        <input className="newTodoInput" placeholder="bañarme" />
        </react.Fragment>
        
    );
}

export {TodoNewInput};