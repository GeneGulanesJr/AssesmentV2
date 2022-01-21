
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter,Row, Col, Label, Input, FormGroup, Form } from 'reactstrap';
import './modal.css'
import { useEffect } from 'react';
import Axios from 'axios';
const EditInternationalModal = (props) => {
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    const [resident, setResident]=useState({...props.resident})


    const toggle = () => setOpen(!open);
    const handleSelectChange = ({target: { value }}) => {
        setFocusAfterClose(JSON.parse(value));
    }
    const changeHandler=(event)=>{
      setResident({
        ...resident,
        [event.target.name ]:event.target.value
      })
    }
    const submitHandler= ()=>{
      Axios.post('http://localhost:5000/edit-residents/'+props.resident._id , resident)
      .then(resident=>{
        alert(resident.data.massage)
        window.location.href='/admin/all-resident'
      })
      console.log(resident)
    }

    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <p style={{fontSize:"18px" , color:"white", cursor:"pointer" ,width: "100%",fontSize: "18px" , padding:"15px" , margin:"-15px"}} onClick={toggle}>Edit</p>
            </Form>
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
                <ModalBody>
                  <h3 style={{color:"black"}}>Update Resident </h3>
                <Form>
            
                    <Row>
                  
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Status </label>
                          <select defaultValue={props.resident.patientStatus} style={{color:"black"}} name="status" onChange={changeHandler}  className="form-control">
                            <option style={{background:"gray"}}>Select  Status</option>
                            <option style={{background:"gray"}} value="true">True</option>
                            <option style={{background:"gray"}} value="false">Flase</option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </ModalBody>
                <ModalFooter className="d-flex">
                    <Button onClickCapture={submitHandler} color="primary" > Done </Button>
                    <Button color="primary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default EditInternationalModal