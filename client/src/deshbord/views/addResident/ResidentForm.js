import React from 'react'
import { Card, CardBody , FormGroup , Col, Row, Form, Input, Button ,  } from 'reactstrap'
import Axios from 'axios'
import axios from "axios";
class ResidentForm  extends React.Component {
  constructor(props){
    super(props)
    this.state={
      firstname:'',
      middlename:'',
      familyname:'',
      paddress:'',
      districtOffice:'',
      cellPhoneNumber:Number,
      tinnumber:Number,
      gender:'',
      dateOfBirth:'',
      height:Number,
      weight:Number,
      civilStatus:'',
      natureOfAdmission:'',
      drivingSkills:'',
      bloodType:'',
      organDonor:'',
      eyeColor:'',
      licenseNumber:'',
      birthPlace:'',
      fatherName:'',
      motherName:'',
      spouseName:'',
      empBusName:'',
      empTelNo:Number,
      empBusAdd:'',
      educationalAttainment:'',
      emgConPerson:'',
      emgConAddress:'',
      emgConNum:Number,
      agencyCode:Number,
      dateofExpiry:'',
      dateofIssue:'',
      existing:'',
      appliedFor:'',
      lType:'',
      cType:'',
      conditions:'',
      status:'false',

    }
    this.changeHandler=this.changeHandler.bind(this)
    this.submitHandler=this.submitHandler.bind(this)
  }
  changeHandler=(event)=>{
    event.preventDefault()
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  onFormSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('myfile',this.state.file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };

    axios.post("http://localhost:5000/upload",formData,config)
        .then((response) => {
          alert("The file is successfully uploaded");
        }).catch((error) => {
    });
  }

  onChange(e) {
    this.setState({file:e.target.files});
  }
  submitHandler=()=>{

    Axios.post('http://localhost:5000/create-residents', {...this.state})
    .then(result=>{
      alert(result.data.massage)
      window.location.href='/admin/all-resident'
    })
    .catch(err=>{
      this.setState({
        err:err.response.data
      })
    console.log(this.state)
    })
  }


