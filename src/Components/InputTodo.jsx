import React,{useState,useContext} from 'react';
import { MyContext } from './TodosLogic';



const InputTodo = () => {
  const[todos,setTodos]=useContext(MyContext);
  const [todoName,setTodoName]=useState('');
  const addTodo = (e)=>{
   e.preventDefault()
   setTodos([...todos,{name:todoName,complete:false}])
   setTodoName("");
  }
  return (
    <form autoComplete='off' onSubmit={addTodo}>
      <input type="text" placeholder='Add todo...' className='input' name="todos" id="todos" required value={todoName} onChange={(e)=>{setTodoName(e.target.value.toLowerCase())}}/>
      <button className='inpbtn' type='submit' >Add</button>
    </form>
  )
}

export default InputTodo
