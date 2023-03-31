
import './TodoItem.css';

function TodoItem(props){

    return(
        <li className={`TodoItem ${props.completed && 'TodoItem-p--completed'}`}>
            <button className={`checkButton ${props.completed && 'checkButton--completed'}`} onClick={props.onComplete}>✔</button>
            <p>{props.text}</p> 
            <button className="x"  onClick={props.onDelete}>✘</button>
        </li>
    );
}

export { TodoItem };