import react from "react";
import './TodoItem.css';

function TodoItem(props){
   
    const onDelete = ()=>{
        alert("Eliminaste " + props.text);
    }


    return(
        <li className={`TodoItem ${props.completed && 'TodoItem-p--completed'}`}>
            <button className={`checkButton ${props.completed && 'checkButton--completed'}`} onClick={props.onComplete}>
                <span className="icon gg-check" ></span>
            </button>
            {props.text} 
            <button className="x"  onClick={props.onDelete}>
                <span className="icon gg-close"></span>
            </button>
        </li>
    );
}

export { TodoItem };