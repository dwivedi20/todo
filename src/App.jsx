
import React from 'react'
import Navbar from './Componets/Navbar'
import Form from './Componets/Form'
import Listgroup from './Componets/Listgroup'
import { TodoProvider } from './context/TodoContext'

const App = () => {
  return (
    <TodoProvider>
    <Navbar />
<div className="container p-5">
  <Form />
  <Listgroup/>
</div>   
</TodoProvider>
  )
}

export default App
