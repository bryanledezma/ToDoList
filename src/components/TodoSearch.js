import react from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){
    
const onSearchValueChange = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
}

    return(
        <react.Fragment>
        <input className="todoSearch" placeholder="Buscar" value={searchValue} onChange={onSearchValueChange}/>
        </react.Fragment>
        
    );
}

export {TodoSearch};