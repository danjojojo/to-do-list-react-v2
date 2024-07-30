import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() { 

  const [todos, setTodos] = useState([])

  const [msgBg, setMsgBg] = useState('')
  const [msg, setMsg] = useState('')
  const timeOutValue = 2000

  const [todoValue, setTodoValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos:newList}))
  }

  function handleMsg(msg, msgBg){
    setMsg(msg)
    setMsgBg(msgBg)
    setTimeout(()=>{
      setMsg('')
      setMsgBg('')
    }, timeOutValue)
    
  }

  function handleAddTodos(newTodo){
    if(newTodo === ''){
      handleMsg('Please input a to-do task.','errorMsg')
      return
    }

    handleMsg('Successfully added to the list.','successMsg')
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex)=>{
      return todoIndex !== index
    })
    handleMsg('Successfully deleted from the list.','successMsg')
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  function handleEditTodo(index){
    const todoValue = todos[index]
    setTodoValue(todoValue)
    const newTodoList = todos.filter((todo, todoIndex)=>{
      return todoIndex !== index
    })
    handleMsg('You are editing this task.','successMsg')
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  useEffect(()=>{

    if(!localStorage){
      // check if local storage exists
      return
    }

    let localTodos = localStorage.getItem('todos')

    if(!localTodos){
      return
    }
    
    // JSON.parse converts the localTodos to object, then it accesses the todos property
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  
  }, [])

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} handleMsg={handleMsg}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} handleMsg={handleMsg} msgBg={msgBg} msg={msg}/>
    </>
  )
}

export default App
