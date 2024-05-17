import Button from 'react-bootstrap/Button';
import {Card,CardBody,Col, Modal, } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { deleteDataAPI } from '../services/AllAPI';
import { useState } from 'react';

function Views({save}) {
  // const [projectdata,setprojectdata]=useState({
  //   id:project._id,title:project?.title,language:project?.language,overview:project?.overview,github:project?.github,website:project?.website,projectImage:""
  // })

  // const [projectdata,setprojectdata]=useState({
  //   id:sa._id,name:sa?.name,caloriesPerServing:sa?.caloriesPerServing,cookTimeMinutes:sa?.cookTimeMinutes,cuisine:sa?.cuisine,prepTimeMinutes:sa?.prepTimeMinutes
  // })
  const [show, setShow] = useState(false);
  const [sa,setsa]=useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deletedata=async(id)=>{
const  result = await deleteDataAPI(id)
console.log(result);
  }

  const edit=(sav)=>{
setsa(sav)
handleShow()
  }
  const [data,setdata]=useState({
    name:"",
    caloriesPerServing:"",
    cookTimeMinutes:"",
    cuisine :"",
    prepTimeMinutes:""
  })


 const handleedit=async()=>{

  console.log(sa);
  // const {title,language,overview,github,website,projectImage}=projectdata
  const {name,caloriesPerServing,cookTimeMinutes,cuisine,prepTimeMinutes}=projectdata
  const reqBody = new FormData();
  reqBody.append("name",name);
  reqBody.append("caloriesPerServing", caloriesPerServing);
  reqBody.append("cookTimeMinutes", cookTimeMinutes);
  reqBody.append("cuisine", cuisine);
  reqBody.append("prepTimeMinutes", prepTimeMinutes);
      try{
        const result = await updateEditAPI(sa._id,reqBody)
        console.log(result);
        if(result.status==200){
          handleClose()
          
        //pass response view
        }else{
          console.log(result.data);
        }
              }catch(err){
        
              }
 }
  
  return (
    <div className='row' style={{width:"100%",height:"100%"}}>
     
     {save?.map((sav,index)=>(
  <Col key={index}  sm={12} md={6} lg={4} xl={3} className='mt-5  d-flex'>
 
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
 
  <Button onClick={()=>deletedata(sav._id)}   className='btn-danger'  variant="primary">Delete</Button>
 
  <Link >
  <Button   variant="primary" onClick={()=>edit(sav)} >Edit</Button>
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
          <Modal.Title>New Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <input value={sa.name} onChange={(e)=>setdata({...data,name:e.target.value})} type="text" className='form-control mb-3' placeholder='Names' />
         <input value={sa.caloriesPerServing} onChange={(e)=>setdata({...data,caloriesPerServing:e.target.value})} type="text" className='form-control mb-3'placeholder='caloriesPerServing '  />
         <input value={sa.cookTimeMinutes} onChange={(e)=>setdata({...data,cookTimeMinutes:e.target.value})} type="text" className='form-control mb-3' placeholder='cookTimeMinutes' />
         <input value={sa.cuisine} onChange={(e)=>setdata({...data,cuisine:e.target.value})} type="text" className='form-control mb-3'placeholder='cuisine'  />
         <input value={sa.prepTimeMinutes} onChange={(e)=>setdata({...data,prepTimeMinutes:e.target.value})} type="text" className='form-control mb-3'placeholder='prepTimeMinutes'  />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleedit}   variant="primary">Edit</Button>
        </Modal.Footer>
      </Modal>
     
    </div>
  )
}

export default Views
