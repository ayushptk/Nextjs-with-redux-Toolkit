'use client'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/slice";
 export default function Page(){

    const userData = useSelector((data)=>
         data.users);
    const dispatch = useDispatch();
    console.log( "data are here "+JSON.stringify(userData));
    return (
        <div>
            <h1>Remover Use Page</h1>
            {
                userData.map((item,index)=>
                    <div key={index}>
                       <span>{item.name}</span> <button onClick={()=>dispatch(removeUser(item.id))}>Remove</button>

                    </div>
                )
            }
        </div>
    )
}