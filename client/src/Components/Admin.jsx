import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, makeAdminFunction } from '../Redux/Admin/action';

export const Admin = () => {
   const {token} = useSelector((store)=>store.authReducer)
   const {user} = useSelector((store)=>store.adminReducer)
   const dispatch = useDispatch()
   const [render,setRender] = useState(false)

   
   const handleAdmin = (id,token) =>{
     dispatch(makeAdminFunction(id,token))
   }

    const FetchData = () =>{
        dispatch(getUsers(token));
    }

    

    useEffect(()=>{
        FetchData()
    },[render])


    return (
        <div className="wrapper-container mt-10 mb-10 ">
          <table className="w-full border-collapse border border-gray-800">
            <thead>
              <tr>
                <th className="bg-gray-800 text-white border border-gray-800 px-4 py-2">S.no.</th>
                <th className="bg-gray-800 text-white border border-gray-800 px-4 py-2">Name</th>
              </tr>
            </thead>
            {user.map((el,i)=>(
                <tbody>
              <tr>
                <td className="border border-gray-800 px-4 py-2">{i+1}</td>
                <td className="border border-gray-800 px-4 py-2 flex justify-between items-center">
                 {el.name}
                  {el.admin?<button disabled className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Admin</button>:<button onClick={()=>handleAdmin(el._id,token)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Make Admin</button>}
                </td>
              </tr>
              </tbody>
            ))}
          </table>
        </div>
      );
}
