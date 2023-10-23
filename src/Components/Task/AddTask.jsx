import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addtask } from '../../JS/Actions/TaskAction';
const AddTask = () => {
  const [show, setShow] = useState(false);
const [description,setdescription]=useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const dispatch=useDispatch();

  const Tasks=useSelector((state)=>state.TaskReducer.Tasks)
    return (
    <div>
     <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" onChange={(e)=>setdescription(e.target.value)}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>(dispatch(addtask({id:Math.random(),description:description,IsDone:false})),handleClose())}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>




    </div>
  )
}

export default AddTask