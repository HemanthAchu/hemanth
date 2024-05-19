import React, { useEffect, useState } from 'react'
import Views from './Views'
import axios from 'axios'
import Add from './Add'
import { getDataAPI } from '../services/AllAPI'

function Home() {
const [save,setsave] =useState([])
const [sum ,setsum] =useState([])
const [res,setRes] =useState([])

  useEffect(()=>{
  const handle= async ()=>{
 const result = await axios.get('https://dummyjson.com/recipes')

 setsave(result.data.recipes)
  }
  handle()

  const Data= async ()=>{
    try{
      const result = await getDataAPI()
     
      if(result.status==200){
        setsum(result.data)
       
      }
        }catch(err){
      console.log(err);
        }
  }
  Data()
  

  },[])

  useEffect(() => {
    // Combine 'sum' and 'save' and update 'res'
    setRes([...sum, ...save]);
  }, [sum, save,]);
  
  

  return (
    <div>
      <h1 className='text-center'> Recipe Managment</h1>
      <Add/>
     <div className='container'>
    
    

    <Views sum={sum} save={res} />
    </div>
    </div>
  )
}

export default Home
