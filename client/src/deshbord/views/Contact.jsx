import React, {useEffect, useState} from "react";


// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  Row,
  Col
} from "reactstrap";



class Contact extends React.Component {



  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="col-md-6 offset-md-3">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                      <img src={require("./assesment/Contact.png")} alt="Logo" />;
                  </div>
                </CardBody>

              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Contact;
