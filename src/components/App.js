import React,{useState} from 'react';
import {Todos} from './Todos';
import '../css/style.css'

export function App(){

  const [todos, setTodos] = useState([
    {id:0, todoText:"React Course", done:false},
    {id:1, todoText:"JS Course", done:false},
    {id:2, todoText:"C# Course", done:false},
  ]);

  const [newTodo, setNewTodo] = useState('');
  
  function addTodo(){
    if(newTodo.trim() !== ''){
      let newObj = {
        id: todos.length,
        todoText: newTodo,
        done:false,
      }
      setTodos([...todos,newObj]);
      setNewTodo("");
    }else{
      alert("No value")
    }
  }

  function markTodoAsDone(todo){
    console.log(todo)
    setTodos([
      ...todos.map(item => (item.id === todo.id) ? // looking for the clicked element by id
        {id:item.id, todoText:item.todoText, done:!item.done} // if it find the element return all props just toggle done
        : item // for the rest return all same
      )
    ]);
  }

  function removeTodo(todo){
    setTodos([...todos.map(item => (item.id === todo.id) ? {} : item)])
    console.log(todo.id)
  }

  return(
    <div id="app">
        <input type="text" placeholder="New ToDo" value={newTodo} onChange={(e)=>{setNewTodo(e.target.value)}} className="inpt"/>
        <button onClick={addTodo} className="btn-add">Add</button>
        <Todos listOfTodos={todos} markTodoAsDone={markTodoAsDone} removeTodo={removeTodo}/>
    </div>
    
  )

}