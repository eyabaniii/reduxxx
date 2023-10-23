import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import {  donetask, edittask } from '../../JS/Actions/TaskAction'

const TaskCard = ({task}) => {
  const [edit,setEdit]=useState(false) 
  const [newdescription,setnewdescription]=useState("")
     const dispatch=useDispatch()
    return (
    <div style={{display:"flex",justifyContent:"space-around",margin:"30px",}}>
       
        <p>{task.description}</p>
        {edit?<button onClick={()=>(dispatch(edittask(task.id,newdescription)),setEdit(false))}>save</button>:  <button onClick={()=>setEdit(true)}>edit</button>}


        {edit?<input type="text" onChange={(e)=>setnewdescription(e.target.value)} id="n"/> :<p></p>}
        <button onClick={()=>dispatch(donetask(task.id))} variant={task.IsDone?"success":"danger"} > {task.IsDone?<span>Make it unDone</span>:<span>Make it Done</span>}           
        </button>
    </div>
  )
}

export default TaskCard