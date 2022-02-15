// import logo from './logo.svg';
import './App.css';
import Header from './My Components/Header';
import { Todos } from './My Components/Todos';
import { Footer } from './My Components/Footer';
import React,{ useState} from 'react';
import { AddTodo } from './My Components/AddTodo';
import { useEffect } from 'react';


function App() {
  let initTodo;
  if(localStorage.getItem("todos" === null)){
    initTodo = [];
  }
  else{
    initTodo = Json.parse(localStorage.getItem("todos"));
  }
  const add = (title, desc)=>{
      console.log("I am added");
      let sno;
      if(todos.length=0){
        sno=0;
      }else{
        sno = todos[todos.length-1].sno +1
      }
      
      const myTodo = {
        sno:sno,
        title:title,
        desc:desc
      }
      setTodos([...todos, myTodo]);

      useEffect( () => {
        localStorage.setItem("todos",JSON.stringify(todos));
          
      }, [todos])

      if(localStorage.getItem('todos')){
        localStorage.setItem("todos",JSON.stringify(todos));
      }

  }

  const onDelete = (todo)=>{
      console.log("I am on delete",todo);
      setTodos(todo.filter((e)=>{
       return e!==todo;
      }));
      localStorage.getItem('todos', JSON.stringify(todos));
  }

  const [Todos, setTodos] =useState([initTodo]);
  return (
      <>
        <Header title ="My_Todos_list" searchBar ={false} />
        <AddTodo addTodo={add}/>
        <Todos todos={Todos} onDelete={onDelete}/>
        <Footer/>
      </>
      
  );
}
export default App;
