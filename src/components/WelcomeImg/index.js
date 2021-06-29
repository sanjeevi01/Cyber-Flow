import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "./style.css";

function WelcomeImg() {
  return (
    <div>
      <div class="Image">

        {/* Image */}
        <img
          className="img-fluid"
          src={require("./Image/CyberFlow.jpg").default}
          alt=""
        />
        {/* Image Caption */}
        <div className="caption">
          <h1 className="w-75 text-left font-weight-bold p-3  caption1">
            Smart Ideas For Your Brand Are Here.
          </h1>

          <p className="h5 text-left font-weight-bold p-3 caption2">
            Our motto is to fulfill customer demand by making them satisfied
            with growing their business
          </p>

          {/* Image Button */}

          <Row>
            <Col>
              <Button
                size="lg"
                variant="primary"
                className=" m-1 border-dark rounded-pill font-weight-bold p-3 captionbtn1"
              >
                Got Started
              </Button>
            </Col>

            <Col>
              <Button
                variant="outline-primary"
                size="lg"
                className="m-1 border-dark rounded-pill font-weight-bold p-3 btn btn-outline-primary captionbtn2"
              >
                Large button <i class="fas fa-play-circle"> </i>
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default WelcomeImg;
