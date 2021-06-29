import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./style.css";

function Welcome() {
  return (
    <Container>
      {/* Description */}
      <Row>
        <Col className="pt-5">
          <h6 className="textCol">WHAT WE DO</h6>
          <h1 className="font-weight-bold">
            Perfect Solution For Your Business
          </h1>
        </Col>

        <Col className="pt-5">
          <p className="pt-5 font-weight-bold">
            As our motta,we always provide the best service especially for you
            and your company by growing your company to be better
          </p>
        </Col>
      </Row>

      {/* Card */}

      <Row className="p-4 mt-4 ">
        <Col className="cardWel m-1">
          <div className="p-4">
            <i class="fas fa-laptop-house fa-3x m-2"></i>
            <h4 className="font-weight-bold p-2">Grow Your Business</h4>
            <h6 className="p-2">
              We always help your company to grows with us
            </h6>

            <p class="btn btn-outline-success">
              Learn More <i class="far fa-arrow-alt-circle-right"></i>
            </p>
          </div>
        </Col>

        <Col className="cardWel m-1">
          <div className="p-4">
            <i class="fas fa-comments-dollar fa-3x m-2"></i>
            <h4 className="font-weight-bold p-2">Drive More Sales</h4>
            <h6 className="p-2">
              Every company that we handle we always drive more sales
            </h6>

            <p class="btn btn-success">
              Learn More <i class="far fa-arrow-alt-circle-right"></i>
            </p>
          </div>
        </Col>

        <Col className="cardWel m-1">
          <div className="float-right p-4">
            <i class="fas fa-users fa-3x m-2"></i>
            <h4 className="font-weight-bold p-2">Handled By Expect</h4>
            <h6 className="p-2">
              You don't need to worry because we are professional
            </h6>

            <p class="btn btn-outline-success">
              Learn More <i class="far fa-arrow-alt-circle-right"></i>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
