const mongoose=require('mongoose')
const Schema=mongoose.Schema

const residentsSchema= new Schema({
    firstname:String,
    middlename:String,
    familyname:String,
    paddress:String,
    districtOffice:String,
    cellPhoneNumber:Number,
    tinnumber:Number,
    gender:String,
    dateOfBirth:String,
    height:Number,
    weight:Number,
    civilStatus:String,
    natureOfAdmission:String,
    drivingSkills:String,
    bloodType:String,
    organDonor:String,
    eyeColor:String,
    licenseNumber:String,
    birthPlace:String,
    fatherName:String,
    motherName:String,
    spouseName:String,
    empBusName:String,
    empTelNo:Number,
    empBusAdd:String,
    educationalAttainment:String,
    emgConPerson:String,
    emgConAddress:String,
    emgConNum:String,
    agencyCode:String,
    dateofExpiry:String,
    dateofIssue:String,
    existing:String,
    appliedFor:String,
    lType:String,
    cType:String,
    conditions:String,
    status:String
})



const residentsModel= mongoose.model('residentsModel', residentsSchema)
module.exports =residentsModel
