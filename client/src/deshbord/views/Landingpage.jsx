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

import Banner from "./assesment/Banner.png"

class LandingPage extends React.Component {



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

                    <img src={require("./assesment/Banner.png")} alt="Logo" />;
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

export default LandingPage;
