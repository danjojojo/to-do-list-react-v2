import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {

    const {todos, msgBg, msg} = props

    return (
        <div className='main'>
            <div className={msgBg}>
                <p>{msg}</p>
            </div>
            <hr />
            <h3>List of Tasks</h3>
            <ul>
                {todos.map((todo, todoIndex)=>{
                    return(
                        <TodoCard {...props} key={todoIndex} index={todoIndex}>
                            <p>{todo}</p>
                        </TodoCard>
                    )
                })}
            </ul>
        </div>
        
    )
}
