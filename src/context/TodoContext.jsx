import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({children}) =>{

    const [todos , setTodos] = useState([
        // {
        //     id: 1,
        //     text: "hello"
        // }
    ])
    const [ edit,setEdit] =useState({
        
          todo:{},
          isEdit:false
        
    })

    const deleteTodo = (id) =>{
        setTodos(todos.filter((item) => item.id !== id))
    }
     const AddTodo = (text)=> {
        const newTodo ={
            id:crypto.randomUUID(),
            text: text,
          };
          setTodos ([newTodo,...todos])
        

        
     }
     const editTodo =(oldTodo) =>{
   
        setEdit({
            todo:oldTodo,
            isEdit:true
          
        })

     }
    const updateTodo=(oldId,newText)=>{
        
        setTodos(
          todos.map((item) => {
            if (item.id === oldId) {
              return {
                id: oldId,
                text: newText,
              };
            } else {
              return item;
            }
          })
        )
          setEdit({
            todo: {},
            isEdit: false,
          });
        

    }
    

    return(
        <TodoContext.Provider value={{todos,deleteTodo ,AddTodo,edit,editTodo,updateTodo
        }}>

            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;