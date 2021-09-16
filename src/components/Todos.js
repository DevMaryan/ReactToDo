import React from 'react';
import PropTypes from 'prop-types';
export function Todos({listOfTodos, markTodoAsDone,removeTodo}){

    return(
        <ol>
            {listOfTodos.map((todo, i)=>{
                return(
                    <li key={todo.id}>
                        <span>{todo.todoText}</span>
                        <input
                            type="checkbox"
                            value={todo.done}
                            checked={todo.done}
                            onChange={()=>markTodoAsDone(todo)}
                        />
                        <button className="btn-trash" onClick={()=>removeTodo(todo)}><i className="fas fa-trash-alt"></i></button>
                    </li>
                )
            })}
        </ol>
    )
}

Todos.propTypes = {
    listOfTodos:PropTypes.arrayOf(PropTypes.object),
    markTodoAsDone:PropTypes.func,
    removeTodo:PropTypes.func
}