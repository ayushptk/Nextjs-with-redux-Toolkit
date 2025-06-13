'use client'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoslice";
export default function Page(){
    const[todo,setTodo] = useState('');
    const tododata = useSelector((data)=>data.todoData.todos);
    console.log( "data are here "+ JSON.stringify(tododata) );
    const dispatch = useDispatch();
    return(
        <div>
            <h1> Add Todo List</h1>
            <input type="text" name="name" placeholder="Add new users" onChange={(e)=>setTodo(e.target.value)} />
            <button onClick={()=>dispatch(addTodo(todo))} >Add Users</button>
            <h1>Todo List</h1>
            {
                tododata.map((data, index) =>
                    <div key={index}>
                        <p>{data.name}</p>
                    </div>
                )
            }
        </div>
    )
}