import React,{useState}from 'react'

const TodoItem = ({todo,id,checkComplete,handleEditTodos,deleteTodo}) => {
const [ edit,setEdit]=useState(false);
const [editValue,setEditValue]=useState(todo.name)

  const handleEdit = ()=>{
setEdit(true)
  }  
  const handleSave =()=>{
    setEdit(false)
    if(editValue){
      handleEditTodos(editValue,id)
    }
    else{
      setEditValue(todo.name)
    }
  }
  if(edit){
    return (
      <div className='list-item'>
       <ul>
              <li className='list'>   
       
        <input type='text' id="editValue item" value={editValue} name="editValue" onChange={e=>setEditValue(e.target.value.toLowerCase())} />
       
      
        <button className="btn left" onClick={()=>{handleSave(id)}}>Save</button>
        <button className="btn" onClick={deleteTodo} id="delete">Delete</button>
              </li>
          </ul>
      </div>
    )

  }else{
    return (
      <div className='list-item'>
       <ul>
              <li className='list'>   
        <label htmlFor={id}className={todo.complete ?"active":""} id="item">
        <input type='checkbox' id={id} checked={todo.complete} onChange={()=>checkComplete(id)}/>
       {todo.name}
        </label>
        <button  className="btn left"disabled={todo.complete} onClick={handleEdit}>Edit</button>
        <button className="btn" onClick={deleteTodo} id="delete">Delete</button>
              </li>
          </ul>
      </div>
    )
  }
 
  
}

export default TodoItem
