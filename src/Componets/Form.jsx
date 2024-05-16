
import  React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/TodoContext'

const Form = () => {
  const{AddTodo,edit,updateTodo}= useContext(TodoContext)
   const[text,setText]=useState("")
    const handlesubmit=(e)=>{
      e.preventDefault();
      if(edit.isEdit){
        updateTodo(edit.todo.id,text)
      }
      else{
        AddTodo (text);
      }

      setText("")
    }
   
  useEffect(()=>{
    setText(edit.todo.text)
    
  } ,[edit])
  return (
    <form  className='form-control border border-warning bg-dark ' onSubmit={(e)=>handlesubmit(e)} >
    <input type="text" placeholder='Enter your text' className='w-100 rounded-0 p-3 border border-success'  value={text}  onChange={(e)=>setText(e.target.value)}   />
    <button className="btn btn-info w-100 rounded-0 my-3">Submit</button>
  </form>
  )
}

export default Form
