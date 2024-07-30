import React, { useState } from 'react'

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue, handleMsgBg, handleMsg} = props
    
    return (
        <header>
            <h3>Todo List v2</h3>
            <p>- With input validation and flash message!</p>
            <div>
                <input
                value={todoValue}
                onChange={(e)=>{
                    setTodoValue(e.target.value)
                }}
                placeholder='Enter a todo'/>

                <button onClick={()=>{
                    handleAddTodos(todoValue)
                    setTodoValue('')   
                }}>Add</button>
            </div>
        </header>
    )
}
