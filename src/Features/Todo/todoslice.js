import {createSlice , nanoid} from "@reduxjs/toolkit"

const initialState =  {
    todos : [{
        id : 1,
        text : "Hello World!!"
    }],
}
// we have to export reducers in 2 parts 
export const todoslice  = createSlice({
    name : 'LoRd',
    initialState,
    reducers : {
        // Here Comes the change in respect to Context API , where In REdux Toolkit we got 2 prior element in function ...State & action
        
        // State will give the Access to initialstate ,every hand to hand state change can be accessed through this
        // we get some value in action to do specific work
        addTodo : (state , action) => {
            const Todo = {
                id : nanoid(),
                text : action.payload
            } 
            state.todos.push(Todo)
        },
        removeTodo : (state , action) =>{
            state.todos = state.todos.filter((val) => val.id !== action.payload )
        },
        updateTodo : (state , action) => {
            state.todos  = state.todos.map((val) => val.id === action.payload.id ? text = action.payload.text : val)
        }
    }
    
}) 
// exporting reducers functionalities
export const {addTodo , removeTodo , updateTodo} = todoslice.actions

export default todoslice.reducer