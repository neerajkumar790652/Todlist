import { createContext, useState,useEffect } from "react";
 export const MyContext= createContext();
 const TodosLogic = ({children})=>{
    const [todos,setTodos]=useState([]);
    useEffect(()=>{
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) setTodos (todoStore)
      },[])
     useEffect(()=>{
       localStorage.setItem('todoStore',JSON.stringify(todos))
     },[todos]) 
      
    
    return(
        <MyContext.Provider value={[todos,setTodos]}>
            {children}
        </MyContext.Provider>
    )
 }
 export default TodosLogic;