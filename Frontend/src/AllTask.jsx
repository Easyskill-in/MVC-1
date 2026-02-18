import React from 'react'
import { useEffect } from 'react'
import axios from './Util/axios.js'
import { useState } from 'react'
const AllTask = () => {
    const [Task,setTask] = useState([])
     
    useEffect(()=>{
        async function Fn(){
            try{
                const res = await axios.get("/task/allTask")
                console.log(res);
                setTask(res.data.data)
            }catch(error){
                console.log("Error :",error.message)
            }
        }
        Fn()
    },[])


    async function DeleteTask(id){
                    try {
                //  console.log(v.id)
                 const res = await axios.delete("/task/deletetask",{
                    data:{id}
                })
                 console.log(res);
                
                 setTask(res.data.data)
                  
               } catch (error) {
                console.log(error);
                
               }
            }

  return (
    <div>
        <ul>
        {Task.map((value,index)=>(
            <li key={value.id}>{value.task} 
            <button className='red' onClick={()=>{
                console.log(value.id);
                DeleteTask(value.id)
            }}>Delete</button></li>
        ))}
        </ul> 
    </div>
  )
}

export default AllTask