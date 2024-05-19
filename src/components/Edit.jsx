import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for routing
import { getRecipeAPI, updateEditAPI, updateRecipeAPI } from '../services/AllAPI';

function Edit({sav}) {
  
  const[sum,setsum]=useState()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

 const handleadd=async()=>{

  
  const reqBody = new FormData();
  reqBody.append("name",data.name);
  reqBody.append("caloriesPerServing", data.caloriesPerServing);
  reqBody.append("cookTimeMinutes", data.cookTimeMinutes);
  reqBody.append("cuisine", data.cuisine);
  reqBody.append("prepTimeMinutes", data.prepTimeMinutes);
      try{
        const result = await updateEditAPI(sav.id,reqBody)
        console.log(result);
        if(result.status==200){
          handleClose()
          seteditResponse(result)
        //pass response view
        }else{
          console.log(result.data);
        }
              }catch(err){
        
              }
 }

  

 

 

  return (
    <div>
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
         <input value={sav.name} onChange={(e)=>setdata({...data,name:e.target.value})} type="text" className='form-control mb-3' placeholder='Names' />
         <input value={sav.caloriesPerServing} onChange={(e)=>setdata({...data,caloriesPerServing:e.target.value})} type="text" className='form-control mb-3'placeholder='caloriesPerServing '  />
         <input value={data.cookTimeMinutes} onChange={(e)=>setdata({...data,cookTimeMinutes:e.target.value})} type="text" className='form-control mb-3' placeholder='cookTimeMinutes' />
         <input value={data.cuisine} onChange={(e)=>setdata({...data,cuisine:e.target.value})} type="text" className='form-control mb-3'placeholder='cuisine'  />
         <input value={data.prepTimeMinutes} onChange={(e)=>setdata({...data,prepTimeMinutes:e.target.value})} type="text" className='form-control mb-3'placeholder='prepTimeMinutes'  />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleadd}  variant="primary">Edit</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
   
  );
}

export default Edit;
