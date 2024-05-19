import Button from 'react-bootstrap/Button';
import { Card, CardBody, Col, Modal, } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { deleteDataAPI, editAPI, } from '../services/AllAPI';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Views({ save,sum }) {
  const [port,setprot]=useState({name: '', caloriesPerServing: '', cookTimeMinutes: '', cuisine: '', prepTimeMinutes: ''})
  const [tr,settr]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deletedata = async (id) => {
    const result = await deleteDataAPI(id)
    console.log(result);
  }

  const handlesaveEdit =async()=>{
    console.log(tr);
    const id =tr._id
    console.log(id);
    console.log(port);
const {name,caloriesPerServing,cookTimeMinutes,cuisine,prepTimeMinutes}=port

    const reqBody =new FormData()
    reqBody.append("name",name);
  reqBody.append("caloriesPerServing",caloriesPerServing);
  reqBody.append("cookTimeMinutes",cookTimeMinutes);
  reqBody.append("cuisine",cuisine);
  reqBody.append("prepTimeMinutes",prepTimeMinutes);
  try{
   const result =  await editAPI(id,reqBody)
   if(result.status==200){
    handleClose()
    toast.success("Edit Success")
   }
  }catch(err){
    console.log(err);
  }


  }



const handleedit=async(sav)=>{
settr(sav)
setprot({name:sav.name, caloriesPerServing:sav.caloriesPerServing, cookTimeMinutes:sav.cookTimeMinutes, cuisine:sav.cuisine, prepTimeMinutes:sav.prepTimeMinutes})

handleShow()

}

  return (
    <div className='row' style={{ width: "100%", height: "100%" }}>

      {save?.map((sav, index) => (
        <Col key={index} sm={12} md={6} lg={4} xl={3} className='mt-5  d-flex'>

          <Card className='shadow' style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>{sav.name}</Card.Title>
              <Card.Title>
                <div className='mb-2'>
                  caloriesPerServing
                  :
                  {sav.
                    caloriesPerServing

                  }
                </div>
                <div>cookTimeMinutes:
                  {sav.cookTimeMinutes

                  }
                </div>

                <div className='mt-2'>
                  cuisine :  {sav.cuisine}
                </div>

                <div className='mt-2'>

                  prepTimeMinutes
                  :  {sav.
                    prepTimeMinutes
                  }
                </div>
              </Card.Title>

              <div className='d-flex justify-content-between align-items-center'>

                <Button onClick={() => deletedata(sav._id)} className='btn-danger' variant="primary">Delete</Button>

                <Link  >
                  <Button onClick={()=>handleedit(sav)} variant="primary">Edit</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>

        </Col>
      ))}
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <input value={port.name} onChange={(e)=>setprot({...port,name:e.target.value})} type="text" className='form-control mb-3' placeholder='Names' />
         <input value={port.caloriesPerServing} onChange={(e)=>setprot({...port,caloriesPerServing:e.target.value})} type="text" className='form-control mb-3'placeholder='caloriesPerServing '  />
         <input value={port.cookTimeMinutes} onChange={(e)=>setprot({...port,cookTimeMinutes:e.target.value})} type="text" className='form-control mb-3' placeholder='cookTimeMinutes' />
         <input value={port.cuisine} onChange={(e)=>setprot({...port,cuisine:e.target.value})} type="text" className='form-control mb-3'placeholder='cuisine'  />
         <input value={port.prepTimeMinutes} onChange={(e)=>setprot({...port,prepTimeMinutes:e.target.value})} type="text" className='form-control mb-3'placeholder='prepTimeMinutes'  />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handlesaveEdit} variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </div>
  )
}

export default Views
