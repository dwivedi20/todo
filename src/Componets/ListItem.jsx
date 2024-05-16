
import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

const ListItem = ({todo}) => {
  const {deleteTodo,editTodo} = useContext(TodoContext)
  return (
    <li className="list-group-item bg-primary">
        <h1 className='display-3 text-light'>{todo.text}</h1>
        <p className='text-warning' > {todo.id}</p>
        <span className='btn-sm float-end rounded-0'>
          <button className="btn btn-warning mx-2" onClick={()=>editTodo(todo)}>Edit</button>
          <button className="btn btn-danger mx-2"onClick={() => deleteTodo(todo.id)}>Delete</button>
        </span>
      </li>
  )
}

export default ListItem
