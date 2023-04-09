import React from 'react'
import TodoItem from './TodoItem';
import { useContext } from 'react';
import { MyContext } from './TodosLogic';

const TodoList = () => {
    const [todos,setTodos]=useContext(MyContext);
    const switchComplete = (id)=>{
      const newTodos = [...todos]
      newTodos.forEach((todo,index)=>{
        if(index===id){
          todo.complete = !todo.complete
        }
      })
      setTodos(newTodos)
    }
   const handleEditTodos =(editvalue,id)=>{
    const newTodos = [...todos]
    newTodos.forEach((todo,index)=>{
      if(index===id){
        todo.name = editvalue
      }
    })
    setTodos(newTodos)
   }
 const deleteTodo=()=>{
  const newTodos = todos.filter(todo=>{
    return todo.complete === false
  })
  setTodos(newTodos)
 }
  return (
    <>
      {todos.map((todo,index)=>{
        return(
            <TodoItem todo={todo} key={index} id={index} checkComplete = {switchComplete} handleEditTodos={handleEditTodos} deleteTodo={deleteTodo}
             />
        )
      })}
      
      
    </>
  )
    }

export default TodoList;
