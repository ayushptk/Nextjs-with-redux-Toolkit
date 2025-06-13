// counterSlice.js
const { createSlice,nanoid } = require('@reduxjs/toolkit');

const initialState={
    users:[]
    
}


const Slice = createSlice({
    name:'User Push',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            console.log(action)
            const data = {
                id:nanoid(),
                name:action.payload
            }
            state.users.push(data)
        },
        removeUser:(state,action)=>{
           
            state.users = state.users.filter((item)=>item.id!==action.payload)
            //  console.log(item.id);
            console.log(action.payload);
        }
    }

})

export const {addUser,removeUser} = Slice.actions
export default Slice.reducer; 
