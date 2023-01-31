import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState={
 name:"",
 Todo:[],
}
const TodoSlice = createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        input(state,action){
            state.name = action.payload;
        },
        ///assumption
        //action.payload === {name:"kumar"}
        addTodo(state,action){
            state.todo.push({
                name: action.payload.name,
                id: nanoid()
            })
        },
        //assumptio
        //action.payload === the id of the car we went to remove 
        removeTodo(state,action){
            const updated = state.todo.filter((todo)=>{
                return todo.id !== action.payload;
            })
            state.todo = updated;
        }
    }
})

export  const { input, addTodo,removeTodo} = TodoSlice.actions;

export default TodoSlice.reducer;
