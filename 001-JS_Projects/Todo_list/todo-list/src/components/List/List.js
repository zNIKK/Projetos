import React from 'react';
import "./list.css";

export default function List ({id, tarefas, handleDelete, active, isActive, checked}){
        // e.target.classList.toggle('strikeWord')
    if (tarefas.length === 0 && isActive === false) {
        console.log(tarefas.length);
        return (
            <div className="tarefas">Não Há nenhuma tarefa feita ainda</div>
        );

    } else if (tarefas.length === 0) {
        return (
            <div className="tarefas">Não Há nenhuma tarefa ainda</div>
            
        );
    } else {
            return (
                
                <div>
                    <ul className="tarefasLista">
                        {tarefas.map((tarefa, index) => (
                        <li className={`formText tarefaLi`} key={tarefa} id={id}>
                            <input checked={checked[index]} onChange={(e) => active(e, tarefa, index)} className='checkbox' type="checkbox" id="checkbox"/>
                            <div draggable='false' className={`divTarefa ${checked[index] ? 'strikeWord' : ''}`}>{tarefa}</div>
                            <button draggable='false' className='deleteButton' onClick={(e) => handleDelete(e, index)}>
                                <img draggable='false' src="./images/icon-cross.svg" alt='icon-cross'/>
                            </button>
                        </li>
                        ))}
                    </ul>
                </div>
        );
    }
}