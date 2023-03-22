import './CreateTodoButton.css';

function CreateTodoButton(props){

    const onClickButton = (msg) =>{
        alert(msg);
    }

    return(
        <button 
            className="createTodo"
            onClick={() => onClickButton("Hola pinche putita")}    
        >
            Crear tarea
        </button>
    );
}

export {CreateTodoButton};