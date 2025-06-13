// counterSlice.js
const { createSlice,nanoid,current } = require('@reduxjs/toolkit');

const initialState={
    users:JSON.parse(localStorage.getItem("Users")) || [],

    
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
            console.log(current(state.users));
            //it will show the current state
              let UserData = JSON.stringify(current(state.users));
            localStorage.setItem("Users",UserData)
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
