'use client'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/slice";
export default function DisplayUsers() {
    const userData = useSelector((data)=>
         data.users);
    const dispatch = useDispatch();
   console.log( "data are"+JSON.stringify(userData));
    return (
        <div className="displayuser">
            <h1>User List</h1>
            {
                userData.map((item,index)=>(
                    <div key={index} className="flex">
                        <p>{item.name}</p>
                        <button onClick={()=>dispatch(removeUser(item.id))}>Remove</button>
                    </div>)
                
                )
            }
    
        </div>
    );
}