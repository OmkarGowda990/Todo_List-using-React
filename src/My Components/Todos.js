import React from 'react'
import { TodoItem } from '../My Components/TodoItem'
// import {todo} from '../My Components/todo';

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center'>Todos-List</h3>

      {props.todos.length==0? "No Todos to display":
      props.todos.map((todo)=>{
        return <TodoItem todo={todo} key={todo.sno} onDlete={props.onDelete}/>
      })}
    </div>
  )
}
