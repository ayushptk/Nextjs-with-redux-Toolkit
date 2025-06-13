'use client'
import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";
export default function AddUsers() {
    const [name,setName] = useState('')
    //In Redux Toolkit, the dispatch hook is like sending a command to update the app's state.
    const dispatch = useDispatch()
    const userDispatch = ()=>{

        dispatch(addUser(name))  
        



    }
    return (
        <div className="adduser">
            <h1>User List</h1>
        <input type="text" name="name" placeholder="Add new users" onChange={(e)=>setName(e.target.value)} />
<button onClick={userDispatch}>Add Users</button>
<Link href={"/removeuser"}>Remove user</Link>
        </div>
    );
}