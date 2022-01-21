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



class Stack extends React.Component {



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
        
        <table cellPadding={2}border={2} >
            <tr>
                <th>Name</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>MongoDB</td>
                <td>Use for user authentication and backend storage</td>
            </tr>
            <tr>
                <td>Vercel</td>
                <td>Used for web hosting.
</td>
            </tr>
            <tr>
                <td>Chakra-Ui	</td>
                <td>UI Theme for React.
</td>
            </tr>
            <tr>
                <td>PHPStorm</td>
                <td>IDE Used</td>
            </tr>
            <tr>
                <td>Canva</td>
                <td>Use to create image/video assets.</td>
            </tr>
            <tr>
                <td>React</td>
                <td>For Frontend Development</td>
            </tr>
          
        </table>
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

export default Stack;
