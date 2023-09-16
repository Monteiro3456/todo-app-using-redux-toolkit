import  {createSlice, nanoid} from '@reduxjs/toolkit'


const initialState = {

todos:[{id:1, text:'Hello'}],

}




export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo : (state, action) => {
            const todo = {
                id: nanoid(),
                text:action.payload,
            }
           state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
                )

        },
        // editTodo: (state, action) => {
        //   const todo = action.payload.todo
        //   const todoText = action.payload.todoText
        //   return state.map(t => {
        //     if (t.id === todo.id){
        //         t.text = todoText
        //     }
        //     return t
        //   })
        // }
    }

})


export const {addTodo, removeTodo, editTodo} = todoSlice.actions


export default todoSlice.reducer