  onChange(e) {
    this.setState({file:e.target.files});
  }
  render(){
    
    return (
        <div className="col-md-10 offset-md-1 mt-3">
            <Card>
                <CardBody>
                  <Form>
                    <h2>APPLICATION FOR
STUDENT DRIVER'S PERMIT / DRIVER'S LICENSE / CONDUCTOR'S LICENSE (APL) :</h2>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Distrcit Office </label>
                          <Input
                            name="districtOffice"
                            onChange={this.changeHandler}
                            placeholder="District Office "
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Family Name</label>
                          <Input
                            name="familyname"
                            onChange={this.changeHandler}
                            placeholder="Enter Family Name "
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            name="firstname"
                            onChange={this.changeHandler}
                            placeholder="Enter First Name"
                            type="text"
                          />
                          
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Middle Name</label>
                          <Input
                            name="middlename"
                            onChange={this.changeHandler}
                            placeholder="Enter Middle Name"
                            type="text"
                          />
                          
                        </FormGroup>
                      </Col>
                      
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            name="paddress"
                            onChange={this.changeHandler}
                            placeholder="Present Address (No,Street/City/Municipality,Province) "
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Tel Phone/CP Number</label>
                          <Input
                            name="cellPhoneNumber"
                            onChange={this.changeHandler}
                            placeholder="Enter Cell Phone Number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Tin Number</label>
                          <Input
                            name="tinnumber"
                            onChange={this.changeHandler}
                            placeholder="TIN Number"
                          />
                        </FormGroup>
                      </Col>
                      {/* <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Guardian Number</label>
                          <Input
                            name="guardianNumber"
                            onChange={this.changeHandler}
                            placeholder="Enter Guardian Number"
                          />>
                        </FormGroup>
                      </Col> */}
                    </Row>
                
                    <Row>
                    <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Nationality</label>
                          <Input
                            name="nationality"
                            onChange={this.changeHandler}
                            placeholder="Enter Nationality"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Gender</label>
                          <select name="gender" onChange={this.changeHandler}  className="form-control">
                            <option style={{background:"gray"}}>Select Gender</option>
                            <option style={{background:"gray"}} value="Male">Male</option>
                            <option style={{background:"gray"}} value="Female">Female</option>
                      
                          </select>
                        </FormGroup>
                      </Col>
                      
                    </Row>
                 <Row>
                 <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>Date Of Birth</label>
                      <Input
                          name="dateOfBirth"
                          onChange={this.changeHandler}
                          placeholder="Date Of Birth "
                          type="date"
                      />
                    </FormGroup>
                  </Col>
                 </Row>
                 <Row>

                 </Row>
  <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Height</label>
                          <Input
                            name="height"
                            onChange={this.changeHandler}
                            type='number'
                            placeholder="Enter Height(cm)"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Weight</label>
                          <Input
                            name="weight"
                            onChange={this.changeHandler}
                            placeholder="Enter Weight(KG)"
                            type='number'
                          />
                        </FormGroup>
                      </Col>


                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Civil Status</label>
                          <select name="civilStatus" onChange={this.changeHandler}  className="form-control">
                            <option style={{background:"gray"}}> Select Civil Status</option>
                            <option style={{background:"gray"}} value="Single">Single </option>
                            <option style={{background:"gray"}} value="Married">Married</option>
                            <option style={{background:"gray"}} value="Widowed">Widowed</option>
                            <option style={{background:"gray"}} value="Separated">Separated</option>
                          </select>
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>LICENSE CLASSIFICATION APPLIED FOR (LCA) </label>
                          <select name="natureOfAdmission" onChange={this.changeHandler}  className="form-control">
                            <option style={{background:"gray"}}>Select Nature Of Admission</option>
                            <option style={{background:"gray"}} value="Student Permit">STUDENT-DRIVER'S PERMIT (SP)</option>
                            <option style={{background:"gray"}} value="Driver's LICENSE">DRIVER'S LICENSE (DL)</option>
                            <option style={{background:"gray"}} value="Conductor LICENSE">Conductor LICENSE</option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>DRIVING SKILL ACQUIRED FROM (FOR DL APPLICANTS ONLY)</label>
                          <select name="drivingSkills" onChange={this.changeHandler}  className="form-control">
                            <option style={{background:"gray"}}> Select Option</option>
                            <option style={{background:"gray"}} value="Single">Driving School </option>
                            <option style={{background:"gray"}} value="Married">Private Licensed Person</option>
                            <option style={{background:"gray"}} value="Widowed">Tesda</option>
                           
                          </select>
                        </FormGroup>
                      </Col>
                   </Row>
                   <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Educational Attainment</label>
                          <Input
                            name="educationalAttainment"
                            onChange={this.changeHandler}
                            placeholder="Educational Attainment"
                          />
                        </FormGroup>
                      </Col>
                    
                    </Row>

                   <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Blood Type</label>
                          <select name="bloodType" onChange={this.changeHandler}  className="form-control">
                            <option style={{background:"gray"}}> Select Blood Type</option>
                            <option style={{background:"gray"}} value="O+">O+ </option>
                            <option style={{background:"gray"}} value="O-">O-</option>
                            <option style={{background:"gray"}} value="A+">A+</option>
                            <option style={{background:"gray"}} value="A-">A-</option>
                            <option style={{background:"gray"}} value="B+">B+</option>
                            <option style={{background:"gray"}} value="B-">B-</option>
                          </select>
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Organ Donor </label>
                          <select name="organDonor" onChange={this.changeHandler}  className="form-control">
                            <option style={{background:"gray"}}>Select if Organ Donor</option>
                            <option style={{background:"gray"}} value="ALL">ALL</option>
                            <option style={{background:"gray"}} value="KIDNEYS">KIDNEYS</option>
                            <option style={{background:"gray"}} value="HEART">HEART</option>
                            <option style={{background:"gray"}} value="CORNEA">CORNEA</option>
                            <option style={{background:"gray"}} value="EYES">EYES</option>
                            <option style={{background:"gray"}} value="PANCREAS">PANCREAS</option>
                            <option style={{background:"gray"}} value="LIVER">LIVER</option>
                            <option style={{background:"gray"}} value="LUNGS">LUNGS</option>
                            <option style={{background:"gray"}} value="BONES">BONES</option>
                            <option style={{background:"gray"}} value="SKINS">SKINS</option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Blood Type</label>
                          <select name="eyeColor" onChange={this.changeHandler}  className="form-control">
                            <option style={{background:"gray"}}> Select Eye Color</option>
                            <option style={{background:"gray"}} value="Black">Black </option>
                            <option style={{background:"gray"}} value="White">White</option>
                            <option style={{background:"gray"}} value="Brown">Brown</option>
                            <option style={{background:"gray"}} value="Green">Green</option>
                            <option style={{background:"gray"}} value="Blue">Blue</option>
                            <option style={{background:"gray"}} value="Other">Other</option>
                          </select>
                        </FormGroup>
                      </Col>
                     
                    </Row>


                    <Row>
                      <Col className="pr-md-1" md="6">
                      <FormGroup>
                          <label>LICENSE NUMBER</label>
                          <Input
                            name="licenseNumber"
                            onChange={this.changeHandler}
                            placeholder="Enter License Number"
                            type='number'
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                      <FormGroup>
                          <label>BIRTHPLACE</label>
                          <Input
                            name="birthPlace"
                            onChange={this.changeHandler}
                            placeholder="BIRTHPLACE (City, Municipality, Province)"  />
                        </FormGroup>
                      </Col>
                    </Row>




                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Fathers Name</label>
                          <Input
                            name="fatherName"
                            onChange={this.changeHandler}
                            placeholder="FATHER'S NAME(Family Name,First Name,Middle Name)(indicate even if deceased"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Mothers Name</label>
                          <Input
                            name="motherName"
                            onChange={this.changeHandler}
                            placeholder="MOTHER'S NAME(Family Name,First Name,Middle Name)(indicate even if deceased"
                          />
                        </FormGroup>
                      </Col>
                    </Row>





                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Spouse Name</label>
                          <Input
                            name="spouseName"
                            onChange={this.changeHandler}
                            placeholder="SPOUSE NAME(Family Name,First Name,Middle Name)(indicate even if deceased"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Employer Business Name</label>
                          <Input
                            name="empBusName"
                            onChange={this.changeHandler}
                            placeholder="EMPLOYER'S BUSINESS NAME"
                          />
                        </FormGroup>
                      </Col>
                    </Row>









                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Employers Tel No</label>
                          <Input
                            name="empTelNo"
                            onChange={this.changeHandler}
                            placeholder="Employer Tel. No"
                            type='number'
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>EMPLOYER'S BUSINESS ADDRESS</label>
                          <Input
                            name="empBusAdd"
                            onChange={this.changeHandler}
                            placeholder="EMPLOYER'S BUSINESS ADDRESS"
                          />
                        </FormGroup>
                      </Col>
                    </Row>





                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>EMERGENCY CONTACT PERSON</label>
                          <Input
                            name="emgConPerson"
                            onChange={this.changeHandler}
                            placeholder="EMERGENCY CONTACT PERSON"
                           
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>EMERGENCY CONTACT ADDRESS</label>
                          <Input
                            name="emgConAddress"
                            onChange={this.changeHandler}
                            placeholder="EMERGENCY CONTACT ADDRESS"
                          />
                        </FormGroup>
                      </Col>
                    </Row>






                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>EMERGENCY CONTACT NO</label>
                          <Input
                            name="emgConNum"
                            onChange={this.changeHandler}
                            placeholder="EMERGENCY CONTACT NO"
                            type='number'
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>AGENCY CODE</label>
                          <Input
                            name="agencyCode"
                            onChange={this.changeHandler}
                            placeholder="AGENCY CODE"
                          />
                        </FormGroup>
                      </Col>
                    </Row>








                    <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>ISSUE DATE</label>
                      <Input
                          name="dateOfIssue"
                          onChange={this.changeHandler}
                          placeholder="ISSUE DATE "
                          type="date"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>EXPIRY DATE</label>
                      <Input
                          name="dateOfExpiry"
                          onChange={this.changeHandler}
                          placeholder="EXPIRY DATE "
                          type="date"
                      />
                    </FormGroup>
                  </Col>
                </Row>



             
                    <h2>DRIVER'S LICENSE VEHICLE CATEGORY</h2>


                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Existing</label>
                          <select name="existing" onChange={this.changeHandler}  className="form-control">
                            <option style={{background:"gray"}}> Select Option</option>
                            <option style={{background:"gray"}} value="A">A </option>
                            <option style={{background:"gray"}} value="A1">A1</option>
                            <option style={{background:"gray"}} value="B">B1</option>
                            <option style={{background:"gray"}} value="B1">B1</option>
                            <option style={{background:"gray"}} value="B2">B2</option>
                            <option style={{background:"gray"}} value="C">C</option>
                            <option style={{background:"gray"}} value="D">D</option>
                            <option style={{background:"gray"}} value="BE">BE</option>
                            <option style={{background:"gray"}} value="CE">CE</option>
                         
                          </select>
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Applied For</label>
                          <select name="appliedFor" onChange={this.changeHandler}  className="form-control">
                            <option style={{background:"gray"}}> Select Option</option>
                            <option style={{background:"gray"}} value="A">A </option>
                            <option style={{background:"gray"}} value="A1">A1</option>
                            <option style={{background:"gray"}} value="B">B1</option>
                            <option style={{background:"gray"}} value="B1">B1</option>
                            <option style={{background:"gray"}} value="B2">B2</option>
                            <option style={{background:"gray"}} value="C">C</option>
                            <option style={{background:"gray"}} value="D">D</option>
                            <option style={{background:"gray"}} value="BE">BE</option>
                            <option style={{background:"gray"}} value="CE">CE</option>
                         
                          </select>
                        </FormGroup>
                      </Col>
                     
                    </Row>


       <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Licence Type</label>
                          <select name="lType" onChange={this.changeHandler}  className="form-control">
                            <option style={{background:"gray"}}> Select Option</option>
                            <option style={{background:"gray"}} value="SV">SV </option>
                            <option style={{background:"gray"}} value="NON-PRO">NON-PRO</option>
                            <option style={{background:"gray"}} value="PRO">PRO</option>
         
                          </select>
                        </FormGroup>
                      </Col>
                                  
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Clutch Type</label>
                          <select name="cType" onChange={this.changeHandler}  className="form-control">
                            <option style={{background:"gray"}}> Select Option</option>
                            <option style={{background:"gray"}} value="Manual">Manual </option>
                            <option style={{background:"gray"}} value="Automatic">Automatic</option>
                    
         
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>

                    
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Conditions</label>
                          <Input
                            name="conditions"
                            onChange={this.changeHandler}
                            placeholder="Conditions "
                          />
                        </FormGroup>
                      </Col>
               
                
                
                    </Row>
                   
                  
                    <Button onClick={this.submitHandler}  color="success" > Create </Button>
                  </Form>
                </CardBody>
                <p style={{visibility:"hidden" , lineHeight:"0"}}>
                Download all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people iconsownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people icons
                Download all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people iconsownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people icons
                Download all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people iconsownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people icons
                </p>
            </Card>
        </div>
    )
  }
}

export default ResidentForm


