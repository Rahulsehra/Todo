"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([]);
  const submitHandler=(e)=>{
    e.preventDefault();
  setMainTask([...mainTask , {title,desc}]);
    settitle("")
    setdesc("")
    console.log(mainTask);
  

  };
  const deleteHandler=(i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let renderTask= <h2 className='text-center'>No Task Is Given</h2>

  if (mainTask.length>0){

  renderTask=mainTask.map((t,i)=>{
    return <div key={i} className=' flex justify-between  items-center'>
      <h5 className=' text-xl font-semibold w-2 m-5 mb-3'>{t.title}</h5>
      <h5 className=' text-xl font-semibold justify-end'>{t.desc}</h5>
      <button onClick={()=>{
        deleteHandler(i)
      }}
      className=' bg-red-600 text-white rounded font-bold mx-3 p-2'>delete</button>
    </div>
  })
}

  return (
    <>
    <div className='bg-black text-white p-3 font-bold text-2xl text-center'>
      My Todo
    </div>
    <form onSubmit={submitHandler} className=' justify-between'>
      <input className='bg-silver m-10  p-2 '  type="text" name="" id="" placeholder="Enter your Work Here" 
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      ></input>
      <input className='bg-silver m-5 p-2 mx-72 justify-center' type="text" placeholder="Description" 
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}/> 
      <button className="btn btn-primary bg-black text-white p-2 m-2 px-3" >Add</button>
    </form>

    <hr/>
    <div className='mb-5 bg-slate-100 '>
      <ul>
      {renderTask}
      </ul>
      
    </div>

    </>
  )
}

export default page