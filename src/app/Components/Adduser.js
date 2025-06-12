'use client'
import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
export default function AddUsers() {
    const [name,setName] = useState('')
    const dispatch = useDispatch()
    const userDispatch = ()=>{

        dispatch(addUser(name))  
      

    }
    return (
        <div className="adduser">
            <h1>User List</h1>
        <input type="text" name="name" placeholder="Add new users" onChange={(e)=>setName(e.target.value)} />
<button onClick={userDispatch}>Add Users</button>
        </div>
    );
}