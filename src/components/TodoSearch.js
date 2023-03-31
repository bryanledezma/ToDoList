
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){
    
const onSearchValueChange = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
}

const cleanTodoSearch = (event) =>{
    setSearchValue('');
}

    return(
        <div className="searchForm">
        <input className="todoSearch" name="todoSearch" placeholder="Buscar" value={searchValue} onChange={onSearchValueChange}></input>
        <button onClick={cleanTodoSearch} className="cleanTodoSearch">X</button>
        </div>
        
    );
}

export {TodoSearch};