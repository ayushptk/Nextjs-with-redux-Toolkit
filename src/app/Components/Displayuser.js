'use client'
import { useSelector } from "react-redux";

export default function DisplayUsers() {
    const userData = useSelector((data)=>
         data.users);
    console.log("userData is"+userData);
    return (
        <div className="displayuser">
            <h1>User List</h1>
            {
                userData.map((item,index)=>
                <h2 key={index}>{item.name}</h2>
                )
            }
    
        </div>
    );
}