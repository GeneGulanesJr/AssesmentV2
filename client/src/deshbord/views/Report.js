import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Report() {
    const  [count, setcount] = useState({})
    useEffect(()=>{
        axios.get('http://localhost:5000/count-gender')
        .then(res=>{
            setcount(res.data)
        })
        console.log(count)
    },[])
    return (
        <div>
            <div className='col-md-8 offset-md-2 mt-200'>
                <Card className="mt-5 bg-white">
                    <CardHeader><span className="header_text">Report Single|Poly</span></CardHeader>
                    <CardBody>
                        <div className="row">
                            <div className="col-md-6 mt-3">
                                <div className="single_card">
                                    <div className="pt-3  pl-3">
                                        <h1> {count.adultFemaleSingle} |{count.adultFemalePoly}</h1>
                                        <p>Adult  Female</p>
                                    </div>
                                    <img src={require('./image/1.png')}/>
                                    <Link className="link" to='/admin/all-resident'>More info</Link>
                                </div>
                            </div>
                            <div className="col-md-6 mt-3">
                                <div className="single_card card_2_bg">
                                    <div className="pt-3  pl-3">
                                        <h1> {count.minorFemaleSingle}| {count.minorFemalePoly} </h1>
                                        <p>Minor Female</p>
                                    </div>
                                    <img src={require('./image/2.png')}/>
                                    <Link className="link card_2_link_bg" to='/admin/all-resident'>More info</Link>
                                </div>
                            </div>
                            <div className="col-md-6 mt-3">
                                <div className="single_card card_3_bg">
                                    <div className="pt-3  pl-3">
                                        <h1>{count.adultMaleSingle}|{count.adultMalePoly}</h1>
                                        <p>Adult Male</p>
                                    </div>
                                    <img src={require('./image/3.png')}/>
                                    <Link className="link card_3_link_bg" to='/admin/all-resident'>More info</Link>
                                </div>
                            </div>
                            <div className="col-md-6 mt-3">
                                <div className="single_card card_4_bg ">
                                    <div className="pt-3  pl-3">
                                        <h1>{count.minorMaleSingle}|{count.minorMalePoly}</h1>
                                        <p>Minor Male</p>
                                    </div>
                                    <img src={require('./image/4.png')}/>
                                    <Link className="link card_4_link_bg" to='/admin/all-resident'>More info</Link>
                                </div>
                            </div>


                        </div>
                        <div>
                            <div className="single_card card_1_bg ">
                                <div className="pt-45  pl-45">
                                    <h3>Total Number of Enrolled Patient</h3>
                                    <h5>{count.allResidents}</h5>
                                    <h5>Active Patient</h5>
                                    <h5>{count.activePatient}</h5>
                                    <h5>Dischaged Patient</h5>
                                    <h5>{count.dischargePatient}</h5>
                                </div>
                            </div>
                        </div>

                    </CardBody>
                </Card>
            </div>

        </div>

    )
}

export default Report
