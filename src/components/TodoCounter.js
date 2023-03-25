import React from 'react';
import './TodoCounter.css';

function TodoCounter({total, completed}){
    return(
    <h2 className='TodoCounter'>Completado {completed} de {total}</h2>
    );
}

export {TodoCounter};