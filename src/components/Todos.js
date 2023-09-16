import React from 'react'

import {useSelector } from 'react-redux/'
import {useDispatch} from 'react-redux'
import { editTodo, removeTodo } from '../features/todo/todoSlice'






function Todos() {
   

const todos = useSelector(state => state.todos)
console.log(todos);
const dispatch = useDispatch()



  return (

    <>
    <div>Todos</div>
 <ul className='list-none flex flex-col space-y-3'>

    {todos.map((todo) => {
        return (
             <li key={todo.id} className='bg-slate-700 flex justify-between items-center w-[30%] m-auto p-3'  >
             <div className='text-white '>{todo.text}</div>
             {/* <button onClick={()=> dispatch(editTodo())} className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                Edit
             </button > */}
             <button onClick={()=> dispatch(removeTodo(todo.id))} className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                Delete
             </button >
             
             </li>

        )
    })}
    </ul>
    </>

  )
}

export default Todos