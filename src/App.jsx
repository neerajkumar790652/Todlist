import './App.css'
import Heading from './Components/Heading'
import InputTodo from './Components/InputTodo'
import TodoList from './Components/TodoList'


function App() {
 
  return (
   
       <div className="Todo-heading">
      <Heading/>
      <InputTodo/>
      <TodoList/>
    </div>
    
   
  )
}

export default App
