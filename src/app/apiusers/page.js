'use client'
import { useDispatch, useSelector } from "react-redux"
import { fetchApiuser } from "../redux/slice";

export default function Page(){
    const dispatch = useDispatch();
    const apidata = useSelector((data)=>data.usersData.userApiData);


    return(
        <div>
            <h1>User List From Api </h1>
            <button onClick={()=>dispatch(fetchApiuser())}>Load users</button>
            {
                apidata.map((item,index)=>(
                    <div key={index}>
                        <p>{item.name}</p>
                    </div>
                ))
            }
            
        </div>
    )
}