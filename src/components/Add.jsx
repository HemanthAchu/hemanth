
import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { AddrecipeAPI,getDataAPI } from '../services/AllAPI';

function Add() {

  const[sum,setsum]=useState()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [data,setdata]=useState({
  name:"",
  caloriesPerServing:"",
  cookTimeMinutes:"",
  cuisine :"",
  prepTimeMinutes:""
})

useEffect(()=>{
Data()
},[])
const Data= async ()=>{
  try{
    const result = await getDataAPI()
    if(result.status==200){
      setsum(result.data)
      handleClose()
    }
      }catch(err){
    console.log(err);
      }
}
console.log(sum);
const handleadd = async () => {
 try{
  const reqBody = new FormData();
  reqBody.append("name",data.name);
  reqBody.append("caloriesPerServing", data.caloriesPerServing);
  reqBody.append("cookTimeMinutes", data.cookTimeMinutes);
  reqBody.append("cuisine", data.cuisine);
  reqBody.append("prepTimeMinutes", data.prepTimeMinutes);

  const result = await AddrecipeAPI(reqBody);
  console.log(result);
  setdata({
    name:"",
    caloriesPerServing:"",
    cookTimeMinutes:"",
    cuisine :"",
    prepTimeMinutes:""
  })
  handleClose()
 }catch(err){
console.log(err);
 }
};

console.log(data);
  return (
    <div>
           <Button variant="primary" onClick={handleShow}>
        Add new Recipe
      </Button>
       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <input value={data.name} onChange={(e)=>setdata({...data,name:e.target.value})} type="text" className='form-control mb-3' placeholder='Names' />
         <input value={data.caloriesPerServing} onChange={(e)=>setdata({...data,caloriesPerServing:e.target.value})} type="text" className='form-control mb-3'placeholder='caloriesPerServing '  />
         <input value={data.cookTimeMinutes} onChange={(e)=>setdata({...data,cookTimeMinutes:e.target.value})} type="text" className='form-control mb-3' placeholder='cookTimeMinutes' />
         <input value={data.cuisine} onChange={(e)=>setdata({...data,cuisine:e.target.value})} type="text" className='form-control mb-3'placeholder='cuisine'  />
         <input value={data.prepTimeMinutes} onChange={(e)=>setdata({...data,prepTimeMinutes:e.target.value})} type="text" className='form-control mb-3'placeholder='prepTimeMinutes'  />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleadd}  variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add
