import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { Col, Row, Container } from "react-bootstrap";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerPadding: "100px",
  };
  return (
    <Row className="bgColor">
      <Container className="pb-5">
        <Col className="pt-5 mb-5">
          <h6 className="textCol">TESTIMONIAL</h6>
          <h1 className="font-weight-bold w-50">
            What Our Customer Say About Us
          </h1>
        </Col>
        <Slider {...settings}>
          {/* 1 */}

          <div className="testimonial ">
            <div className="testimonial-icon">
              <i className="fas fa-quote-left fa-3x m-2"></i>
            </div>
            <div className="testimonial-body">
              <p>
                I am trusted my company in allies and the results have been
                satisfying because my company has growing
              </p>
            </div>
            <div className="testimonial-author">
              <Row>
                <Col>
                  <i class="fas fa-user-tie fa-3x m-2"></i>Theresa Jordon
                  <div class="stars">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/* 2 */}

          <div className="testimonial ">
            <div className="testimonial-icon">
              <i className="fas fa-quote-left fa-3x m-2"></i>
            </div>
            <div className="testimonial-body">
              <p>
                I am very fortunate to trust my company to allies and now my
                company income is increasing
              </p>
            </div>
            <div className="testimonial-author">
              <Row>
                <Col>
                  <i class="fas fa-user-tie fa-3x m-2"></i>Theresa Jordon
                  <div class="stars">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/* 3 */}

          <div className="testimonial ">
            <div className="testimonial-icon">
              <i className="fas fa-quote-left fa-3x m-2"></i>
            </div>
            <div className="testimonial-body">
              <p>
                I am trusted my company in allies and the results have been
                satisfying because my company has growing
              </p>
            </div>
            <div className="testimonial-author">
              <Row>
                <Col>
                  <i class="fas fa-user-tie fa-3x m-2"></i>Theresa Jordon
                  <div class="stars">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/* 4 */}

          <div className="testimonial ">
            <div className="testimonial-icon">
              <i className="fas fa-quote-left fa-3x m-2"></i>
            </div>
            <div className="testimonial-body">
              <p>
                I am trusted my company in allies and the results have been
                satisfying because my company has growing
              </p>
            </div>
            <div className="testimonial-author">
              <Row>
                <Col>
                  <i class="fas fa-user-tie fa-3x m-2"></i>Theresa Jordon
                  <div class="stars">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/* 5 */}

          <div className="testimonial ">
            <div className="testimonial-icon">
              <i className="fas fa-quote-left fa-3x m-2"></i>
            </div>
            <div className="testimonial-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis voluptas odit consectetur
              </p>
            </div>
            <div className="testimonial-author">
              <Row>
                <Col>
                  <i class="fas fa-user-tie fa-3x m-2"></i>Theresa Jordon
                  <div class="stars">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Slider>
      </Container>
    </Row>
  );
}

export default ImageSlider;
